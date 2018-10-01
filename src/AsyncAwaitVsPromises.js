
// Classic Promises
this.classicSyncPromises = function() {
    asyncCall(1).then((resultOne) => {
        asyncCall(2).then((resultTwo) => {
            asyncCall(3).then((resultThree) => {
                let sum = resultOne + resultTwo + resultThree;
                console.log(`classicSyncPromises:  ${sum}`);
            });
        });
    });
}

this.classicAsyncPromises = function() {
    Promise.all({ one: asyncCall(1), two: asyncCall(2), three: asyncCall(3) }).then((result) => {
        let sum = result.one + result.two + result.three;
        console.log(`classicAsyncPromises:  ${sum}`);
    });
}

// AsyncAwait
this.syncAwait = async function() {
    let sum = await asyncCall(1);
    sum += await asyncCall(2);
    sum += await asyncCall(3);
    console.log(`syncAwait:  ${sum}`);
}

this.asyncAwait = async function() {
    let result = await Promise.all([asyncCall(1), asyncCall(2), asyncCall(3)]);
    let sum = result[0] + result[1] + result[2];
    console.log(`asyncAwaitClassicPromises:  ${sum}`);
}

// Function to run
const asyncCall = function(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`CALL ${time}`);
            resolve(time);
        }, time * 1000);
    });
}