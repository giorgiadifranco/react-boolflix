import FilmsContext from './context/GlobalContext'
import { useState } from 'react'

import './App.css'

function App() {

  const [ films , setFilms] = useState({})

  return (
    <>

      <FilmsContext.Provider value={films}>

        {/* la route*/}
      </FilmsContext.Provider>
   
    </>
  )
}

export default App
