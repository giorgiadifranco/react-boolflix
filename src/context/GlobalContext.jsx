import { createContext } from 'react';
import { useState }

//creo il contesto


const FilmsContext = createContext(); 

//creare provider --> cosa fa? servire i dati tramite chiamata fetch

export default FilmsContextProvider ({children}){

    const [ films, setFilms] = useState ({})
    const url_films = `https://api.themoviedb.org/3/search/movie?api_key=3d5a0c215d6ca4a4fe980f405ca9b287&query=${title}`


    function fetchResults(url_films){

        

    }

}