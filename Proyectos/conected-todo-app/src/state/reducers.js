import {combineReducers} from 'redux';
import lists from './lists/lists-reducer'
import tasks from './tasks/tasks-reducers'
const reducers = combineReducers({
    lists,
    tasks
}) 

export default reducers;