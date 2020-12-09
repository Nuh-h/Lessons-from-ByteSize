/**
 * DOM Events
 * 
 * These exercises are based on using the supplied index.html and style/main.css in this folder
 */

// 1. Clicking the document
// - Add a click event to the document
//document.addEventListener("click",()=>{ alert("you clicked on the page!");});

// 2. Clicking an element
// - Add a 'helpful' alert tip to the search button
// - Remove it after the first time
var searchBtn = document.querySelector('#search');
var firstClick = true;
const onSearchClick = ($firstClick)=>{
	if(firstClick) alert('Here is a helpful hint...');
	firstClick = false;
	}
searchBtn.addEventListener('click',onSearchClick);

// 3. Liking a tweet
// - Get all like buttons
// - Loop over each one, creating an alert
// - Use the event param passed in to add a new class of 'liked'
// - Use preventDefault to stop the page jumping
// - Make the click function remove the 'liked' class
const likeBtns = document.querySelectorAll('.fa-heart');
console.log(likeBtns);
likeBtns.forEach(likeBtn => {
	likeBtn.addEventListener('click', (e)=>{
		//alert('you liked this tweet');
		e.preventDefault();
		const likeBtnElement = e.target;
		likeBtnElement.classList.toggle('liked');		
	});
});


// 4. Removing a tweet (left as exercise!)
// - Add a new button to the tweet block
// - When this button is clicked, remove the whole tweet block from the DOM
// - Look in the 7-dom.js exercises for some inspiration
const tweets = document.querySelectorAll('.tweet-block');
tweets.forEach(tweet => {
	const deleteBtn = document.createElement('a');
	deleteBtn.innerHTML='DELETE';
	deleteBtn.style='color:red;';
	deleteBtn.href='#';
	
	deleteBtn.addEventListener('click',(e)=>{ e.preventDefault();tweet.remove() });
	const tweetBtns = tweet.querySelector('.tweet-buttons');
	tweetBtns.appendChild(deleteBtn);
});

// 5. Form validation
// - Add a submit event handler to the new tweet form
// - Add the new tweet block to the top of the list (using what we've learnt to stop page reloading!)
// - If the new tweet box is empty, don't add it but show a message
// - Use HTML5 validation instead
// - Keep HTML5 validation, but also add a custom check for a banned word
// - Show countdown of chars left when typing (left as exercise)
const tweetStatusForm = document.querySelector('#tweet-status-form');
tweetStatusForm.querySelector('#status').required=true;
function submitted(event){
	//alert('submitted!');
	const st = tweetStatusForm.querySelector('#status');
	console.log(st.value);
	event.preventDefault();
	var newTweet = document.querySelector('.tweet-block').cloneNode(true);
	newTweet.querySelector('.tweet-message').innerText = st.value;
	const tweetList = document.querySelector('#tweet-list');
	tweetList.insertBefore(newTweet,tweetList.firstChild);
	console.log(newTweet);
}
tweetStatusForm.addEventListener('submit',submitted);