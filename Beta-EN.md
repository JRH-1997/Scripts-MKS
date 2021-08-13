# Beta
<h3><a href="https://jrh-1997.github.io/Scripts-MKS/Beta-NL">Nederlands </a> /<a href="https://jrh-1997.github.io/Scripts-MKS/Beta-EN"> English</a></h3>

Dear Beta testers,
<br><br>
Thanks for testing this script! The newest Beta features will be updated on this site. 
<br><br>
<b>NOTE: To use these scripts, tampermonkey is required in your browser. <a href="https://www.tampermonkey.net/">Click here to install Tampermonkey</a> </b>
<br><br>
Incase of questions, comments or requests you can contact me through <a href="https://www.meldkamerspel.com/messages/new?target=Jrh1997">a message in the dutch MKS</a>, <a href="https://forum.meldkamerspel.com/wcf/index.php?ConversationAdd/&userID=933">a direct message on the dutch forums</a>, <a href="https://forum.meldkamerspel.com/index.php?thread/2930-scripts-mks-jrh1997/"> in the topic on the dutch forums</a>, <a href="https://github.com/JRH-1997/Scripts-MKS/issues"> here on Github Issues</a> or by a private message on Discord JRH1997#2625. 
<br><br>
I hope these scripts will bring a little more joy to your gaming experience.
<br><br>
Greetings Jrh1997
<br><br>

<b>The installation link is not available on the site</b>
<br><br>
<B>Last updated: Readme: 13-08-2021</b>

<B>LICENSING:</b><br>
These scripts are owned by their respective owners. None of the scripts are permitted to be modifified or distributed without my explicit permission. <br>
Any scripts belonging to different owners and not allowed to be modified or redistributed without the owners respective permission.
I've personally obtained permission to redistribute these scripts. If you like to do so as well. I will refer you to the respective people.

# Scripts-MKS
Below I will give a brief description of each component of the script. 
Next to the personal menu a new button will appear which will give access to the settings.

# Data collection:
We collect usage data and error logging. <br>
These data includes: user ID, username, gameversion, Script settings and script version. If it's an error report, then the data will also includes the Error message. <br> We only use this information for support, statistics and finding/resolving bugs.<br><br>
 
You can always optin, optout, request for deletion of your data and witdraw that request via the script menu. After a request for deletion of your data, you'll get an alert in game when the data is deleted.

# Double Credits Event:
<b>(Instelling: Credits > Automatisch dubbele credits event)</b>
<br>
This function calculates the double credits when the double credits event is active. 
It working with te following modules:
- RemainingCredits
- Credits Missionheader
- Credits Missionlist
<br><br>
The function is on by default. It can be turned off in the menu. 

# RemainingCredits: 
<b>(Settings: Credits > Totals above missionlist)</b>
<br>
<b>(Original by LennardFTD. Permission to redistribute.)</b>
<br>
This option shows the average earnings for your missions added up in four different categories.
<br>
![RemainingCredits](AfbeeldingenScriptNL/RemainingCreditsEN.png)
<br>
The image above shows how this is being displayed. The amounts shown are the following categories from left to right:
-   Personal missions, including scheduled transport missions.
-	Planned missions
-   Alliance Missions, including alliance event missions.
-	Event Mission (Not shown in image yet)
-	Total, previous three added together (Optional, Not shown in image yet).
<br>
An "Ambulance Only" mission is added to the amounts for 250 credits each. This is because that is the amount for a ambulance only mission without transporting the patient. More patients, fly car or transporting a patients has higher earnings.
<br>

# Totals of Shared / To share missions:
<b>(Settings: Alliance > Totals of to share / Shared missions)</b><br>
<br>
This function shows number and credits total of the to share and shared missions.<br> 
The credits value from when it is count as a to share mission is the same as the value of the label. You can change this in the menu. <br>
![TotalSharedToShare](AfbeeldingenScriptNL/TotalSharedToShareNewEN.png)

# Totals of the involved alliance missions
<b>(Setting: Alliance > Totals of the involved alliance missions)</b><br>
<br>
This function shows the totals of the alliance mission you are enroute or on location.<br>
It will show it as his example: "Alliance enroute / on location: 'number' / 'credits'"<br>


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
The labels come in five different colors, representing the average earned amount per mission. The default settings:
- Ambulance Only missions: ![LabelAmbulance](AfbeeldingenScriptNL/LabelAmbulance.png)
- Missions up to 4499 credits: ![LabelBlauw](AfbeeldingenScriptNL/LabelBlauw.png)
- Missions from 4500 up to 7999 credits: ![LabelGroen](AfbeeldingenScriptNL/LabelGroen.png)
- Missions from 8000 credits or higher: ![LabelRood](AfbeeldingenScriptNL/LabelRood.png)
- Light blue label: By default this label is not used. You could activate this label by change the dark blue label to a higher number.
<br>
The dark blue, green and red labels are customizable from when they are displayed.
<br>

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
The labels come in five different colors, representing the average earned amount per mission. The default settings:
- Ambulance Only missions: ![LabelAmbulance](AfbeeldingenScriptNL/LabelAmbulance.png)
- Missions up to 4499 credits: ![LabelBlauw](AfbeeldingenScriptNL/LabelBlauw.png)
- Missions from 4500 up to 7999 credits: ![LabelGroen](AfbeeldingenScriptNL/LabelGroen.png)
- Missions from 8000 credits or higher: ![LabelRood](AfbeeldingenScriptNL/LabelRood.png)
- Light blue label: By default this label is not used. You could activate this label by change the dark blue label to a higher number.
<br>
The dark blue, green and red labels are customizable from when they are displayed.
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
Optional:  The label can be in the same colors as the Credits labels. 
<br>

# Hide AlarmNextShare Button
<b>(Setting: General > Hide "Alert, share and next" button)</b>
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
- Opening mission in 4 categories:
	- Own missions
	- Alliance missions
	- Event missions
	- Planned missions
<br><br>
It seems to me that saving a new POI speaks for itself, if more explanation is needed, then I would like to hear it. <br>
I will explain something more about opening radio calls:
- When the detainee or patient has to be transported, this function opens the radio call. 
- When the top radio call is an extended notification, this function opens the extended notification and immediately removes it from your status list. 
<br><br>

# HideMap
<b>(Setting: Hide on map)</b><br>
<br>
This feature can hide different parts of the map.
<br><br>
The following parts can be hidden:
- Missions: 
    - Own Missions:
		- By state (Red/Yellow/Green)
		- Involved missions (If you have sent a vehicle to the missions)
		- Shared or not shared
    - Alliance Missions:
		- By state (Red/Yellow/Green)
		- Involved missions (If you have sent a vehicle to the missions)
    - Event Missions:
		- By state (Red/Yellow/Green)
		- Involved missions (If you have sent a vehicle to the missions)
- Vehicles: (Only available on OpenSourceMap, not on MapKit.)
    - All own vehicles
    - Alliance vehicles
    - Own available non-stationary vehicles
- POI by name
<br>

# Hide Missionlist
<b>(Settings: Hide from missionlist)</b>
<br>
This options hides missions from the mission list based on one or more of these options:
- Own Missions:
    - All personal missions
    - Involved own missions ( own missions you have a vehicle enroute/on scene )
	- Not involved own missions 
    - Shared missions
    - Non-Shared Missions
	- Missions under the alliance value 
- Alliance Missions:
    - All alliance missions
    - Involved alliance missions (alliance missions you have a vehicle enroute/on scene)
- Event Missions:
    - Involved event missions (event missions you have a vehicle enroute/on scene)
- By label color:
	- For own, alliance and event missions, there will be options for all label colors.
- By ingame filter type
	- For own, alliance and event missions, there willl be options for all filter types.
<br>

# Sort missionlist
<b>(Setting: Sort missionlist)</b>
<br>
This will sort mission in the missionlist:
- Own Missions
	- Sort based on credits from lowest to highest
		- Sort from highest to lowest
- Alliance Missions
	- Sort based on credits from lowest to highest
		- Sort from highest to lowest
- Event Missions
	- Sort based on credits from lowest to highest
		- Sort from highest to lowest
- Planned Missions
	- Sort based on credits from lowest to highest
		- Sort from highest to lowest
<br>

# Toplist Rank
<b>(Settings: General > Toplist rank in header)</b>
<br>
This function shows your place in the rankings at the top of the menu bar. If you click on it, the correct page of the rankings will also open immediately.
<br>
![ToplistRank](/AfbeeldingenScriptNL/Toplist.png)
