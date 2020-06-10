// ==UserScript==
// @name         Credits_in_missionlist
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  NL Credits in Missiontitle
// @author       JRH1997
// @match        https://www.meldkamerspel.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	var html_str;
    var label;
    var credits;
	var requirements;
	
	loadcredits()

    function getRequirements()
    {
        return new Promise(resolve => {
            $.ajax({
                url: "https://www.meldkamerspel.com/einsaetze.json",
                method: "GET",
            }).done((res) => {
                resolve(res);
            });
        });
    }
	
	
 function beautifyCredits(credits)
    {
        return credits.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }
	

		missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);

        update(e);
    }


    function update(e)
    {
		//console.log(await getCredits(3));
        if(sessionStorage.getItem("LSS_MissionCache") == null)
        {
            requirements = await getRequirements();
            sessionStorage.setItem("LSS_MissionCache", JSON.stringify(requirements));
        }
        else
        {
            requirements = JSON.parse(sessionStorage.getItem("LSS_MissionCache"));
        }
		getlabel()
		
		let html = `<br>&nbsp&nbsp&nbsp&nbsp
		<span class="label ` + label + `"> <span id='html_str'> - </span></span>
		`;
		
		calculate()
		
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
                    child.innerHTML = 'html'
                    Missions[i].firstElementChild.firstElementChild.appendChild(child);
                }
            }
            else //create element
            {
                var mission_type_id = Missions[i].getAttribute('mission_type_id');

                if(mission_type_id == 'null') continue;

                var div_elem = document.createElement('div');

                div_elem.innerHTML = html;
                div_elem.setAttribute("class", "missionCredits");
                div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));
                Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
            }
        }
    }
	
function loadcredits()
    {
		 //console.log(await getCredits(3));
        if(sessionStorage.getItem("LSS_MissionCache") == null)
        {
            requirements = await getRequirements();
            sessionStorage.setItem("LSS_MissionCache", JSON.stringify(requirements));
        }
        else
        {
            requirements = JSON.parse(sessionStorage.getItem("LSS_MissionCache"));
        }
		getlabel()
		
		let html = `<br>&nbsp&nbsp&nbsp&nbsp
		<span class="label ` + label + `"> <span id='html_str'> - </span></span>
		`;
		
		calculate()
		
        // clear all
        $('.missionCredits').remove();

        // get complete mission list
        var Missions = $('.missionSideBarEntry');

        // add info to every mission
        for (var i = 0; i < Missions.length; i++)
        {
            var mission_type_id = Missions[i].getAttribute('mission_type_id');

            if (mission_type_id == 'null') continue;

            // create div element

            var div_elem = document.createElement('div');
            div_elem.innerHTML = 'html';
            div_elem.setAttribute("class", "missionCredits");
            div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));

            // add div element
            Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
        }
    }

function calculate()
    {
        var credits = 0;
        var help = $("#navbar-right-help-button");
        var HelpButton = help.find("a[id*='mission_help']").parent().parent().parent();
        HelpButton.each(async (e, t) => {
            //if($(t).parent().css("display") == "none") return;
            let missionId = $('#mission_help').attr('href').split("/").pop().replace(/\?.*/, '');
			if(missionId == "null") return;
            let mission = requirements.filter(e => e.id == parseInt(missionId))[0];
            if(mission == undefined)
            {
                requirements = await getRequirements();
                mission = requirements.filter(e => e.id == parseInt(missionId))[0];
            }
            //var credits = requirements[parseInt(missionId)].average_credits || 0;
            var missionCredits2 = mission.average_credits || 0;
            credits += missionCredits2;
            });

        if (credits == 0)
            $("#html_str").text `Alleen Ambulance`;
        else
            $("#html_str").text(beautifyCredits(credits) + ` Credits`);
    }
function getlabel()
    {
        var credits = 0;
        var help = $("#navbar-right-help-button");
        var HelpButton = help.find("a[id*='mission_help']" ||'');
        HelpButton.each(async (e, t) => {
            //if($(t).parent().css("display") == "none") return;
            let missionId = $('#mission_help').attr('href').split("/").pop().replace(/\?.*/, '');
			if(missionId == "null") return;
            let mission = requirements.filter(e => e.id == parseInt(missionId))[0];
            if(mission == undefined)
            {
                requirements = await getRequirements();
                mission = requirements.filter(e => e.id == parseInt(missionId))[0];
            }
            //var credits = requirements[parseInt(missionId)].average_credits || 0;
            var missionCredits = mission.average_credits || 0;
            credits += missionCredits;
            });

        if (credits == 0) {label = 'label-warning'}
        else if (credits >= 8000) {label = 'label-danger'}
        else if (credits >= 4500) {label = 'label-success'}
        else {label = 'label-primary'}
    }
})();