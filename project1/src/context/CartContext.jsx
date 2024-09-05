import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { authContext } from "./AuthContext";

export const cartContext = createContext();
function CartContextProvider({ children }) {
  const { token } = useContext(authContext);
  const [numOfItems, setNumOfItems] = useState(0);
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartId, setCartId] = useState(0);

  async function addProductToCart(productId) {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          productId: productId,
        },
        {
          headers: {
            token: localStorage.getItem("tkn"),
          },
        }
      );

      getUserCart();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
  async function addProductToWishList(productId) {
    try {
      const { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          productId: productId,
        },
        {
          headers: {
            token: localStorage.getItem("tkn"),
          },
        }
      );

      getUserWishList();
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function getUserCart() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/cart",
        {
          headers: {
            token: localStorage.getItem("tkn"),
          },
        }
      );
      setNumOfItems(data.numOfCartItems);
      setProducts(data.data.products);
      setTotalPrice(data.data.totalCartPrice);
      setCartId(data.data._id);
      return data;
    } catch (error) {
      console.log(error, "getUserCart Context");
    }
  }
  async function getUserWishList() {
    try {
      const { data } = await axios.get(
        "https://ecommerce.routemisr.com/api/v1/wishlist",
        {
          headers: {
            token: localStorage.getItem("tkn"),
          },
        }
      );
      setProducts(data.data.products);
      setCartId(data.data._id);
      return data;
    } catch (error) {
      console.log(error, "getUserCart Context");
    }
  }
  useEffect(
    function () {
      if (token != null) {
        getUserCart();
        getUserWishList();
      }
    },
    [token]
  );
  async function updateCount(id, count) {
    try {
      const { data } = await axios.put(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
          count: count,
        },
        {
          headers: {
            token: localStorage.getItem("tkn"),
          },
        }
      );
      setNumOfItems(data.numOfCartItems);
      setProducts(data.data.products);
      setTotalPrice(data.data.totalCartPrice);
      setCartId(data.data._id);

      return data;
    } catch (error) {
      console.log(error, "Error updateCount");
    }
  }

  async function deleteItem(id) {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart/${id}`,
        {
          headers: {
            token: localStorage.getItem("tkn"),
          },
        }
      );
      setNumOfItems(data.numOfCartItems);
      setProducts(data.data.products);
      setTotalPrice(data.data.totalCartPrice);
      setCartId(data.data._id);

      return data;
    } catch (error) {
      console.log("error delete item", error);
    }
  }
  async function clearCart() {
    try {
      const { data } = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        {
          headers: {
            token: localStorage.getItem("tkn"),
          },
        }
      );
      setNumOfItems(0);
      setProducts([]);
      setTotalPrice(0);
      return data;
    } catch (error) {
      console.log("error delete item", error);
    }
  }

  return (
    <cartContext.Provider
      value={{
        addProductToWishList,
        deleteItem,
        addProductToCart,
        products,
        totalPrice,
        numOfItems,
        updateCount,
        cartId,
        clearCart,
        setNumOfItems,
        setTotalPrice,
        setProducts,
      }}>
      {children}
    </cartContext.Provider>
  );
}

export default CartContextProvider;
