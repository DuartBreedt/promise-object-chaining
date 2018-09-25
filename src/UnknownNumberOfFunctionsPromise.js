
// CLASS DECLARATION
function UnknownNumberOfFunctionsPromise() {

  this.start = function() {

    thisVar = this;

    let promise = Promise.resolve(1);

    for (let i = 0; i < 10; i++) {
      promise = promise.then((data) => thisVar.functionOne(data));
    }

    promise = promise.then(() => { console.log("All Done!") });
  }

  this.functionOne = function(input) {
    return new Promise(function (resolve) {

      console.log("functionOne entered: " + input);

      // Demonstrating synchronous calls
      setTimeout(function(){

        resolve(input + 1);

      }, 1000);

    });
  }
}