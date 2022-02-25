import {useState, useEffect} from 'react';


function GalleryItem({galleryItem, upVote}) {

    const [showDescription, setShowDescription ] = useState(false);





    return(
        
        <>
            <div className="picDiv"
                onClick={() => {
                    setShowDescription(!showDescription);
                }}
            >
                {showDescription ? <p>{galleryItem.description}</p> : <img src={galleryItem.path} />}

            </div>
            <div className="button">
            <label>{galleryItem.likes} People Love This</label>
            <button onClick={() => upVote(galleryItem)}>Love it!</button>
            </div>

        </>


    )
    
}// end GalleryItem




export default GalleryItem;