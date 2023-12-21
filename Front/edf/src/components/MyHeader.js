import React, { useState } from 'react';
import '../styles/Header.css';
import edf_logo from '../media/edf_logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-regular-svg-icons';


function MyHeader() {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

    return (
        <header className="header">
            <div className="logo">
                <img src={edf_logo} alt="logo_edf" />
                <h3> EcoGestes </h3>
            </div>
            <div className='app-title'>
                <h3>EcoWatt</h3>
                <h4>Ma meteo de l'electricite <br/>Pour une consommation plus responsable</h4>
            </div>
            <div className='user-section'>
                {
                    isUserAuthenticated ? 
                    (
                        <div className='user-auth'>
                            <FontAwesomeIcon icon={faUser} fontSize={'24px'} />
                            <p className='user-name'>Amine</p>
                        </div>
                    ) :
                    (
                        <div className='user-unauth'>

                        </div>
                    )
                }
            </div>
        </header>
    );
}

export default MyHeader