export const INC_NUMBER = 'INC_NUMBER';
export const DEC_NUMBER = 'DEC_NUMBER';


export function incrementNumber(num) {
    const action = {
        type: INC_NUMBER,
        num: num
    }
    return action;
}
export function decrementNumber(num){
    const action = {
        type: DEC_NUMBER,
        num
    }
    return action;
}