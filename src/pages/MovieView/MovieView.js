import {Link, useHistory, useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchMovieForAllInfo} from "../../components/MovieApi/MovieLinksApi";
import MovieViewItem from "./MovieViewItem";
import classes from "./MovieView.module.scss";


const MovieView = () => {
  const [movie, setMovie] = useState(null)
  const [error, setError] = useState("")
  const {movieId} = useParams()
  const location = useLocation()
  const history = useHistory()

  useEffect(() => {
    fetchMovieForAllInfo(movieId)
      .then(response => response.json())
      .then(setMovie)
      .catch(error => {
        setError(error.message())
      })
  }, [])

  const goBack = () => {
    history.push(location.state.from)
  }
  return (
    <div className={classes.view_container}>
      <button className={classes.back_btn} onClick={goBack}>Go back</button>
      {movie ?
        (<MovieViewItem title={movie.title} score={movie.vote_average} tag={movie.tagline} date={movie.release_date}
                        overview={movie.overview} img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="no photo exist"/>) : ""
      }
      {movie && movie.length === 0 ? <span>Jopa</span> : ""}
      <h3>Additional Information</h3>
      <div className={classes.cast_and_review}>
        <Link className={classes.cast} to={{
          pathname: `/movie/${movieId}/cast`,
          state: {from: "/"}
        }}>Cast
        </Link>
        <Link className={classes.review} to={{
          pathname: `/movie/${movieId}/reviews`,
          state: {from: "/"}
        }}>Reviews
        </Link>
      </div>

    </div>
  )
}
export default MovieView