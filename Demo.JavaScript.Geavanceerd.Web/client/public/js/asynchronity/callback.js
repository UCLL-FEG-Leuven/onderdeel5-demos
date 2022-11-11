setTimeout(() => {
    console.log("Callback: dit wordt gelogd na 3 seconden.");
    setTimeout(() => {
        console.log("Callback: dit wordt vervolgens gelogd na 5 seconden.");
        setTimeout(() => {
            console.log("Callback: en uiteindelijk wordt dit gelogd na nog eens 2 seconden.");
        }, 2000);
    }, 5000)
}, 3000);