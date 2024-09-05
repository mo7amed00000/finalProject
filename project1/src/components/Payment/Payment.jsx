import axios from "axios";
import React, { useState } from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { cartContext } from "../../context/CartContext";

function Payment() {
  
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const { cartId, setNumOfItems, setTotalPrice, setProducts } =
    useContext(cartContext);

  async function cashPayment() {
    const x = {
      shippingAddress: {
        details,
        phone,
        city,
      },
    };
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
        x,
        {
          headers: {
            token: localStorage.getItem("tkn"),
          },
        }
      );
      setNumOfItems(0);
      setProducts([]);
      setTotalPrice(0);
      toast.success(data.status);
    } catch (error) {
      toast.error("error cash payment");
    }

    console.log(x);
  }

  async function onlinePayment() {
    const x = {
      shippingAddress: {
        details,
        phone,
        city,
      },
    };
    try {
      const { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:5173`,
        x,
        {
          headers: {
            token: localStorage.getItem("tkn"),
          },
        }
      );
      window.open(data.session.url)

      toast.success(data.status);
    } catch (error) {
      toast.error("error cash payment");
    }

    console.log(x);
  }

  return (
    <section className="py-10">
      <h2 className="text-center text-3xl font-semibold text-green-600">
        Payment
      </h2>
      <div className="w-full md:w-[70%] mx-auto">
        <div>
          {/* Phone input */}
          <div className="relative z-0 w-full  group mb-6">
            <input
              type="tel"
              name="phone"
              id="phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              onChange={(e) => setPhone(e.target.value)}
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Phone
            </label>
          </div>

          {/* Details input */}

          <div className="relative z-0 w-full  group mb-6">
            <input
              type="text"
              id="details"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              onChange={(e) => setDetails(e.target.value)}
            />
            <label
              htmlFor="details"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Details
            </label>
          </div>

          {/* city input */}

          <div className="relative z-0 w-full  group mb-6">
            <input
              type="text"
              id="city"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              onChange={(e) => setCity(e.target.value)}
            />
            <label
              htmlFor="city"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              City
            </label>
          </div>

          <button
            onClick={cashPayment}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Cash Payment
          </button>
          <button
          onClick={onlinePayment}
            type="button"
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
            Online Payment
          </button>
        </div>
      </div>
    </section>
  );
}

export default Payment;
