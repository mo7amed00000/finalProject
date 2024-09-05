import React from "react";
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../context/AuthContext";
import { cartContext } from "../../context/CartContext";

function Navbar() {
  const { setToken, token } = useContext(authContext);

  const {numOfItems} =useContext(cartContext)

  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("tkn");
    setToken(null);

    navigate("/login");
  }

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 bg-fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <NavLink className="text-3xl font-bold" to="/home">
            <i className=" text-emerald-500 fa-solid fa-cart-shopping"></i>{" "}
            Fresh cart
          </NavLink>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse ">
            
            {token ? (
              <>
              <li className="relative flex flex-wrap justify-center items-center  text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500">
              <NavLink to="/cart">
              <i className=" text-gray-500 fa-solid fa-cart-shopping text-2xl "></i>{" "}

                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-lg -top-0 -end-4 dark:border-gray-900">
                {numOfItems}
                </div>
              </NavLink>
            </li>
              <button onClick={logout} className="p-5 ">
                Logout
              </button>
              </>
            ) : (
              <>
                <NavLink className="p-5" to="/login">
                  Login
                </NavLink>
                <NavLink className="p-5" to="/register">
                  Register
                </NavLink>
              </>
            )}
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14">
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky">
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {token ? (
                <>
                  <li className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500">
                    <NavLink to="/home">Home</NavLink>
                  </li>

                  <li className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500">
                    <NavLink to="/wishList">Wish list</NavLink>
                  </li>
                  <li className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500">
                    <NavLink to="/products">Products</NavLink>
                  </li>
                  <li className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500">
                    <NavLink to="/category">Category</NavLink>
                  </li>
                  <li className="block py-2 px-3 text-white bg-green-700 rounded md:bg-transparent md:text-green-700 md:p-0 md:dark:text-green-500">
                    <NavLink to="/brands">Brands</NavLink>
                  </li>

                </>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
