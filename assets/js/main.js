/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);

var slideIndex = 1;
showSlides(slideIndex, 'myPESlides');
showSlides(slideIndex, 'myESlides');
showSlides(slideIndex, 'myLSlides');
showSlides(slideIndex, 'myRoomsSlides');
showSlides(slideIndex, 'receptionSlides');
showSlides(slideIndex, 'hotelSlides');

function plusEPSlides(n) {
  showSlides(slideIndex += n, 'myPESlides');
}

function currentEPSlide(n) {
  showSlides(slideIndex = n, 'myPESlides');
}

function plusESlides(n) {
  showSlides(slideIndex += n, 'myESlides');
}

function currentESlide(n) {
  showSlides(slideIndex = n, 'myESlides');
}

function plusLSlides(n) {
  showSlides(slideIndex += n, 'myLSlides');
}

function currentLSlide(n) {
  showSlides(slideIndex = n, 'myLSlides');
}

function plusRoomsSlides(n) {
  showSlides(slideIndex += n, 'myRoomsSlides');
}

function plusReceptionSlides(n) {
  showSlides(slideIndex += n, 'receptionSlides');
}

function plusHotelSlides(n) {
  showSlides(slideIndex += n, 'hotelSlides');
}

function showSlides(n, targetName) {
  var i;
  var slides = document.getElementsByClassName(targetName);
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
