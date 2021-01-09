import React, { useContext, useReducer } from "react"
import reducer from "./PizzasReducer"

const GlobalStateContext = useContext(contextValue)

const initialState = {
  pizzas: [{ id: 0, title: "initial pizza" }],
}

export default PizzasContestProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState, init)
  return <div>{children}</div>
}
