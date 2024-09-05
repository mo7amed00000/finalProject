import React from 'react'
import axios from "axios";
import { FallingLines } from "react-loader-spinner";
import { useQuery } from "react-query";

function Brands() {
    async function getAllProducts() {
        return await axios.get("https://ecommerce.routemisr.com/api/v1/brands");
      }
      const { data, isLoading, isFetching, error } = useQuery(
        "products",
        getAllProducts
      );
      if (isLoading) {
        return (
          <div className="h-screen flex flex-wrap justify-center items-center bg-green-400">
            <FallingLines
              color="#fff"
              width="100"
              visible={true}
              ariaLabel="falling-circles-loading"
            />
          </div>
        );
      }
    return (
        
        <div className="grid grid-cols-4 gap-10 m-12 ">
        {data?.data.data.map(function (item, idx) {
     return( 
      <div className=" overflow-hidden bg-white border max-w-   border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img
          className="rounded-t-lg min-w-52  "
          src={item.image}
          alt=""
        />
                  <h5 className="p-5  text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {item.name}
          </h5>
    </div>);})}
    </div>
        
    );
}
export default Brands

