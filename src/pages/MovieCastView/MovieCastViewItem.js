import classes from "./MovieCast.module.scss";

const MovieCastViewItem = ({id, name, img}) => {
  return (
    <li className={classes.cast_item} id={id}>
      <span>{name}</span>
      <img src={img} width={100} height={100} alt={name}/>
    </li>
  )
}
export default MovieCastViewItem