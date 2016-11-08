$(document).ready(function() {
 	
 	console.log(
		"Salut jeune padawan, si tu veux en savoir plus," +
		" ce site est développé avec\n\n" +
		"Html, Css(SASS), Javascript(JQuery), Bootstrap, fontawesome, animate.css.\n\n" +
		"Ciao ;)"
	);

    setTimeout(function(){
        $('.cs-loader').fadeOut();
        $('#wrapper').removeClass('hidden');    
    }, 2700);
});