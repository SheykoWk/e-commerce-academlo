import { actions } from "../actions";

const INITIAL_STATE = {
    products: []
}

export const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actions.productSetAll:
            return {
                ...INITIAL_STATE,
                products: action.payload
            }
    
        default:
            return state;
    }
}
