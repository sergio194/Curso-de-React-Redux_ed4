import {CREATE_TASK} from './tasks-action-creator';
import tasksInitialState from './tasks-initial-state'
export default (state = tasksInitialState, action) => {
    switch (action.type) {
        case CREATE_TASK: {
          return [...tasksInitialState, []]
        }
        default:
          return state;
      }
}
