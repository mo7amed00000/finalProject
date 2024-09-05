import axios from "axios";
import React from "react";
import { FallingLines } from "react-loader-spinner";
import { useQuery } from "react-query";

function Category() {
  async function getAllProducts() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/categories");
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
    <div className="grid grid-cols-3 gap-10 mx-12">
      {data?.data.data.map(function (item, idx) {
        return (
          <div className=" overflow-hidden bg-white border max-w-fit   border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-md min-w-px  " src={item.image} alt="" />
            <div className=" overflow-hidden m-auto p-3">
              <h5 className="text-center text-3xl font-bold   text-gray-900 dark:text-white">
                {item.name}
              </h5>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Category;
