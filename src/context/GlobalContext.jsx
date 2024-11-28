import { createContext, useState, useEffect, useContext } from 'react';


//creo il contesto


const FilmsContext = createContext(); 

//creare provider --> cosa fa? servire i dati tramite chiamata fetch

export default function FilmsContextProvider({children}){

    const [ films, setFilms] = useState ([])
    const [searchTitle, setSearchTitle] = useState('');
    

    function fetchResults(title){

        if (!title || title === '') {
            console.error('nessun risultato trovato!');
            return;
        }
        const apiKey = '3d5a0c215d6ca4a4fe980f405ca9b287'
        const url_films = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${title}`;


        fetch(url_films)
        .then(resp =>resp.json())
        .then(({results}) =>{
            console.log(results);
            setFilms(results)
            
        })

    }
    useEffect(() => {
        if (searchTitle) {
            fetchResults (searchTitle);
}
}, [searchTitle])

        {/* fornire il valore ai children*/}
        return(

            
            <FilmsContext.Provider value={{films, setSearchTitle}}>

                {children}

            </FilmsContext.Provider>



        )

}

export function useFilmsContext() {
    return useContext(FilmsContext);
}