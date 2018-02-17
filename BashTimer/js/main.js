//Core variables: DONT MOVE FILES AROUND
teamNameFile = "./teamname.txt";

/*
 * Runs page on ready
 */
function init() {
	setTitle();
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
	addFooterInfo();
	getCurrentFormattedYear();
}

/*
 * Sets name of h2 title
 */
function setTitle() {
	$("#team").load(teamNameFile);

}

function getCurrentFormattedYear() {
	var date = new Date();
	var year = date.getFullYear();
	document.getElementById("footer-date").innerHTML = year;
}

function addFooterInfo() {
	var data = '<div id=\"footer-line\"></div><a href=\"https://github.com/Althox\" target=\"_blank\">https://github.com/Althox</a>&nbsp;|&nbsp;&copy;<div id=\"footer-date\"></div>';
	document.getElementsByTagName("footer")[0].innerHTML = data;
}