import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const connection = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "password",
  database: process.env.MYSQL_DATABASE || "test",
});

app.get("/", (req, res) => {
  connection.query("SELECT * FROM Spaces", (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      res.json({
        success: true,
        rows,
      });
    }
  });
});

app.get("/closest/:store", (req, res) => {
  /**
   * A1 1 2 na na na A2
   * B1 3 4 5 6 7 B2
   * C1 8 9 10 11 12 C2
   * D1 13 14 15 na na D2
   * E1 16 17 18 19 20 E2
   * F1 21 22 23 na na F2
   */

  const data = [
    [
      "A1",
      { id: 1, occupied: false },
      { id: 2, occupied: false },
      0,
      0,
      0,
      "A2",
    ],
    [
      "B1",
      { id: 3, occupied: false },
      { id: 4, occupied: false },
      { id: 5, occupied: false },
      { id: 6, occupied: false },
      { id: 7, occupied: false },
      "B2",
    ],
    [
      "C1",
      { id: 8, occupied: false },
      { id: 9, occupied: false },
      { id: 10, occupied: false },
      { id: 11, occupied: false },
      { id: 12, occupied: false },
      "C2",
    ],
    [
      "D1",
      { id: 13, occupied: false },
      { id: 14, occupied: false },
      { id: 15, occupied: false },
      0,
      0,
      "D2",
    ],
    [
      "",
      { id: 16, occupied: false },
      { id: 17, occupied: false },
      { id: 18, occupied: false },
      { id: 19, occupied: false },
      { id: 20, occupied: false },
      "",
    ],
    [
      "F1",
      { id: 21, occupied: false },
      { id: 22, occupied: false },
      { id: 23, occupied: false },
      0,
      0,
      "F2",
    ],
  ];

  connection.query("SELECT * FROM Spaces", (err, rows) => {
    if (err) {
      res.json({
        success: false,
        err,
      });
    } else {
      // Parse out the parking lot row data from sql
      const rowsParsed = rows.map((row) => {
        return {
          id: row["space_id"],
          occupied: row.space_occupied["0"],
        };
      });

      // Get the desired store's letter and left or right side
      const [storeLetter, storeSide] = req.params.store.split("");

      // Merge the rows from db to the 2d array in memory
      rowsParsed.forEach((r) => {
        data.forEach((dataRow) => {
          dataRow.forEach((dataCol) => {
            if (dataCol.id === r.id) {
              dataCol.occupied = Boolean(r.occupied);
            }
          });
        });
      });

      const storeCoords = findStoreCoordinates(data, storeLetter, storeSide);

      // Loop through each element in 2d arr
      // and find the closest to the store
      let closest = { x: -1, y: -1 };
      let closestDistance = null;
      for (let row = 0; row < data.length; row++) {
        for (let col = 1; col < data[row].length - 1; col++) {
          if (data[row][col] === 0 || data[row][col].occupied) continue;

          const distance = calculateDistance(storeCoords, { x: row, y: col });
          if (distance < closestDistance || closestDistance === null) {
            closestDistance = distance;
            closest = { x: row, y: col };
          }
        }
      }

      console.log(`Closest Distance : ${closestDistance} is for ${closest}`);

      // Send back the data
      res.json({ closest });
    }
  });
});

app.post("/lot/:id", (req, res) => {
  console.log(
    "My Query " +
      `UPDATE Spaces SET space_occupied=b'${req.body.occupied}' WHERE space_id=${req.params.id}`
  );
  connection.query(
    `UPDATE Spaces SET space_occupied=b'${req.body.occupied}' WHERE space_id=${req.params.id}`,
    (err, rows) => {
      if (err) {
        res.json({
          success: false,
          err,
        });
      } else {
        res.json({
          success: true,
          rows,
        });
      }
    }
  );
});

const port = 3001;

app.listen(port, () => {
  console.log(`Evoca Example Server is running on port ${port}`);
});

const findStoreCoordinates = (data, storeLetter, storeSide) => {
  let coords = { x: 0, y: 0 };

  for (let row = 0; row < data.length; row++) {
    for (let col = 0; col < data[row].length; col++) {
      if (data[row][col] !== `${storeLetter}${storeSide}`) {
        continue;
      } else {
        coords = { x: row, y: col };
        break;
      }
    }
  }

  return coords;
};

const calculateDistance = (storeCoordinates, lotCoordinates) => {
  return (
    Math.abs(storeCoordinates.x - lotCoordinates.x) +
    Math.abs(storeCoordinates.y - lotCoordinates.y)
  );
};
