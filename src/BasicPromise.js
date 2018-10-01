const promiseFunctions = require("./PromiseFunctions");

module.exports = {
  start: function () {
    promiseFunctions.functionOne()
      .then(promiseFunctions.functionTwo)
      .then(promiseFunctions.functionThree)
      .then((result) => {

        console.log(result);

      }, (error) => {

        console.log(error);

      });
  }
}