const MovieReviewsItem = ({ id, name, content}) => {
  return (
    <li id={id}>
      <h4>{name}</h4>
      <p>{content}</p>
    </li>
  )
}
export default MovieReviewsItem