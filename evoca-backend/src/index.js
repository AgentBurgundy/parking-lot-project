import express from "express";
import mysql from "mysql2";
const app = express();

app.use(express.json());

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

app.post("/lot/:id", (req, res) => {
  connection.query(
    `INSERT INTO Spaces(space_id, space_occupied) VALUES(${req.params.id}, ${req.body.occupied}) ON DUPLICATE KEY UPDATE space_occupied=${req.body.occupied}`,
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

const port = 8080;

app.listen(port, () => {
  console.log(`Evoca Example Server is running on port ${port}`);
});
