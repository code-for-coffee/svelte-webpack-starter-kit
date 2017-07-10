export const UPDATE_SCORE = 'UPDATE_SCORE';
export const CHANGE_NAME = "CHANGE_NAME";

export function updateScore(addedPointsValue) {
  return { type: UPDATE_SCORE, addedPointsValue }
}

export function changeName(name) {
  return { type: CHANGE_NAME, name }
}