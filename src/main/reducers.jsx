import {combineReducers} from 'redux'
import dashboardReduce from '../dashboardReduce/reducer'
import TabReducer from '../commons/tab/tabReducer'
const rootReducer = combineReducers({dashboardReduce: dashboardReduce, tab: TabReducer})

export default rootReducer