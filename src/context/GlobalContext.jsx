import { createContext, useState, useEffect, useContext } from 'react';


//creo il contesto


const FilmsContext = createContext(); 

//creare provider --> cosa fa? servire i dati tramite chiamata fetch

export default function FilmsContextProvider({children}){

    const [ films, setFilms] = useState ([])
    const [searchText, setSearchText] = useState('');
    

    function fetchResults(title){

        if (!title || title === '') {
            console.error('nessun risultato trovato!');
            return;
        }
        const apiKey = import.meta.env.VITE_API_KEY;
        const url_films = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`;


        fetch(url_films)
        .then(resp =>resp.json())
        .then(({results}) =>{
            console.log(results);
            setFilms(results)
            
        })

    }
    useEffect(() => {
        if (searchText) {
            fetchResults (searchText);
}
}, [searchText])

        {/* fornire il valore ai children*/}
        return(

            
            <FilmsContext.Provider value={{films, setSearchText}}>

                {children}

            </FilmsContext.Provider>



        )

}

export function useFilmsContext() {
    return useContext(FilmsContext);
}