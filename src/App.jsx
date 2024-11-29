
import FilmsContextProvider from './context/GlobalContext';
import SearchBar from './components/SearchBar.jsx';
import FilmsList from './components/FilmList.jsx';

function App() {
    return (
      <>
        <FilmsContextProvider>
            
               <header>
                <h1>Cerca Film</h1>
                <SearchBar />
              </header>
              
                <FilmsList />
          
        </FilmsContextProvider>
        
      </>
    );
}

export default App;
