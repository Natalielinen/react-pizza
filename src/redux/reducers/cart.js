const initialState = {
    cartItems: {},
    totalPrice: 0,
    cartItemsCount: 0,

}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PIZZA_TO_CART':{
            const newItems = {
                ...state.cartItems,
                [action.payload.id]: !state.cartItems[action.payload.id] 
                ? [action.payload] 
                : [...state.cartItems[action.payload.id] , action.payload],
            };

            const pizzasInCart = [].concat.apply([], Object.values(newItems));

            return {
                ...state,
                cartItems: newItems,
                cartItemsCount: pizzasInCart.length,
                totalPrice: pizzasInCart.reduce((sum, obj) => obj.price + sum, 0)
            }
        }
        default:
            return state;
    }
    
    

}

export default cart;