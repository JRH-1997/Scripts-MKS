// ==UserScript==
// @name         Missionicons Hider
// @namespace    
// @version      1.0.4
// @description  Hides icons of the missions
// @author       JRH1997
// @include      /^https?:\/\/[www.]*(?:leitstellenspiel\.de|missionchief\.co\.uk|missionchief\.com|meldkamerspel\.com|centro-de-mando\.es|missionchief-australia\.com|larmcentralen-spelet\.se|operatorratunkowy\.pl|operatore112\.it|operateur112\.fr|dispetcher112\.ru|alarmcentral-spil\.dk|nodsentralspillet\.com|operacni-stredisko\.cz|112-merkez\.com|jogo-operador112\.com|operador193\.com|centro-de-mando\.mx|dyspetcher101-game\.com|missionchief-japan\.com|hatakeskuspeli\.com|missionchief-korea\.com|jocdispecerat112\.com|dispecerske-centrum\.com)\/.*$/
// @exclude      https://*/profile/*
// @exclude      https://*/users/sign_up
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
	var update = "Remaining Credits, credits missionlist, credits missionheader, Hide Alarm Next Share Button, Missionicon hider: \n\nThis Script will not be updated anymore, so are my other scripts. \nTo receive updates and new scripts, remove this script and install my script bundle: https://jrh-1997.github.io/Scripts-MKS/EN. \nThere you will find all my scripts together."}
	if (I18n.locale == "nl_NL") update = "Remaining Credits, credits missionlist, credits missionheader, Hide Alarm Next Share Button, Missionicon hider:\n\nDit script wordt niet meer geüpdate, net zoals mijn andere scripts. \nOm updates én nieuwe scripts te ontvangen verwijder je dit scrtipt en installeer je de nieuwe bundel: https://jrh-1997.github.io/Scripts-MKS/. \nDaar kan je al mijn scripts samen vinden."
	if(!localStorage.updateJRH) {localStorage.setItem("updateJRH", true); alert(update)}

    var titleMissionhiderbtn
    if (I18n.locale == "de_DE") titleMissionhiderbtn = 'Einsatzicons ein-/ausblenden'
    else if (I18n.locale == "nl_NL") titleMissionhiderbtn = 'Meldingsafbeeldingen verbergen/weergeven'
    else titleMissionhiderbtn = 'Hide/show missionsicons'

    if (localStorage.Missionhider == null)
    {
        localStorage.setItem("Missionhider", "false")
    }
    let MissionhiderBtn = $(
        '<a id="Missionhider_button" class="leaflet-bar leaflet-control leaflet-control-custom hidden-xs Missionhider">' +
        '<img src="https://raw.githubusercontent.com/JRH-1997/MKS-scripts/master/Missionhider/MissionIconsHiderBtn.png" class="Missionhiderbtn" title="' + titleMissionhiderbtn + '"> ' +
        '</a>'
    );
    $('.leaflet-control-container .leaflet-top.leaflet-left').append(MissionhiderBtn)

    $("#Missionhider_button").click(function(){
        if (localStorage.Missionhider == "false") {
            $('.leaflet-interactive[src*="rot"').hide();
            $('.leaflet-interactive[src*="gelb"').hide();
            $('.leaflet-interactive[src*="gruen"').hide();
            $('.leaflet-interactive[src*="/mission_graphic_images/"').hide();
            localStorage.Missionhider = "true";
        }
        else {
            $('.leaflet-interactive[src*="rot"').show();
            $('.leaflet-interactive[src*="gelb"').show();
            $('.leaflet-interactive[src*="gruen"').show();
            $('.leaflet-interactive[src*="/mission_graphic_images/"').show();
            localStorage.Missionhider = "false";
        }
    });

    if (localStorage.Missionhider == "true") {
        removeMissions();
    }

    var original_func = missionMarkerAdd;

    missionMarkerAdd =  async function(e) {
    original_func.apply(this, arguments);
    if (localStorage.Missionhider == "true") {

    setTimeout(removeMissions,500)
    }}

    function removeMissions()
    {
        $('.leaflet-interactive[src*="rot"').hide();
        $('.leaflet-interactive[src*="gelb"').hide();
        $('.leaflet-interactive[src*="gruen"').hide();
        $('.leaflet-interactive[src*="/mission_graphic_images/"').hide();
    }
})();
