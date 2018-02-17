$("#btnContent").submit(function(event) {
	alert("WOW");
	event.preventDefault();
});

/*
 * Displays the content information
 */
function getBashInfo(test) {
	if (test === true) {
		document.getElementById("bash-content").innerHTML = getDummyText();
	} else {

	}
}

/*
 * Dummy text for testing content display
 */
function getDummyText(){
	var text = 
	"<tr>"
		+"<td>Generic Bash Name</td>"
		+"<td><a data-toggle=\"tooltip\" data-placement=\"top\" href=\"https://tripwire.eve-apps.com/?system=J165020\" target=\"_blank\" title=\"Tripwire: J165020\">J165020</td>"
		+"<td>2018-02-20 11:34:00</td>"
		+"<td>hh:mm:ss</td>"
	+"</tr>";
	return text;
}

/*
 * Generic file-reader
 *
 * @parameter file string
 * @parameter dataType string
 */
function readFromFile(file, dataType) {
	var fileContent = null;
	
	$.ajax({
		url: file,
		dataType: dataType,
		success: function(data) {
			fileContent = data;
		},
		fail: function() {
			alert("Did not read file");
		}
	});

	return fileContent;
}