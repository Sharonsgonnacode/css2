var main = function() {
	$('.h2').click(function() {
		$('.about me').animate( {
			right: "20px"
		},20);
		
});
};

$(document).ready(main);