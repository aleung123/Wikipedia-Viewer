$(document).ready(function() {
	// run when search button is clicked
	$("#search").click(function() {
		// get search input
		var searchTerm = $("#searchTerm").val();
		// API url with search input
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
		// AJAX call to get the JSON data
		$.ajax({
			type: "GET",
			url: url,
			async : false,
			dataType: "json",
			success: function(data) {
				$("#output").empty();
				for (var i = 0; i < data[1].length; i++) {
					$("#output").append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
				}
				$("#searchTerm").val("");
			},
			error: function(errorMessage) {
				alert("Error");
			}
		});
	});

	// display results when enter key is pressed
	$("#searchTerm").keypress(function (e) {
	    if (e.which == 13) {
	    	$('#search').click();         
	    }
	});
});