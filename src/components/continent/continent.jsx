import React, { useContext, useState } from 'react';
import MyContext from '../../services/context';
import Country from '../country/country';
import S from './continent.module.css';

const Continent = ({ name }) => {

    const ArrCountryCont = useContext(MyContext);


    const [visible, setVisible] = useState(false);
    
    const toogleChilds = (oldValue) => (
        setVisible(!oldValue) 
    );


    return (
        <>
        <li className="collection-item" onClick={() => toogleChilds(visible)}>
            <span className={S.continentName}>{name}</span>
        </li>
        {visible ?
            (<ul className="collection">
                {                   
                    ArrCountryCont[name].map(
                        (country) => (<Country
                            key={country.name}                                
                            country={country} />)
                    )
                }
            </ul>) : null}
            </>
    );
}

export default Continent;