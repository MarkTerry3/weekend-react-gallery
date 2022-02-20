import {useState, useEffect} from 'react';
import axios from 'axios';


function GalleryList({galleryList, getGallery}) {

const [vote, setVote] = useState(0);

    const upVote = (galleryList) => {
    let voteCounts = setVote(vote + 1);
        console.log('clicked', galleryList);



		axios.put(`/gallery/like/${galleryList.id}`, { likes: voteCounts })
			.then((result) => {
				console.log("Updated Vote, this is response");
				// Get Updated list, might need rename?
				getList();
			})
			.catch((res) => {
				console.log("Error upVoting");
			});

    }// end upVote
    
      // On Load, do this thing // This is like OnReady in JQuery
  useEffect(() => {
    console.log('in useEffect')
    getGallery();
  }, []);



    return(


        <>
        
        {galleryList.map(gallery =>
                (<div key={gallery.id}>
                    {<img scr={gallery.path} />}
                    <label>{vote} People Love This</label>
                    <button onClick={upVote}>Love it!</button>
                    </div>)
                )}
        
        
        
        </>


    )


}// end GalleryList



export default GalleryList;