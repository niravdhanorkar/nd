export const MOVIES = "MOVIES";

export function movies(items) {
  const action = {
    type: MOVIES,
    items
  };
  return action;
}
