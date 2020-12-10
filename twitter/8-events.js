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
function addLike(){
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
}
addLike();

// 4. Removing a tweet (left as exercise!)
// - Add a new button to the tweet block
// - When this button is clicked, remove the whole tweet block from the DOM
// - Look in the 7-dom.js exercises for some inspiration
function addDelete(){
	const tweets = document.querySelectorAll('.tweet-block');
	tweets.forEach(tweet => {
		const tweetBtns = tweet.querySelector('.tweet-buttons');
		
		if(tweetBtns.lastChild.innerHTML!=='DELETE'){
			const deleteBtn = document.createElement('a');
			deleteBtn.innerHTML='DELETE';
			deleteBtn.style='color:red;';
			deleteBtn.href='#';
			
			deleteBtn.addEventListener('click',(e)=>{ e.preventDefault();tweet.remove() });
			
			tweetBtns.appendChild(deleteBtn);
		}
	});
}
addDelete();
// 5. Form validation
// - Add a submit event handler to the new tweet form
// - Add the new tweet block to the top of the list (using what we've learnt to stop page reloading!)
// - If the new tweet box is empty, don't add it but show a message
// - Use HTML5 validation instead
// - Keep HTML5 validation, but also add a custom check for a banned word
// - Show countdown of chars left when typing (left as exercise)
const twtBlock = document.createElement('div');
twtBlock.classList.add('tweet-block');
twtBlock.innerHTML = '<img class="tweet-profile-picture" src="./images/profile_picture.jpg" width="50px" height="50px"> <b>Connor Avery</b><br> <p class="fa fa-user tweet-username"> @connoraye </p> <p class="tweet-message">Tweet message will be here...></p> <div class="tweet-buttons"> <div><a class="fa fa-comment" href="#"></a></div> <div><a class="fa fa-retweet" href="#"> </a></div> <div><a class="fa fa-heart" href="#"></a></div> <div><a class="fa fa-share-alt" href="#"></a></div>'
const tweetStatusForm = document.querySelector('#tweet-status-form');
tweetStatusForm.querySelector('#status').required=true;
function submitted(event){
	//alert('submitted!');
	const st = tweetStatusForm.querySelector('#status');
	const im = tweetStatusForm.querySelector('.upload-button').files[0];
	console.log(im.name);
	console.log(st.value);
	event.preventDefault();
	/* if(st.value.trim()==='') {
		alert('empty tweet...');
		return;
	} */
	//if(st.value.includes('word')) return;
	var newTweet = twtBlock.cloneNode(true);//document.querySelector('.tweet-block').cloneNode(true);
	newTweet.querySelector('.tweet-message').innerHTML = st.value+'<img src=\'/Users/user/twitter/images/'+im.name+'\'/>';
	var heart = newTweet.querySelector('.fa-heart');
	heart.addEventListener('click',(e)=>{
		e.preventDefault();
		heart.classList.toggle('liked');
		});
	const tweetList = document.querySelector('#tweet-list');
	tweetList.insertBefore(newTweet,tweetList.firstChild);
	console.log(newTweet);
	addDelete();
}
tweetStatusForm.addEventListener('submit',submitted);
var charCount = document.createElement('p');
var count = 250;
charCount.innerHTML = count+' characters left';
charCount.style.color='blue';
tweetStatusForm.appendChild(charCount);
const st = tweetStatusForm.querySelector('#status');
st.addEventListener('input',Count)
function Count(){
	console.log(st.value);
	count=250-st.value.length;
	tweetStatusForm.lastChild.innerHTML=count+'/250 chars remaining';
	if(count<=0) alert('you exceeded the limit...');
};
var uploadPhoto = document.createElement('input');
uploadPhoto.type='file';
uploadPhoto.classList.add('upload-button');
uploadPhoto.style.backgroundColor='white';

var statusUpdate = tweetStatusForm.querySelector('.tweet-status-update');
statusUpdate.insertBefore(uploadPhoto,statusUpdate.firstChild);
