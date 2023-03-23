"use strict";
const prettyPrintWilderTyped = (users) => {
    return users.map((user) => `${user.name} is ${user.age} years old`);
};
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", age: 31, birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
const messages = prettyPrintWilderTyped(wilders);
console.log(messages);
