
$(document).click(function() {
	$("h1").html("Time to Play! :)");

// hide div
$( function Hide() {
	$(".animate-one").hide(1000)
	$(".animate-one").show(2000)
	$(".animate-one").hide(1000)
})


//fade in and fade out div
$( function Fading() {
	$(".animate-two").fadeOut(3000)
	$(".animate-two").fadeIn(3000)
	$(".animate-two").fadeOut(3000)
})

//slide
$( function Slide() {
    $( ".animate-three" ).slideUp(3000);
    $( ".animate-three" ).slideDown(3000);
    $( ".animate-three" ).slideUp(3000);
})


// dragabble paragraph
$( function() {
    $( "p" ).draggable();
  } )

})

$(document).ready(
	function () {
		alert('The document is ready!')
	})
