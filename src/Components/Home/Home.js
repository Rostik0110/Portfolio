import React from 'react';
import './Home.css';
import Sidebar from '../Sidebar/Sidebar';
import MainHomeContentSection from './MainHomeContentSection/MainHomeContentSection.js';

const Home = () => {
    return(       
            <div className="main-home-container">
                <MainHomeContentSection />
                <Sidebar />
            </div>   
    )
}

export default Home;