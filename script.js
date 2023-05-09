$(function(){	
	$('.list-row').each(function(){
		var column = 0;
		$(this).children().each(function(){
			h = $(this).height();
			if (h > column) {
				column = h;
			}
		});
		$(this).children().height(column);
	});
});