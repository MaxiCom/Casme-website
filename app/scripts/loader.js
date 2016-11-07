$(document).ready(function() {
 	
 	console.log(
		"Salut, jeûne padawan, si tu veux en savoir plus," +
		" ce site est développé avec\n\n" +
		"HTML, SASS, JAVASCRIPT,	Bootstrap, fontawesome, animate.css, Jquery\n\n" +
		"Ciao ;)"
	);

    setTimeout(function(){
        $('.cs-loader').fadeOut();
        $('#wrapper').removeClass('hidden');    
    }, 00);
});