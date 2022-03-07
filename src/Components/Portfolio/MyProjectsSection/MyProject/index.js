
import ReactModal from 'react-modal';
import React, {useState} from 'react';

const ExampleApp =()=> {

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
        <button onClick={HandleOpenModal}>Trigger Modal</button>
        <ReactModal 
           isOpen={isModalShow}
           contentLabel="onRequestClose Example"
           onRequestClose={HandleCloseModal}
        >
          <button onClick={HandleCloseModal}>Close Modal</button>
          <p>Modal text!</p>
          
        </ReactModal>
      </div>
    );
  
}
export default ExampleApp;