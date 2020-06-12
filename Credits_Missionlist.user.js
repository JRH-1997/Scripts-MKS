// ==UserScript==
// @name         Credits Missionlist
// @namespace    http://tampermonkey.net/
// @version      4.0.3
// @description  Credits in Missionlist
// @author       JRH1997
// @match        https://www.meldkamerspel.com/
// @grant        none
// ==/UserScript==

(function(e) {
    'use strict';

    // array with credits..

    var label;
    var requirements;
    var credits ='';
    var html_str

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
    };


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
    async function update(e)
    {
        var Missions = $('.missionSideBarEntry');
        var added = false;

        for (var i = 0; i < Missions.length; i++)
        {
            var childs = Missions[i].firstElementChild.firstElementChild.children;
            var existing = false;

            if (e.id != Missions[i].getAttribute('mission_id')) continue;
            var mission_type_id = Missions[i].getAttribute('mission_type_id');

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
                    //console.log(await getCredits(3));
                    if(sessionStorage.getItem("LSS_MissionCache") == null)
                    {
                        let requirements2 = await getRequirements();
                        sessionStorage.setItem("LSS_MissionCache", JSON.stringify(requirements2));
                    }
                    else
                    {
                        requirements = JSON.parse(sessionStorage.getItem("LSS_MissionCache"));
                    }
                    var mission2;
                    mission2 = get_credits_for_type(e.mtid);

                    //var credits = requirements[parseInt(missionId)].average_credits || 0;
                    let credits = mission2.average_credits || 0;

                    gethtml_str(credits);

                    getlabel(credits);

                    var child = childs[ic2];
                    Missions[i].firstElementChild.firstElementChild.removeChild(child);
                    child.innerHTML = `<span class="label ` + label + `"> <span id='html_str'>` + html_str + `</span></span>`
                    Missions[i].firstElementChild.firstElementChild.appendChild(child);
                }
            }
            else //create element
            {
                let mission_type_id = Missions[i].getAttribute('mission_type_id');

                if(mission_type_id == 'null') continue;

                let mission = requirements.filter(e => e.id == parseInt(mission_type_id))[0];
                if(mission == undefined)
                {
                    requirements = await getRequirements();
                    mission = requirements.filter(e => e.id == parseInt(mission_type_id))[0];
                }
                //var credits = requirements[parseInt(missionId)].average_credits || 0;
                let credits = mission.average_credits || 0;

                gethtml_str(credits);

                getlabel(credits);

                var div_elem = document.createElement('h4');

                div_elem.innerHTML = `<span class="label ` + label + `"> <span id='html_str'>` + html_str + `</span></span>`;
                div_elem.setAttribute("class", "missionCredits");
                div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));
                Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
            }
        }
    }

    async function initial_setup()
    {
        // clear all
        $('.missionCredits').remove();

        // get complete mission list
        var Missions = $('.missionSideBarEntry');

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

        // add info to every mission
        for (var i = 0; i < Missions.length; i++)
        {
            var mission_type_id = Missions[i].getAttribute('mission_type_id');

            if (mission_type_id == 'null') continue;

            // init credits
            let mission = requirements.filter(e => e.id == parseInt(mission_type_id))[0];
            if(mission == undefined)
            {
                requirements = await getRequirements();
                mission = requirements.filter(e => e.id == parseInt(mission_type_id))[0];
            }
            //var credits = requirements[parseInt(missionId)].average_credits || 0;
            let credits = mission.average_credits || 0;

            gethtml_str(credits);

            getlabel(credits);

            var div_elem = document.createElement('h4');
            div_elem.innerHTML = `<span class="label ` + label + `"> <span id='html_str'>` + html_str + `</span></span>`
		    div_elem.setAttribute("class", "missionCredits");
            div_elem.setAttribute("id", "missionCredits_" + Missions[i].getAttribute('mission_id'));

            // add div element
            Missions[i].firstElementChild.firstElementChild.appendChild(div_elem);
        }
    }
        // returns the credits for a specific mission type

    function get_credits_for_type(type)
    {
        return requirements.filter(e => e.id == [type])[0];
    }
    function gethtml_str(credits)
    {
        if (credits == 0) html_str = `Alleen Ambulance`
        else html_str = credits.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' Credits';
    }
    function getlabel(credits)
    {
        if (credits == 0) label = 'label-warning'
        else if (credits >= 8000) label = 'label-danger'
        else if (credits >= 4500) label = 'label-success'
        else label = 'label-primary'
    }
})();
