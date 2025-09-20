// object and prototype

// const employee = {
//  calctax(){

//     console.log("tax  is 10%");

//  },

// //  calctax2 : function(){

// //     console.log(" tax rate is increase by 105");
// //  }
// };

// const karanArjun = {
//     salary : 50000,
//      calctax(){

//     console.log("tax  is 20%");

//  },

// }
// const karanArjun1 = {
//     salary : 50000,

// }
// const karanArjun2= {
//     salary : 50000,

// }
// const karanArjun3 = {
//     salary : 50000,

// }
// karanArjun.__proto__ = employee;







//class

// class Toyotacar {

//     start(){
//         console.log("Starts")
//     }
//     stop()
//     {
//         console.log("Stops")


//     }

//  setBrand (brand) {
//     this.brandname = brand;
//  }


// }



//  let fortuner = new Toyotacar ();

//   fortuner.setBrand("fortuner")

//   let lexus = new Toyotacar();

//   lexus.setBrand("lexus")

// constructer

//   which is automatically involed ny new





//   constructer

//   which is automatically involed ny new
// class Toyotacar {

//      constructor(brand,mileage){
//         console.log("Creating new objects")
//         this.brand = brand;
//         this.mileage = mileage;
//      }


//     start(){
//         console.log("Starts")
//     }
//     stop()
//     {
//         console.log("Stops")


//     }

// //  setBrand (brand) {
// //     this.brandname = brand;
// //  }
// }

//  let fortuner = new Toyotacar ("fortuner",10);//constructer call huna aafai
// console.log(fortuner);
//   let lexus = new Toyotacar("lexus",12);
// console.log(lexus)



// imheritance in js
// imheritance is passing down properties & method form parent class to child class/

// class parent {
//      hello(){
//         console.log("hello")
//      }
// };
// class child extends parent{}

// let obj = new child();

//  class person {
//       constructor(){
//  this.speceise = "homo Sapains"
//     }

//     eat (){
//         console.lo("eat")

//     }
//     sleep(){
//         console.log(selpp);
//     }

// work (){
//      console.log(" Alomost vaye pani la hai")
// }

// }


//  class Engineer  extends person{

//      wrok (){

//          console.log("solve problems, buld something");



//         }}


//         class Docter  extends person


//  {
//      wrok (){
//     console.log("solve problems almost done, ");

//      }
//  }
/*


 console vitra to trail ho jasma aauta object banaya ra tesko properties extend garaya xa person class bata aru ma
 let kishorobj = new Engineer();

 let p1 = new person();
undefined
p1
person {speceise: 'homo Sapains'}
speceise
: 
"homo Sapains"
[[Prototype]]
: 
Object
let e1 = new Engineer();
undefined
e1
Engineer {speceise: 'homo Sapains'}
speceise
: 
"homo Sapains"
[[Prototype]]
: 
person*/



/* super mathod
 class person {
      constructor(){
        console.log("create a person")
 this.speceise = "homo Sapains"
    }

    eat (){
        console.lo("eat")

    }
    
}
  

 class Engineer  extends person{
  
    constructor(){

         console.log("create a constructure")
         super();
        this.branch ="branch";
        console.log("exit a constructure")
    }
     wrok (){
         
         console.log("solve problems, buld something");
  
        
        
        }}


        let objeng = new Engineer ("bio-eng")
      
 */
class person {
    constructor(name) {
        this.species = "homo sapiens"
        this.name = "kishor"

    }

    eat() {
        console.lo("eat")

    }

}


class Engineer extends person {

    constructor(name) {


        super(name);

        // this.name ="kishor";

    }

    work() {
        super.eat();

        console.log("solve problems, buld something");



    }
}


let objeng = new Engineer("bio-eng")

