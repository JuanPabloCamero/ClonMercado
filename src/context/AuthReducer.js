export const initialState = {
    isAuthenticated: false,
    user: null,
    paymentMethod: null,
    selectBank: null,
    address: '',
    cartItems: [],
};

export const AuthReducer = (state, action) =>{
    switch (action.type) {
        case 'LOGIN':
          return {
            ...state,
            isAuthenticated: true,
            user: action.payload,
        }
        case 'LOGOUT':
          return {
            ...state,
            isAuthenticated: false,
            user: null,
        }
        case 'SET_PAYMENT_METHOD':
            return {
               ...state,
               paymentMethod: action.payload, 
            }

        case 'SET_SELECTED_BANK':
            return {
                ...state,
                selectBank: action.payload,
            }

        case 'SET_ADDRESS':
            return {
                ...state,
                address: action.payload,
            }
        case 'RESET_PAYMENT':
            return {
                ...state,
                paymentMethod: null,
                selectBank: null,
                address: '',
            }   
        case 'ADD_ITEM_TO_CART':
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload]
            }
        case 'UPDATE_ITEM_QUANTITY':
            return {
                ...state,
                cartItems: state.cartItems.map(item => item.id === action.payload.id ? {...item, quantity: Math.max
                    (item.quantity + action.payload.delta, 1)
                }: item)
            }
        case 'REMOVE_ITEM_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        case 'CLEAR_CART': 
            return {
                ...state,
                cartItems:[]
            }
        default:
          return state;
        }
}

