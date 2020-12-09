/**
 * DOM Manipulation
 * 
 * These exercises are based on using the supplied index.html and style/main.css in this folder
 */

// 1. Call an alert on the window object
//alert('...hello!');
// 2. Call an alert without the window object

// 3. Log the document object
console.log(document);
// 4. Grab the element with the id 'status'
// - Assign it to a variable and log it
// - Grab the same element using querySelector and the CSS selector
// - Grab the first tweet using querySelector
// - Grab all tweets using querySelectorAll
var status = document.getElementById('status');
console.log(status);
var firstTweet = document.querySelector('.tweet-block');
var allTweets = document.querySelectorAll('.tweet-block');
console.log(firstTweet,allTweets);
// 5. Grab all tweet messages using querySelectorAll, assign to a variable
// - Loop over each message, logging it to the console
// - Log the text content of the node for each message
var allTweetMessages = document.querySelectorAll('.tweet-message');
allTweetMessages.forEach(message => {console.log(message);});
allTweetMessages.forEach(message => {console.log(message.innerText);});
// 6. Remove the second tweet
const tweets = document.querySelectorAll('.tweet-block');
tweets[1].remove();
// 7. Change the content of the last tweet message
tweets[tweets.length-1].innerText = 'Just changed tweet message to this that you are reading';
// 8. Grab parent and child of the search form
const searchForm = document.querySelector('.search-form');
console.log(searchForm.parentElement, searchForm.firstElementChild);
console.log(searchForm.children[0], searchForm.querySelector('form'));

// 9. Grab another tweet
// - Manually set  background to red
// - Add a new class to tweet then remove after 5 seconds using setTimeout
const aTweet = tweets[2]; //third tweet
//aTweet.style.backgroundColor = 'red';

aTweet.classList.add('active');
setTimeout(()=> {
	aTweet.classList.remove('active');
},5000);