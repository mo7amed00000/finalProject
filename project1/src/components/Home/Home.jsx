import axios from "axios";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { FallingLines } from "react-loader-spinner";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";
import CategorySlider from "../CategorySlider/CategorySlider";
import HomeSlider from "../HomeSlider/HomeSlider";
import SearchBar from "../SearchBar/SearchBar";

function Home() {
  const {addProductToCart} = useContext(cartContext)
  const {addProductToWishList} = useContext(cartContext)

  async function getAllProducts() {
    return await axios.get("https://ecommerce.routemisr.com/api/v1/products");
  }
  async function addProduct(id) {

    const data = await addProductToCart(id);

    console.log(data);

    if (data) {
      toast.success(data.message);

    } else {
      toast.error("Error");

    }
  }
  async function saveProduct(id) {

    const data = await addProductToWishList(id);

    console.log(data);

    if (data) {
      toast.success(data.message);

    } else {
      toast.error("Error");

    }
  }

  const { data, isLoading, isFetching, error } = useQuery(
    "products",
    getAllProducts
  );

  //   console.log(data);

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
    <>
      <section className="py-8">
        <div className="w-full md:w-[90%] m-auto ">
          <HomeSlider />
          <CategorySlider />
          <SearchBar />
          <div  className="flex flex-wrap justify-center items-center">
            {data.data.data.map((product, idx) => (
              <>
                <div
                  key={idx}
                  className="w-full sm:w-full md:w-1/2 lg:w-1/4 p-5">
                  <div className="inner p-3 hover:border-2 rounded-md  shadow-md shadow-green-400/50 transition duration-1000  ease-in-out overflow-hidden">
                  <Link to={`/details/${product.id}`}>

                    <img
                      src={product.imageCover}
                      alt="hamada"
                      className="w-full"
                    />
                    <h2 className="text-green-600 mt-3">
                      {product.category.name}
                    </h2>
                    <h2 className=" mt-3">
                      {product.title.split(" ").slice(0, 2).join(" ")}
                    </h2>

                    <div className="flex flex-wrap justify-between items-center mt-3">
                      <div>
                        <h4>{product.price} EGP</h4>
                      </div>
                      <div>
                        <h4>
                          {" "}
                          <i className="fa-solid fa-star text-yellow-300 mr-2"></i>{" "}
                          {product.ratingsAverage}
                        </h4>
                      </div>
                    </div>
                  </Link>
                  <button
                  onClick={ ()=> saveProduct(product.id)}
                   className="text-2xl ml-3 mt-3 focus:text-red-600">

                    <i className="fa-solid fa-heart "></i>
                  </button>

                    <button
                    onClick={ ()=> addProduct(product.id)}
                      type="button"
                      className="w-full mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 relative top-[90px]">
                      Add to Cart
                    </button>
                  </div>

                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
