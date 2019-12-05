import {CREATE_LIST} from './lists-action-creator';
import listInitialState from './lists-initial-state'
export default (state = listInitialState, action) => {
    switch (action.type) {
        case CREATE_LIST: {
          return [...state, "NEW LIST"]
        }
        default:
          return state;
      }
}
