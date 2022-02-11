import "./App.css";
import { MdStore } from "react-icons/md";

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="my-8 flex flex-col items-center justify-center  font-bold">
        <span className="text-center text-2xl">
          Find The Closest Parking Spot
        </span>
        <span className="text-center text-lg">
          (Click the store you're trying to get to)
        </span>
      </div>
      <div className="flex w-full flex-row items-center justify-center">
        <div className="mr-4 grid h-full grid-cols-1 gap-4 gap-x-10">
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">A 1</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">B 1</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">C 1</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">D 1</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">E 1</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">F 1</span>
          </div>
        </div>
        <div className="grid h-full w-1/3 grid-cols-5 gap-4 gap-x-10">
          {/** Row 1 */}
          <div className="flex h-16 flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center "></div>
          <div className="flex flex-col items-center justify-center "></div>
          <div className="flex flex-col items-center justify-center "></div>
          {/** Row 2 */}
          <div className="flex h-16 flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          {/** Row 3 */}
          <div className="flex h-16 flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          {/** Row 4 */}
          <div className="flex h-16 flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center "></div>
          <div className="flex flex-col items-center justify-center "></div>
          {/** Row 5 */}
          <div className="flex h-16 flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          {/** Row 6 */}
          <div className="flex h-16 flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center border-x-8 border-yellow-300 bg-black"></div>
          <div className="flex flex-col items-center justify-center "></div>
          <div className="flex flex-col items-center justify-center "></div>
        </div>
        <div className="ml-4 grid h-full grid-cols-1 gap-4 gap-x-10">
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">A 2</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">B 2</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">C 2</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">D 2</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">E 2</span>
          </div>
          <div className="flex h-16 w-full flex-row items-center justify-center rounded-xl p-4 shadow-xl hover:bg-gray-100 hover:shadow-2xl">
            <MdStore className="h-12 w-12" />
            <span className="text-center">F 2</span>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
