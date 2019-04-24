export const textInput = 'textInput';
export const select = 'select';
export const directAppend = 'directAppend';

/*

This contains all question data. Uses keys and targetKeys to navigate the correct path. 

AdditionalInfo: should contain key of target infoBlock and a line of text that will be clickable

Options: should contain the targetKey. Forking is possible by giving different targetKeys per option.

Append: Not all questions have an append. The React.Component should check wether a question or a question and selected option has an append and call the append fn if selected.

*/

export default {
    'start': {
        title: 'Voor welke functie wilt u een onderbouwing maken?',
        inputType: select,
        options: [{
            text: `Functie wonen.`, 
            targetKey: 'startWoning'
            }]
    },
    'end': {
        title: 'U heeft de vragenlijst doorlopen. Wat wilt u nu doen?',
        inputType: select,
        options: [{
            text: 'Onderbouwing voor een andere functie toevoegen.',
            targetKey: 'start'
        }, {
            text: 'Klik hier om de onderbouwing te kopiëren.',
            targetKey: 'clickToCopy'
        }]
    },
    'startWoning':{
        title: 'Informatie over het plan',
        inputType: textInput,
        options: [{
            text: 'Naam van het bestemmingsplan/de omgevingsvergunning: ',
            stateRef: 'planNaam'
        }, {
            text: 'Plaatsnaam: ',
            stateRef: 'plaatsNaam'
        }, {
            text: 'Naam van het vigerende bestemmingsplan / vigerende beheersverordening: ',
            stateRef: 'vigerendPlan'
        }, {
            text: 'Aantal woningen dat wordt mogelijk gemaakt: ',
            stateRef: 'woningAantal'
        }],
        targetKey: '3.1',
    },
    '3.1': {
        title: `Achtergrond Plan`,
        inputType: textInput,
        options: [{
            text: `Geef hier een omschrijving van uw plan en woningbouwprogramma. Hoe specifieker u bent, des te gerichter kunt u uw plan doorgaans1 onderbouwen. Met sterke kwalitatieve argumenten kunt u immers onderbouwen waarom een locatie geschikt is (en waarom eventuele alternatieven binnen BSG dat niet zijn). Denk aan:
                <br>• Ligging, en oppervlakte plangebied
                <br>• Ruimtelijke opzet
                <br>• Woningdichtheid
                <br>• Aantal woningen
                <br>• Verdeling naar typologie (appartementen, grondgebonden), oppervlakte-, prijsklassen
                <br>• Soort woonmilieu`, 
            stateRef: `achtergrond`
            }], 
        targetKey: '3.2',
        append: (state) => state.achtergrond
    },
    '3.2': {
        title: `Is het plan een nieuwe stedelijke ontwikkeling? `,
        additionalInfo: [{
            text: `Klik hier voor de toelichting van een NSO en de specifieke ondergrens bij woningen. `,
            targetKey: '2.1',
        }],
        inputType: select,
        options: [{
            text: `Is op basis daarvan geen sprake van stedelijke ontwikkeling? 
                U bent niet Ladderplichtig. Daarmee hoeft u de verdere stappen niet te 
                doorlopen. Wel blijft een motivering van een goede ruimtelijke ordening 
                vereist en moet de uitvoerbaarheid van een plan hoe dan ook worden 
                onderbouwd volgens artikel 3.1.6 lid 1 Bro. Neem daarom idealiter 
                altijd een motivering volgens de systematiek van de Ladder op in de 
                toelichting van een bestemmingsplan. Geef in dat geval aan dat een 
                Laddertoets niet vereist is, maar dat u dit 
                zorgvuldigheids-/volledigheidshalve toch doet.`,
            targetKey: '3.2.1',
        }, {
           text: `Is er wel sprake van een stedelijke ontwikkeling, maar kan deze niet 
                als ‘nieuw’ worden beschouwd? Ook in dit geval bent u niet Ladderplichtig. 
                Om dezelfde reden als hiervoor genoemd kunt u nut en noodzaak volgens de 
                Laddersystematiek te motiveren. Vermeld ook hier expliciet dat een 
                Laddertoets niet noodzakelijk is.`,
           targetKey: `3.2.1`, 
        }, {
            text: `Is uw plan een stedelijke ontwikkeling en bovendien ‘nieuw’? 
            U bent Ladderplichtig en moet dus een Laddertoets voor uw plan doorlopen.`,  
            targetKey: `3.2.2`,
        }]
    },
    '3.2.1': {
        inputType: directAppend,
        targetKey: '3.3',
        append: (state) => {
            return (`
                Plan ${state.planNaam} telt met ${state.woningAantal} woningen minder dan 12 woningen. 
                Daarmee is geen sprake van een nieuwe stedelijke ontwikkeling (NSO) en 
                hoeft plan ${state.planNaam} niet getoetst te worden aan de Ladder voor duurzame 
                verstedelijking.
                Volledigheidshalve hanteren wij de Laddersystematiek ter motivering van een goede 
                ruimtelijke ordening en onderbouwing van de uitvoerbaarheid van plan ${state.planNaam}. 
                Hierna doorlopen we de bijbehorende stappen.
            `)
        }
    },
    '3.2.2': {
        inputType: directAppend,
        targetKey: '3.3',
        append: (state) => {
            return (`
            Plan ${state.planNaam} telt met ${state.woningAantal} woningen 
            ${state.woningAantal === '12' ? '12' : 'meer dan 12'} woningen. 
            Daarmee is sprake van een nieuwe stedelijke ontwikkeling (NSO) en moet 
            plan ${state.planNaam} getoetst worden aan de Ladder voor duurzame 
            verstedelijking. Hierna doorlopen we de vereiste stappen.
            `)
        }
    },
    '3.3': {
        title: `Wat is het ruimtelijk verzorgingsgebied van het plan? `,
        additionalInfo: [{
            text: 'Klik hier voor de toelichting van het verzorgingsgebied', 
            targetKey: '2.2'
        }, {
            text: 'Klik hier voor de specifieke reikwijdte bij woningen', 
            targetKey: '2.2.1'
        }, ],
        inputType: select,
        options: [{
            text: `Het ruimtelijk verzorgingsgebied voor woningbouw staat niet ter 
                discussie: dit zijn de subregio’s Zaanstreek-Waterland en Amsterdam.`,
            targetKey: '3.3.1',        
        }],
    },
    '3.3.1': {
        inputType: directAppend,
        targetKey: '3.4',
        append: (state) => {
            return (`
            Het ruimtelijk verzorgingsgebied voor plan ${state.planNaam} zijn de subregio’s 
            Zaanstreek-Waterland en Amsterdam. Dit is het gebiedsniveau waarop we de 
            kwantatieve en/of kwalitatieve behoefte bepalen. Als plan ${state.planNaam} buiten 
            BSG ligt, vindt op dit schaalniveau ook de afweging van alternatieven binnen 
            BSG plaats.
            `)
        }
    },
    '3.4': {
        title: 'Voorziet het plan in een behoefte?',
        inputType: select,
        additionalInfo: [{
            text: 'Klik hier voor de toelichting van de woningbouwbehoefte.',
            targetKey: '2.3.1',
        }],
        options: [{
                text: `Voorziet het plan in een kwantitatieve en/of kwalitatieve 
                    behoefte?`,
                targetKey: '3.4.1',
            }, {
                text: `Voorziet het plan alleen in een kwalitatieve behoefte en 
                    geen kwantitatieve?`,
                targetKey: '3.4.2',
            }, {
                text: `Voorziet het plan niet in een kwalitatieve of kwantitatieve 
                    behoefte? Dan moet het plan geschrapt worden of het programma 
                    worden aangepast.`,
            }
        ]
    },
    '3.4.1': {
        title: `Voorziet het plan in een kwantitatieve woningbehoefte?`,
        inputType: textInput,
        additionalInfo: [{
            text: 'Klik hier voor de toelichting van de woningbouwbehoefte.',
            targetKey: '2.3.1',
        }],
        options: [{
            text: `Vul in: Hoeveel woningen bedraagt de additionele woningvraag 
                in het verzorgingsgebied?`,
            stateRef: 'x'
        }, {
            text: `Vul in: Hoeveel woningen bedraagt het harde planaanbod in 
                het verzorgingsgebied?`,
            stateRef: 'y'
        }],
        targetKey: '3.4.2',
        append: (state) => {
            const currentYear = new Date().getFullYear();
            const x = +state.x;
            const y = +state.y;
            const z = x - y;
            
            return (`
            Plan ${state.planNaam} voorziet in ${state.woningAantal} woningen. In het ruimtelijk 
            verzorgingsgebied (Zaanstreek-Waterland & Amsterdam) is sprake van een kwantitatieve 
            additionele behoefte van ${z} woningen voor de periode 
            ${currentYear + '-' + (currentYear + 10)}. 
            Dit blijkt uit een confrontatie van de provinciale woningbehoefteprognose met het 
            harde planaanbod.
            • De additionele woningvraag in het verzorgingsgebied bedraagt ${x} woningen.
            • Het harde planaanbod in het verzorgingsgebied bedraagt ${y} woningen.
            • De resterende behoefte die hieruit voortvloeit is ${z} woningen.
            • Plan ${state.planNaam} telt met ${state.woningAantal} woningen minder woningen dan de resterende behoefte, namelijk ${z} woningen.
            • Kortom, plan ${state.planNaam} voorziet in een kwantitatieve behoefte.
            `)
        }
    },
    '3.4.2': {
        title: 'Voorziet het plan in een kwalitatieve woningbehoefte?',
        inputType: textInput,
        additionalInfo: [{
            text: 'Klik hier voor een voorbeeld',
            targetKey: 'custom3.4.2',
        }],
        options: [{
            text: `De kwalitatieve onderbouwing is maatwerk. Beschrijf hier de kwalitatieve
                woningbehoefte en gebruik bovenstaande als voorbeeld.`,
            stateRef: 'kwalitatieveOnderbouwing'
        }],
        targetKey: '3.5',
        append: (state) => state.kwalitatieveOnderbouwing
    },
    '3.5': {
        title: 'Ligt het plan binnen bestaand stedelijk gebied?',
        inputType: select,
        additionalInfo: [{
            text: `Klik hier voor de definitie van bestaand stedelijk gebied (BSG) en 
                hoe u dit moet lezen.`,
            targetKey: '2.4',
        }],
        options: [{
            text: `Ligt uw plan binnen BSG? U hoeft dan geen alternatieven binnen BSG
                af te wegen. Uw plan ligt immers al binnen BSG.`,
            targetKey: '3.5.1',
        }, {
            text: `Ligt uw plan buiten BSG, maar kunt u motiveren dat er binnen BSG 
                geen geschikte en/of beschikbare plekken voorhanden zijn?`,
            targetKey: '3.5.2'
        }, {
            text: `Ligt uw plan buiten BSG en zijn er geschikte en of beschikbare 
                alternatieven binnen BSG voorhanden? Overweeg een dergelijke locatie 
                voor uw plan of – als u dat niet wilt of kunt – pas het plan en programma 
                aan, zodat het alsnog past bij de plek en locatiekeuze buiten BSG legitiem is.`
        }]
    },
    '3.5.1': {
        inputType: directAppend,
        targetKey: 'end',
        append: (state) => {
            return(`
            Het plangebied ligt binnen BSG. Het plan ligt binnen het bestaand stedelijk weefsel 
            van ${state.plaatsNaam} en/of het vigerende bestemmingsplan ${state.vigerendPlan} maakt 
            reeds een stedelijke functie mogelijk. Ook op dit aspect voldoet de ontwikkeling dus 
            aan de Ladder. 
            `)
        }
    },
    '3.5.2': {
        title: 'Plan ligt buiten BSG, maar binnen BSG zijn geen geschikte/beschikbare alternatieven.',
        inputType: textInput,
        options: [{
            text: `Geef een (korte) opsomming van de redenen waarom er geen alternatieve 
                locaties voorhanden zijn. Bijvoorbeeld: technisch, juridisch, qua oppervlakte, 
                qua kosten, qua omgevingskwaliteit.`,
            stateRef: 'beschikbaarheidsReden'
        }],
        targetKey: 'end',
        append: (state) => {
            return (`
            Plan X ligt buiten het bestaand stedelijk weefsel van ${state.plaatsNaam} en/of het 
            vigerende bestemmingsplan ${state.vigerendPlan} maakt nog geen stedelijke functie(s) mogelijk.

            Uit een alternatievenafweging blijken echter geen locaties binnen BSG geschikt en/of beschikbaar 
            (te maken) als alternatief voor de hier beoogde locatie. Er zijn geen alternatieve locaties 
            binnen BSG voorhanden en/of deze zijn ${state.beschikbaarheidsReden} niet redelijkerwijs 
            geschikt te maken als alternatief voor de nu beoogde locatie.  Kortom, bij gebrek aan reële 
            alternatieven binnen BSG is de voorliggende locatie buiten BSG het meest geschikt, en voldoet 
            daarmee aan de Ladder.
            `)
        }
    }

};