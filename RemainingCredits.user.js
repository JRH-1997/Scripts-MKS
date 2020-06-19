// ==UserScript==
// @name         Remaining Credits
// @namespace    https://leitstellenspiel.de
// @version      1.1.0
// @description  Shows the total of the average credits of all missions in the missionlist
// @author       Lennard[TFD] | Piet2001 | JRH1997
// @match        https://www.leitstellenspiel.de/
// @match        https://www.missionchief.com/
// @match        https://www.meldkamerspel.com/
// @match        https://www.missionchief.co.uk/
// @match        https://www.missionchief-australia.com/
// ==/UserScript==

(function() {
    'use strict';

    var requirements;
    var mutationObserver = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {

            var node = mutation.addedNodes[0];
            //console.log(node);
            if ((!mutation.oldValue || !mutation.oldValue.match(/\bmission_deleted\b/))
                && mutation.target.classList
                && mutation.target.classList.contains('mission_deleted')){
                calculate();
                //alert('mission_deleted class added');
            }
            else if(node != undefined)
            {
                setupListener($(node));
                calculate();
            }

        });
    });


    function getRequirements()
    {
        if (I18n.locale == "de_DE")
        {
            return new Promise(resolve => {
                $.ajax({
                    url: "https://www.leitstellenspiel.de/einsaetze.json",
                    method: "GET",
                }).done((res) => {
                    resolve(res);
                });
            });
        }
        else if (I18n.locale == "nl_NL")
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
        else if (I18n.locale == "en_US")
        {
            return new Promise(resolve => {
                $.ajax({
                    url: "https://www.missionchief.com/einsaetze.json",
                    method: "GET",
                }).done((res) => {
                    resolve(res);
                });
            });
        }
        else if (I18n.locale == "en_GB")
        {
            return new Promise(resolve => {
                $.ajax({
                    url: "https://www.missionchief.co.uk/einsaetze.json",
                    method: "GET",
                }).done((res) => {
                    resolve(res);
                });
            });
        }
        else if (I18n.locale == "en_AU")
        {
            return new Promise(resolve => {
                $.ajax({
                    url: "https://www.missionchief-australia.com/einsaetze.json",
                    method: "GET",
                }).done((res) => {
                    resolve(res);
                });
            });
        }
    }

    function setupListener(mission)
    {
        mutationObserver.observe(mission[0], {
            attributes: true,
            attributeOldValue: true,
            attributeFilter: ['class']
        });
    }

    function beautifyCredits(credits)
    {
        return credits.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }

    async function init()
    {

        let filterDiv = $("#btn-group-mission-select");

        let html = ``

        if (I18n.locale == "de_DE") html = `<br>
             <span>Zu verdienen: <span id='remCredits'>0 / 0</span> Credits</span>
                    `;
        else if (I18n.locale == "nl_NL") html = `<br>
                    <span>Te verdienen: <span id='remCredits'>0 / 0</span> Credits</span>
                    `;
        else if (I18n.locale == "en_US") html = `<br>
                    <span>To earn: <span id='remCredits'>0 / 0</span> Credits</span>
                    `;
        else if (I18n.locale == "en_GB") html = `<br>
                    <span>To earn: <span id='remCredits'>0 / 0</span> Credits</span>
                    `;
        else if (I18n.locale == "en_AU") html = `<br>
                    <span>To earn: <span id='remCredits'>0 / 0</span> Credits</span>
                    `;

        let filterBtns = filterDiv.after(html);

        if(sessionStorage.getItem("LSS_Missionrequirements") == null)
        {
            requirements = await getRequirements();
            sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
        }
        else
        {
            requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
        }
        var missionList = $("#missions-panel-body");
        var missions = missionList.find("a[id*='alarm_button']");

        missions.each((e, t) => {
            setupListener($(t).parent().parent().parent());
        });

        mutationObserver.observe($("#missions-panel-body")[0], {
            childList: true,
        });


        calculate();
    }



    function calculate()
    {
        var credits = 0;
        var creditsAlliance = 0;
        var creditsPlanned = 0;
        var missionList = $("#missions-panel-body");
        var missions = missionList.find("a[id*='alarm_button']").parent().parent().parent().not("[class*='mission_deleted']").not("[class*='mission_alliance_distance_hide']");
        missions.each(async (e, t) => {
            //if($(t).parent().css("display") == "none") return;
            var missionId = $(t).attr("mission_type_id");
            if($(t).attr("mission_type_id") == "null") return;
            if(gettypecredits($(t).attr("mission_type_id")) == undefined)
            {
                sessionStorage.clear("LSS_Missionrequirements")
                requirements = await getRequirements();
                sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
                requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
            }
            //var missionCredits = requirements[parseInt(missionId)].average_credits || 250;
            var missionCredits = gettypecredits($(t).attr("mission_type_id")).average_credits || 250;
            if($(t).parent().attr("id").includes("alliance"))
            {
                creditsAlliance += missionCredits;
            }
            else if($(t).parent().attr("id").includes("sicherheitswache"))
            {
                creditsPlanned += missionCredits
            }
            else
            {
                credits += missionCredits;
            }
        });
        if (I18n.locale == "en_GB")
            $("#remCredits").text(beautifyCredits(credits) + " / " + beautifyCredits(creditsAlliance));
        else
            $("#remCredits").text(beautifyCredits(credits) + " / " + beautifyCredits(creditsPlanned) + " / " + beautifyCredits(creditsAlliance));
        //console.log(credits);
    };
    function gettypecredits(type)
    {
        return requirements.filter(e => e.id == [type])[0];
    }

    init();

    // extend missionMarkerAdd -----------------------------------------------------------------------
    var original_func = missionMarkerAdd;

    // this function is called when a mission is mutated
    missionMarkerAdd = function(e) {
        original_func.apply(this, arguments);

        calculate(e);
    }
})();
