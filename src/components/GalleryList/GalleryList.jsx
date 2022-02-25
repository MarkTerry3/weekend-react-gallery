import {useState, useEffect} from 'react';
import axios from 'axios';
import './GalleryList.css';
import GalleryItem from '../GalleryItem/GalleryItem';


function GalleryList({galleryList, getGallery, upVote}) {


      // On Load, do this thing // This is like OnReady in JQuery
  useEffect(() => {
    console.log('in useEffect')
    getGallery();
  }, []);



    return(

        <div>
                    {galleryList.map((gallery) => (
					<GalleryItem key={gallery.id} galleryItem={gallery} getGallery={getGallery} upVote={upVote} />
				))}
        </div>

    )


}// end GalleryList



export default GalleryList;