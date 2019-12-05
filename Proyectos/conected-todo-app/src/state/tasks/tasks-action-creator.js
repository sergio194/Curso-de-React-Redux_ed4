export const CREATE_TASK = "CREATE_TASK";

export function createTask(element) {
  return {
    type: CREATE_TASK,
    payload: element
  };
}