import * as userAction from '../actions/user.action';

export function userReducer(state =[], action: userAction.Action) {
    switch(action.type){
        case userAction.LOAD_USERS_SUCCESS: {
            return action.payload;
        }
        default: {
            console.log('in user reducer ', action.type)
            return state;
        }
    }
}