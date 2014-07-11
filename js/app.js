var toggleComposeHeight = function(){
	var  compose = $('.tweet-content .tweet-compose');
	if (compose.height() == 21){
	compose.height('42px');
	} else {
		compose.height('21px');
	}

}

var countChar = function(){
	var compose = $('#tweet-content .tweet-compose');
	var charCount = $('#char-count');
	charCount.text(140 - compose.val().length)
}


$( document ).ready(function() {
//step one capture click in text area
$('.tweet-compose').click(function() {
//step two toggle the tweet-controls
	$('#tweet-controls').toggle();
//step three double the textArea
	$('.tweet-compose').height();
})
});
