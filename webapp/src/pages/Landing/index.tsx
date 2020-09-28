import React from 'react';
import {Link} from 'react-router-dom'
import './styles.css';

import LogoImg from '../../assets/images/logo.png';
import LandingImg from '../../assets/images/landing3.svg';

import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClass from '../../assets/images/icons/give-classes.svg'
import Purple from '../../assets/images/icons/purple-heart.svg'


function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={LogoImg} alt=""/>
                    <h2>Sua plataforma de jutsus online</h2>
                </div>
                <img src={LandingImg} 
                alt="" 
                className="hero-image"
                />           

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={StudyIcon} alt=""/>
                        Procurar sensei
                    </Link>

                    <Link to="/give-class" className="dar-aulas">
                        <img src={GiveClass} alt=""/>
                        Quero ser sensei
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 jutsus já ensinados <img src={Purple} alt=""/>
                </span>
            </div>
        </div>
    )
}

export default Landing;