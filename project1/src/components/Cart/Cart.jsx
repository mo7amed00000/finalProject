import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/CartContext";

function Cart() {
  const { products, totalPrice, updateCount, deleteItem, clearCart } =
    useContext(cartContext);
  console.log(products, "CartPage");
  return (
    <section className="py-8 ">
      <div className="w-full md:w-[80%] mx-auto bg-slate-200 p-5">
        {products?.length != 0 ? (
          <>
            <h2 className="text-green-500 text-2xl font-mono">
              Total Price :{totalPrice}
            </h2>
            <button
              type="button"
              onClick={() => clearCart()}
              className="m-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
              Clear Cart
            </button>
            <Link
              to="/payment"
              className="m-5 focus:outline-none text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
              Check out
            </Link>

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
                    <h2 className="mb-3  text-1xl">{item.product.id}</h2>
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
                        onClick={() =>
                          updateCount(item.product.id, item.count + 1)
                        }
                        type="button"
                        className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        +
                      </button>
                      <h2 className="mx-3">{item.count}</h2>
                      <button
                        onClick={() =>
                          updateCount(item.product.id, item.count - 1)
                        }
                        type="button"
                        className=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                        -
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          <div className="py-5 text-center text-green-500">
            <h2 className="text-3xl font-bold">NO Data to Display it </h2>
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
