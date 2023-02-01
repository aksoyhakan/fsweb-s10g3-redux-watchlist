export const NEXT_MOVIE = "NEXT_MOVIE";
export const PREVIOUS_MOVIE = "PREVIOUS_MOVIE";
export const FIRST_MOVIE = "FIRST_MOVIE";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";

export function nextMovie() {
  return { type: NEXT_MOVIE };
}

export function previousMovie() {
  return { type: PREVIOUS_MOVIE };
}

export function firstMovie() {
  return { type: FIRST_MOVIE };
}

export function addFav(movie) {
  return { type: ADD_FAV, payload: movie };
}

export function removeFav(id) {
  return { type: REMOVE_FAV, payload: id };
}
