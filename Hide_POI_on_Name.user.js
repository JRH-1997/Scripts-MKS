// ==UserScript==
// @name         Hide POI on Name
// @namespace    http://tampermonkey.net/
// @version      0.6
// @description  try to take over the world!
// @author       JRH1997
// @match        https://www.meldkamerspel.com/
// @grant        GM_addStyle
// @updateURL    https://github.com/JRH-1997/Scripts-MKS/raw/master/Hide_POI_on_Name.user.js
// @downloadURL  https://github.com/JRH-1997/Scripts-MKS/raw/master/Hide_POI_on_Name.user.js
// ==/UserScript==
(function(){
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
})
listofmarkers.forEach((e) => {
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
})
mission_positions.mission_positions.forEach((e) => {
if(e.caption == POINAME||POINAME == "Alles"){
  }
});listofPOI_1 = [];
maplayer=[];
maplayers = [];
listofmarkers = [];alert("POI "+POINAME+" laden gelukt!")}
})();
