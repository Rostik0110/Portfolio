import React from 'react';
import Sidebar from '../Sidebar/Sidebar.js';
import CatalogAboutMeSection from './CatalogAboutMeSection/CatalogAboutMeSection.js';
import './Catalog.css';
import MultipleItems from './SliderBlock/MultipleItems.js'

const Catalog = () =>{
    return(
    <div className="main-catalog-container">
       <Sidebar/>
       <div className="main-catalog-section">  
            <div className="main-catalog-content-section">
                <CatalogAboutMeSection/>
            </div>
            <MultipleItems/>
       </div>
    </div>
    )
}

export default Catalog;