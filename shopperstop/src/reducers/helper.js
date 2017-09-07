import groceryItemsList from '../data/groceryItems.json';

export function addToBag(id) {
    let item = groceryItemsList.find( (item) => item.id === id);
    return item;
}