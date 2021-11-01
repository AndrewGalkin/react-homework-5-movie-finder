import {useState} from "react";
import {useHistory, useLocation} from "react-router-dom";
import classes from "./Form.module.scss";

const MovieSearchBar = ({onSubmit}) => {
  const [searchQuery, setSearchQuery] = useState("")
  const location = useLocation()
  const history = useHistory()


  const handleChangeName = (e) => {
    setSearchQuery(e.currentTarget.value.toLowerCase())
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim() === "") {
      alert("Your form is empty!")
      return
    }
    onSubmit(searchQuery)
    setSearchQuery("")
    history.push({
      ...location,
      search: `query=${searchQuery}`
    })
  }


  return (
    <form onSubmit={handleSubmit} className={classes.search_form}>
      <input
        className={classes.input_field}
        type="text"
        autoComplete="off"
        autoFocus
        value={searchQuery}
        onChange={handleChangeName}
        placeholder="Search images and photos"
      />
      <label className={classes.input_label}>Search Images...</label>
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
)
}
export default MovieSearchBar