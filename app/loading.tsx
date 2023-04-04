import React from "react";
import Header from "./components/Header";

function loading() {
  return (
    <div
      className=" h-screen
    "
    >
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
          <div
            key={num}
            className="animate-pulse bg-slate-200 m-3
             w-64 h-72 rounded overflow-hidden border cursor-pointer"
          >
            <div className="h-36 bg-gray-400 w-full"></div>
            <div className="mt-4 mb-4 w-32 h-2 bg-gray-400"></div>
            <div
              className="w-16
             h-2 bg-gray-400"
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default loading;
