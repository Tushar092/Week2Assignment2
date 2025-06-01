function outerFunction () {
    let message = "Hello Javascript";

    return function logMessage () {
        console.log(message);
    }
}

let logFunction = outerFunction();

logFunction();