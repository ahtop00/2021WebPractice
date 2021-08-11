let users = [
    { id: 1, name: "ID", age: 32 },
    { id: 2, name: "HA", age: 25 },
    { id: 3, name: "NA", age: 32 },
    { id: 4, name: "PJ", age: 28 },
    { id: 5, name: "JE", age: 27 },
    { id: 6, name: "JM", age: 32 },
    { id: 7, name: "HU", age: 24 }
];

/* 
    1. users 중에서 age가 30미만 인원수 출력
    2. 그들의 나이만 출력
    3. users 중에서 age가 30이상 인원수 출력
    4. 그들의 이름만 출력

let tempUsers = [];
for (let i = 0, len = users.length; i < len; i++) {
    if (users[i].age < 30) tempUsers.push(users[i]);
}
console.log(tempUsers.length);

let tempAge = [];
for (let i = 0, len = tempUsers.length; i < len; i++) {
    tempAge.push(tempUsers[i].age);
}
console.log(tempAge);

tempUsers = [];
for (let i = 0, len = users.length; i < len; i++) {
    if (users[i].age >= 30) tempUsers.push(users[i]);
}
console.log(tempUsers.length);

let tempName = [];
for (let i = 0, len = tempUsers.length; i < len; i++) {
    tempName.push(tempUsers[i].name);
}
console.log(tempName);

하지만 추상화 가능! */

function filter(list, predicate) {
    let newList = [];
    for (let i = 0, len = list.length; i < len; i++) {
        if (predicate(list[i])) newList.push(list[i]);
    }
    return newList;
}
/*실행 여부를 predicate에 위임하였다. 그럼 predicate는? -> 이름 없는 함수
predicate의 값에 따라 filter가 작동, filter 자체가 함수 외부에서 영향을 받지 않고,
내부 또한 외부에게 영향을 주지 않는다.
리팩토링의 핵심 -> 중복제거 및 의도 드러내기*/

function map(list, iteratee) {
    let newList = [];
    for (let i = 0, len = list.length; i < len; i++) {
        newList.push(iteratee(list[i]));
    }
    return newList;
}

/*
let user_under30 = filter(users, function (user) { return user.age < 30 });
console.log(user_under30.length);

let tempAge = map(user_under30, function (user) { return user.age});
console.log(tempAge);

let user_over_30 = filter(users, function (user) { return user.age >= 30 });
console.log(user_over_30.length);

let tempName = map(user_over_30, function(user) {return user.name});
console.log(tempName);
초반에 비해서 줄어들었지만 함수 중첩을 이용하면 변수 설정조차 지워버릴 수 있다.
*/

function logLength(value) {
    console.log(value.length);
    return value;
}

/*
console.log(logLength(
  map(
    filter(users, function (user) { return user.age < 30 }),
    function(user) { return user.age; })));

console.log(logLength(
  map(
    filter(users, function (user) { return user.age >= 30 }),
    function (user) { return user.name; })));
매우 매우 간결해짐, es6에선 화살표 함수를 이용할 수 있다.    
*/

/*
console.log(logLength(
  map(filter(users, user => user.age < 30), user => user.age)));

console.log(logLength(
  map(filter(users, user => user.age >= 30), user => user.name)));

//or

const under30 = u => u.age < 30;
const over30 = u => u.age >= 30;
const ages = u => u.age;
const names = u => u.name;

console.log(logLength(
    map(filter(users, under30), ages)));

console.log(logLength(
    map(filter(users, over30), names))); 
점점 미친거 같다... 마지막으로 줄여보면...    
*/

const bvalues = key => list => map(list, v => v[key]);
/*
function bvalues(key) {
    return function(list) {
       return map(list, function(v) { return v[key]; });
    }
}
*/
const ages = bvalues('age');
const names = bvalues('name');
const under30 = u => u.age < 30;
const over30 = u => u.age >= 30;

console.log(logLength(ages(filter(users, under30))));
console.log(logLength(names(filter(users, over30))));