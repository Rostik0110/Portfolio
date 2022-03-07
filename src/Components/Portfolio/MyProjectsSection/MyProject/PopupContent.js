
const PopupContent = ({ content }) => {
    const { firstDescription, secondDescription, thirdDescription, img1, img2, img3 } = content || {};

     return (
                <div>
                    <p>{firstDescription}</p>
                    <img className='picture' src={img1} />
                    <p>{secondDescription}</p>
                    <img className='picture' src={img2} />
                    <p>{thirdDescription}</p>
                    <img className='picture' src={img3} />
                </div>
     ) }


            
export default PopupContent; 
           