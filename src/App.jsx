
import FilmsContextProvider from './context/GlobalContext';
import SearchBar from './components/SearchBar.jsx';
import FilmsList from './components/FilmList.jsx';

function App() {
    return (
        <FilmsContextProvider>
            <div>
                <h1>Cerca Film</h1>
                <SearchBar />
                <FilmsList />
            </div>
        </FilmsContextProvider>
    );
}

export default App;
