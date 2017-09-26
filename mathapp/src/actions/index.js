export const INC_NUMBER = "INC_NUMBER";
export const DEC_NUMBER = "DEC_NUMBER";

export function incrementNumber(num) {
    console.log('action index.js incrementNumber method called')
    const action = {
        type: INC_NUMBER,
        num
    }
    return action;
}

export function decrementNumber(num) {
    const action = {
        type: DEC_NUMBER,
        num
    }
    return action;
}