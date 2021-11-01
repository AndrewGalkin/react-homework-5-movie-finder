import {useEffect, useState} from "react";
import {fetchTopMovieRates} from "../../components/MovieApi/MovieLinksApi"
import {Link, useLocation} from "react-router-dom";
import classes from "./Trends.module.scss";

export default function MovieTopList() {
  const [results, setResults] = useState([])
  const location = useLocation()

  useEffect(() => {
    fetchTopMovieRates()
      .then(response => response.json())
      .then(results => setResults(results.results))
  }, [])



  return (
    <div>
      <h1>TOP MOVIES</h1>
      <ul className={classes.top_list}>
        {results && results.map(result =>
          <li className={classes.top_list_item} key={result.id}>
            <Link to={{pathname: `/movie/${result.id}`, state: {from: location}}}>
              <img src={`https://image.tmdb.org/t/p/w500${result.backdrop_path}`} width={150} height={100}
                   alt="no photo exist"/>
              {result.title && <h3>{result.title}</h3>}
              {result.name && <h3>{result.name}</h3>}
            </Link>

          </li>
        )}
      </ul>
    </div>

  )
}
