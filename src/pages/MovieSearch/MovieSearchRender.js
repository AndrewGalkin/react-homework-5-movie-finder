import {useEffect, useState} from "react";
import {fetchMovieBySearchQuery} from "../../components/MovieApi/MovieLinksApi";
import {Link, useHistory, useLocation} from "react-router-dom";
import classes from "../MovieTrends/Trends.module.scss";

const MovieSearchRender = ({query}) => {
  const [movies, setMovies] = useState(null)
  const [page, setPage] = useState(1);
  const location = useLocation()
  const history = useHistory()
  console.log(history.location.search)

  useEffect(() => {
    if (query) {
      getMovies()
    }
  }, [query])


  const getMovies = () => {
    fetchMovieBySearchQuery(query, page)
      .then(response => response.json())
      .then(movies => {
        setMovies(movies.results)
        setPage(prevState => prevState + 1)
      })
  }


  return (
    <div>
      <ul className={classes.top_list}>
        {movies && movies.map(movie => (
          <li className={classes.top_list_item} key={movie.id}>
            <Link to={{
              pathname: `/movie/${movie.id}`,
              state: {from: location}
            }}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} width={150} height={100}
                   alt="no photo exist"/>
              {movie.original_title}
            </Link>
          </li>
        ))}

      </ul>
    </div>
  )
}
export default MovieSearchRender