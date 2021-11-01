const BASE_URL = "https://api.themoviedb.org/3"
const API_KEY = "25395564f664ba40b6be734deef00f77"

async function fetchMain(url = "", config = {}) {
  const response = await fetch(url, config)
  return response.ok ? await response.json() : alert("404 ERROR")
}


export function fetchTopMovieRates() {
  return fetchMain(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`)
}

export function fetchMovieBySearchQuery(searchQuery, page) {
  return fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchQuery}&language=en-US&page=${page}&include_adult=false`)
}

export function fetchMovieForAllInfo (movie_id) {
  return fetchMain(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)

}

export function fetchMovieForActors(movie_id) {
  return fetchMain(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`)
}

export function fetchMovieForReviews(movie_id) {
  return fetchMain(`${BASE_URL}/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
}

