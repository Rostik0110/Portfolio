import React from 'react';
import './MyProjects.css';
import img1 from "./img1.jpg";
import PopupContent from './PopupContent';
import { useState } from 'react';
import ReactModal from 'react-modal';
import ContentInfo from './ContentInfo';


const MyProjects = () => {
    const [isPopupVisible, setIsPoupVisible] = useState(false);
    const [popupContent, setPopupContent] = useState(false);

    let infoProject = [
        { id:1, photo: img1, projectSignature: "Rostik Shafar", projectName: "My portfolio", data: "23.10.2021" },
        { id:2,photo: img1, projectSignature: "Rostik Shafar", projectName: "My portfolio", data: "23.10.2021" },
        {id:3, photo: img1, projectSignature: "Rostik Shafar", projectName: "My portfolio", data: "23.10.2021" },
        {id:4, photo: img1, projectSignature: "Rostik Shafar", projectName: "My portfolio", data: "23.10.2021" },
        {id:5, photo: img1, projectSignature: "Rostik Shafar", projectName: "My portfolio", data: "23.10.2021" },
        {id:6, photo: img1, projectSignature: "Rostik Shafar", projectName: "My portfolio", data: "23.10.2021" }
    ];

    const getProjectById = (projectId) => {
            
            const content = ContentInfo.find(word => word.id === projectId);
            
    return content;
    }

    const onProjectTitleClick = (projectId) => {
        setIsPoupVisible(true);
        setPopupContent(getProjectById(projectId))
    };

    return (
        <>
         {infoProject.map((userInfo, index) => {
             const projectID = userInfo.id;
           return (
                    <div key={index} className="my-project-box" onClick={()=>onProjectTitleClick(projectID)}>
                        <div className="avatar-section">
                            <img className="project-avatar" src={userInfo.photo} alt="me photo" />
                            <div className="project-signature">{userInfo.projectSignature}</div>
                        </div>
                        <div className="project-name">{userInfo.projectName}</div>
                        <div className="data">{userInfo.data}</div>
                    </div>
            )
        })}
            <ReactModal 
            isOpen={isPopupVisible}
            contentLabel="onRequestClose Example"
            onRequestClose={()=>setIsPoupVisible(false)}
            >
                <div className='close' type='button' onClick={()=>setIsPoupVisible(false)}>&#10006;</div>
                <PopupContent content={popupContent}/>
                
            </ReactModal>
        </>
    )
}

export default MyProjects;