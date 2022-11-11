const setTimeoutAsync = msec => {
    return new Promise((resolve) => {
        setTimeout(resolve, msec);
    }) 
};

setTimeoutAsync(15000)
    .then(() => { 
        console.log("Promise: dit wordt gelogd na 15 seconden"); 
        return setTimeoutAsync(5000);
    })
    .then(() => {
        console.log("Promise: en dit wordt gelogd na 5 seconden");
        return setTimeoutAsync(3000);
    })
    .then(() => {
        console.log("Promise: en uiteindelijk wordt dit gelogd na nog eens 3 seconden");
    });
