import {DISCOUNT_ENABLED, CALC_TOTAL} from './discount-action-creator';
import discountInitialState from './discount-initial-state'
export default (state = discountInitialState, action) => {
    switch (action.type) {
        case DISCOUNT_ENABLED: {
            return {
                ...state,
                total: action.payload
            };
        }
        case CALC_TOTAL: {
            return {
                ...state,
                total: action.payload
            };
        }
        default:
            return state
    }
}
