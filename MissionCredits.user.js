// ==UserScript==
// @name         Missioncredits
// @namespace    http://tampermonkey.net/
// @version      2.2
// @description  NL versie van credits in meldingenlijst met dank aan itsDreyter voor de originele Duitse versie.
// @author       itsDreyter / JRH1997
// @match        https://www.meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // array with credits..
    var aCredits = [
        110, 170, 370, 340, 200, 1400, 600, 210, 220, 250, 600, 240, 310, 980, 1000, 500, 1100, 340, 700, 650, 1800, 2400, 2700, 1200, 900, 1000, 3510, "NIET GEVONDEN", 1600, 2470, 190, 400, 1310, 1200, 2100, 2510, 3110, 110, 110, 110, 110, 10000, 3720, 10000, 170, "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", 1800, 1700, 230, 1000, 3100, 210, 250, 15000, 800, 500, 2000, 500, 700, 310, 310, 320, 350, 1000, 200, 200, 200, 200, 500, 300, 3000, 2000, 350, "Alleen Ambulance", "Alleen Ambulance", 200, 1000, "Alleen Ambulance", "Alleen Ambulance", 300, 1000, "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", 600, 550, 1200, 1200, 1200, 2400, 130, 140, 140, 540, 1240, 740, 500, 1500, 400, 1000, 1000, 1400, 3000, 6000, 3700, 2000, 4000, 1000, 4000, 4000, 4000, "NIET GEVONDEN", 600, 2100, 400, 1950, 1400, 1700, 500, 400, 240, 300, 240, "Alleen Ambulance", 170, 110, 400, 1000, 1750, 4000, 8000, 22500, "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", 890, 1100, 3570, 350, 1500, "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", 1000, 1600, 1400, 1200, 400, 1200, 490, 390, 310, 330, 490, 420, 490, 140, 190, 420, 190, 190, 190, 800, 800, 850, 1500, 1000, 1600, 850, 1100, 900, 1200, 1100, 1500, 2000, 900, 1100, 750, 800, 999, 620, 1100, 2000, 3000, 800, 1000, 700, 500, "Alleen Ambulance", "Alleen Ambulance", 750, 750, 1700, "Alleen Ambulance", 800, 800, 900, 11500, 400, 1500, 780, 450, "Alleen Ambulance", "Alleen Ambulance", 1150, 900, 750, "Alleen Ambulance", 3500, 600, 1200, 2200, 2700, 300, 1000, 1300, "NIET GEVONDEN", 650, 1700, 400, 500, 250, 1050, 220, "Alleen Ambulance", 430, 300, 650, 1550, 1550, 1550, 2600, 2700, 1800, 1125, 1100, 2100, 3000, 1650, 2500, "Alleen Ambulance", "Alleen Ambulance", 750, 850, 2700, 3620, "Alleen Ambulance", 500, 1400, 340, 350, 1750, 2150, 3000, 4200, 1575, 2450, 550, 450, 900, 1500, 2200, 900, 1450, 750, 850, 1650, 2400, 1450, 2100, 3250, 11500, 18750, 750, 650, 4000, 1000, 2100, 3250, 1100, 2000, 1450, 3100, 4750, 300, 1000, 750, 900, 1100, 3650, 7000, 700, 350, 2250, 1500, 1500, 2000, 850, 1750, 2850, 1000, 1550, 1150, 2500, 500, 500, 500, 1375, 2850, 18500, 17500, 1750, 3150, 2350, 1500, 1400, 3300, 5150, 3000, 7200, 22500, "Alleen Ambulance", "Alleen Ambulance", 300, 1150, 2350, 1450, 3250, 4800, 550, 400, 1000, 1150, 1200, "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", 3000, 5200, 1950, 4000, "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", 900, 2150, 3650, 5100, "Alleen Ambulance", 400, 900, 800, 1500, 2600, 4800, 6800, 9500, 2600, 1200, 1750, 1850, 1850, 2250, "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", 150, "Alleen Ambulance", 500, 800, 1500, 2500, 2650, 4850, 6700, 800, 1800, 3000, 1000, 1150, 1000, 1200, 2200, 2200, 4100, 4500, 850, 1550, 2500, 4850, 6850, "Alleen Ambulance", 950, 1050, 1200, 3800, 4000, 900, 1150, 850, 1100, 950, 1950, 2300, 750, 1550, 2500, 2600, 4900, "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", 400, 350, 300, 320, 300, 800, 1950, 2750, 600, 1350, 2950, 1600, 1600, 550, 950, 1600, 2750, 4950, 7000, 700, 1100, 700, 1100, 5000, 5250, "Alleen Ambulance", 300, 170, 170, 850, 1750, 3000, 1150, 3600, 4000, 800, 800, 800, 800, 1650, 1650, 2000, 1650, 1400, 1400, 900, 1200, 550, 450, 1200, 900, 2000, 2250, 900, 1600, 2800, 2950, 5000, 7200, 600, 1850, 700, 1900, 1750, 1850, 3000, 3100, 3300, 4750, "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "Alleen Ambulance", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", 4200, 4200, 850, 1600, 2200, 500, 3800, "Alleen Ambulance", 3200, 6400, 10714, 200, 400, 400, "NIET GEVONDEN", "NIET GEVONDEN", 2040, 2140, 1540, 400, 1200, 2500, 2000, "Alleen Ambulance", "Alleen Ambulance", 370, 300, 500, 510, 1010, "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", 1980, 8640, 9450, 11060, 4000, 6500, "Alleen Ambulance", "Alleen Ambulance", 170, 1360, 500, 500, 500, 510, "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN", "NIET GEVONDEN"
        ];

    // initial call of adding info
    initial_setup();

    // extend missionMarkerAdd -----------------------------------------------------------------------
    var original_func = missionMarkerAdd;

    // this function is always called, when a new mission is added
   missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);

        update(e);
    }

    // this function shows the credits information at initial loading of the page
    function update(e)
    {
        var Missions = $('.missionSideBarEntry');
        var added = false;

        for (var i = 0; i < Missions.length; i++)
        {
            var childs = Missions[i].firstElementChild.firstElementChild.children;
            var existing = false;

            if (e.id != Missions[i].getAttribute('mission_id')) continue;

            // check if html element is actually existing
            for (var ic = 0; ic < childs.length; ic++)
            {
                if(childs[ic].className == 'missionCredits')
                {
                   existing = true;
                   break;
                }
            }

            // if it's existing but mtid is filled, we re create the element
            if(existing == true && e.mtid != undefined)
            {
                for(var ic2 = 0; ic2 < childs.length; ic2++)
                {
                    if(childs[ic2].className != 'missionCredits') continue;

                    var child = childs[ic2];
                    Missions[i].firstElementChild.firstElementChild.removeChild(child);
                    child.innerHTML = 'Gem. ' + get_credits_for_type(e.mtid) + ' Credits';
                    Missions[i].firstElementChild.firstElementChild.appendChild(child);
                }
            }
            else //create element
            {
                var mission_type_id = Missions[i].getAttribute('mission_type_id');

                if(mission_type_id == 'null') continue;

                var div_elem = document.createElement('div');
                var html_str = '';

                if (get_credits_for_type(Missions[i].getAttribute('mission_type_id')) == "Alleen Ambulance") html_str = 'Alleen Ambulance';
                elseif (get_credits_for_type(Missions[i].getAttribute('mission_type_id')) != "Alleen Ambulance") html_str = 'Gem. ' + get_credits_for_type(Missions[i].getAttribute('mission_type_id')) + ' Credits';
                else (get_credits_for_type(Missions[i].getAttribute('mission_type_id')) == "Alleen Ambulance") html_str = 'Alleen Ambulance';

                div_elem.innerHTML = html_str;
                div_elem.setAttribute("class", "missionCredits");
                div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));
                Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
            }
        }
    }

    function initial_setup()
    {
        // clear all
        $('.missionCredits').remove();

        // get complete mission list
        var Missions = $('.missionSideBarEntry');

        // add info to every mission
        for (var i = 0; i < Missions.length; i++)
        {
            var mission_type_id = Missions[i].getAttribute('mission_type_id');

            if (mission_type_id == 'null') continue;

            // init credits
            var credits = 0;

            // init html string
            var html_str = '';

            // get credits for mission type
            credits = get_credits_for_type(Missions[i].getAttribute('mission_type_id'));

            // create div element
            if (credits == "Alleen Ambulance") html_str = 'Alleen Ambulance';
            elseif (Credits != 'Alleen Ambulance") html_str = 'Gem. ' + credits + ' Credits';
            else  (credits == "Alleen Ambulance") html_str = 'Alleen Ambulance';
                    
            var div_elem = document.createElement('div');
            div_elem.innerHTML = html_str;
            div_elem.setAttribute("class", "missionCredits");
            div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));

            // add div element
            Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
        }
    }

    // returns the credits for a specific mission type
    function get_credits_for_type(type)
    {
        return aCredits[type];
    }

})();
