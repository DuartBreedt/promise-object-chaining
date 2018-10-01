// Promises
const basicPromise = require('./src/BasicPromise');
const multipleAsyncPromise = require('./src/MultipleAsyncPromise');
const multipleFunctionPromise = require('./src/MultipleFunctionPromise');
const unknownNumberOfFunctionsPromise = require('./src/UnknownNumberOfFunctionsPromise');

console.log("Uncomment different implementations within the index.js file to see how they behave.")

// basicPromise.start();
// multipleAsyncPromise.start();
// multipleFunctionPromise.start();
// unknownNumberOfFunctionsPromise.start();

// AsyncAwaitVsPromises
const asyncAwaitVsPromises = require('./src/AsyncAwaitVsPromises');

// asyncAwaitVsPromises.classicSyncPromises();
// asyncAwaitVsPromises.classicAsyncPromises();
// asyncAwaitVsPromises.syncAwait();
// asyncAwaitVsPromises.asyncAwait();