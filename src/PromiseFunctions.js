this.functionOne = function () {
    return new Promise(function (resolve, reject) {
        console.log("functionOne entered");
        const username = "Unicorn";

        setTimeout(function () {
            console.log("functionOne Timeout Ended");
            resolve(username);
        }, 1000);
    });
}

this.functionTwo = function (input) {
    return new Promise(function (resolve, reject) {
        console.log("functionTwo entered");
        const username = "Charlie";

        if (input) {
            setTimeout(function () {
                console.log("functionTwo Timeout Ended");
                resolve({ firstWord: username, secondWord: input });
            }, 1000);
        } else {
            reject(Error("functionTwo broke"));
        }
    });

}

this.functionThree = function (input) {
    return new Promise(function (resolve, reject) {
        console.log("functionThree entered");

        if (input.firstWord && input.secondWord) {
            setTimeout(function () {
                console.log("functionThree Timeout Ended");
                resolve(input.firstWord + " The " + input.secondWord);
            }, 1000);
        } else {
            reject(Error("functionThree broke"));
        }
    });
}

this.printerFunction = function (input) {
    return new Promise(function (resolve, reject) {
        console.log("Running " + input + " function.");
        setTimeout(function () {
            console.log(input + " Timeout Ended");
            resolve(input);
        }, 1000);
    });
}

this.incrementorFunction = function (input) {
    return new Promise(function (resolve) {

        console.log("incrementorFunction entered: " + input);

        setTimeout(function () {
            resolve(input + 1);
        }, 200);
    });
}