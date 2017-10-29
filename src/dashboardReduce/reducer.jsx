const INITIAL_STATE = {
    listPost: {
        userId: '',
        id: '',
        title: '',
        body: ''
    }
}

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'GET_LIST_POST':
            return {
                ...state,
                listPost: action.payload.data
            }
        default:
            return state
    }
}