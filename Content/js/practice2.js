let users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "NA", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HU", age: 24 }
];

function filter(list, predicate) {
    let newList = [];
    for (let i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) newList.push(list[i]);
    }
    return newList;
}

function map(list, iteratee) {
    let newList = [];
    for (let i = 0, len = list.length; i < len; i++) {
        newList.push(iteratee(list[i]));
    }
    return newList;
}

function logLength(value) {
    console.log(value.length);
    return value;
}

const bvalues = key => list => map(list, v => v[key]);
const ages = bvalues('age');
const names = bvalues('name');
const under30 = u => u.age < 30;
const over30 = u => u.age >= 30;

/* function findById(list, id) {
    for (let i = 0, len = list.length; i < len; i++) {
        if (list[i].id == id) return list[i];
    }
}

function findByAges(list, age) {
    for (let i = 0, len = list.length; i < len; i++) {
        if (list[i].age == age) return list[i];
    }
} 
console.log(findById(users, 3));
console.log(findByAges(users, 25)); */

function findBy(key, list, val) {
    for (let i = 0, len = list.length; i < len; i++) {
        if (list[i][key] === val) return list[i];
    }
}
console.log(findBy('id', users, 2));

//객체가 아니라 메서드로 값을 얻어야 하는 객체일 경우는?

function User(id, name, age) {
    this.getId = function() {
        return id;
    }
    this.getName = function() {
        return name;
    }
    this.getAge = function() {
        return age;
    }
}

let users2 = [
    new User(1, "ID", 32),
    new User(2, "HA", 25),
    new User(3, "BJ", 32),
    new User(4, "PJ", 28),
    new User(5, "JE", 27),
    new User(6, "JM", 32),
    new User(7, "HI", 24),
];

function find(list, predicate) {
    for (let i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) return list[i];
    }
}

console.log(map(
    filter(users2, u => u.getAge() > 30),
    u => u.getName()));

function bmatch1(key, val) {
    return obj => obj[key] === val;
}

console.log(find(users, bmatch1('id', 1)));

console.log(filter(users, bmatch1('age', 32)));
console.log(map(users, bmatch1('age', 32)));

function object(key, val) {
    let obj = {};
    obj[key] = val;
    return obj;
}
function match(obj, obj2) {
    for (let key in obj2) {
        if (obj[key] !== obj2[key]) return false;
    }
    return true;
}
function bmatch(obj2, val) {
    if (arguments.length == 2) obj2 = object(obj2, val);
    return function (obj) {
        return match(obj, obj2);
    }
}