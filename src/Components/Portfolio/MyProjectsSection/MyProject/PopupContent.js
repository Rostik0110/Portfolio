const PopupContent = (props) => {
    const { content, title } = props || {}

    return (
    <div>
        <h1>{title}</h1>
        {content.map((projectInfoItem) => {
            const { description, picture } = projectInfoItem || {};
            console.log(title)
            return (<>
                <p>{description}</p>
                <img className='picture' src={picture} />
            </>
            )
        }
        )}
    </div>)
}
export default PopupContent;
