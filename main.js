// Descrizione:
// sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
// Consigli del giorno:
// Questo esercizio richiede un po' di ricerca ma anche un po' di domande che accompagnano l'uomo da tempo immemore:
// Da quante ore è composto un giorno?
// Da quanti minuti è composta un'ora?
// Da quanti secondi è composto un minuto?
// Da quanti millisecondi è composto un secondo?
// Quanti millisecondi mi separano da domani alle 9:30?
// Esiste un oggetto JS in grado di gestire le date?
// Esistono dei metodi per trasformare una data in millisecondi?


const secondiMancanti = document.getElementById('secondi')
const minutiMancanti = document.getElementById('minuti')
const oreMancanti = document.getElementById('ore')
const giorniMancanti = document.getElementById('giorni')

function aggiornaCountdown() {
    const data = new Date()
    const dataDomani = new Date('2024-01-20T09:30:00')
    let differenza = dataDomani - data

    let oreM = Math.trunc(differenza / (60 * 1000 * 60))
    
    let minutim = Math.trunc((differenza % (60 * 1000 * 60)) / (1000 * 60))
    
    let secondiM =Math.trunc((differenza % (60 * 1000)) / 1000)
    if (differenza <= 0) {
        clearInterval(intervalloCountdown);
    }else{
        oreMancanti.innerText = oreM;
        minutiMancanti.innerText = minutim;
        secondiMancanti.innerText = secondiM;    
    }
}

// Aggiorna il countdown ogni secondo
let intervalloCountdown = setInterval(aggiornaCountdown, 1000)

