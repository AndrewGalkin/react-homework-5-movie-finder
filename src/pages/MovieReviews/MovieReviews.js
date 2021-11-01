import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchMovieForReviews} from "../../components/MovieApi/MovieLinksApi";
import MovieReviewsItem from "./MovieReviewsItem";


const MovieReviews = () => {
  const [reviews, setReviews] = useState(null)
  const {movieId} = useParams()

  useEffect(() => {
    fetchMovieForReviews(movieId)
      .then(response => response.json())
      .then(reviews => setReviews(reviews.results))
  }, [])

  return (
    <div>
      {reviews ? reviews.map(review =>
        <MovieReviewsItem key={review.id} id={review.id} name={review.author} content={review.content}/>
      ) : ""}
      {reviews && reviews.length === 0 ? <span>NO REVIEWS :)</span> : ""}
    </div>
  )
}
export default MovieReviews
