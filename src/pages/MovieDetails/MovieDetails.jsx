import { useState, useEffect } from 'react';
import { TheMovieDbAPI } from 'components/helpers/api';
import { useParams, Routes, Route, useLocation } from 'react-router-dom';
import { Cast } from 'pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';
import { Loader } from 'components/Loader/Loader';
import {
  Block,
  Image,
  InfoBlock,
  Title,
  LinkStyled,
  NavLinkStyled,
} from './MovieDetails.styled';
import PropTypes from 'prop-types';

const theMovieDbAPI = new TheMovieDbAPI();

function MovieDetails() {
  const { moviesId } = useParams();
  const [movie, setMovie] = useState({});
  const [error, setError] = useState('');

  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { data } = await theMovieDbAPI.getMovieInfoById(moviesId);
        setMovie(data);
      } catch (error) {
        setError(error.message);
      }
    };
    getMovies();
  }, [moviesId]);

  const { poster_path, title, vote_average, genres, overview } = movie;

  return (
    <>
      <LinkStyled to={goBackLink}>Go back</LinkStyled>
      {movie && (
        <Block>
          {poster_path ? (
            <Image src={`${TheMovieDbAPI.IMG_URL + poster_path}`} alt={title} />
          ) : (
            <Loader />
          )}
          <InfoBlock>
            <h1>{title}</h1>
            <p>User score: {Math.round(vote_average * 10)} %</p>
            <p>
              <b>Overview: </b>
              {overview}
            </p>
            {genres && (
              <p>
                <b>Genres: </b>
                {genres.map(genre => genre.name).join(', ')}
              </p>
            )}
          </InfoBlock>
        </Block>
      )}
      {error && <p>Error{error}</p>}
      <Title>Additional information</Title>
      <ul>
        <li>
          <NavLinkStyled
            to={`cast`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Cast
          </NavLinkStyled>
        </li>
        <li>
          <NavLinkStyled
            to={`reviews`}
            state={{ from: location?.state?.from ?? '/' }}
          >
            Reviews
          </NavLinkStyled>
        </li>
      </ul>

      <Routes>
        <Route path="cast" element={<Cast />} />
        <Route path="reviews" element={<Reviews />} />
      </Routes>
    </>
  );
}

MovieDetails.propTypes = {
  moviesId: PropTypes.number,
};

export default MovieDetails;
