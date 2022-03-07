import React from 'react';
import './PointsOfMyPlanHomeDuties.css';

const PointsOfMyPlanHomeBlock = () => {

    let pointsOfMyPlansBlock = [
        { paragraph: "To graduate ", orangeText: "scholl", subparagraphs: ["One more year to study.", "Pass exams.", "Pass ZNO.", "Get a certificate."] },
        { paragraph: "Enter the", orangeText: "Kiev University", subparagraphs: ["Submit documents.", "Go to Computer science.", "To get higher education."] },
        { paragraph: "Start making money writing", orangeText: "websites", subparagraphs: ["Learn JavaScript.", "Learn ReactJS.", "Write a website to order."] }
    ];
    return (
        pointsOfMyPlansBlock.map((userInfo, index) => {
            return (
                <div key={index}>
                    <div className="points-of-my-plan-home-block">
                        <h4 className="points-of-my-plan-home-position">{userInfo.paragraph} <span className="points-of-my-plan-home-color">{userInfo.orangeText}</span></h4>
                        <ul className="points-of-my-plan-home-duties">
                            {
                                userInfo.subparagraphs.map((subparagraph, index) => {
                                    return <li key={index} className="points-of-my-plan-home-duty">{subparagraph}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            )
        }
        )
    )
}




export default PointsOfMyPlanHomeBlock;