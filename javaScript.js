alert("hello");

var database = [
    {
        username: "waqar",
        password: "123"
    },
    {
        username: "ahmed",
        password: "123"
    },
    {
        username: "ali",
        password: "123"
    }
];

var newsFeed = [
    {
        username: "waqar",
        timeline: "hello 0"
    },
    {
        username: "ahmed",
        timeline: "hello 1"
    },
    {
        username: "ali",
        timeline: "hello 2"
    }
]

function isUserValid(username, password) {
    for (var i = 0; i < database.length; i++) {
        if (database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}


function signIn(name, pass) {
    if (isUserValid(name, pass)) {
        console.log(newsFeed);
    } else {
        alert("wrong password");
    }


    // if (name === database[0].username && pass === database[0].password) {
    //     console.log(newsFeed);
    //     console.log("hello");
    // } else {
    //     alert("your password or username is wrong");
    // }
}


var userNamePrompt = prompt("your username");
var passwordPrompt = prompt("your password");


signIn(userNamePrompt, passwordPrompt)