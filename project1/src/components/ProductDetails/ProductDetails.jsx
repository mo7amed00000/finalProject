import { useQuery } from "react-query";
import axios from "axios";
import React from "react";
import { FallingLines } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import toast from "react-hot-toast";
import { useState } from "react";

function ProductDetails() {
  const { addProductToCart } = useContext(cartContext);
  const [loader, setLoader] = useState(false);

  const { id } = useParams();
  async function getproduct() {
    return await axios.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`
    );
  }

  async function addProduct() {
    setLoader(true);

    const data = await addProductToCart(id);

    console.log(data);

    if (data) {
      toast.success(data.message);
      setLoader(false);
    } else {
      toast.error("Error");
      setLoader(false);
    }
  }

  const { data, isLoading } = useQuery(`product/${id}`, getproduct);

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

  // console.log(data);

  return (
    <div>
      <section className="py-8">
        <div className="w-full md:w-[80%] mx-auto ">
          <div className="flex flex-wrap justify-center items-center">
            <div className="md:w-1/3 w-full">
              <div>
                <img
                  src={data?.data.data.imageCover}
                  className="w-full"
                  alt=""
                />
              </div>
            </div>
            <div className="md:w-2/3 w-full">
              <div>
                <h2 className="text-2xl m-3 font-semibold ">
                  {data?.data.data.title}
                </h2>
                <p className="text-1xl mb-3 ">{data?.data.data.description}</p>
                <h2 className="text-1xl text-green-500 m-3 font-mono ">
                  {data?.data.data.category.name}
                </h2>
                <div className="flex flex-wrap justify-between items-center mt-3">
                  <div>
                    <h4>{data?.data.data.price} EGP</h4>
                  </div>
                  <div>
                    <h4>
                      {" "}
                      <i className="fa-solid fa-star text-yellow-300 mr-2"></i>{" "}
                      {data?.data.data.ratingsAverage}
                    </h4>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={addProduct}
                  className="w-full mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                  {loader?<i className="fa-solid fa-spinner fa-spin text-white "></i> :"Add to Cart"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProductDetails;
