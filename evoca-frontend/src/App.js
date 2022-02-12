import "./App.css";
import StoreButton from "./components/StoreButton";
import Lot from "./components/Lot";
import { useState, useEffect } from "react";

function App() {
  const [activeLot, setActiveLot] = useState(null);
  const [takenLots, setTakenLots] = useState([]);
  const [activeID, setActiveID] = useState(null);

  const markLotAsTaken = async () => {
    try {
      const response = await fetch(`/api/lot/${activeID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ occupied: 1 }),
      });
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  const setActive = (coords) => {
    setActiveLot(coords);
  };

  useEffect(() => {
    const getLatestLots = async () => {
      const response = await fetch("/api/");
      const data = await response.json();
      setTakenLots(
        data.rows.map((row) => {
          if (row.space_occupied["data"][0] === 1) {
            return row.space_id;
          }
        })
      );
    };

    if (!activeLot) {
      getLatestLots();
    }
  }, [activeLot]);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="my-8 flex flex-col items-center justify-center  font-bold">
        <span className="text-center text-2xl">
          Find The Closest Parking Spot
        </span>
        <span className="text-center text-lg">
          (Click the store you're trying to get to)
        </span>

        {activeLot && (
          <div className="flex flex-col w-full items-center justify-center">
            {activeLot.x === -1 && activeLot.y === -1 ? (
              <span className="text-center text-lg">
                There are no spots left
              </span>
            ) : (
              <span className="text-center text-lg">
                Sure you want to park here?
              </span>
            )}

            {activeLot.x === -1 && activeLot.y === -1 && (
              <div className="flex flex-row items-center justify-center w-full">
                <button
                  onClick={() => {
                    setActiveLot(null);
                    setActiveID(null);
                  }}
                  className="bg-blue-400 text-white text-xl p-4"
                >
                  Okay
                </button>
              </div>
            )}
            {activeLot.x !== -1 && activeLot.y !== -1 && (
              <div className="flex flex-row items-center justify-center w-full">
                <button
                  onClick={() => {
                    markLotAsTaken();
                    setActiveLot(null);
                    setActiveID(null);
                  }}
                  className="bg-green-400 text-white text-xl p-4 mx-2"
                >
                  Yes
                </button>
                <button
                  onClick={() => {
                    setActiveLot(null);
                    setActiveID(null);
                  }}
                  className="bg-red-400 text-white text-xl p-4 mx-2"
                >
                  No
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="flex w-full flex-row items-center justify-center">
        <div className="mr-4 grid h-full grid-cols-1 gap-4 gap-x-10">
          <StoreButton name={"A1"} setActive={setActive} />
          <StoreButton name={"B1"} setActive={setActive} />
          <StoreButton name={"C1"} setActive={setActive} />
          <StoreButton name={"D1"} setActive={setActive} />
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4"></div>
          <StoreButton name={"F1"} setActive={setActive} />
        </div>
        <div className="grid h-full w-1/3 grid-cols-5 gap-4 gap-x-10">
          {/** Row 1 */}
          <Lot
            coords={{ x: 0, y: 1 }}
            activeLot={activeLot}
            id={1}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 0, y: 2 }}
            activeLot={activeLot}
            id={2}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <div className="flex flex-col items-center justify-center "></div>
          <div className="flex flex-col items-center justify-center "></div>
          <div className="flex flex-col items-center justify-center "></div>
          {/** Row 2 */}
          <Lot
            coords={{ x: 1, y: 1 }}
            activeLot={activeLot}
            id={3}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 1, y: 2 }}
            activeLot={activeLot}
            id={4}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 1, y: 3 }}
            activeLot={activeLot}
            id={5}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 1, y: 4 }}
            activeLot={activeLot}
            id={6}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 1, y: 5 }}
            activeLot={activeLot}
            id={7}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          {/** Row 3 */}
          <Lot
            coords={{ x: 2, y: 1 }}
            activeLot={activeLot}
            id={8}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 2, y: 2 }}
            activeLot={activeLot}
            id={9}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 2, y: 3 }}
            activeLot={activeLot}
            id={10}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 2, y: 4 }}
            activeLot={activeLot}
            id={11}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 2, y: 5 }}
            activeLot={activeLot}
            id={12}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          {/** Row 4 */}
          <Lot
            coords={{ x: 3, y: 1 }}
            activeLot={activeLot}
            id={13}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 3, y: 2 }}
            activeLot={activeLot}
            id={14}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 3, y: 3 }}
            activeLot={activeLot}
            id={15}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <div className="flex flex-col items-center justify-center "></div>
          <div className="flex flex-col items-center justify-center "></div>
          {/** Row 5 */}
          <Lot
            coords={{ x: 4, y: 1 }}
            activeLot={activeLot}
            id={16}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 4, y: 2 }}
            activeLot={activeLot}
            id={17}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 4, y: 3 }}
            activeLot={activeLot}
            id={18}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 4, y: 4 }}
            activeLot={activeLot}
            id={19}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 4, y: 5 }}
            activeLot={activeLot}
            id={20}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          {/** Row 6 */}
          <Lot
            coords={{ x: 5, y: 1 }}
            activeLot={activeLot}
            id={21}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 5, y: 2 }}
            activeLot={activeLot}
            id={22}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <Lot
            coords={{ x: 5, y: 3 }}
            activeLot={activeLot}
            id={23}
            takenLots={takenLots}
            setActiveID={setActiveID}
          />
          <div className="flex flex-col items-center justify-center "></div>
          <div className="flex flex-col items-center justify-center "></div>
        </div>
        <div className="ml-4 grid h-full grid-cols-1 gap-4 gap-x-10">
          <StoreButton name={"A2"} setActive={setActive} />
          <StoreButton name={"B2"} setActive={setActive} />
          <StoreButton name={"C2"} setActive={setActive} />
          <StoreButton name={"D2"} setActive={setActive} />
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4"></div>
          <StoreButton name={"F2"} setActive={setActive} />
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
