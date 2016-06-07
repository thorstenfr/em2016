/*http://www-coding.de/countdown-mit-javascript-und-php/
 * Du musst hier noch einige Änderungen vornehmen. Bitte beachte die Kommentare!
 */

function countdown() {
	window.setTimeout("countdown()", 1000);
	/* Bitte das Datum anpassen (Jahr, Monat - 1, Tag, Stunde, Minute, Sekunde) */
	var bis = new Date(2016, (6 - 1), 10, 21, 00, 00);
	var jetzt = new Date(); var rest = Math.floor((bis-jetzt.getTime())/1000);
	var wochen = 0;
	var tage = 0;
	var stunden = 0;
	var minuten = 0;
	
	if (rest >= 604800) {
		wochen = Math.floor(rest/604800);
		rest -= wochen*604800;
	}
	
	if (rest >= 86400) {
		tage = Math.floor(rest/86400);
		rest -= tage*86400;
	}
	
	if (rest >= 3600) {
		stunden = Math.floor(rest/3600);
		rest -= stunden*3600;
	}
	
	if (rest >= 60) {
		minuten = Math.floor(rest/60);
		rest -= minuten*60;
	}
	
	/* Bitte DIV-ID anpassen (countdown_div) */
	document.getElementById('countdown_div').innerHTML = tage+' Tage, '+stunden+' Stunden, '+minuten+' Minuten und '+rest+' Sekunden';
}
