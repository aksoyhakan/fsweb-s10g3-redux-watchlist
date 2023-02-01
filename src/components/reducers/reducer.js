import {
  NEXT_MOVIE,
  PREVIOUS_MOVIE,
  FIRST_MOVIE,
  ADD_FAV,
  REMOVE_FAV,
  REMOVE_MOVIE,
  ADD_MOVIE,
} from "../actions/actions";
import { movies } from "../../movies";

const initialState = {
  movie: movies,
  favMovie: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_MOVIE: {
      let findMovie = state.movie.find((item) => item.display);

      let index = state.movie.indexOf(findMovie);

      if (index !== state.movie.length - 1) {
        findMovie.display = false;
        state.movie[index + 1].display = true;
      }
      console.log(state.movie);
      return { ...state, movie: state.movie };
    }

    case PREVIOUS_MOVIE: {
      let findMovie = state.movie.find((item) => item.display);

      let index = state.movie.indexOf(findMovie);

      if (index !== 0) {
        findMovie.display = false;
        state.movie[index - 1].display = true;
      }

      return { ...state, movie: state.movie };
    }

    case FIRST_MOVIE: {
      let findMovie = state.movie.find((item) => item.display);
      findMovie.display = false;
      state.movie[0].display = true;
      return { ...state, movie: state.movie };
    }

    case ADD_FAV: {
      if (!state.favMovie.includes(action.payload)) {
        action.payload.display = false;
        return { ...state, favMovie: [...state.favMovie, action.payload] };
      } else {
        return state;
      }
    }

    case ADD_MOVIE:
      return { ...state, movie: [...state.movie, action.payload] };

    case REMOVE_MOVIE: {
      let newArray = [...state.movie].filter(
        (item) => item.id !== action.payload
      );
      newArray[0].display = true;
      return { ...state, movie: newArray };
    }
    case REMOVE_FAV:
      return {
        ...state,
        favMovie: state.favMovie.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}

export default reducer;
