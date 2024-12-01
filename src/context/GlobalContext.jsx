import { createContext, useState, useEffect, useContext } from 'react';
import Flag from 'react-world-flags';

//creo il contesto

const FilmsContext = createContext(); 

//creare provider --> cosa fa? servire i dati tramite chiamata fetch

export default function FilmsContextProvider({children}){

    const [ films, setFilms] = useState ([])
    const [searchText, setSearchText] = useState('');
    
        const apiKey = import.meta.env.VITE_API_KEY;
        const url_films = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchText}`;


        useEffect(() =>{
            fetch(url_films)
                .then(resp =>resp.json())
                .then(({results}) =>{
                    console.log(results);
                    setFilms(results)
            
        });

    }, [url_films])

        function HandleSearchBar(e) {
            e.preventDefault();

            console.log(url_films);

            fetch(url_films)
                .then(resp =>resp.json())
                .then(({results}) =>{
                    console.log(results);
                    setFilms(results)
            
        });
            
        }

        function handleImageMovies(posterpath){
            
            const size = 'w500'
            const url_img = 'https://image.tmdb.org/t/p/'

            const urlImage = `${url_img}${size}${posterpath}`

            
            return urlImage
            
            


        }

           

        

        const values = {
            searchText,
            setSearchText,
            films,
            setFilms,
            HandleSearchBar,
            url_films,
            handleImageMovies,
           

        }
    

        return(

            
            <FilmsContext.Provider value={values}>

                {children}

            </FilmsContext.Provider>



        )

}

export function useFilmsContext() {
    return useContext(FilmsContext);
}