/*
    Title: Assignment 4
    Author: Morsalin Bhuiyan
    Date: November 24, 2024
*/

// Step 1: Declare the array of image filenames
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Step 2: Declare the object with alternative text for each image
const altText = {
  'pic1.jpg': 'Closeup of a human eye',
  'pic2.jpg': 'Scenic mountain landscape',
  'pic3.jpg': 'City skyline at dusk',
  'pic4.jpg': 'Beach with sunset',
  'pic5.jpg': 'Autumn leaves in the forest'
};

// Get references to the DOM elements
const displayedImage = document.querySelector('.displayed-img'); 
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay'); 

// Step 3: Loop through the array of image filenames and add images to the thumb-bar
imageFilenames.forEach(filename => {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + filename); 
  newImage.setAttribute('alt', altText[filename]); 
  thumbBar.appendChild(newImage); 
  
  // Step 4: Add a click event listener to each thumbnail image
  newImage.addEventListener('click', function() {
    
    displayedImage.src = newImage.src;
    displayedImage.alt = newImage.alt;
  });
});

// Step 5: Add click event listener to the button to toggle darken/lighten effect
btn.addEventListener('click', function() {
  
  if (btn.classList.contains('dark')) {
    
    btn.classList.remove('dark');
    btn.classList.add('light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgb(0 0 0 / 50%)'; 
  } else {
    // Change the button to "darken" mode
    btn.classList.remove('light');
    btn.classList.add('dark');
    btn.textContent = 'Darken'; 
    overlay.style.backgroundColor = 'rgb(0 0 0 / 0%)'; 
  }
});
