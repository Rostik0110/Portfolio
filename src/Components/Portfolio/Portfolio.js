import React ,{useEffect} from 'react';
import Sidebar from '../Sidebar/Sidebar.js';
import './Portfolio.css';
import ProjectAboutMeSection from './ProjectAboutMeSection/ProjectAboutMeSection.js';
import MyProjectsSection from './MyProjectsSection/MyProjectsSection.js';


const Portfolio = () =>{

    

    return(
    <div className="main-project-container">
       <Sidebar/>
       <div className="main-content-section">  
            <div className="main-project-content-section">
                <ProjectAboutMeSection />
            </div>
            <MyProjectsSection />
       </div>
    </div>
    )
}

export default Portfolio;