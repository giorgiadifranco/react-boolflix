import { useFilmsContext } from '../context/GlobalContext';

function FilmsList() {
    const { films } = useFilmsContext();

    if (!films.length) {
        return <p>Nessun risultato trovato</p>;
    }

    return (
        <div>
            {films.map((film) => (
                <div key={film.id}>
                    <h3>{film.title}</h3>
                    <p><strong>Titolo originale:</strong> {film.original_title}</p>
                    <p><strong>Lingua:</strong> {film.original_language}</p>
                    <p><strong>Voto:</strong> {film.vote_average}</p>
                </div>
            ))}
        </div>
    );
}

export default FilmsList;
