
// CLASS DECLARATION
function MultipleAsyncPromise() {

  this.start = function() {

    Promise.all([this.functionOne("All"), this.functionTwo("Mixed"), this.functionThree("Up")]).then( results => {

      console.log(results);
      
    }, (errors) => {

      console.log(errors);

     });

  }

   this.functionOne = function(input) {

    return new Promise(function (resolve) {

      console.log("functionOne entered");

      if(input != null && input != "") {

        // Demonstrating synchronous calls
        setTimeout(function(){

          console.log("functionOne received good input");
          resolve(input);

        }, 1500);

      } else
        reject(Error("functionOne broke"));

    });
  }

  this.functionTwo = function(input) {

    return new Promise(function (resolve, reject) {

      console.log("functionTwo entered");

      if(input != null && input != "") {

        // Demonstrating synchronous calls
        setTimeout(function(){

          console.log("functionTwo received good input");
          resolve(input);

        }, 500);

      } else
        reject(Error("functionTwo broke"));

    });

  }

  this.functionThree = function(input) {
    return new Promise(function (resolve, reject) {

      console.log("functionThree entered");

      if(input != null && input != "") {

        // Demonstrating synchronous calls
        setTimeout(function(){

          console.log("functionThree received good input");
          resolve(input);

        }, 1000);

      } else
        reject(Error("functionThree broke"));

    });

  }

}