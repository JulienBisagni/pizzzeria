const initialState = {
  pizzas: [{ id: 0, title: "initial pizza" }],
}

const ADD_PIZZA = "ADD_PIZZA"

export const addPizza = pizza => ({
  type: ADD_PIZZA,
  pizza,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA:
      return {
        ...state,
        pizzas: [...state.pizzasd, action.pizza],
      }
    default:
      return state
  }
}
