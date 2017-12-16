import groceryItemsList from '../data/groceryItems.json';

export function getItemById(id) {
    let item = groceryItemsList.find(    (item) => item.id === id);
    return item;
}    