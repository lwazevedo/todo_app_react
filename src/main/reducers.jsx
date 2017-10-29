import {combineReducers} from 'redux'
import Reducer from '../dashboardReduce/reducer'

const rootReducer = combineReducers({
    dashboardReduce: Reducer
})

export default rootReducer