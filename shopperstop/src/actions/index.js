export const ADD_GROCERY = 'ADD_GROCERY';
export const REMOVE_GROCERY = 'REMOVE_GROCERY';
export const ADD_POCKET_MONEY = 'ADD_POCKET_MONEY';
export const REMOVE_POCKET_MONEY = 'REMOVE_POCKET_MONEY';

export function addGroceryById(id) {
    const action = {
        type: ADD_GROCERY,
        id
    }
    return action;
}
export function removeGroceryById(id) {
    const action = {
        type: REMOVE_GROCERY,
        id
    }
    return action;
}

export function addPocketMoneyById(id) {
    const action = {
        type: ADD_POCKET_MONEY,
        id
    }
    return action;
}
export function removePocketMoneyById(id) {
    const action = {
        type: REMOVE_POCKET_MONEY,
        id
    }
    return action;
}
