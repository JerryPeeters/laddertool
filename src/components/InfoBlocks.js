import React from 'react';

const styles = {
    h1Title: {
        //todo
    },
    h2Title: {
        //todo
    },
    h3Title: {
        //todo
    },
    quotedText: {
        color: '#8cd9fe',
    },
    image: {
        maxWidth: '100%',
    }
}

//methods should return JSX objects

//images should be a ref to the public image files, so the clientside doesnt have to download all images at once

//keys match targetKey in questions file. Based on paragraphnumbers in sourcefile. 

export default {
    '2.1': () => {
        return(
            <div>
                <h1 style={styles.h1Title}>Nieuwe stedelijke ontwikkeling (NSO)</h1>
                <p>
                    Is sprake van een nieuwe stedelijke ontwikkeling (NSO), dan is een 
                    plan Ladderplichtig. Een stedelijke ontwikkeling wordt in artikel 
                    1.1.1 Bro gedefinieerd als een: 
                </p>
                <p style={styles.quotedText}>
                    ‘Ruimtelijke ontwikkeling van een bedrijventerrein of zeehaventerrein, 
                    of van kantoren, detailhandel, woningbouwlocaties of andere stedelijke 
                    voorzieningen’.
                </p>
                <p>
                    In het Bro is geen ondergrens voor de minimale omvang vastgesteld. Dit 
                    verschilt bovendien per functie. Jurisprudentie geeft vaak meer duidelijkheid. 
                    In de tabel hierna geven we per functie de gangbare ondergrens aan, en 
                    verwijzingen daarbij naar relevante jurisprudentie. Ligt een plan boven de 
                    betreffende ondergrens? Dan kwalificeert het zich in beginsel als stedelijke 
                    ontwikkeling in de zin van artikel 3.1.6. lid 2 Bro. 
                </p>
                <img src={'/images/21Tabel1.PNG'} alt={''} style={styles.image}/>
                <p>
                    De Ladder is van toepassing op een nieuwe stedelijke ontwikkeling. Daarvan 
                    is sprake als het nieuwe bestemmingsplan meer bebouwing mogelijk maakt, of 
                    een functiewijziging van zodanige aard en omvang is, dat daarom sprake is 
                    van een nieuwe stedelijke ontwikkeling. In de praktijk blijkt dit snel het geval. 
                    Ook moeten plannen dan voldoen aan de regionale afspraken.
                </p>
            </div>
        )
    },
    '2.2': () => {
        return(
            <div>
                <h1 style={styles.h1Title}>Ruimtelijke verzorgingsgebieden</h1>
                <p>
                    De Ladder vraagt om vraag en aanbod binnen het ruimtelijk verzorgingsgebied van de 
                    functie tegen elkaar af te wegen. Dit verzorgingsgebied varieert per type functie en 
                    de aard en omvang van die functie. In de tabel hierna geven we het verzorgingsgebied per 
                    functie beknopt weer. Dat doen we op basis van inhoudelijke graadmeters. Het bepalen 
                    van de afbakening van de regio is in beginsel aan de gemeente zelf. Waar dat aan de 
                    orde is, geven we ook weer in hoeverre relevante beleidsafspraken voor een inkadering 
                    van het verzorgingsgebied zorgen. Dit is het schaalniveau waarop u afspraken maakt en 
                    voor afstemming zorgt. 
                </p>
                <img src={'/images/22Tabel2.PNG'} alt={''} style={styles.image}/>
            </div>
        )
    },
    '2.2.1': () => {
        return(
            <div>
                <h1 style={styles.h1Title}>
                    Verzorgingsgebied woningbouw: subregio’s Zaanstreek-Waterland en Amsterdam
                </h1>
                <img src={'/images/221Afbeelding0.PNG'} alt={''} style={styles.image}/>
                <p>
                    De aard en omvang van een plan, maar zeker ook de ligging bepalen in hoeverre omliggende gemeenten/subregio’s tot het verzorgingsgebied horen. Bij grootstedelijke plannen met een omvangrijk, complementair programma en gunstige ligging ten opzichte van Amsterdam (denk aan Hembrug en Achtersluispolder), zijn de grensoverschrijdende effecten bijvoorbeeld sterker dan bij kleinschalige inbreidingsplannetjes met een doorsnee programma. 
                </p>
                <p>
                    Allereerst zijn verhuisbewegingen een graadmeter bij afbakening van het verzorgingsgebied. Het ruimtelijk verzorgingsgebied voor woningbouw bestaat in onze ogen primair uit de gemeente Zaanstad, en secundair ook de subregio’s Zaanstreek-Waterland en Amsterdam1. Het volgende is daarbij van belang:
                    <ul>
                    <li>
                        CBS-migratiegegevens van alle verhuisde personen van 2011 tot 2017 tonen dat het grootste deel van de verhuisbewegingen (circa 62%) binnengemeentelijk plaatsvindt. Kijken we naar de regio Zaanstreek-Waterland, dan komt circa 67% van de inkomende verhuisbewegingen uit de regio. Als we de grotere regio (Zaanstreek-Waterland en Amsterdam) in beschouwing nemen, dan vond 82% van de verhuisbewegingen binnen dat gebied plaats. Overige verhuisrelaties zijn relatief beperkt en verspreid over een groot aantal gemeenten binnen en buiten de provincie. 
                    </li>
                    <li>
                        Van de kopers van nieuwbouwkoopwoningen komt het overgrote deel (circa 80%) in de periode 2005-2015 uit de gemeente Zaanstad zelf. Daarnaast zijn er met overige gemeenten binnen de regio beperkte verhuisrelaties op de nieuwbouwkoopmarkt. In de grotere regio Zaanstreek-Waterland en Amsterdam vond 85% van de inkomende verhuizingen binnen de regio plaats. De nieuwbouw koopmarkt is daarmee wat meer lokaal georiënteerd dan de algehele woningmarkt in de regio. 
                    </li>
                    </ul>
                </p>
                <img src={'/images/221Tabel3.PNG'} alt={''} style={styles.image}/>
                <p>
                    Daarnaast vindt op bestuurlijk vlak, regionale afstemming van woningbouwprogrammering en plannen plaats. Deze regionale afstemming in de vorm van het regionale actieprogramma wonen (RAP) en de regionale woningbouwprogrammering, zijn onder andere geënt op de Ladder voor duurzame verstedelijking. De regionale afspraken worden geborgd in de provinciale verordening (PRV). Vanuit het (RAP) en de regionale woningbouwprogrammering in de voormalige Stadsregio Amsterdam (waaronder de regio’s Amsterdam, Amstelland-Meerlanden, en Zaanstad-Waterland vallen) is door de regiogemeenten afgesproken dat de volgende ‘marktregio’s’ ten aanzien van regionale afstemming worden gehanteerd: 
                </p>
                <img src={'/images/221Afbeelding1.PNG'} alt={''} style={styles.image}/>
            </div>
        )
    },
    '2.3.1': () => {
        return(
            <div>
                <h1 style={styles.h1Title}>
                    Behoefte wonen
                </h1>
                <p>
                    Voor de behoeftebepaling bij de functie wonen brengen we hierna achtereenvolgens het woningbouwaanbod in (harde) bestemmingsplannen en de kwantitatieve en kwalitatieve aspecten van de woningvraag in uw verzorgingsgebied in beeld. Dit zijn de subregio’s Zaanstreek-Waterland en Amsterdam. 
                </p>
                <h2 style={styles.h2Title}>
                    Kwantitatieve behoefte wonen
                </h2>
                <h3 style={styles.h3Title}>
                    Kwantitatief aanbod: harde plancapaciteit van circa 50.230 woningen
                </h3>
                <p>
                    De Metropoolregio Amsterdam heeft sinds 2017 een monitoringssysteem voor de plancapaciteit voor woningbouw (hierna: Monitor plancapaciteit MRA). Deze monitor is onderlegger voor woningbouwafspraken in de MRA en afstemming binnen en tussen subregio’s. In de subregio’s Amstelland-Meerlanden, Amsterdam en Zaanstreek-Waterland, is mede op basis van deze monitor plancapaciteit het Regionaal ActieProgramma Wonen 2016 t/m 2020 (RAP) opgesteld (2017) (noot 7). 
                </p>
                <p>
                    Uit de Monitor plancapaciteit MRA (2017) blijkt in het gehele verzorgingsgebied Zaanstreek-Waterland en Amsterdam harde plancapaciteit voor netto ongeveer 50.200 woningen (peildatum: juli 2017). Het overgrote deel ligt in Amsterdam: circa 44.200 woningen. In subregio Zaanstreek-Waterland gaat het om circa 6.000 woningen. Daarnaast zien we zachte (noot 8) plannen voor in totaal ruim 92.400 woningen in de gehele marktregio, waarvan ongeveer 86.000 woningen op inbreidingslocaties binnen bestaand stedelijk gebied (BSG). Een groot deel hiervan ligt opnieuw in Amsterdam. 
                </p>
                <img src={'/images/231Tabel7.PNG'} alt={''} style={styles.image}/>
                <h3 style={styles.h3Title}>
                    Kwantitatieve vraag: circa 58.050 woningen 
                </h3>
                <p>
                    De provincie Noord-Holland heeft in 2017 een prognose opgesteld voor de verwachte ontwikkeling van de bevolking, huishoudens en woningbehoefte in de Noord-Hollandse gemeenten. In de provinciale ruimtelijke verordening en de regionale woningbouwafspraken wordt de provinciale prognose (2017) als uitgangspunt voor de vraagontwikkeling gehanteerd. Deze prognose zien we daarom als richtinggevend voor het bepalen van de woningvraag. 
                </p>
                <p>
                    Onderstaande tabel toont de ontwikkeling van de woningvraag volgens de provinciale woningbehoefteprognose: de komende 10 jaar (2018-2028) is er een uitbreidingsvraag van circa 58.050 woningen in het gehele verzorgingsgebied. Zo’n driekwart daarvan komt voor rekening van Amsterdam. 
                </p>
                <p>
                    In 2019 bedraagt de vraag ongeveer 55.770 woningen (2019-2029) volgens de prognose. Weer een jaar later is dit 53.180 woningen. Hieruit valt af te leiden dat de additionele vraag naar de toekomst toe licht afneemt, maar dat er ook op langere termijn huishoudensgroei blijft.
                </p>
                <img src={'/images/231Tabel8.PNG'} alt={''} style={styles.image}/>
                <h3 style={styles.h3Title}>
                    Kwantitatieve behoefte: circa 7.800 woningen
                </h3>
                <p>
                    Hierna stellen we de kwantitatieve woningbehoefte vast door de uitbreidingsvraag voor de komende tien jaar te confronteren met het harde planaanbod. Beide brachten we hiervoor al in beeld.
                </p>
                <p>
                    Volgens huidige inzichten en beschikbare gegevens constateren we een kwantitatieve woningbehoefte van circa 7.800 woningen voor de periode 2018-2028 in uw verzorgingsgebied (regio Zaanstreek-Waterland en Amsterdam). In Zaanstreek-Waterland is een flinke behoefte, want het harde planaanbod bedraagt nog niet de helft van de additionele vraag voor de jaren 2018-2028.  
                </p>
                <img src={'/images/231Tabel9.PNG'} alt={''} style={styles.image}/>
                <h2 style={styles.h2Title}>
                    Kwalitatieve behoefte wonen
                </h2>
                <p>
                    De kwalitatieve woningbehoefte is vooral belangrijk als de kwantitatieve behoefte niet overtuigend of zelfs negatief is. De kwalitatieve behoefte kán ook relevant zijn als een plan buiten BSG ligt (zie tekstkader). 
                </p>
                <img src={'/images/231Afbeelding0.PNG'} alt={''} style={styles.image}/>
                <h3 style={styles.h3Title}>
                    Kwalitatief aanbod: veel koopwoningen en appartementen in bruto planaanbod
                </h3>
                <p>
                    De Monitor plancapaciteit MRA geeft een eerste indicatie van de kwalitatieve aspecten van het bruto (harde) planaanbod in de gehele marktregio Zaanstreek-Waterland en Amsterdam (peildatum: juli 2017). 
                </p> 
                <p>
                    Let wel: het gaat hier nadrukkelijk om indicatieve cijfers, omdat in veel (harde) plannen juridisch niets is vastgelegd qua woningtype, eigendomsvorm of prijsklasse. Daarnaast is niet voor alle plannen bekend wat het beoogde kwalitatieve programma is. Bovendien is de kwalitatieve verdeling van de harde planvoorraad uitsluitend bruto bekend. Niet bekend is namelijk welke woningen kwalitatief gesloopt worden.
                </p>
                <p>
                    Wat vooral opvalt aan onderstaande gegevens over de harde plancapaciteit in het verzorgingsgebied, is dat er met name appartementen in harde plancapaciteit worden voorzien (ruim 35.000 appartementen). Het aandeel grondgebonden woningen is met minder dan 6.400 woningen beperkt. Wel is het aantal grondgebonden woningen in Zaanstreek-Waterland in harde plannen groter dan in Amsterdam. Van een groot aandeel harde plannen is het woningtype echter nog onbekend. Dat geldt ook bij de eigendomsvormen. Daarnaast valt op dat het aantal koopwoningen in harde plannen worden voorzien in de regio (circa 20.700 koopwoningen) bijna even groot is als het totale aantal geplande huurwoningen (23.600).  
                </p>
                <img src={'/images/231Tabel10.PNG'} alt={''} style={styles.image}/>
                <h3 style={styles.h3Title}>
                    Kwalitatieve vraag: vooral vraag naar koopwoningen en appartementen
                </h3>
                <p>
                    Voor het bepalen de kwalitatieve vraag koppelen we de eerder in beeld gebrachte kwantitatieve uitbreidingsvraag volgens de provinciale prognose aan kwalitatieve woonvoorkeuren. Hiervoor gebruiken we woonwensen van verhuisgeneigden in beide subregio’s, zoals weergegeven in Wonen in de Metropoolregio Amsterdam 2017 (WiMRA 2017). 
                </p> 
                <p>
                    Omdat woonvoorkeuren niet altijd (kunnen) worden opgevolgd, passen we bewust een bandbreedte toe. Zo komen we tot een kwalitatieve vraag naar eigendomsvorm (huur (sociaal en vrijesector) en koop) en type (grondgebonden, appartement en anders), zie de tabel hierna.
                </p>
                <p>
                    Opvallend is de grote voorkeur voor koopwoningen en appartementen in het totale verzorgingsgebied. De grote voorkeur naar appartementen komt vooral vanuit Amsterdam. Amsterdam legt veel gewicht in de schaal. In Zaanstreek-Waterland is de voorkeur naar grondgebonden juist groter. In zowel Zaanstreek-Waterland als Amsterdam is de vraag naar koopwoningen groter dan naar huurwoningen.  
                </p>
                <h3 style={styles.h3Title}>
                    Kwalitatieve behoefte: nadere inzichten vereist voor gedegen onderbouwing, maar in praktijk meestal niet nodig
                </h3>
                <p>
                    Net als bij de kwantitatieve behoefte volgt de kwalitatieve woningbehoefte normaliter uit een confrontatie van vraag en aanbod. Bij de kwalitatieve behoefte zijn echter ook kwalitatieve (mis)matches in de bestaande voorraad en de harde sloopopgave van belang om vast te kunnen stellen of een plan kwalitatief in een behoefte voorziet. Kortom, hoe is de bestaande woningvoorraad verdeeld naar eigendomsvorm, typologie en (liefst ook) woonmilieu? En in welke segmenten precies wordt gesloopt? Gebruik hiervoor bijvoorbeeld ook inzichten vanuit het recent verschenen rapport ‘Raming woningbehoefte MRA’ (2018): daarin is tevens een vooruitberekening gemaakt van de kwalitatieve woningbehoefte in deelgebieden van de MRA, die ook zeer bruikbaar kan zijn als input voor de onderbouwing van de kwalitatieve behoefte. 
                </p> 
                <p>
                Gezien de onvolkomenheden bij het bepalen van de kwalitatieve behoefte, adviseren we u de kwalitatieve behoefte alleen te motiveren als er kwantitatief geen sluitend verhaal ligt. Anticipeer in dat geval op onderstaande aandachtspunten. Is er wel voldoende kwantitatieve behoefte? Motiveer dan liever dat u een flexibel, breder programma mogelijk maakt. U heeft hier namelijk alle ruimte voor, blijkt uit jurisprudentie. 
                </p>
                <img src={'/images/231Tabel11.PNG'} alt={''} style={styles.image}/>
                <img src={'/images/231Afbeelding1.PNG'} alt={''} style={styles.image}/>
                <p>
                    Noot 7: In de RAP-oplegger is voor 2017-2027 de kwantitatieve en kwalitatieve woningbehoefte bepaald. Bestuurlijk is afgesproken dat deze berekening 2 jaar geldig is.<br />
                    Noot 8: Zolang ‘zacht’ concurreren plannen niet met uw plan qua woningbehoefte (alleen hard planaanbod). Wel kunnen ze, als zij binnen BSG liggen, een reëel alternatief vormen voor beoogde ontwikkelingen buiten BSG.<br />
                    Noot 9: www.plancapaciteit.nl.<br />
                </p>
            </div>
        )
    },
    '2.4': () => {
        return(
            <div>
                <h1 style={styles.h1Title}>
                    Bestaand stedelijk gebied (BSG)
                </h1>
                <img src={'/images/24Afbeelding0.PNG'} alt={''} style={styles.image}/>
                <p>
                    Artikel 1.1.1 Bro geeft als definitie voor bestaand stedelijk gebied (BSG):
                </p>
                <p style={styles.quotedText}>
                    ‘Bestaand stedenbouwkundig samenstel van bebouwing ten behoeve van wonen, dienstverlening, bedrijvigheid, detailhandel of horeca, alsmede de daarbij behorende openbare of sociaal culturele voorzieningen, stedelijk groen en infrastructuur.’
                </p>
                <p>
                    Voor ontwikkelingen buiten BSG is in het kader van de Ladder een uitgebreidere motivering vereist. Daarbij moet worden onderbouwd waarom niet binnen het bestaand stedelijk gebied in de behoefte kan worden voorzien. Check daarom altijd of het voorgenomen plan een ontwikkeling binnen of buiten BSG betreft.
                </p>
                <img src={'/images/24Afbeelding1.PNG'} alt={''} style={styles.image}/>
                <p>
                    Naast de hiervoor genoemde definitie van bestaand stedelijk gebied, blijkt uit jurisprudentie dat ook de geldende bestemming van een plangebied relevant kan zijn. Geldt er bijvoorbeeld een agrarische bestemming die de ontwikkeling ten behoeve van wonen, dienstverlening, bedrijvigheid, detailhandel of horeca uitsluit, dan is veelal geen sprake van BSG1. Zie bijvoorbeeld: ABRvS 29 april 2015, ECLI:NL:RVS:2015:1340. Zie ook de nieuwe Ladderhandreiking van het Rijk: www.infomil.nl  
                </p>
                <img src={'/images/24Afbeelding2.PNG'} alt={''} style={styles.image}/>
            </div>
        )
    },    
    'custom3.4.2': () => {
        return(
            <div>
                <h1 style={styles.h1Title}>
                    Voorbeeldtekst: Plan X voorziet (ook) in een kwalitatieve woningbehoefte
                </h1>
                <p>
                    Plan [NAAM], met in totaal [AANTAL] woningen, is opgebouwd uit [AANTAL] grondgebonden woningen en [AANTAL] appartementen. Van de [AANTAL] woningen, bevinden zich er [AANTAL] in de sociale huursector. [AANTAL] woningen zijn vrijesectorhuur. Het resterende deel van [AANTAL] woningen is koop.
                </p>
                <p>
                    In het ruimtelijk verzorgingsgebied (Zaanstreek-Waterland & Amsterdam) is sprake van een kwalitatieve additionele behoefte van [AANTAL] grondgebonden woningen, [AANTAL] appartementen, [AANTAL] sociale huurwoningen, [AANTAL] vrijesectorhuurwoningen en [AANTAL] koopwoningen voor de periode [2018-2028 / 2019-2029 / 2020-2030]. Dit blijkt uit een koppeling van de provinciale woningbehoefteprognose met de subregionale woonvoorkeuren. Deze zijn vervolgens geconfronteerd met het harde planaanbod in de betreffende kwalitatieve segmenten.
                    <ul>
                    <li>
                        De additionele woningvraag in het verzorgingsgebied bedraagt [AANTAL] [RELEVANTE TYPOLOGIEËN EN EIGENDOMSVORMEN] woningen.
                    </li>
                    <li>
                        Het harde planaanbod in het verzorgingsgebied bedraagt [Y] [RELEVANTE TYPOLOGIEËN EN EIGENDOMSVORMEN] woningen.
                    </li>
                    <li>
                        De resterende behoefte die hieruit voortvloeit is [Z (X-Y)] [RELEVANTE TYPOLOGIEËN EN EIGENDOMSVORMEN] woningen.
                    </li>
                    <li>
                        Plan [NAAM] telt met [AANTAL] [RELEVANTE TYPOLOGIEËN EN EIGENDOMSVORMEN] woningen minder woningen dan de resterende behoefte, namelijk [Z] [RELEVANTE TYPOLOGIEËN EN EIGENDOMSVORMEN] woningen.
                    </li>
                    <li>
                        Kortom, plan [NAAM] voorziet (ook) in een kwalitatieve behoefte. 
                    </li>
                    </ul>
                </p>
            </div>
        )
    },
}
