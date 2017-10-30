import {combineReducers} from 'redux'
import dashboardReduce from '../dashboardReduce/reducer'
import TabReducer from '../commons/tab/tabReducer'
import PostReducer from '../createPostReduce/postReducer'
const rootReducer = combineReducers({dashboardReduce: dashboardReduce, tab: TabReducer, postReducer: PostReducer})

export default rootReducer