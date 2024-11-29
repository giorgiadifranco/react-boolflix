
import Flag from "react-world-flags"; // Libreria per le bandiere

export default function HandleFlagLanguage ({ language }) {

    //estrapolare 'orginal_language' per convertirla in bandiera
    // conversion sigle lingua
    const languageCountry = {
        en: "US", // Inglese -> Stati Uniti
        it: "IT", // Italiano -> Italia
        fr: "FR", // Francese -> Francia
        es: "ES", // Spagnolo -> Spagna
        de: "DE", // Tedesco -> Germania
        ja: "JP", // Giapponese -> Giappone
        zh: "CN", // Cinese -> Cina
        ru: "RU", // Russo -> Russia
        ko: "KR", // Coreano -> Corea del Sud
        ar: "SA", // Arabo -> Arabia Saudita
        pt: "PT", // Portoghese -> Portogallo
        nl: "NL", // Olandese -> Paesi Bassi
        sv: "SE", // Svedese -> Svezia
        no: "NO", // Norvegese -> Norvegia
        da: "DK", // Danese -> Danimarca
        fi: "FI", // Finlandese -> Finlandia
        pl: "PL", // Polacco -> Polonia
        tr: "TR", // Turco -> Turchia
        el: "GR", // Greco -> Grecia
        cs: "CZ", // Ceco -> Repubblica Ceca
        sk: "SK", // Slovacco -> Slovacchia
        hu: "HU", // Ungherese -> Ungheria
        ro: "RO", // Rumeno -> Romania
        th: "TH", // Tailandese -> Tailandia
        vi: "VN", // Vietnamita -> Vietnam
        ms: "MY", // Malese -> Malesia
        id: "ID", // Indonesiano -> Indonesia
        hi: "IN", // Hindi -> India
        ta: "IN", // Tamil -> India
        bn: "BD", // Bengalese -> Bangladesh
        ur: "PK", // Urdu -> Pakistan
        fa: "IR", // Persiano -> Iran
        he: "IL", // Ebraico -> Israele
        uk: "UA", // Ucraino -> Ucraina
        bg: "BG", // Bulgaro -> Bulgaria
        hr: "HR", // Croato -> Croazia
        sr: "RS", // Serbo -> Serbia
        sl: "SI", // Sloveno -> Slovenia
        lt: "LT", // Lituano -> Lituania
        lv: "LV", // Lettone -> Lettonia
        et: "EE", // Estone -> Estonia
        is: "IS", // Islandese -> Islanda
        xx: "XX" // Default per lingue sconosciute
    };

    
    const flagLang = languageCountry[language] ;

  
    return (
        
        <Flag code={flagLang} style={{ width: "15px", height: "20px" }} />

    )
}





