import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function SearchBar() {
  return (
    <div className="my-7 w-[70 %]">
      <form className="max-w-md mx-auto ">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-green-600 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">

          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-green-500 border border-green-300 rounded-lg bg-green-50 focus:ring-green-500 focus:border-green-500 dark:bg-green-700 dark:border-green-600 dark:placeholder-green-400 text-white dark:focus:ring-green-500 dark:focus:border-green-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          {/* <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
