import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  addFav,
  firstMovie,
  previousMovie,
  nextMovie,
} from "./actions/actions";
import { useHistory } from "react-router-dom";

export default function Movie(props) {
  const movieList = useSelector((store) => store.movie);
  console.log(movieList);
  const movie = movieList.find((item) => item.display);
  console.log(movie);
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  function handleClickFirstMovie() {
    dispatch(firstMovie());
    history.push(`/movie/8`);
  }

  function handleClickPreviousPage() {
    dispatch(previousMovie());
    let previousPage = movieList.find((item) => item.display);
    history.push(`/movie/${previousPage.id}`);
  }

  function handleClickNextPage() {
    dispatch(nextMovie());
    let nextPage = movieList.find((item) => item.display);
    history.push(`/movie/${nextPage.id}`);
  }

  function handleClickAddFav() {
    let selectedMovie = movieList.find((item) => item.display);
    dispatch(addFav(selectedMovie));
  }

  return (
    <div>
      <div className="flex bg-white shadow-lg items-start">
        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="max-w-[18rem] w-2/5 block"
        />
        <div className="p-8 flex flex-col gap-4 text-sm">
          <div>
            <h2 className="text-2xl">{movie.title}</h2>
            <p className="italic text-sm">{movie.genres.join(", ")}</p>
          </div>
          <p className="">{movie.plot}</p>
          <div className="flex flex-col sm:flex-row">
            <span className="w-1/3 font-bold">Yönetmen</span>
            <span className="flex-1">{movie.director}</span>
          </div>
          <div className="flex flex-col sm:flex-row">
            <span className="w-1/3 font-bold">Oyuncular</span>
            <span className="flex-1">{movie.actors}</span>
          </div>
          <div className="flex text-sm gap-1 justify-end">
            <span className="block px-2 py-1 rounded-md border border-zinc-400">
              {movie.year}
            </span>
            <span className="block px-2 py-1 rounded-md border border-zinc-400">
              {movie.runtime}dk
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-end py-3">
        {!movieList[0].display && (
          <button
            onClick={handleClickFirstMovie}
            className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
          >
            Başa Dön
          </button>
        )}
        {!movieList[0].display && (
          <button
            onClick={handleClickPreviousPage}
            className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
          >
            Önceki
          </button>
        )}
        {!movieList[movieList.length - 1].display && (
          <button
            onClick={handleClickNextPage}
            className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
          >
            Sıradaki
          </button>
        )}

        <button
          onClick={handleClickAddFav}
          className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
        >
          Listeme ekle
        </button>
      </div>
    </div>
  );
}
