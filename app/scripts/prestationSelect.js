$(".imgPrestationPlomberie").click(function() {
	if($(".PrestationElem").is(':visible'))
	{
		$visibleElem = $(".PrestationElem:visible");
		$(".PrestationElem").fadeOut();
		if ($visibleElem.attr('id') == "PrestationPlomberie")
			return ;
	}
	$("#PrestationPlomberie").delay(400).fadeIn();
});

$(".imgPrestationSalleDeBain").click(function() {
	if($(".PrestationElem").is(':visible'))
	{
		$visibleElem = $(".PrestationElem:visible");
		$(".PrestationElem").fadeOut();
		if ($visibleElem.attr('id') == "PrestationSalleDeBain")
			return ;
	}
	$("#PrestationSalleDeBain").delay(400).fadeIn();
});

$(".imgPrestationChauffeEau").click(function() {
	if($(".PrestationElem").is(':visible'))
	{
		$visibleElem = $(".PrestationElem:visible");
		$(".PrestationElem").fadeOut();
		if ($visibleElem.attr('id') == "PrestationChauffeEau")
			return ;
	}
	$("#PrestationChauffeEau").delay(400).fadeIn();
});

$(".imgPrestationTraitementEau").click(function() {
	if($(".PrestationElem").is(':visible'))
	{
		$visibleElem = $(".PrestationElem:visible");
		$(".PrestationElem").fadeOut();
		if ($visibleElem.attr('id') == "PrestationTraitementEau")
			return ;
	}
	$("#PrestationTraitementEau").delay(400).fadeIn();
});

$(".imgPrestationTraitementAir").click(function() {
	if($(".PrestationElem").is(':visible'))
	{
		$visibleElem = $(".PrestationElem:visible");
		$(".PrestationElem").fadeOut();
		if ($visibleElem.attr('id') == "PrestationTraitementAir")
			return ;
	}
	$("#PrestationTraitementAir").delay(400).fadeIn();
});