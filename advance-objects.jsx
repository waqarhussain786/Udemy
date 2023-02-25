// -------------------reference type----------------------------


// var object1 = {value: 10};
// var object2 = object1;
// var object3 = {value: 10};


// console.log(object1 === object2);
// console.log(object2 === object1);
// console.log(object1 === object3);
// console.log(this);

//--------------------context vs scope-------------------------

// const object4 = {
//     a: function () {
//         console.log(this);
//     }
// }

//---------------------instantiation----------------------------

class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`hi i am ${this.name}, i am a ${this.type}`);
    }
}
class Wizard extends Player {
    constructor(name, type) {
        super(name, type)
        console.log('wizard', this);
    }
    play() {
        console.log(`i am a ${this.type}`);
    }
}

const wizard1 = new Wizard('a', 'healer');
const wizard2 = new Wizard('b', 'dark magic');











