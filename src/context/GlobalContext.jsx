import { createContext, useState, useEffect, useContext } from 'react';

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

        function HandleFlagLanguage({results}) =>{

           //estrapolare 'orginal_language' per convertirla in bandiera
            
            const languageCountry = {

                    en: 'US', // Inglese -> Stati Uniti (default)
                    it: 'IT', // Italiano -> Italia
                    fr: 'FR', // Francese -> Francia
                    es: 'ES', // Spagnolo -> Spagna
                    de: 'DE', // Tedesco -> Germania
                    ja: 'JP', // Giapponese -> Giappone
                    zh: 'CN', // Cinese -> Cina
                    ru: 'RU', // Russo -> Russia
                    ko: 'KR', // Coreano -> Corea del Sud
                    ar: 'SA', // Arabo -> Arabia Saudita
                    pt: 'PT', // Portoghese -> Portogallo
                    nl: 'NL', // Olandese -> Paesi Bassi
                    sv: 'SE', // Svedese -> Svezia
                    no: 'NO', // Norvegese -> Norvegia
                    da: 'DK', // Danese -> Danimarca
                    fi: 'FI', // Finlandese -> Finlandia
                    pl: 'PL', // Polacco -> Polonia
                    tr: 'TR', // Turco -> Turchia
                    el: 'GR', // Greco -> Grecia
                    cs: 'CZ', // Ceco -> Repubblica Ceca
                    sk: 'SK', // Slovacco -> Slovacchia
                    hu: 'HU', // Ungherese -> Ungheria
                    ro: 'RO', // Rumeno -> Romania
                    th: 'TH', // Tailandese -> Tailandia
                    vi: 'VN', // Vietnamita -> Vietnam
                    ms: 'MY', // Malese -> Malesia
                    id: 'ID', // Indonesiano -> Indonesia
                    hi: 'IN', // Hindi -> India
                    ta: 'IN', // Tamil -> India
                    bn: 'BD', // Bengalese -> Bangladesh
                    ur: 'PK', // Urdu -> Pakistan
                    fa: 'IR', // Persiano -> Iran
                    he: 'IL', // Ebraico -> Israele
                    uk: 'UA', // Ucraino -> Ucraina
                    bg: 'BG', // Bulgaro -> Bulgaria
                    hr: 'HR', // Croato -> Croazia
                    sr: 'RS', // Serbo -> Serbia
                    sl: 'SI', // Sloveno -> Slovenia
                    lt: 'LT', // Lituano -> Lituania
                    lv: 'LV', // Lettone -> Lettonia
                    et: 'EE', // Estone -> Estonia
                    is: 'IS', // Islandese -> Islanda
                
                    // Default per lingue non mappate
                    xx: 'XX', // Lingua sconosciuta o non applicabile
                };


            }

        

        const values = {
            searchText,
            setSearchText,
            films,
            setFilms,
            HandleSearchBar,
            url_films,
            HandleFlagLanguage

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