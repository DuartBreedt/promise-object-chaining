const promiseFunctions = require("./PromiseFunctions");

module.exports = {
  start: function () {
    Promise.all([
      promiseFunctions.printerFunction("All"),
      promiseFunctions.printerFunction("Mixed"),
      promiseFunctions.printerFunction("Up")
    ]).then(results => {
      console.log(results);
    }, (errors) => {
      console.log(errors);
    });
  }
}