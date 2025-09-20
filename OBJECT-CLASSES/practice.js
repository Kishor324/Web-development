
// let DATA = "Secret information";

// class user {
//     constructor(name, email){
//         this.name = "name"
//         this.email= "email"
//     }

//      viewData(){
//         console.log("data =",DATA);
//      }


// }


// let student1 = new user(" kishor","kishorbhatt157@WebGLUniformLocation.com");
// let student2 = new user(" kopani","kolpani111@gmail.com");

// let teachers = new user("Dean","dean@collage.com")
let DATA = "Secret information";

class user {
    constructor(name, email) {
        this.name = "name"
        this.email = "email"
    }

    viewData() {
        console.log("data =", DATA);
    }


}
class Admin extends user {

    constructor(name, email) {
        super(name, email);
    }
    editData() {
        DATA = " some new value"
    }
}

let student1 = new user(" kishor", "kishorbhatt157@WebGLUniformLocation.com");
let student2 = new user(" kopani", "kolpani111@gmail.com");

let teachers = new user("Dean", "dean@collage.com")

let admin1 = new Admin("asdcc", "admian@gmail.com")