import React from 'react';
import './PointsOfMyPlanHomeSection.css';
import PointsOfMyPlanHomeDuties from './PointsOfMyPlanHomeDuties.js';



const PointsOfMyPlanHomeSection = () =>{
   return(
    
       <div > <h3 className="points-of-my-plan-home-title">Points my plan</h3>         
           <PointsOfMyPlanHomeDuties />
       </div>
    
   )


}

export default PointsOfMyPlanHomeSection;