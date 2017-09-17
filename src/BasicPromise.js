
// CLASS DECLARATION
function BasicPromise() {

  this.start = function() {

    this.functionOne()
    .then(this.functionTwo)
    .then(this.functionThree)
    .then( (result) => {

      console.log(result);
      
    }, (error) => {

      console.log(error);

    });

  }

  this.functionOne = function() {

    return new Promise(function (resolve) {

      console.log("functionOne entered");

      // Demonstrating synchronous calls
      setTimeout(function(){

        var username = "Morty";
        resolve(username);

      }, 1000);

    });
  }

  this.functionTwo = function(input) {

    return new Promise(function (resolve, reject) {

      var username = "Rick";

      console.log("functionTwo entered");

      if(input != null && input != "") {

        // Demonstrating synchronous calls
        setTimeout(function(){

          console.log("functionTwo received good input");
          resolve({ characterOne: username, characterTwo: input });

        }, 1000);

      } else
        reject(Error("functionTwo broke"));

    });

  }

  this.functionThree = function(input) {
    return new Promise(function (resolve, reject) {

      console.log("functionThree entered");

      if(input.characterOne != null && input.characterOne != "" && input.characterTwo != null && input.characterTwo != "" ) {

        // Demonstrating synchronous calls
        setTimeout(function(){

          console.log("functionThree received good input");
          resolve(input.characterOne+" And "+input.characterTwo+": Season Three!");

        }, 1000);

      } else
        reject(Error("functionThree broke"));

    });

  }

}