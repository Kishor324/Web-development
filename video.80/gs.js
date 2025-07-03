class User {
    constructor(name) {
        //invokes the setter
        this.name = name;
    }

    get name() {
        return this._name;

    }

    set name(value) {

        if (value.length < 4) {
            console.log(" Name is to short")
            return;

        }
        this._name = value;



    }


}

let user = new User("Jonh");
console.log(user.name);
// jonh

user.name = new User("harry")// Name is too short

console.log(user.name)
