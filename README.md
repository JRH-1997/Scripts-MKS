Beste spelers,
<br><br>
Ik heb een aantal scripts gemaakt of aangepast. Deze wil ik graag met jullie delen, zodat jullie hier ook profijt van kunnen hebben.<br>
Alle scripts heb ik samengevoegd tot 1 totaalscripts genaamd Scripts-MKS. 
<br><br>
<b>LET OP! Om het script te kunnen installeren is Tampermonkey nodig in je browser: <a href="https://www.tampermonkey.net/">Installeer Tamponkey</a> </b>
<br><br>
Indien er vragen, opmerkingen en/of verzoeken zijn kunnen jullie mij bereiken via <a href="https://www.meldkamerspel.com/messages/new?target=Jrh1997">een bericht in het spel</a>, <a href="https://forum.meldkamerspel.com/index.php/ConversationAdd/?userID=933">een bericht op het forum</a>, <a href="https://forum.meldkamerspel.com/index.php/Thread/2930-Losse-scripts-Jrh1997/?postID=21716#post21716"> in het topic op het forum</a> of <a href="https://github.com/JRH-1997/MKS-scripts/issues"> hier bij issues</a>. 
<br><br>
Hopelijk hebben jullie er plezier van.
<br><br>
Groet Jrh1997
<br><br>

<b><a href="https://github.com/JRH-1997/MKS-scripts/raw/master/Script-bundle/Scripts-MKS.user.js">Installeer hier het script</a></b>
<br><br>
<B>Laatste update Readme: 17-07-2020</b>

<B>Auteursrecht:</b><br>
Op alle scripts rust het Nederlandse Auteursrecht. Scripts mogen niet zonder toestemming worden bewerkt of verder verspreidt. <br>
Bij onderdelen waar het originele auteursrecht bij een derde rust, mogen deze niet zonder toestemming van deze derde worden bewerkt of verspreidt.
Voor deze onderdelen is toestemming van de derden verkregen om deze te bewerken en te delen in mijn scripts. Ik zal u voor de betreffende specifieke delen dan ook doorverwijzen. 

# Scripts-MKS
Hieronder zal ik een korte uitleg geven over de verschillende onderdelen in het script. 
Er zal bovenin de menubalk een extra knop komen waar alle functies in zijn opgenomen. 
# RemainingCredits: 
<b>(Instelling: Credits > Totalen boven meldingenlijst)</b>
<br>
<b>(Met dank aan LennardTFD voor het originele Duitse basisscript. Ik heb toestemming om het te delen. )</b>
<br>
Deze functie laat zien wat je meldingen in je meldingenlijst gemiddeld bij elkaar opleveren verdeeld in 3 categorieën. 
<br>
![RemainingCredits](AfbeeldingenScriptNL/RemainingCredits.png)
<br>
Op de afbeelding hierboven kan je zien hoe dit wordt weergegeven. De getallen staan voor de volgende categorieën van links naar rechts:
-	Eigen meldingen, inclusief besteld vervoer. 
-	Geplande inzetten (alleen in UK wordt deze niet weergegeven). 
-	Teammeldingen, inclusief teamevent.
-	Eindtotaal (optioneel, staat nog niet op de afbeelding)
<br>
Een alleen ambulance melding wordt voor 250 credits meegenomen, omdat dit het aantal credits is dat een patiënt zonder vervoer oplevert. Met meer patiënten, wel vervoer of MMT is de opbrengst dus hoger. 
<br>

# Credits Missionlist: 
<b>(Instelling: Credits > In meldingslijst als label/text (achter de naam))</b>
<b>(Met dank aan ItsDreyter voor het originele Duitse basisscript. Ik heb toestemming om het te delen. )</b>
<br>
Deze functie geeft het gemiddeld aantal te verdienen credits weer bij de melding in de meldingenlijst. 
Deze functie heb ik in 2 varianten: als gekleurd label of als tekst, daarnaast nog de variant achter de naam. Die werkt goed in combinatie met het script van MisteryKid waar de volledige meldingenlijst <br>een andere opmaak krijgt. (Nog niet publiekelijk beschikbaar)

### Variant Label:
Hieronder zie je een voorbeeld van een melding waar een gekleurd label in staat:
![Missionlistlabel](AfbeeldingenScriptNL/Missionlistlabel.png)
<br>
De Labels zijn er in 4 kleuren, die de grootte van de melding aangeven:
- Voor meldingen met alleen ambulances: ![LabelAmbulance](AfbeeldingenScriptNL/LabelAmbulance.png)
- Voor meldingen t/m 4499 credits: ![LabelBlauw](AfbeeldingenScriptNL/LabelBlauw.png)
- Voor meldingen vanaf 4500 t/m 7999 credits: ![LabelGroen](AfbeeldingenScriptNL/LabelGroen.png)
- Voor meldingen van 8000 credits en hoger: ![LabelRood](AfbeeldingenScriptNL/LabelRood.png)

### Variant Tekst:
Hieronder zie je een voorbeeld van een melding waar credits als tekst staan en een voorbeeld van een melding waar alleen een ambulance nodig is. 
<br>
![MissionlistText](AfbeeldingenScriptNL/MissionlistText.png)
<br>

# Credits Missionheader
<b>(Instelling: Credits > In meldingstitel als label/text)</b>
<br>
Deze functie geeft in de bovenste balk van de melding het gemiddeld aantal credits van die melding weer in een gekleurd label.
<br> 
![Missonheader](AfbeeldingenScriptNL/Missionheaderlabel.png)
<br>
Hierboven zie je een voorbeeld hoe dit er uit ziet. 
<br>
De Labels zijn er in 4 kleuren, die de grootte van de melding aangeven:
- Voor meldingen met alleen ambulances: ![LabelAmbulance](AfbeeldingenScriptNL/LabelAmbulance.png)
- Voor meldingen t/m 4499 credits: ![LabelBlauw](AfbeeldingenScriptNL/LabelBlauw.png)
- Voor meldingen vanaf 4500 t/m 7999 credits: ![LabelGroen](AfbeeldingenScriptNL/LabelGroen.png)
- Voor meldingen van 8000 credits en hoger: ![LabelRood](AfbeeldingenScriptNL/LabelRood.png)
<br>

# Credits Missionlist Team en Credits Missionheader Team
<b>(Instelling: Team Label)</b>
<br>
Deze functie toont een label als de melding groot genoeg is om met je team te mogen delen. Er zijn 2 versies: 1 voor in de missionheader en 1 voor de missionlist. 
<br><br>
Zo ziet het label er uit: ![LabelTeam](/AfbeeldingenScriptNL/LabelTeam.png)
<br><br>
Het aantal credtis vanaf wanneer dit label getoond wordt is eenvouding aan te passen in het script. Het is standaard vanaf 3000 en als je het anders wilt is het alleen maar het getal wijzigen in het menu en op opslaan drukken. <br>
<br>

# Hide AlarmNextShare Button
<b>(Instelling: Verberg "Alarmeer, deel en volgende" knop)</b>
<br>
Deze functie verbergt de "Alarmeer, deel en volgende" knop, optioneel is in te stellen om alleen de bovenste te verwijderen. 
<br><br>
Hieronder zie je 2 afbeeldingen. De eerste is zoals het nu is en de tweede is als je het script gebruikt. Dit om het verschil te laten zien. 
<br>
![Without](AfbeeldingenScriptNL/Without_Hide_AlarmNextShare_Button.png)
<br>
![With](AfbeeldingenScriptNL/With_Hide_AlarmNextShare_Button.png)
<br>

# Hotkey
<b>(Instelling: Sneltoetsen)</b>
<br>
Deze functie geeft sneltoetsen voor het indrukken van knoppen in het spel:
- Opslaan van een nieuwe POI
- Openen van een spraakaanvraag
<br><br>
Het lijkt mij dat opslaan van een nieuwe POI voor zichzelf spreekt, is er meer uitleg nodig, dan hoor ik het graag. <br>
Het openen van spraakaanvragen zal ik nog iets uitleggen:
- Op het moment dat de arrestant of patiënt vervoerd moet worden, dan opent deze functie de spraakaanvraag. 
- Op het moment dat de bovenste spraakaanvraag een uitgebreide melding is, dan opent deze functie de uitgebreide melding en haalt deze gelijk uit je statuslijst. 
<br><br>

# HideMap
<b>(Instelling: Verberg op kaart)</b>
<b>(Met dank aan LennardTFD voor de originele basis van de teamgebouwen. Ik heb toestemming om het te delen. )</b>
<br>
Deze functie kan verschillende onderdelen op de kaart te verbergen. 
<br><br>
De volgende onderdelen kunnen verborgen worden:
- Gebouwen:
    - Alle eigen gebouwen
    - Eigen brandweer gebouwen
    - Eigen ambulance gebouwen
    - Eigen politie gebouwen
    - Alle teamgebouwen
- Meldingen: 
    - Alle meldingen
    - Eigen meldingen
    - Team meldingen
    - Event meldingen
- Voertuigen: (Niet beschikbaar als je de MapKit gebruikt als kaart)
    - Alle eigen voertuigen
    - Team voertuigen
    - Vrije eigen voertuigen (status 4 of 6)
<br>

# Hide Missionlist
<b>(Instelling: Verberg in meldingenlijst)</b>
<br>
Deze functie verbergt meldingen in de meldingenlijst op basis van verschillende opties:
- Eigen meldingen:
    - Alle eigen meldingen
    - Betrokken eigen meldingen (waar je een voertuig heen hebt gestuurd)
    - Gedeelde meldingen
    - Niet gedeelde meldingen
- Team meldingen:
    - Alle team meldingen
    - Betrokken team meldingen (waar je een voertuig heen hebt gestuurd)
    - Betrokken event meldingen (waar je een voertuig heen hebt gestuurd)
<br>
