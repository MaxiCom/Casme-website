$(".imgPrestation").click(function(elem) {
	if($(".PrestationElem").is(':visible'))
	{
		$visibleElem = $(".PrestationElem:visible");
		$(".PrestationElem").fadeOut();
		if ($visibleElem.attr('id') == $(this).attr('id').substr(3))
			return ;
	}
	$("#" + $(this).attr('id').substr(3)).delay(400).fadeIn();
});