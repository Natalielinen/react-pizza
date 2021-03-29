const initialState = {
    pizzas: [],
    isLoading: false

}

const pizzasReducer = (state = initialState, action) => {
    if(action.type === 'SET_PIZZAS'){
        return {
            ...state,
            pizzas: action.payload,
            isLoading: true,
        }
    }
    return state;

}

export default pizzasReducer;