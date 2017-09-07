//declare and export constant 
export const LOGIN = "LOGIN";
export const LOGOUT= "LOGOUT";
export const ADD_PROFILE_DATA = "ADD_PROFILE_DATA";
export const ADD_LOGIN_DATA = "ADD_LOGIN_DATA";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE";
export const SAVE_DATA="SAVE_DATA";
export const EMPTY_SIGNUP = 'EMPTY_SIGNUP';

//action creation
export function doLogin(email, password) {
    const action = {
        type: LOGIN,
        email,
        password        
    }
    return action;
}
export function doLogout(logout) {
    const action = {
        type: LOGOUT,
        logout
    }
    return action;
}

export function addProfileData(fname, lname) {
    const action = {
        type: ADD_PROFILE_DATA,
        fname,
        lname        
    }
    return action;
}

export function addLoginData(email, password) {
    const action = {
        type: ADD_LOGIN_DATA,
        email,
        password        
    }
    return action;
}

export function uploadImageData(imageData) {
    const action = {
        type: UPLOAD_IMAGE,
        imageData       
    }
    return action;
}

export function saveAllInfo(saveData) {
    const action = {
        type: SAVE_DATA,
        saveData       
    }
    return action;
}

export function emptySignup(emptySignpuData) {
    const action = {
        type: EMPTY_SIGNUP,
        emptySignpuData       
    }
    return action;
}
