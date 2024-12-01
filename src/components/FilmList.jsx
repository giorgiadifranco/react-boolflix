import { useFilmsContext } from '../context/GlobalContext';
import HandleFlagLanguage from './FlagLanguage';

function FilmsList() {
    const { films, handleImageMovies } = useFilmsContext();
    

    

    return (
        <div>
            <ul>
                {films && films.map((film, index) => (
                    <li key={index}>
                        <h3>{film.title}</h3>
                        <img src={handleImageMovies(film.poster_path)} alt={film.title} />
                        <p><strong>Titolo originale:</strong> {film.original_title}</p>
                        <p><strong>Lingua:</strong> <HandleFlagLanguage language={film.original_language} /></p>
                        <p><strong>Voto:</strong> {film.vote_average}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilmsList;
