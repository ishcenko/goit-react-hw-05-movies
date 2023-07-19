import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from 'components/helpers/api';
import PropTypes from 'prop-types';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { MovieList } from './Home.styled';

const theMoviesDbAPI = new TheMovieDbAPI();

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await theMoviesDbAPI.getPopularFilms();

        setMovies(data.results);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <>
      <h2>Trending today:</h2>
      <MovieList>
        {movies !== null &&
          movies.map(movie => {
            return <MoviesList {...movie} key={movie.id} />;
          })}
      </MovieList>
      {error && <p>Error{error}</p>}
    </>
  );
}

Home.propTypes = {
  movies: PropTypes.array,
};

export default Home;
