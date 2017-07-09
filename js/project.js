// $(".thumbnail").simpleLightbox({
// 	showCounter: false
// });

$('.thumbnail').simpleLightbox();

$(".gallery").masonry({
  itemSelector: ".thumbnail",
  columnWidth: ".thumbnail",
  percentPosition: true
});

$(".touchevents .thumbnail").hammer().bind("press", function() {
	$('.thumbnail').simpleLightbox();
});

$(".touchevents .thumbnail").hammer().bind("swipe", function() {
	$('.thumbnail').simpleLightbox();
});


