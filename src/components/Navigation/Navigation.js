import {NavLink} from "react-router-dom";
import classes from "./Nav.module.scss";


const NavigationBar = () => {
  return (
    <nav className={classes.nav_bar}>
      <NavLink className={classes.link} activeClassName={classes.active_link} exact to="/">
        Main
      </NavLink>
      <NavLink className={classes.link} activeClassName={classes.active_link} to="/movie">
        Movie
      </NavLink>
    </nav>
  )
}
export default NavigationBar