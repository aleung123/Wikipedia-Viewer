$(document).ready(function() {
	// run when seach is clicked
	$("#search").click(function() {
		// get search input
		var searchTerm = $("#searchTerm").val();
		// API url with search input
		var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?";
		// AJAX call
		$.ajax({
			type: "GET",
			url: url,
			async : false,
			dataType: "json",
			success: function(data) {
				for (var i = 0; i < data[1].length; i++) {
					$("#output").append("<li><a href= " + data[3][i] + ">" + data[1][i] + "</a><p>" + data[2][i] + "</p></li>");
				}
			},
			error: function(errorMessage) {
				alert("Error");
			}
		});


	});
});