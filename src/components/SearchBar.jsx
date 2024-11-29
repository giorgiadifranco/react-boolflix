
import { useFilmsContext } from '../context/GlobalContext';

function SearchBar() {
    
    const { searchText, setSearchText, HandleSearchBar} = useFilmsContext();

    //console.log({ searchText, setSearchText, HandleSearchBar });

    return (
        <>
        <div>
            <form onSubmit={HandleSearchBar}>
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Cerca un film.."
                />
                
            </form>
        </div>
        </>
    );
}

export default SearchBar;