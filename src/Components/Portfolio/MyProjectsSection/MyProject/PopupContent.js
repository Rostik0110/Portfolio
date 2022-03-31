const PopupContent = (props) => {
    const { content, title } = props || {};
    return (
        <div>
     <h1>{title}</h1> 
        {content ?
              
        content.map((projectInfoItem, index) => {
                const { description, picture } = projectInfoItem || {};
                return (<div key={index}>
                    <p>{description}</p>
                    <img className='picture' src={picture} />
                </div>
                )
            }
            )
            : null}           
        </div>

        )
    
}
export default PopupContent;
