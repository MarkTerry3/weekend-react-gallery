import {useState, useEffect} from 'react';
import axios from 'axios';


function GalleryList({galleryList, getGallery, upVote}) {

// const [vote, setVote] = useState(0);

    // const upVote = (galleryList) => {
    // let voteCounts = setVote(vote + 1);
    //     console.log('clicked', galleryList);



	// 	axios.put(`/gallery/like/${id}`, { likes: voteCounts })
	// 		.then((result) => {
	// 			console.log("Updated Vote, this is response",result);
    //             // console.log(`gallery id is ${gallery.id}`);
	// 			// Get Updated list
	// 			getGallery();
	// 		})
	// 		.catch((res) => {
	// 			console.log("Error upVoting");
	// 		});

    // }// end upVote



      // On Load, do this thing // This is like OnReady in JQuery
  useEffect(() => {
    console.log('in useEffect')
    getGallery();
  }, []);



    return(


        <>
        
        {galleryList.map(gallery =>
                (<div key={gallery.id}>
                    {<img src={gallery.path} />}
                    <label>{gallery.likes} People Love This</label>
                    <button onClick={() => upVote(gallery)}>Love it!</button>
                    </div>)
                )}
        
        
        
        </>


    )


}// end GalleryList



export default GalleryList;