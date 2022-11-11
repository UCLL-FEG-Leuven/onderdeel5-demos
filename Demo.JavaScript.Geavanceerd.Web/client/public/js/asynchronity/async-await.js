// Ter info: deze file gebruikt de setTimeoutAsync functie die werd gedeclareerd in promise.js

 // Als je await gebruikt in een function, moet je die function ook declaren als async.
 // Zo weet een caller ook dat die functie moet ge-await worden.
 // Soms kan dat een uitdaging zijn voor het 'top level' -> je kan niet altijd zomaar await gebruiken daar.
 // Vandaar dat we gebruik maken van een IIFE: die kunnen we async declareren.
 // (Als je gebruik maakt van modules en/of webpack heb je dit probleem niet).
(async function() {
    await setTimeoutAsync(25000);
    console.log("async-await: dit wordt gelogd na 25 seconden");
    
    await logNa5Seconden();
    
})();

async function logNa5Seconden() {
    await setTimeoutAsync(5000);

    console.log("async-await: dit wordt gelogd na 5 seconden");    
}