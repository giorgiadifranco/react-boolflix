import { useFilmsContext } from '../context/GlobalContext';

function FilmsList() {
    const { films } = useFilmsContext();

    

    return (
        <div>
            <ul>
                {films && films.map((film, index) => (
                    <li key={index}>
                        <h3>{film.title}</h3>
                        <p><strong>Titolo originale:</strong> {film.original_title}</p>
                        <p><strong>Lingua:</strong> {film.original_language}</p>
                        <p><strong>Voto:</strong> {film.vote_average}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilmsList;
