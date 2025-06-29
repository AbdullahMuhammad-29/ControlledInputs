import React, { useState } from "react";
import toast from "react-hot-toast";
import SingleName from "./SingleName";

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);
  const handleInput = () => {
    if (!name) {
      toast.error("Please enter a value");
      setError(true);
    } else {
      setData([...data, name]);
      toast.success("Value added");

      setName("");
      setError(false);
    }
  };

  return (
    <>
      <div className="container mx-auto w-1/2 shadow-xl p-10">
        <form>
          <h1 className="text-center text-3xl">Add Data</h1>
          <label htmlFor="" className="text-gray-500 font-semibold">
            Name
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name...."
            className={`w-full p-2 ${
              error ? "border-red-600" : "border-gray-200"
            } border-gray-200 border rounded-md outline-0 focus:border-green-500 placeholder-gray-400 `}
          />
          <button
            onClick={handleInput}
            type="button"
            className="w-full mt-2 rounded-md active:scale-95 hover:bg-green-6oo cursor-pointer bg-green-500 text-white p-2"
          >
            Add Data
          </button>
        </form>
      </div>

      <div className="container grid mx-auto grid-cols-2 md:grid-cols-3 lg:grid-cos-4 xl:grid-cols-5 gap-4">
        {data.map((item, index) => {
          return <SingleName name={item} />;
        })}
      </div>
    </>
  );
};

export default ControlledInputs;
