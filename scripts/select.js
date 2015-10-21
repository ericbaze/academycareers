jQuery(document).ready(function($)
{
	$('#search').change(function() {
		$("#search").attr("action",$("#position").val());
	});
});