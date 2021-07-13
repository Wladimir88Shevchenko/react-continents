import React, { useState } from 'react';
import S from '../continent/continent.module.css'

const Country = ({ country }) => {

    const [visibleLang, setVisibleLang] = useState(false);

    const toogleLang = (oldValue) => (
        setVisibleLang(!oldValue)
    );

    return (
        <li
            className={`collection-item ${S.countryName}`}
            onClick={() => toogleLang(visibleLang)} >
            {country.name}
            <ul>
                {
                visibleLang ? (
                    country.languages.map((lang) => (
                        <li 
                        key={lang.name}
                        className={S.langLiStyle}>{lang.name}</li>
                    ))
                ): null
                }
                
            </ul></li>
    );
}

export default Country;