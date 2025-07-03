// let obj = {
//      a : 1,
//      b:" HArry"
// }

//  console.log(obj)

//   let animal ={
//     eats : true
//   };

//    let rabbit={
//     jumps: true
//    };
//    rabbit._proto_= animal;// sets rabbit .[prototype]] = animal



class animal {
    constructor(name) {
        this.name = name
        console.log(" object is created")
    }

    eats() {
        console.log(" kah raha hu")
    }
    jumps() {
        console.log(" kood raha hu")
    }
}

class Lion extends animal {
    constructor(name) {
        super(name)
        console.log(" object is created and he is a Lion")
    }

    eats() {
        super.eats()
        console.log("kha raha ho shera")
    }
}

let a = new animal(" bunny");
console.log(a)

let l = new Lion(" shera")
console.log(l)