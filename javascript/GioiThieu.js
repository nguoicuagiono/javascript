
var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var autoSlide;

$(document).ready(function() {
	showSlides(1);
	$(".prev").hide();
	$(".next").hide();
	
	$(".slideshow-container").hover(function() {

		if (slideIndex == 1) {
			$(".next").fadeIn("fast");
		}

		else if (slideIndex == slides.length) {
			$(".prev").fadeIn("fast");
		}
		else {
			$(".prev").fadeIn("fast");
			$(".next").fadeIn("fast");
		}
		
		$(".slideshow-container img").css("filter", "grayscale(0%)");
	}, function() {
		$(".prev").fadeOut("fast");
		$(".next").fadeOut("fast");
		$(".slideshow-container img").css("filter", "grayscale(100%)");
	});
	

	$(".mySlides").hover(function() {
		autoSlide = setInterval(function() {
			slideIndex++;
			currentSlide(slideIndex);
		}, 1500);
	}, function() {
		clearInterval(autoSlide);
	});
});


function plusSlides(n) {
	showSlides(slideIndex += n);
}


function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	if (n > slides.length) {
		slideIndex = slides.length;
	}
	
	if (n < 1) {
		slideIndex = 1;
	}
	
	if (slideIndex == 1) {
		$(".prev").hide();
	}
	else {
		$(".prev").show();
	}
	
	if (slideIndex == slides.length) {
		$(".next").hide();
	}
	else {
		$(".next").show();
	}
	
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	
	for (var i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}