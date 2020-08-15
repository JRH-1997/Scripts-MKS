// ==UserScript==
// @name         Hide POI on Name
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       JRH1997
// @match        https://www.meldkamerspel.com/
// @grant        GM_addStyle
// @updateURL    https://github.com/JRH-1997/Scripts-MKS/raw/master/Hide_POI_on_Name.user.js
// @downloadURL  https://github.com/JRH-1997/Scripts-MKS/raw/master/Hide_POI_on_Name.user.js
// ==/UserScript==
(function(){
	var update = "Remaining Credits, credits missionlist, credits missionheader, Hide Alarm Next Share Button, Missionicon hider: \n\nThis Script will not be updated anymore, so are my other scripts. \nTo receive updates and new scripts, remove this script and install my script bundle: https://jrh-1997.github.io/Scripts-MKS/EN. \nThere you will find all my scripts together."}
	if (I18n.locale == "nl_NL") update = "Remaining Credits, credits missionlist, credits missionheader, Hide Alarm Next Share Button, Missionicon hider:\n\nDit script wordt niet meer geüpdate, net zoals mijn andere scripts. \nOm updates én nieuwe scripts te ontvangen verwijder je dit scrtipt en installeer je de nieuwe bundel: https://jrh-1997.github.io/Scripts-MKS/. \nDaar kan je al mijn scripts samen vinden."
	if(!localStorage.updateJRH) {localStorage.setItem("updateJRH", true); alert(update)}

    GM_addStyle('.JRH3{position:absolute; z-index:999; background:#c9302c; width:250px; top:200px; right:-250px !important;}');
        // Add side dropdown for FilterAllianceMissionsByUserID
        $('<ul class="dropdown-menu JRH3" id="FilterPOI_Dropdown"><li id=JRH_3_Dropdown_1" role="presentation"><a href="" id="HidePOI">Verberg</a></li></ul>').appendTo('#JRH_3');
        $('<li id="JRH_3_Dropdown_2"><a href="" id="ShowPOI">Toon</a></li>').appendTo('#JRH_3 .dropdown-menu');
        $('<li id="JRH_3_Dropdown_3"><a id="input_POI">POI: <input type="text" id="POI_input" value="Naam"></input></a></li>').appendTo('#JRH_3 .dropdown-menu');

        $('<a href="#" id="HideShowPOI" role="button" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">Verberg/Toon POI <span2>&nbsp<b class="caret" style="transform: rotate(270deg)"></b></span2></a>').appendTo('#JRH_3');

        $('#FilterPOI_Dropdown').hide();
        $('#JRH_3').hover(function () {
        try{$('#FilterPOI_Dropdown').toggle();}catch(err) { console.error(err.message, " > Scripts-MKS > Toggle HideShowPOI");}
        });

        $('#HidePOI').click(function(e){
                try{
            HidePOI();
            }catch(err) { console.error(err.message, " > Scripts-MKS > Button HidePOI");}
            return false;
        });
        $('#ShowPOI').click(function(e){
                try{
            ShowPOI();
            }catch(err) { console.error(err.message, " > Scripts-MKS > Button ShowPOI");}
            return false;
        });
        $('#POI_input').css('color', 'Black');

function getmission_positions()
            {
                try{
                return new Promise(resolve => {
                $.ajax({
                    url: "/mission_positions",
                    method: "GET",
                }).done((res) => {
                    resolve(res);
                });
            });}catch(err) { console.error(err.message, " > Scripts-MKS  > getmission_positions");}
        };

async function HidePOI(){
var POINAME = document.getElementById("POI_input").value;
var mission_positions;
mission_positions = await getmission_positions();
alert("Inladen POI data succesvol, wacht totdat alle POI "+POINAME+" verwijderd zijn, je krijgt een melding")
listofPOI_1 = [];
maplayer=[];
maplayers = [];
maplayers.push(map._layers)
listofmarkers = [];
maplayer=maplayers[0];
for(x in maplayers[0]){
  listofmarkers.push(x)
}
mission_positions.mission_positions.forEach((e) => {
  if(POINAME == "Alles"||e.caption == POINAME)
    listofPOI_1.push(e.id);
})
listofmarkers.forEach((e) => {
  if(listofPOI_1.indexOf(maplayer[e].id) != -1)
    {
      map.removeLayer(maplayer[e]);
    }
});listofPOI_1 = [];
maplayer=[];
maplayers = [];
listofmarkers = [];alert("POI "+POINAME+" verwijderen gelukt!")}
async function ShowPOI(){
var POINAME = document.getElementById("POI_input").value;
var mission_positions;
mission_positions = await getmission_positions();
alert("Inladen POI data succesvol, wacht totdat alle POI "+POINAME+" geladen zijn, je krijgt een melding")
listofPOI_1 = [];
maplayer=[];
maplayers = [];
maplayers.push(map._layers)
listofmarkers = [];
listofmarkersnew =[];
maplayer=maplayers[0];
for(x in maplayers[0]){
  listofmarkers.push(x)
}
listofmarkers.forEach((e) => {
      listofmarkersnew.push(maplayer[e].id);
})
mission_positions.mission_positions.forEach((e) => {
if(e.caption == POINAME||POINAME == "Alles"){
    if(listofmarkersnew.indexOf(e.id) == -1)
      map_pois_service.leafletMissionPositionMarkerAdd(e)
  }
});listofPOI_1 = [];
maplayer=[];
maplayers = [];
listofmarkers = [];alert("POI "+POINAME+" laden gelukt!")}
})();
