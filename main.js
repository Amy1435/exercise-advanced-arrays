// 1. Crea una funzione safeParseJSON che prende una stringa e tenta di analizzarla come JSON.
//Se l'analisi fallisce, la funzione dovrebbe restituire null invece di generare un errore.
//Inoltre, la funzione dovrebbe stampare in console se l'analisi è stata un successo o meno.

const safeParseJSON = (stringa) => {
    let analizzazioneRiuscita = false;
    try {
        const oggetto = JSON.parse(stringa);
        const riuscito = `l'analisi e' andata a buon fine, ecco la tua stringa analizzata come JSON ${JSON.stringify(
            oggetto
        )}`;
        console.log(riuscito);
        analizzazioneRiuscita = true;
    } catch {
        return null;
    } finally {
        if (!analizzazioneRiuscita) {
            const scritto = ` l'analisi non e' andata a buon fine`;
            console.log(scritto);
        }
    }
};
// safeParseJSON(
//     '{  	"nome:"Edoardo",  	"cognome":"Rossi",  	"matricola":"S123456",  	"corsi_precedenti":2,  	"laureato":true  } '
// );

// 2. Crea una funzione chiamata logElements che prende un array e stampa in console
// ogni elemento utilizzando il metodo .forEach().

const presentation = ["I", "study", "JavaScript", "right", "now"];
const logElements = presentation.forEach((elem) => console.log(elem));

// 3. Scrivi una funzione chiamata divide che prende due parametri, dividendo e divisore.
//Se il divisore è 0, genera un nuovo errore con il messaggio "Impossibile dividere per zero".
//Altrimenti, restituisci il risultato della divisione.

const divide = (dividendo, divisore) => {
    if (divisore === 0) {
        throw new Error("Impossibile dividere per zero");
    } else {
        const divisione = dividendo / divisore;
        return divisione;
    }
};

let risultato = divide(8, 0);
// console.log(risultato);

// 4. Scrivi una funzione processNumbers che prende un array,
// convalida che contenga solo numeri e restituisce un nuovo array con ogni numero elevato al quadrato.
// Se un elemento dell'array non è un numero, genera un errore indicando a quale indice si trova il valore non numerico.

const array = [3, 5, "hello", 7, "people"];
const processNumbers = (arrayAnalizza) => {
    try {
        const primoPasso = arrayAnalizza.filter(
            (elementi) => typeof elementi === "number"
        );
        const nuovoArray = primoPasso.map((element) => {
            return element * element;
        });
        return nuovoArray;
    } catch (error) {
        throw new error();
    }
};
// console.log(processNumbers(array));
// console.log(array);

// 5. Scrivi una funzione mapWithIndex che prende un array e restituisce un nuovo array
// in cui ogni elemento è una stringa che
//contiene l'elemento originale e il suo indice, formattato come "Elemento [indice]: [elemento]".

const mapWithIndex = (arrayDaModificare) => {
    const arrayString = arrayDaModificare.map((elemento) => {
        return String(elemento);
    });
    const nuovoArray = arrayString.map((element) => {
        const index = arrayString.indexOf(element);
        console.log(`Elemento ${index}: ${element}`);
    });
};
// mapWithIndex(array);

// 6. Crea una funzione removeShortWords che prende un array di stringhe e una lunghezza minima.
//Dovrebbe restituire un nuovo array contenente solo le stringhe che sono più lunghe della lunghezza minima.
//Usa .filter() e assicurati che la funzione non tenga conto delle maiuscole e minuscole.

const removeShortWords = (array, lunghezzaMinima) => {
    const newArray = array.map((element) => element.toLowerCase());
    const lengthArray = newArray.filter(
        (elemento) => elemento.length > lunghezzaMinima
    );
    return lengthArray;
};
console.log(removeShortWords(["Pera", "BANANA", "mela", "ananas"], 4));
