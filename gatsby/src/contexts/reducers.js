export const ADD_PIZZA = "ADD_PIZZA"
export const REMOVE_PIZZA = "REMOVE_PIZZA"
export const INCREMENT = 1
export const DECREMENT = -1

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_PIZZA:
      return addPizzaToCart(state, payload)

    case REMOVE_PIZZA:
      return removePizzaFromCart(state, payload)

    default:
      return state
  }
}

const isUpdateCart = (state, payload) =>
  state.pizzas.find(pizza => pizza.id === payload.id)

const isRemovePizzaFromCart = payload => payload.quantity === 1

const updateQuantity = (state, isAdded) =>
  state.quantity + (isAdded ? INCREMENT : DECREMENT)

const updateTotal = (state, payload, isAdded) =>
  state.total + (isAdded ? payload.price : payload.price * -1)

const updateCart = (state, payload, isAdded) => ({
  ...state,
  quantity: updateQuantity(state, isAdded),
  total: updateTotal(state, payload, isAdded),
  pizzas: state.pizzas.map(pizza =>
    pizza.id === payload.id
      ? { ...pizza, quantity: updateQuantity(pizza) }
      : pizza
  ),
})

const addPizza = (state, payload) => ({
  ...state,
  quantity: updateQuantity(state, true),
  total: updateTotal(state, payload, true),
  pizzas: [
    ...state.pizzas,
    { ...payload, quantity: payload.quantity + INCREMENT },
  ],
})

const removePizza = (state, payload) => ({
  ...state,
  quantity: updateQuantity(state),
  total: updateTotal(state, payload),
  pizzas: state.pizzas.filter(pizza => pizza.id !== payload.id),
})

const addPizzaToCart = (state, payload) =>
  isUpdateCart(state, payload)
    ? updateCart(state, payload, true)
    : addPizza(state, payload)

const removePizzaFromCart = (state, payload) =>
  isRemovePizzaFromCart(payload)
    ? removePizza(state, payload)
    : updateCart(state, payload)
