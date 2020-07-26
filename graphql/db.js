// import REST API module
import fetch from "node-fetch";

const API_URL = `https://yts.mx/api/v2/list_movies.json`;

export const getMovies = (limit, rating) => {
  /* Check the structure of API
  -> open the url in Chrome
  */
  let REQUEST_URL = API_URL;

  if (limit > 0) {
    REQUEST_URL += `?limit=${limit}`;
  }

  if (rating > 0) {
    if (limit > 0) {
      REQUEST_URL += `&minimum_rating=${rating}`;
    } else {
      REQUEST_URL += `?minimum_rating=${rating}`;
    }
  }

  return fetch(`${REQUEST_URL}`)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};

/* GraphQL Basics

export let movies = [{
    id: 1,
    name: "movie1",
    score: 7
  },
  {
    id: 2,
    name: "movie2",
    score: 5
  },
  {
    id: 3,
    name: "movie3",
    score: 4
  },
  {
    id: 4,
    name: "movie4",
    score: 9
  },
  {
    id: 5,
    name: "movie5",
    score: 3
  },
  {
    id: 6,
    name: "movie6",
    score: 8
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovie = movies.filter(movie => movie.id === id);
  return filteredMovie[0];
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  }
  movies.push(newMovie);
  return newMovie;
};

export const deleteMovie = id => {
  const cleanedMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
*/
