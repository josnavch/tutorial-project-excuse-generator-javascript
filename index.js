let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

let item_who = who[Math.floor(Math.random() * who.length)];
let item_action = action[Math.floor(Math.random() * action.length)];
let item_what = what[Math.floor(Math.random() * what.length)];
let item_when = when[Math.floor(Math.random() * when.length)];

document.getElementById("excuse").innerHTML = item_who +" "+ item_action +" "+ item_what +" "+ item_when;


console.log(item_who +" "+ item_action +" "+ item_what +" "+ item_when);