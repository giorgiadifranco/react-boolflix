import { useFilmsContext } from '../context/GlobalContext';
import HandleFlagLanguage from './FlagLanguage';
import Rating from './Rating';

function FilmsList() {
    const { films, tvSeries, handleImageMovies } = useFilmsContext();
    

    

    return (
        <div>
            <ul>
                {films && films.map((film, index) => (
                    <li key={index}>
                        <h3>{film.title}</h3>

                        <img src={handleImageMovies(film.poster_path)} alt={film.title} />
                        <p><strong>Titolo originale:</strong> {film.original_title}</p>
                        <p><strong>Lingua:</strong> <HandleFlagLanguage language={film.original_language} /></p>
                        <p><strong>Voto:</strong> <Rating vote={film.vote_average} /></p>
                    </li>
                ))}
            </ul>

            <ul>
                {tvSeries && tvSeries.map((tvSerie, index) => (
                    <li key={index}>
                        <h3>{tvSerie.name}</h3>

                        <img src={handleImageMovies(tvSerie.poster_path)} alt={tvSerie.original_name} />
                        <p><strong>Titolo originale:</strong> {tvSerie.original_name}</p>
                        <p><strong>Lingua:</strong> <HandleFlagLanguage language={tvSerie.original_language} /></p>
                        <strong>Rating:</strong> {tvSerie.vote_average}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilmsList;
