const promiseFunctions = require("./PromiseFunctions");

module.exports = {
  start: function () {
    promiseFunctions.printerFunction("One")
      .then(() => {
        helperFunction(1);
        return promiseFunctions.printerFunction("Two");
      }).then(() => {
        helperFunction(2);
        return promiseFunctions.printerFunction("Three");
      }).then(() => {
        helperFunction(3);
        console.log("Complete");
      });
  }
}

const helperFunction = function (number) { 
  console.log(number + ": Helper entered!"); 
}