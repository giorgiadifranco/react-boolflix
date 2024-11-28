import { useState } from 'react';
import { useFilmsContext } from '../context/GlobalContext';

function SearchBar() {
    const [title, setTitle] = useState('');
    const { setSearchTitle } = useFilmsContext();

    const handleSearch = () => {
        setSearchTitle(title);
    };

    return (
        <>
        <div>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Cerca un film.."
            />
            <button onClick={handleSearch}>Cerca</button>
        </div>
        </>
    );
}

export default SearchBar;