import React, {useContext, useState} from 'react';
import MyContext from '../../services/context';
import S from './continent.module.css';

const Continent = ({name}) => {

    const ArrCountryCont = useContext(MyContext);
    

    const [visible, setVisible] = useState(false);

    const toogleChilds = (oldValue) => (
        setVisible(!oldValue)
    );

    return(
        <li className="collection-item" onClick={() => toogleChilds(visible)}>
            <span className={S.continentName}>{name}</span>
            {visible ? 
            (<ul className="collection">
                {
                    ArrCountryCont[name].map(
                        (country) => (<li 
                            onClick={() => toogleChilds(visible)} 
                            key={country.name}
                            className={`collection-item ${S.countryName}`}
                            >{country.name}</li>)
                    )
                }
            </ul>): null}
        </li>
    );
}

export default Continent;