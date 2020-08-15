// ==UserScript==
// @name         Hide Alarm-Next-Share Button
// @version      0.3
// @description  Hides the upper Alarm-Next-Share Button
// @author       Jrh1997
// @include        /^https?:\/\/[www.]*(?:leitstellenspiel\.de|missionchief\.co\.uk|missionchief\.com|meldkamerspel\.com|centro-de-mando\.es|missionchief-australia\.com|larmcentralen-spelet\.se|operatorratunkowy\.pl|operatore112\.it|operateur112\.fr|dispetcher112\.ru|alarmcentral-spil\.dk|nodsentralspillet\.com|operacni-stredisko\.cz|112-merkez\.com|jogo-operador112\.com|operador193\.com|centro-de-mando\.mx|dyspetcher101-game\.com|missionchief-japan\.com|hatakeskuspeli\.com|missionchief-korea\.com|jocdispecerat112\.com|dispecerske-centrum\.com)\/missions\/.*$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	var update = "Remaining Credits, credits missionlist, credits missionheader, Hide Alarm Next Share Button, Missionicon hider: \n\nThis Script will not be updated anymore, so are my other scripts. \nTo receive updates and new scripts, remove this script and install my script bundle: https://jrh-1997.github.io/Scripts-MKS/EN. \nThere you will find all my scripts together."}
	if (I18n.locale == "nl_NL") update = "Remaining Credits, credits missionlist, credits missionheader, Hide Alarm Next Share Button, Missionicon hider:\n\nDit script wordt niet meer geüpdate, net zoals mijn andere scripts. \nOm updates én nieuwe scripts te ontvangen verwijder je dit scrtipt en installeer je de nieuwe bundel: https://jrh-1997.github.io/Scripts-MKS/. \nDaar kan je al mijn scripts samen vinden."
	if(!localStorage.updateJRH) {localStorage.setItem("updateJRH", true); alert(update)}


    $("#dispatch_buttons").find(".alert_next_alliance").addClass('hidden');

})();
