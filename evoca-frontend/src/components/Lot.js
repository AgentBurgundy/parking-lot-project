import { useEffect } from "react";

export default function Lot({ coords, activeLot, id, takenLots, setActiveID }) {
  const isActive = () => {
    if (!activeLot) return false;
    if (coords.x === activeLot.x && coords.y === activeLot.y) return true;
    return false;
  };

  useEffect(() => {
    if (isActive()) {
      setActiveID(id);
    }
  }, [activeLot]);

  if (takenLots.indexOf(id) !== -1) {
    return (
      <div className="flex h-16 flex-col items-center justify-center border-x-8 border-yellow-300 bg-red-500"></div>
    );
  }

  return (
    <div
      className={
        isActive()
          ? "flex h-16 flex-col items-center justify-center border-x-8 border-yellow-300 bg-blue-500"
          : "flex h-16 flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"
      }
    ></div>
  );
}
