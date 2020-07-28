<h3><a href="https://jrh-1997.github.io/Scripts-MKS/">Nederlands </a> /<a href="https://jrh-1997.github.io/Scripts-MKS/EN"> English</a></h3>

Dear players,
<br><br>
I have created and/or modified a few scripts. I'd like to share these scripts with you, so they can benefit you aswell.<br>
All the scripts have been bundled into one package named "Scripts-MKS". 
<br><br>
<b>NOTE: To use these scripts, tampermonkey is required in your browser. <a href="https://www.tampermonkey.net/">Click here to install Tampermonkey</a> </b>
<br><br>
Incase of questions, comments or requests you can contact me through <a href="https://www.meldkamerspel.com/messages/new?target=Jrh1997">a message in the dutch MKS</a>, <a href="https://forum.meldkamerspel.com/wcf/index.php?ConversationAdd/&userID=933">a direct message on the dutch forums</a>, <a href="https://forum.meldkamerspel.com/index.php?thread/2930-scripts-mks-jrh1997/"> in the topic on the dutch forums</a> or <a href="https://github.com/JRH-1997/Scripts-MKS/issues"> here on Github Issues</a>. 
<br><br>
I hope these scripts will bring a little more joy to your gaming experience.
<br><br>
Greetings Jrh1997
<br><br>

<b><a href="https://github.com/JRH-1997/Scripts-MKS/raw/master/Script-bundle/Scripts-MKS.user.js">Click here to install the script package.</a></b>
<br><br>
<B>Last updated: Readme: 28-07-2020</b>

<B>LICENSING:</b><br>
These scripts are owned by their respective owners. None of the scripts are permitted to be modifified or distributed without my explicit permission. <br>
Any scripts belonging to different owners and not allowed to be modified or redistributed without the owners respective permission.
I've personally obtained permission to redistribute these scripts. If you like to do so as well. I will refer you to the respective people.

# Scripts-MKS
Below I will give a brief description of each component of the script. 
Next to the personal menu a new menu will appear where you will find all the functions this script has to offer.
# RemainingCredits: 
<b>(Settings: Credits > Totals above missionlist)</b>
<br>
<b>(Original by LennardFTD. Permission to redistribute.)</b>
<br>
This option shows the average earnings for your missions added up in three different categories.
<br>
![RemainingCredits](AfbeeldingenScriptNL/RemainingCredits.png)
<br>
The image above shows how this is being displayed. The amounts shown are the following categories from left to right:
-   Personal missions, including scheduled transport missions.
-	Planned missions (Not displayed in the UK version)
-   Alliance Missions, including alliance event missions.
-	Total, previous three added together (Not shown in image yet).
<br>
An "Ambulance Only" mission is added to the amounts for 250 credits each. This is because that is the amount for a ambulance only mission without transporting the patient. More patients, fly car or transporting a patients has higher earnings.
<br>

# Credits Missionlist: 
<b>(Settings: Credits > In missionlist, as text or label)</b><br>
<b>(Original by ItsDreyter. Permission obtained for redistribution )</b>
<br>
This options added the average earnings for each mission in the missionlist.
It comes in two variations: Colored label or plain text, including the variation for behind the mission name. This variation works exceptionally well with a missionList cosmetics script by MisteryKid. ( Not yet publically available ).

### Variation Label:
In the image below you can see an example of a mission with the colored label:
![Missionlistlabel](AfbeeldingenScriptNL/Missionlistlabel.png)
<br>
The labels come in four different colors, representing the average earned amount per mission:
- Ambulance Only missions: ![LabelAmbulance](AfbeeldingenScriptNL/LabelAmbulance.png)
- Missions up to 4499 credits: ![LabelBlauw](AfbeeldingenScriptNL/LabelBlauw.png)
- Missions from 4500 up to 7999 credits: ![LabelGroen](AfbeeldingenScriptNL/LabelGroen.png)
- Missions from 8000 credits or higher: ![LabelRood](AfbeeldingenScriptNL/LabelRood.png)

### Variantion Text:
Below an example of a mission with text average credit earnings and an example for Ambulance Only missions.
<br>
![MissionlistText](AfbeeldingenScriptNL/MissionlistText.png)
<br>

# Credits Missionheader
<b>(Settings: Credits > In missionheader, as text or label)</b>
<br>
This options added the average earnings for the mission in the missionheader.
<br> 
![Missonheader](AfbeeldingenScriptNL/Missionheaderlabel.png)
<br>
In the image above you can see an example.
<br>
The labels come in four different colors, representing the average earned amount per mission:
- Ambulance Only missions: ![LabelAmbulance](AfbeeldingenScriptNL/LabelAmbulance.png)
- Missions up to 4499 credits: ![LabelBlauw](AfbeeldingenScriptNL/LabelBlauw.png)
- Missions from 4500 up to 7999 credits: ![LabelGroen](AfbeeldingenScriptNL/LabelGroen.png)
- Missions from 8000 credits or higher: ![LabelRood](AfbeeldingenScriptNL/LabelRood.png)
<br>

# Label Alliance
<b>(Settings: Alliance Label)</b>
<br>
This feature shows a label if the mission is large enough to share with your team. There are two versions: one for the mission header and one for the mission list.
<br><br>
This is what the label looks like: ![LabelTeam](/AfbeeldingenScriptNL/LabelTeam.png)
<br><br>
This starting number of credits which displays this label can be set in the script menu. Default is set at 3000 credits. If you want to change this, this can be done in the menu.
<br>
<br>

# Hide AlarmNextShare Button
<b>(Setting: Hide "Alert, share and next" button)</b>
<br>
This function hides the "Alert, share and next" button, optionally set to remove only the top one.
<br><br>
Below you see two images. The first is as it is now and the second is if you are using the script. This is to show the difference.
<br>
![Without](AfbeeldingenScriptNL/Without_Hide_AlarmNextShare_Button.png)
<br>
![With](AfbeeldingenScriptNL/With_Hide_AlarmNextShare_Button.png)
<br>

# Hotkey
<b>(Setting: Shortcut Keys)</b>
<br>
This feature provides keyboard shortcuts supplementing the default keyboard shortcuts already in the game:
- Saving a new POI
- Opening a radio call
<br><br>
It seems to me that saving a new POI speaks for itself, if more explanation is needed, then I would like to hear it. <br>
I will explain something more about opening radio calls:
- When the detainee or patient has to be transported, this function opens the radio call. 
- When the top radio call is an extended notification, this function opens the extended notification and immediately removes it from your status list. 
<br><br>

# HideMap
<b>(Setting: Hide on map)</b><br>
<b>(Alliance buildings original by LennardTFD. Permission to redistribute has been granted to me. )</b>
<br>
This feature can hide different parts of the map.
This feature will be updated soon because of the latest update of the game. If there are any whishes to add, let me know. 
<br><br>
The following parts can be hidden:
- Buildings:
    - All own buildings
    - Own Fire Stations
    - Own EMS Stations
    - Own Police Stations
    - All Alliance Buildings
- Missions: 
    - All Missions
    - Personal Missions
    - Alliance Missions
    - Event Missions
- Vehicles: (Only available on OpenSourceMap, not on MapKit.)
    - All own vehicles
    - Alliance vehicles
    - Own available non-stationary vehicles
<br>

# Hide Missionlist
<b>(Settings: Hide from missionlist)</b>
<br>
This options hides missions from the mission list based on one or more of these options:
- Personal Missions:
    - All personal missions
    - Involved shared missions ( shared missions you have a vehicle enroute/on scene )
    - Shared missions
    - Non-Shared Missions
- Alliance Missions:
    - All alliance missions
    - Involved alliance missions (alliance missions you have a vehicle enroute/on scene)
    - Involved event missions (event missions you have a vehicle enroute/on scene)
<br>

# Toplist Rank
<b>(Settings: Toplist rank in header)</b>
<br>
This function shows your place in the rankings at the top of the menu bar. If you click on it, the correct page of the rankings will also open immediately.
<br>
![ToplistRank](/AfbeeldingenScriptNL/Toplist.png)
