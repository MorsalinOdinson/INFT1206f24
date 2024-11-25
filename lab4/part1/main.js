/*
 Title: Assignment 4
  Author: Morsalin Bhuiyan
  Date: November 24, 2024
*/

// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS
let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION
randomize.addEventListener('click', result);

function result() {
  // Randomly select values for insertX, insertY, insertZ
  let newStory = storyText.replace(':insertx:', randomValueFromArray(insertX))
                          .replace(':inserty:', randomValueFromArray(insertY))
                          .replace(':insertz:', randomValueFromArray(insertZ));

  // If a custom name is entered, replace "Bob" with the custom name
  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  // If UK is selected, convert weight and temperature
  if (document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.453592); // Convert pounds to kilograms
    const temperature = Math.round((94 - 32) * 5 / 9); // Convert Fahrenheit to Celsius
    newStory = newStory.replace('300 pounds', `${weight} kilograms`)
                       .replace('94 fahrenheit', `${temperature} celsius`);
  }

  // Set the story text content and make it visible
  story.textContent = newStory;
  story.style.visibility = 'visible';
}
