import React, { useReducer } from "react"
import { CartContext } from "./CartContext"
import { cartReducer, ADD_PIZZA, REMOVE_PIZZA } from "./reducers"

export const CartProvider = ({ children }) => {
  const pizzas = [
    {
      id: 1,
      title: "Marinara",
      description: "Aglio, oglio...e pomodoro",
      abrev: "MNR",
      price: 6,
      url:
        "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 0,
    },
    {
      id: 2,
      title: "Margherita",
      description: "Mozarella DOP, basilico ... e pomodoro",
      abrev: "MGT",
      price: 8,
      url:
        "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 0,
    },
    {
      id: 3,
      title: "Tartuffata",
      description: "Mozarella DOP, basilico, tartuffo ... e pomodoro",
      abrev: "TFT",
      price: 10,
      url:
        "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      quantity: 0,
    },
  ]

  const initialState = {
    pizzas: [],
    quantity: 0,
    total: 0,
  }

  const [cartState, dispatch] = useReducer(cartReducer, initialState)

  const addPizzaToCart = pizza => {
    dispatch({ type: ADD_PIZZA, payload: pizza })
  }

  const removePizzaFromCart = pizza => {
    dispatch({ type: REMOVE_PIZZA, payload: pizza })
  }

  return (
    <CartContext.Provider
      value={{
        pizzas,
        cartState,
        addPizzaToCart,
        removePizzaFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
