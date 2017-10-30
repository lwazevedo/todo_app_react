import {
    combineReducers
} from 'redux'
import {
    reducer as formReducer
} from 'redux-form'
import {
    reducer as toastrReducer
} from 'react-redux-toastr'

import dashboardReduce from '../dashboardReduce/reducer'
import TabReducer from '../commons/tab/tabReducer'
import PostReducer from '../createPostReduce/postReducer'

const rootReducer = combineReducers({
    dashboardReduce: dashboardReduce,
    tab: TabReducer,
    postReducer: PostReducer,
    form: formReducer,
    toastr: toastrReducer
})

export default rootReducer