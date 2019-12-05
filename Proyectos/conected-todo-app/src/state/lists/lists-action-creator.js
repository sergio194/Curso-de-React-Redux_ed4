export const CREATE_LIST = "CREATE_LIST";

export function createList(element) {
  return {
    type: CREATE_LIST,
    payload: element
  };
}