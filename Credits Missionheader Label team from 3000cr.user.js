// ==UserScript==
// @name         Credits Missionheader TEAM from 3000cr
// @namespace    http://tampermonkey.net/
// @version      1.1.0
// @description  Shows a label in the missionheader 'TEAM' from 3000 credits
// @author       JRH1997
// @include      /^https?:\/\/[www.]*(?:leitstellenspiel\.de|missionchief\.co\.uk|missionchief\.com|meldkamerspel\.com|centro-de-mando\.es|missionchief-australia\.com|larmcentralen-spelet\.se|operatorratunkowy\.pl|operatore112\.it|operateur112\.fr|dispetcher112\.ru|alarmcentral-spil\.dk|nodsentralspillet\.com|operacni-stredisko\.cz|112-merkez\.com|jogo-operador112\.com|operador193\.com|centro-de-mando\.mx|dyspetcher101-game\.com|missionchief-japan\.com|hatakeskuspeli\.com|missionchief-korea\.com|jocdispecerat112\.com|dispecerske-centrum\.com)\/missions\/.*$/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var html_str;
    var label;
    var credits;
    var OnlyAmbulance

    if (I18n.locale == "de_DE") OnlyAmbulance = 'Nur Krankenwagen'
    else if (I18n.locale == "nl_NL") OnlyAmbulance = 'Alleen Ambulance'
    else OnlyAmbulance = 'Only Ambulance'

    var requirements;

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

   function beautifyCredits(credits)
    {
        return credits.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
    }

async function init()
    {
        let missionH1 = $("#missionH1");

        //console.log(await getCredits(3));
        if(sessionStorage.getItem("LSS_Missionrequirements") == null)
        {
            requirements = await getRequirements();
            sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
        }
        else
        {
            requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
        }

        await getlabel()
        if (label != '') {

        let html = `<br>&nbsp&nbsp&nbsp&nbsp
		<span class="label ` + label + `"> <span id='html_str'> - </span></span>
		`;

		let Creditsintitle = missionH1.append(html);

        calculate();
        }
	}
async function calculate()
    {
        var credits = 0;
        var help = $("#navbar-right-help-button");
        var HelpButton = help.find("a[id*='mission_help']").parent().parent().parent();
        //if($(t).parent().css("display") == "none") return;
        let missionId = $('#mission_help').attr('href').split("/").pop().replace(/\?.*/, '');
        if(missionId == "null") return;
        if (requirements.filter(e => e.id == parseInt(missionId))[0] == undefined)
        {
            sessionStorage.clear("LSS_Missionrequirements")
            requirements = await getRequirements();
            sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
            requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
            let mission = requirements.filter(e => e.id == parseInt(missionId))[0];
            //var credits = requirements[parseInt(missionId)].average_credits || 0;
            let missionCredits = mission.average_credits || 0;
            credits += missionCredits;
        }
        else
        {
            let mission = requirements.filter(e => e.id == parseInt(missionId))[0];
            //var credits = requirements[parseInt(missionId)].average_credits || 0;
            let missionCredits = mission.average_credits || 0;
            credits += missionCredits;
        }
        if (credits >= 3000)
            $("#html_str").text('TEAM');
    }
async function getlabel()
    {
        var credits = 0;
        var help = $("#navbar-right-help-button");
        var HelpButton = help.find("a[id*='mission_help']").parent().parent().parent();
        //if($(t).parent().css("display") == "none") return;
        let missionId = $('#mission_help').attr('href').split("/").pop().replace(/\?.*/, '');
        if(missionId == "null") return;
        if (requirements.filter(e => e.id == parseInt(missionId))[0] == undefined)
        {
            sessionStorage.clear("LSS_Missionrequirements")
            requirements = await getRequirements();
            sessionStorage.setItem("LSS_Missionrequirements", JSON.stringify(requirements));
            requirements = JSON.parse(sessionStorage.getItem("LSS_Missionrequirements"));
            let mission = requirements.filter(e => e.id == parseInt(missionId))[0];
            //var credits = requirements[parseInt(missionId)].average_credits || 0;
            let missionCredits = mission.average_credits || 0;
            credits += missionCredits;
        }
        else
        {
            let mission = requirements.filter(e => e.id == parseInt(missionId))[0];
            //var credits = requirements[parseInt(missionId)].average_credits || 0;
            let missionCredits = mission.average_credits || 0;
            credits += missionCredits;
        }
        if (credits >= 3000) label = 'label-danger'
        else label = ''
    }

let missionHelp = $('#mission_help');
  if (missionHelp.length > 0) {
init ();
  }
})();
