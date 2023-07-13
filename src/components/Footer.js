import React from 'react';
import SocialMedia from './SocialMedia';
import { NavLink } from 'react-router-dom';

const Footer = ({data}) => {
    return (
        <footer>
            <div className='text-footer'>
                <NavLink to={'/legales'}>Mentions légales</NavLink>
                <NavLink to={'/licences'}>Licences</NavLink>
                <NavLink to={'/'}>Accueil</NavLink>
                
                
            </div>
            <div className='text-footer t2'>
                <NavLink to={'/contact'}>Contactez-Nous</NavLink>
                <a>Téléchargez mon CV</a>
                
            </div>
            <SocialMedia data={data} />
        </footer>
    );
};

export default Footer;