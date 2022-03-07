const PopupContent = ({ content }) => {
    return (
        content.map((projectInfoItem) => {
            const { description, img1 } = projectInfoItem || {};
            return (
                <div >
                    <p>{description}</p>
                    <img className='picture' src={img1} />
                </div>
            )
        }
        )
    )
}
export default PopupContent;
