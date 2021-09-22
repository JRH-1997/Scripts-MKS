// ==UserScript==
// @name         vehicleChanges
// @version      1.3.1
// @description  Change settings of vehicles * Original of DrTraxx *
// @author       DrTraxx / JRH1997
// @include      /^https?:\/\/(w{3}\.)?(?:(polizei\.)?leitstellenspiel\.de|(politie\.)?meldkamerspel\.com|(police\.)?missionchief\.co.uk)\/$/
// @grant        GM_addStyle
// ==/UserScript==
/* global $, I18n, GM_addStyle, GM_info */
"use strict";

(async function () {
	const t = (translateString, options) => I18n.translate(`vehicleChanges.${translateString}`, options);
	I18n.translations.nl_NL.vehicleChanges = {
		ids: {
			container: [27, 32, 45, 29, 51, 61],
			segLeader: [38, 57],
		},
		close: "Sluiten",
		title: "Voertuiginstellingen",
		tabs: {
			container: "Haakarmbakken",
			segLeader: "OvD-G",
		},
		settingsForAll: "Instelling voor alle %{category}",
		setSettings: "Instellingen verwerken",
		settings: {
			container: {
				tractive_random: {
					title: "Haakarmvoertuig automatisch toewijzen",
					type: "checkbox",
				},
				tractive_building_random: {
					title: "Dragendvoertuig ook van een andere post toelaten",
					type: "checkbox",
					dependsOn: "tractive_random"
				},
				vehicle_mode: {
					title: "Voertuig modus",
					type: "select",
					options: [
						{ value: 2, label: "HA op incident behouden" },
						{ value: 3, label: "HA retour post sturen" }
					],
				},
			},
			segLeader: {
				hospital_automatic: {
					title: "Spraakaanvragen van Ambulances automatisch afhandelen",
					type: "checkbox",
				},
				hospital_own: {
					title: "Ambulances alleen naar eigen ziekenhuizen sturen",
					type: "checkbox",
					dependsOn: "hospital_automatic"
				},
				hospital_right_building_extension: {
					title: "Ambulances alleen naar ziekenhuizen met de juiste uitbreiding sturen",
					type: "checkbox",
					dependsOn: "hospital_automatic"
				},
				hospital_max_price: {
					title: "Maximale kosten van de ziekenhuisopname",
					type: "select",
					options: [
						{ value: 0, label: "0 %" },
						{ value: 10, label: "10 %" },
						{ value: 20, label: "20 %" },
						{ value: 30, label: "30 %" },
						{ value: 40, label: "40 %" },
						{ value: 50, label: "50 %" },
					],
					dependsOn: "hospital_automatic"
				},
				hospital_max_distance: {
					title: "Maximale afstand tot aan het ziekenhuis",
					type: "select",
					options: [
						{ value: 1, label: "1 km" },
						{ value: 5, label: "5 km" },
						{ value: 20, label: "20 km" },
						{ value: 50, label: "50 km" },
						{ value: 100, label: "100 km" },
						{ value: 200, label: "200 km" },
					],
					dependsOn: "hospital_automatic"
				},
				hospital_free_space: {
					title: "Aantal bedden dat vrij moet worden gehouden in het ziekenhuis",
					type: "select",
					options: [
						{ value: 0, label: "0" },
						{ value: 1, label: "1" },
						{ value: 2, label: "2" },
						{ value: 3, label: "3" },
						{ value: 4, label: "4" },
						{ value: 5, label: "5" },
					],
					dependsOn: "hospital_automatic"
				},
			},
		}
	};	
	I18n.translations.en_GB.vehicleChanges = {
		ids: {
			segLeader: [34],
		},
		close: "Close",
		title: "Vehicle settings",
		tabs: {
			segLeader: "Ambulance Officer",
		},
		settingsForAll: "Settings for all %{category}",
		setSettings: "Set settings",
		settings: {
			segLeader: {
				hospital_automatic: {
					title: "Automatically assign a hospital to EMS",
					type: "checkbox",
				},
				hospital_own: {
					title: "Only transport to own facilities",
					type: "checkbox",
					dependsOn: "hospital_automatic"
				},
				hospital_right_building_extension: {
					title: "Only transport to hospitals with treatment capability",
					type: "checkbox",
					dependsOn: "hospital_automatic"
				},
				hospital_max_price: {
					title: "Maximum accepted fee",
					type: "select",
					options: [
						{ value: 0, label: "0 %" },
						{ value: 10, label: "10 %" },
						{ value: 20, label: "20 %" },
						{ value: 30, label: "30 %" },
						{ value: 40, label: "40 %" },
						{ value: 50, label: "50 %" },
					],
					dependsOn: "hospital_automatic"
				},
				hospital_max_distance: {
					title: "Max. distance to the hospital",
					type: "select",
					options: [
						{ value: 1, label: "1 km" },
						{ value: 5, label: "5 km" },
						{ value: 20, label: "20 km" },
						{ value: 50, label: "50 km" },
						{ value: 100, label: "100 km" },
						{ value: 200, label: "200 km" },
					],
					dependsOn: "hospital_automatic"
				},
				hospital_free_space: {
					title: "Number of beds held as a reserve",
					type: "select",
					options: [
						{ value: 0, label: "0" },
						{ value: 1, label: "1" },
						{ value: 2, label: "2" },
						{ value: 3, label: "3" },
						{ value: 4, label: "4" },
						{ value: 5, label: "5" },
					],
					dependsOn: "hospital_automatic"
				},
			},
		}
	};

	let aVehicles = [];
	const category = {
		segLeader: [],
		container: [],
		grtw: [],
		waterBin: [],
	};

	async function loadApi() {
		const ids = Object.entries(t("ids"));

		aVehicles = await $.getJSON("/api/vehicles");
		for (const i in aVehicles) {
			const e = aVehicles[i];
			ids.forEach(([key, value]) => {
				if (value.includes(e.vehicle_type)) category[key].push(e);
			});
		}
		console.debug("aVehicles", aVehicles);
		ids.forEach(([key]) => {
			console.debug(key, category[key]);
		});
	}

	GM_addStyle(`.modal {
display: none;
position: fixed; /* Stay in place front is invalid - may break your css so removed */
padding-top: 100px;
left: 0;
right:0;
top: 0;
bottom: 0;
overflow: auto;
background-color: rgb(0,0,0);
background-color: rgba(0,0,0,0.4);
z-index: 9999;
}
.modal-body{
height: 650px;
overflow-y: auto;
}`);

	$("body")
		.prepend(
			`<div class="modal fade bd-example-modal-lg" id="veChModal" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
           <div class="modal-dialog modal-lg" role="document">
             <div class="modal-content">
               <div class="modal-header">
                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                   <span aria-hidden="true">&#x274C;</span>
                 </button>
                 <h3 class="modal-title"><center>${t("title")}</center></h3>
                 <div class="btn-group hidden" id="veChBtnGrp">
                 ${Object.entries(t("ids"))
		.map(([key]) =>
			`<a class="btn btn-primary btn-xs" id="veChBtn${key}">${t(`tabs.${key}`)}</a>`
		).join("")
	}
                 </div>
               </div>
                 <div class="modal-body" id="veChModalBody">
                 </div>
                 <div class="modal-footer">
                   <button type="button" class="btn btn-danger" data-dismiss="modal">${t("close")}</button>
                   <div class="pull-left">v ${GM_info.script.version}</div>
                 </div>
           </div>
         </div>`);

	$("ul .dropdown-menu[aria-labelledby='menu_profile'] >> a[href='/missionSpeed']")
		.parent()
		.after(`<li role="presentation"><a data-toggle="modal" data-target="#veChModal" style="cursor:pointer" id="veChOpenModal"><span class="glyphicon glyphicon-cog"></span> ${t("title")}</a></li>`);

	async function progress(type) {
		const vehiclesToSet = category[type];
		const postContent = {};
		let count = 0;

		Object.entries(t(`settings.${type}`)).forEach(([key, { type: settingType }]) => {
			postContent[key] = settingType === "checkbox" ? $(`#${type}${key}`)[0].checked ? 1 : 0
				: settingType === "select" ? $(`#${type}${key}`).val() : "";
		});

		$("#veChModalBody")
			.append(`<div class="progress" style="margin-top:2em">
                       <div class="progress-bar bg-success" role="progressbar" style="width: 0%;color: black" aria-valuenow="0" aria-valuemin="0" aria-valuemax="${vehiclesToSet.length}" id="veChPrgs">0 / ${vehiclesToSet.length.toLocaleString()}</div>
                     </div>`);
		console.debug("progress", type, vehiclesToSet);
		console.debug("postContent", postContent);

		for (const i in vehiclesToSet) {
			count++;
			const percent = Math.round(count / vehiclesToSet.length * 100);
			const e = vehiclesToSet[i];
			$("#veChPrgs")
				.attr("aria-valuenow", count)
				.css({ "width": percent + "%" })
				.text(count.toLocaleString() + " / " + vehiclesToSet.length.toLocaleString());
			await $.post("/vehicles/" + e.id, { "vehicle": postContent, "authenticity_token": $("meta[name=csrf-token]").attr("content"), "_method": "put" });
		}
	}

	$("body").on("click", "#veChOpenModal", async function () {
		if (!$("#veChBtnGrp").hasClass("hidden")) $("#veChBtnGrp").addClass("hidden");
		Object.keys(category).forEach((key) => category[key] = []);
		await loadApi();
		$("#veChBtnGrp").removeClass("hidden");
	});
	const ids = Object.keys(t("ids"));
	ids.forEach((key) => {
		const settings = Object.entries(t(`settings.${key}`));
		$("body").on("click", `#veChBtn${key}`, function () {
			$("#veChModalBody")
				.html(`<h4>${t("settingsForAll", { category: t(`tabs.${key}`) })} (${category[key].length.toLocaleString()})</h4>
                ${settings
		.map(([settingKey, { title, type, options, dependsOn }]) => {
			if (type === "checkbox") {
				return `
                                <div class="form-check${dependsOn ? " hidden" : ""}">
                                    <input class="form-check-input" type="checkbox" value="" id="${key}${settingKey}">
                                    <label class="form-check-label" for="${key}${settingKey}">
                                        ${title}
                                    </label>
                                </div>`;
			}
			if (type === "select") {
				return `
                                <div${dependsOn ? ` class="hidden"` : ""}>                                
                                    <label for="${key}${settingKey}">${title}</label>
                                    <br>
                                    <select class="custom-select" id="${key}${settingKey}">
                                        ${options.map(({ label, value }, i) => `<option ${i === 0 ? "selected" : ""} value="${value}">${label}</option>`).join("")}
                                    </select>
                                </div>`;
			}
		}).join("")
	}
                    <br>
                    <a class="btn btn-success" id="veChSaveAll" bullet_point="${key}" style="margin-top:2em">${t("setSettings")}</a>`);

		});
		settings.forEach(([settingKey, { type, options, dependsOn }]) => {
			if (type === "checkbox") {
				$("body").on("click", `#${key}${dependsOn}`, function () {
					if ($(`#${key}${dependsOn}`)[0].checked) {
						$(`#${key}${settingKey}`).parent().removeClass("hidden");
					} else {
						$(`#${key}${settingKey}`).parent().addClass("hidden");
						$(`#${key}${settingKey}`)[0].checked = false;
					}
				});
			}
			if (type === "select") {
				$("body").on("click", `#${key}${dependsOn}`, function () {
					if ($(`#${key}${dependsOn}`)[0].checked) {
						$(`#${key}${settingKey}`).parent().removeClass("hidden");
					} else {
						$(`#${key}${settingKey}`).parent().addClass("hidden");
						$(`#${key}${settingKey}`).val(options[0]?.value);
					}
				});
			}
		});
	});

	$("body").on("click", "#veChSaveAll", function () {
		progress($(this).attr("bullet_point"));
	});

})();