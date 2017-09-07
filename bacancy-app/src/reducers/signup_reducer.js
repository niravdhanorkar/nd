import { ADD_PROFILE_DATA, ADD_LOGIN_DATA, UPLOAD_IMAGE, SAVE_DATA, EMPTY_SIGNUP } from '../actions';

export default function signup(state = { fname: '', lname: '', email: '', password: '', image: '' }, action) {
    switch (action.type) {
        case ADD_PROFILE_DATA:
            let newState = Object.assign({}, state, { 'fname': action.fname, 'lname': action.lname })
            return newState;
        case ADD_LOGIN_DATA:
            newState = Object.assign({}, state, { 'email': action.email, 'password': action.password })
            return newState;
        case UPLOAD_IMAGE:
            newState = Object.assign({}, state, { 'image': action.imageData })
            return newState;
        case SAVE_DATA:
            let jsonArrString = localStorage.getItem('usersObj');
            let jsonArr = [];
            if (jsonArrString) {
                jsonArr = JSON.parse(jsonArrString);
            }
            jsonArr.push(state);

            // Put the object into storage
            localStorage.setItem('usersObj', JSON.stringify(jsonArr));
            newState = Object.assign({}, {}, { "profileCreated": true });
            return newState;
        case EMPTY_SIGNUP:
            return  { fname: '', lname: '', email: '', password: '', image: '' };
        default:
            return state;
    }
}