import { MdStore } from "react-icons/md";

export default function StoreButton({ name, setActive }) {
  const getClosest = async () => {
    const response = await fetch(`/api/closest/${name}`);
    const json = await response.json();
    const closest = json.closest;
    setActive(closest);
  };

  return (
    <div
      onClick={() => {
        getClosest();
      }}
      className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl"
    >
      <MdStore className="h-12 w-12" />
      <span className="text-center">{name}</span>
    </div>
  );
}
