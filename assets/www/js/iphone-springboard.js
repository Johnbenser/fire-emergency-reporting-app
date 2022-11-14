$(document).ready(function()
{
	// Fade in the docking bar
	$("#springboard-bar").fadeIn(1500);
	
	// Fade and Slide in the elements
	$("#springboard-items").fadeIn(5000); // Doesn't work in IE?
	$(".downright").animate({left:0, top:0}, 600);
	$(".downleft").animate({left:0, top:0}, 600);
	$(".upright").animate({left:0, top:0}, 600);
	$(".upleft").animate({left:0, top:0}, 600);
	
	// What will happen when an icon gets clicked
	$(".ico_btn").click(function(event) {
		var element = $(this);
		event.preventDefault();
		$("#springboard-bar").fadeOut("fast");
		$("#springboard-items").fadeOut("fast", function(){
		    window.location = element.attr("href");
		    $("#springboard-items").fadeIn(1000);
		});
	});
	
});