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

$( document ).ready(function() {

	$("#tweet-controls").hide();

//step one capture click in text area
$('.tweet-compose').click(function() {
	toggleComposeHeight();
//step two toggle the tweet-controls
	$('#tweet-controls').toggle();
//step three double the textArea
	$('.tweet-compose').height();
});

$("#active-user").text("JamesWulfy");

$('#tweet').keyup(function() {
	var count = $("#tweet").val().length;
	$('#char-count').text(140 - count);
	if (count > 130) {
		$('#char-count').css('color','red');
	}
	else {
		$('#char-count').css('color','black');
	}
	if (count > 140) {
		$("#tweet-submit").attr("disabled", "true");
	}
	else {
		$('#tweet-submit').removeAttr('disabled');
	}
});

});



