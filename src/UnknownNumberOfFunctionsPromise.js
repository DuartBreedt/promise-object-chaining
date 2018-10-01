const promiseFunctions = require("./PromiseFunctions");

module.exports = {
  start: function () {
    let promise = Promise.resolve(1);

    for (let i = 0; i < 10; i++) {
      promise = promise.then((data) => promiseFunctions.incrementorFunction(data));
    }

    promise = promise.then(() => { console.log("All Done!") });
  }
}