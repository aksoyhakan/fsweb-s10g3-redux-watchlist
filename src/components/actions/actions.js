export const NEXT_MOVIE = "NEXT_MOVIE";
export const PREVIOUS_MOVIE = "PREVIOUS_MOVIE";
export const FIRST_MOVIE = "FIRST_MOVIE";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const REMOVE_MOVIE = "REMOVE_MOVIE";
export const ADD_MOVIE = "ADD_MOVIE";

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

export function removeMovie(id) {
  return { type: REMOVE_MOVIE, payload: id };
}

export function addMovie(movie) {
  return { type: ADD_MOVIE, payload: movie };
}
