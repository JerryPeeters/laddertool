import React from './react';

const styles = {
    title: {
        //todo
    },
    quotedText: {
        color: 'blue',
    },
}

//methods should return JSX objects

//images should be a ref to the public image files, so the clientside doesnt have to download all images at once


export const infoBlocks = {
    '2.1': () => {
        return(
            <div>
                <h1 style={styles.title}>Nieuwe stedelijke ontwikkeling (NSO)</h1>
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
                <image></image>
                <p>
                    De Ladder is van toepassing op een nieuwe stedelijke ontwikkeling. Daarvan 
                    is sprake als het nieuwe bestemmingsplan meer bebouwing mogelijk maakt, of 
                    een functiewijziging van zodanige aard en omvang is, dat daarom sprake is 
                    van een nieuwe stedelijke ontwikkeling. In de praktijk blijkt dit snel het geval. 
                    Ook moeten plannen dan voldoen aan de regionale afspraken.
                </p>
            </div>
        )
    }
}

// 2.1, 2.2, 2.2.1, 2.3.1, custom3.4.2, 2.4, 