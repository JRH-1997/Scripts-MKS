// ==UserScript==
// @name         Credits Missionlist Text
// @namespace    http://tampermonkey.net/
// @version      4.2.0
// @description  Shows a text with the average credits of the mission in the Missionlist
// @author       JRH1997
// @include      /^https?:\/\/[www.]*(?:leitstellenspiel\.de|missionchief\.co\.uk|missionchief\.com|meldkamerspel\.com|centro-de-mando\.es|missionchief-australia\.com|larmcentralen-spelet\.se|operatorratunkowy\.pl|operatore112\.it|operateur112\.fr|dispetcher112\.ru|alarmcentral-spil\.dk|nodsentralspillet\.com|operacni-stredisko\.cz|112-merkez\.com|jogo-operador112\.com|operador193\.com|centro-de-mando\.mx|dyspetcher101-game\.com|missionchief-japan\.com|hatakeskuspeli\.com|missionchief-korea\.com|jocdispecerat112\.com|dispecerske-centrum\.com)\/.*$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var requirements;
    var credits ='';
    var html_str
    var OnlyAmbulance
    
    if (I18n.locale == "de_DE") OnlyAmbulance = 'Nur Krankenwagen'
    else if (I18n.locale == "nl_NL") OnlyAmbulance = 'Alleen Ambulance'
    else OnlyAmbulance = 'Only Ambulance'

    function getRequirements()
    {
        return new Promise(resolve => {
            var url = window.location.hostname + "einsaetze.json";
            $.ajax({
                url: "/einsaetze.json",
                method: "GET",
            }).done((res) => {
                resolve(res);
            });
        });
    };

    init();

    // missionMarkerAdd
    var original_func = missionMarkerAdd;

    // this function is called when a mission is mutated
    missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);

        mutations(e);
    }

    async function mutations(e)
    {
        var Missions = $('.missionSideBarEntry');
        var added = false;

        for (var i = 0; i < Missions.length; i++)
        {
            var childs = $('#creditsmissionlist_' + Missions[i].getAttribute('mission_id'))
            var existing = false;

            if (e.id != Missions[i].getAttribute('mission_id')) continue;

            if(sessionStorage.getItem("LSS_Missionrequirements") == null)
            {
                requirements = await getRequirements();
                sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
            }
            else
            {
                requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
            }

            // check if element is existing
            for (var ic = 0; ic < childs.length; ic++)
            {
                if(childs[ic].className == 'creditsmissionlist')
                {
                   existing = true;
                   break;
                }
            }

            if(existing == true && e.mtid != undefined)
            {
                for(var ic2 = 0; ic2 < childs.length; ic2++)
                {
                    if(childs[ic2].className != 'creditsmissionlist') continue;
                    if (gettypecredits(e.mtid) == undefined)
                    {
                        sessionStorage.clear("LSS_Missionrequirements")
                        requirements = await getRequirements();
                        sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
                        requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
                    }
                    let credits = gettypecredits(e.mtid).average_credits || 0;

                    gethtml_str(credits);

                    var child = childs[ic2];
                    childs[ic].remove(child);
                    child.innerHTML = html_str;
                    var childNodes = Missions[i].firstElementChild.childNodes;
                    var secondaryChildNodes = childNodes[1].firstElementChild.childNodes;
                    secondaryChildNodes[1].firstElementChild.before(child);
                }
            }
            else //create
            {
                if(Missions[i].getAttribute('mission_type_id') == 'null') continue;
                if (gettypecredits(Missions[i].getAttribute('mission_type_id')) == undefined)
                {
                    sessionStorage.clear("LSS_Missionrequirements")
                    requirements = await getRequirements();
                    sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
                    requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
                }

                let credits = gettypecredits(Missions[i].getAttribute('mission_type_id')).average_credits || 0;

                gethtml_str(credits);

                var div_elem = document.createElement('div');

                div_elem.innerHTML = html_str;
                div_elem.setAttribute("class", "creditsmissionlist");
                div_elem.setAttribute("id", "creditsmissionlist_" + Missions[i].getAttribute('mission_id'));
                var childNodes = Missions[i].firstElementChild.childNodes;
                var secondaryChildNodes = childNodes[1].firstElementChild.childNodes;
                secondaryChildNodes[1].firstElementChild.after(div_elem);
            }
        }
    }

    async function init()
    {
        // clear
        $('.creditsmissionlist').remove();

        // get  mission list
        var Missions = $('.missionSideBarEntry');

        if(sessionStorage.getItem("LSS_Missionrequirements") == null)
        {
            requirements = await getRequirements();
            sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
        }
        else
        {
            requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
        }

        // add info to mission
        for (var i = 0; i < Missions.length; i++)
        {
            if (Missions[i].getAttribute('mission_type_id') == 'null') continue;
            if (gettypecredits(Missions[i].getAttribute('mission_type_id')) == undefined)
            {
                sessionStorage.clear("LSS_Missionrequirements")
                requirements = await getRequirements();
                sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
                requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
            }

            let credits = gettypecredits(Missions[i].getAttribute('mission_type_id')).average_credits || 0;

            gethtml_str(credits);

            var div_elem = document.createElement('div');
            div_elem.innerHTML = html_str;
		        div_elem.setAttribute("class", "creditsmissionlist");
            div_elem.setAttribute("id", "creditsmissionlist_" + Missions[i].getAttribute('mission_id'));

            // add div element
            var childNodes = Missions[i].firstElementChild.childNodes;
            var secondaryChildNodes = childNodes[1].firstElementChild.childNodes;
            secondaryChildNodes[1].firstElementChild.before(div_elem);
        }
    }

    function gettypecredits(type)
    {
        return requirements.filter(e => e.id == [type])[0];
    }
    function gethtml_str(credits)
    {
        if (credits == 0) html_str = OnlyAmbulance
        else html_str = '~ ' + credits.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' Credits';
    }
})();
