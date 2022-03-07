import React from 'react';
import AboutMeSection from './HomeAboutMeSection.js';
import MyPlansSection from './HomeMyPlansSection.js';
import PointsOfMyPlanHomeSection from './PointsOfMyPlanHomeSection/PointsOfMyPlanHomeSection.js';
import './MainHomeContentSection.css'

const MainHomeContentSection = () => {
    return (
        <div className="main-content-home-section">
            <AboutMeSection />
            <MyPlansSection />
            <PointsOfMyPlanHomeSection />
        </div>
    )
}

export default MainHomeContentSection;