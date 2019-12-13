/* eslint react/no-did-mount-set-state: 0 */
import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getMovies } from "../movies/actions";

import Movie from "./Movie";

const MoviesList = ({ movies, getMovies, isLoaded }) => {
  useEffect(() => {
    if (!isLoaded) {
      getMovies();
    }
  }, []);

  return (
    <MovieGrid>
      {!isLoaded && <h1>Loading...</h1>}
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </MovieGrid>
  );
};

const mapStateToProps = state => ({
  movies: state.movies.movies,
  isLoaded: state.movies.moviesLoaded
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMovies }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);

const MovieGrid = styled.div`
  display: grid;
  padding: 1rem;
  grid-template-columns: repeat(6, 1fr);
  grid-row-gap: 1rem;
`;
