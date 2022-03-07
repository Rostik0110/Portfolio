import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="navigation-button">
            <div className="button">
                <a className="link"href="/Home">Home</a>
            </div>
            <div className="button">
                <a className="link" href="/Catalog">Catalog</a>
            </div>
            <div className="button">
                <a className="link" href="/Portfolio">Portfolio</a>
            </div>
        </div>
    )
}



export default Navigation;