import {Route} from "react-router-dom";
import NavigationBar from "./components/Navigation/Navigation";
import MovieView from "./pages/MovieView/MovieView";
import MovieCastView from "./pages/MovieCastView/MovieCastView";
import MovieReviews from "./pages/MovieReviews/MovieReviews";
import MovieSearchBar from "./pages/MovieSearch/MovieSearchBar";
import {useState} from "react";
import MovieSearchRender from "./pages/MovieSearch/MovieSearchRender";
import MovieTopList from "./pages/MovieTrends/MovieTopLIst";


export default function App() {
  const [query, setQuery] = useState("")

  const handleSearch = (query) => {
    setQuery(query)
  }

  return (
    <div>
      <NavigationBar/>

        <Route path="/" exact component={MovieTopList}>
        </Route>
      <Route path="/movie" exact>
        <MovieSearchBar onSubmit={handleSearch}/>
        <MovieSearchRender query={query}/>
      </Route>
      <Route path="/movie/:movieId" component={MovieView}>
      </Route>
      <Route path="/movie/:movieId/cast" exact component={MovieCastView}>
      </Route>
        <Route path="/movie/:movieId/reviews" exact component={MovieReviews}>
        </Route>


    </div>
  )
}




