import React from 'react';
import './HomeMyPlansSection.css';

const HomeMyPlansSection = () =>{
 return(
    <div className="home-my-plans-section">
        <h3 className="home-main-content-title">My plans</h3>

        <ol className="home-my-plans-list">
            <li className="home-my-plans-item">
                <span className="home-my-plans-text">
                To graduate school.
                </span>    
            </li>

            <li className="home-my-plans-item">
                <span className="home-my-plans-text">
                Enter the Kiev University. 
                </span>    
            </li>

            <li className="home-my-plans-item">
                <span className="home-my-plans-text">
                Start making money writing websites.
                </span>
            </li>
        </ol>

    </div>
 )
}

export default HomeMyPlansSection;