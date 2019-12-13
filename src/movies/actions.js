export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE = "GET_MOVIE";
export const RESET_MOVIE = "RESET_MOVIE";

export const getMovies = () => {
  return async dispatch => {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
    );
    const movies = await res.json();
    return dispatch({
      type: GET_MOVIES,
      payload: movies.results
    });
  };
};

export const getMovie = id => {
  console.log("iddd", id);
  return async function(dispatch) {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=65e043c24785898be00b4abc12fcdaae&language=en-US`
    );
    const movie = await res.json();
    return dispatch({
      type: GET_MOVIE,
      payload: movie
    });
  };
};

export const resetMovie = () => {
  return {
    type: RESET_MOVIE
  };
};
