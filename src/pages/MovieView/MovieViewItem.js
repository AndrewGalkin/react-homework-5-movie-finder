import classes from "./MovieView.module.scss";

const MovieViewItem = ({title, score, img, tag, overview, date}) => {
  return (
    <div className={classes.main_info}>
      <div className={classes.view_img}>
        <img src={img} alt={title}/>
      </div>
      <div className={classes.stat_info}>
      <h1>{title}</h1>
        <span>"{tag !== "" ? tag : "No tag line found"}"</span>
        <span>USER SCORE: {score > 0 ? score : "No scores"} /10</span>
      <span>OVERVIEW: {overview}</span>
      <span>RELEASE DATE: {date}</span>
      </div>
    </div>
  )
}
export default MovieViewItem