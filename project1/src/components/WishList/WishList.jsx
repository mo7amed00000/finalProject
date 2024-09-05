import React from "react";
import { useContext } from "react"; 
import { cartContext } from "../../context/CartContext";

function wishList() {
  const { products, deleteItem,} = useContext(cartContext);
  console.log(products, "WishlistPage");

  return (
    <section className="py-8 ">
      <div className="w-full md:w-[80%] mx-auto bg-slate-200 p-5">
        {products?.length != 0 ? (
          <>
            <h2 className="text-green-500 text-2xl font-mono">
              My Wish list :{}
            </h2>

            {products?.map((item, idx) => (
              <>
                <div className="flex flex-wrap justify-center items-center border-b-2 border-green-400 ">
                  <div className="w-1/6 p-5">
                    <img
                      src={item.product.imageCover}
                      className="w-full "
                      alt=""
                    />
                  </div>
                  <div className="w-4/6 p-5">
                    <h2 className="mb-3  text-1xl">{item.product.title}</h2>
                    <h2 className="mb-3  text-1xl">{item.price}EGP</h2>

                    <button
                      type="button"
                      onClick={() => deleteItem(item.product.id)}
                      className=" focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                      Remove
                    </button>
                  </div>
                  <div className="w-1/6 p-5">
                    <div className="flex  justify-between items-center ">
                      <button
                        onClick={() => saveProduct(item.product.id)}
                        type="button"
                        className="w-full mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 ">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          <div className="py-10  text-black">
            <h2 className="text-3xl font-semibold">MY Wish List </h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default wishList;
