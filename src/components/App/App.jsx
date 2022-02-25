import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {

    let [galleryList, setGalleryList] = useState([]);


// On Load, do this thing // This is like OnReady in JQuery
useEffect(() => {
  console.log('in useEffect')
  getGallery();
  }, []);



    const getGallery = () => {

      //GET all of the data to append the picture and likes to the DOM

      axios({
        method: 'GET',
        url: '/gallery'
      })
        .then( (response) => {
          console.log('Response:', response);
          // The actual array comes from the data attribute on the response
          console.log('Just the data:', response.data);
          let newData = response.data
          // Set data into component state
          setGalleryList(response.data);
          console.log('this is whats recieved', galleryList);
        })
        .catch(function (error) {
          console.log('Error on get:', error);
        });

    }


    const upVote = (galleryList) => {
      
          console.log('clicked', galleryList);

        //PUT to update the number of 'likes' on a photo - use the ${id}
      axios.put(`/gallery/like/${galleryList.id}`)
        .then((result) => {
          console.log("Updated Vote, this is response",result);
                  // console.log(`gallery id is ${gallery.id}`);
          // Get Updated list
          getGallery();
        })
        .catch((res) => {
          console.log("Error upVoting");
        });
  
      }// end upVote


    return (
      <>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryList key={galleryList.id} galleryList={galleryList} getGallery={getGallery} upVote={upVote} />
      </div>
      

      </>
    );
}

export default App;

