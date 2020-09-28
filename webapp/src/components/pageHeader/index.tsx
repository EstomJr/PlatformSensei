import React from 'react';
import { Link } from 'react-router-dom';
import BackIcon from '../../assets/images/icons/back.svg';
import LogoIcon from '../../assets/images/logo.png';

import './styles.css';

interface PageHeaderProps{
    title: string;
    description?: string;
}


const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={BackIcon} alt=""/>
                    </Link>
                        <img src={LogoIcon} alt=""/>
                </div>
                <div className="header-content">
                    <strong>
                        {props.title}
                    </strong>
                    {props.description && <p> {props.description} </p> }
                    {props.children}
                </div>

            
            </header>

    );
}

export default PageHeader;