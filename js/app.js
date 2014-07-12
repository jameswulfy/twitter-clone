var toggleComposeHeight = function(){
	var  compose = $('#tweet');
	compose.height(function(w,h){
		if(h == 21){
			return h*2;
		} else{
			return 21;
		}
	});
};

var countChar = function(){
	var compose = $('#tweet-content .tweet-compose');
	var charCount = $('#char-count');
	charCount.text(140 - compose.val().length)
}


$( document ).ready(function() {
	$("#tweet-controls").hide();
//step one capture click in text area
$('.tweet-compose').click(function() {
	toggleComposeHeight();
//step two toggle the tweet-controls
	$('#tweet-controls').toggle();
//step three double the textArea
	$('.tweet-compose').height();
})
});

$("#active-user").text("JamesWulfy");
