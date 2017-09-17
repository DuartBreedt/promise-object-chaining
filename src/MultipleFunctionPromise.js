
// CLASS DECLARATION
function MultipleFunctionPromise() {

  this.start = function() {

    var scope = this;

    this.functionOne()
    .then(result => { this.helperFunction(); return this.functionTwo(result); })
    .then(result => { this.helperFunction(); return this.functionThree(result); })
    .then(result => {

      console.log(result);

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
    
  this.helperFunction = function() { console.log("Helper entered!"); }

}