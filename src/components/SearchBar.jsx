import { useState, useContext} from 'react'

import FilmsContext from '../context/GlobalContext'

export default function SearchBar(){

    const {films} = useContext(FilmsContext);
    const [film, setFilms]




    function handleInputSubmit(){

    


    }

    return(

        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="search movies" aria-label="search movies" aria-describedby="basic-addon2" />
                <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div>
        
        </>
    )
}