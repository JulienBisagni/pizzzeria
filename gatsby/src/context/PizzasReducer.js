const ADD_PIZZA = "ADD_PIZZA"

export default (state, { type, payload }) => {
  switch (type) {
    case ADD_PIZZA:
      return {
        ...state,
        pizzas: [...state.pizzas, action.payload],
      }
    default:
      return state
  }
}
