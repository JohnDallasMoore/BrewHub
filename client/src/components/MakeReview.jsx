import React, { useState, useRef } from 'react'
import { useMutation } from '@apollo/client';
import {ADD_REVIEW} from '../utils/mutations';
import AuthService from '../utils/auth';

function MakeReview() {
  const [beerName, setBeerName] = useState('')
  const [beerReview, setBeerReview] = useState('')
  const [beerRating, setBeerRating] = useState('2.5')
  const [isDraggingOver, setIsDraggingOver] = useState(false);
  const [droppedFileName, setDroppedFileName] = useState(null);
  const [addReview, { error }] = useMutation(ADD_REVIEW)
  const fileInputRef = useRef(null); 

  const handleBeerNameChange = (event) => {
    setBeerName(event.target.value)
  }

  const handleBeerReviewChange = (event) => {
    setBeerReview(event.target.value)
  }

  const handleBeerRatingChange = (event) => {
    setBeerRating(parseFloat(event.target.value))
  }

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDraggingOver(true);
  };
  
  const handleDragLeave = () => {
    setIsDraggingOver(false);
  };
  
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDraggingOver(false);
    
    const file = event.dataTransfer.files[0];
    setDroppedFileName(file); // Store the dropped file name
  };
  
  const handleFileClick = () => {
    fileInputRef.current.click(); // Trigger click on file input
  };
  
  const handleFileChange = (event) => {
    event.preventDefault();
    console.log("handle file change --> " +event);
    const file = event.target.files[0];
    if (file) {
      setDroppedFileName(file);
    }
  };
  
  const handleCancelSelection = () => {
    setDroppedFileName(null);
  };
  
  const handleSubmit = (event) => {
    event.preventDefault()
    const file = droppedFileName;
    const reader = new FileReader();
    // const user = AuthService.getProfile();
    reader.onload = async function (event){
      const result = event.target.result; 
      console.log("RESULT: " +result);
      // const dataString = JSON.stringify(result);
      const userId = String(Math.random());
      const fileName = file.name; 


      const response = await addReview({
        variables: {title: beerName, content: beerReview, rating: beerRating, userId, fileName, imageData: result}
      });

      console.log(response);
    };

    reader.readAsDataURL(file); 
    //pass the file into backend mutation. 
  }

  return (
    <div>
      <section className="bg-gray-900 px-4 lg:px-96 py-8 lg:py-16 rounded-lg">
          <div>
              
              <form onSubmit={handleSubmit} id="new-post-form">
                  
                  <div className="mb-6">
                      <label htmlFor="beer-name-input" className="block mb-2 text-sm font-medium text-white">Beer Name:</label>
                      <input type="text" id="beer-name-input" className="border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Boulevard Space Camper IPA" value={beerName} onChange={handleBeerNameChange}/>
                  </div>

                  
                  <div className="mb-6">
                      <label htmlFor="beer-review-input" className="block mb-2 text-sm font-medium text-white">Review:</label>
                      <textarea id="beer-review-input" rows="4" className="block p-2.5 w-full text-sm  rounded-lg border  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500" placeholder="Write your review here..." value={beerReview} onChange={handleBeerReviewChange}></textarea>
                  </div>


                  <div className="mb-6">
                      
                      <label htmlFor="beer-rating-input" className="block mb-2 text-sm font-medium text-white">Rating:</label>
                      <input id="beer-rating-input" type="range" min="0" max="5" value={beerRating} onChange={handleBeerRatingChange} step="0.25" className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700" />
                      
                      <div className="flex justify-between text-sm font-medium text-white">
                          <span className="text-lg">0</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">|</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">1</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">|</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">2</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">|</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">3</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">|</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">4</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">|</span>
                          <span className="text-xs">|</span>
                          <span className="text-lg">5</span>
                      </div>
                  </div>
                  
                  <div
                    className={`flex flex-col items-center justify-center pt-5 pb-6 ${
                      isDraggingOver ? 'border-4 border-dashed border-gray-500' : 'border-2 border-dashed border-gray-600'
                    } rounded-lg cursor-pointer hover:bg-gray-600 bg-gray-700 hover:border-gray-400`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={handleFileClick}
                  >
                    {droppedFileName ? (
                      <div className="flex items-center border border-2 border-gray-800 rounded-lg m-2">
                        <p className="text-white m-auto p-2">{droppedFileName?.name}</p>
                        <button
                          type="button"
                          className="text-red-500"
                          onClick={handleCancelSelection}
                        >
                          <svg className="m-2 w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m13 7-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <svg className="w-8 h-8 mb-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                      </div>
                    )}
                  </div>

                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    onChange={handleFileChange}
                  />


                <button type="submit"
                    className="inline-flex items-center mt-8 py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-900 hover:bg-blue-800">
                    Post review
                </button>
              </form>
          </div>
      </section>
    </div>
  )
}

export default MakeReview