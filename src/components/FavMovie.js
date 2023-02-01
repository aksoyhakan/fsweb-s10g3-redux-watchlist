import { useDispatch } from "react-redux";
import { removeFav, addMovie } from "./actions/actions";

export default function FavMovie({ movie }) {
  const dispatch = useDispatch();

  function handleClickRemove() {
    dispatch(removeFav(movie.id));
    dispatch(addMovie(movie));
  }

  return (
    <div className="flex p-3 pl-4 bg-white mb-2 shadow items-center group">
      <div className="pr-4 flex-1">{movie.title}</div>
      <button
        onClick={handleClickRemove}
        className="px-3 py-2 block text-sm rounded bg-rose-700 text-white opacity-30 group-hover:opacity-100"
      >
        Çıkar
      </button>
    </div>
  );
}
