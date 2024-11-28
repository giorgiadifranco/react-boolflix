import { createContext, useState, useEffect } from 'react';


//creo il contesto


const FilmsContext = createContext(); 

//creare provider --> cosa fa? servire i dati tramite chiamata fetch

export default FilmsContextProvider ({children}){

    const [ films, setFilms] = useState ([])
    

    function fetchResults(title){
        
        const url_films = `https://api.themoviedb.org/3/search/movie?api_key=3d5a0c215d6ca4a4fe980f405ca9b287&query=${title}`;


        fetch(url_films)
        .then(resp =>resp.json())
        .then(({results}) =>{
            console.log(results);
            setPosts(results)
            
        })

        useEffect(fetchResults, [])
        
        {/* fornire il contesto ai children*/}
        return(

            
            <FilmsContext.Provider value={{films}}>

                {children}

            </FilmsContext.Provider>



        )



    }

}