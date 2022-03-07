import ReactModal from 'react-modal';
import React, {useState} from 'react';
import "./Popup.css";

import MyProjects from './MyProjects.js';


const Popup =({children})=> {

   var State = {
      showModal : false
    };
    
  const [isModalShow, setIsModalShow] = useState(false);

  
 const HandleOpenModal= ()=> {

   setIsModalShow(true);
  }
  
  const HandleCloseModal =()=> {

    setIsModalShow(false);
  }
  

    return (
      <div>
         {/* <div type='button' onClick={HandleOpenModal} ><MyProjects/></div> */}
        <ReactModal 
           isOpen={isModalShow}
           contentLabel="onRequestClose Example"
           onRequestClose={HandleCloseModal}
        >
          {children}
          <button onClick={HandleCloseModal}>Close Modal</button>
        </ReactModal>
      </div>
    );
  
}
export default Popup;