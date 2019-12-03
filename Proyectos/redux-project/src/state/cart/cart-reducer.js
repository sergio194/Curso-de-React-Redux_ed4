import {PICKED_ELEMENTS} from './cart-action-creator';
import cartInitialState from './cart-initial-state'
export default (state = cartInitialState, action) => {
    switch (action.type) {
        case PICKED_ELEMENTS: {
          return {
            ...state,
            ...action.payload
          };
        }
        default:
          return state;
      }
}


