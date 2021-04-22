export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_TO_CART',
    payload: pizzaObj
});

export const clearCart = () => ({
    type: 'CLEAR_CART'
});

export const removePizzaGroup = (id) => ({
    type: 'REMOVE_PIZZA_GROUP',
    payload: id
});