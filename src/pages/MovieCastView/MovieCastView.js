import {useEffect, useState} from "react";
import * as MovieLinksApi from "../../components/MovieApi/MovieLinksApi";
import {useParams} from "react-router-dom";
import MovieCastViewItem from "./MovieCastViewItem";
import classes from "./MovieCast.module.scss";

const MovieCastView = () => {

  const [cast, setCast] = useState(null)
  const {movieId} = useParams()

  useEffect(() => {
    MovieLinksApi.fetchMovieForActors(movieId)
      // .then(response => response.json())
      .then(cast => setCast(cast.cast))
    console.log(2)
  }, [])

  return (
    <ul className={classes.cast_list}>
      {cast && cast.map(cast =>
        <MovieCastViewItem key={cast.id} id={cast.id} name={cast.name}
                           img={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}/>
      )}
    </ul>
  )
}
export default MovieCastView