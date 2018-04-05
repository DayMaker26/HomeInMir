let person = {
  name: 'Garrett',
  age: 27,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',
	sayHello() {
    return `Hello my name is ${this.name}`
},
  sayGoodbye() {
  return 'Goodbye!'
}
};
let friend = {
  name: 'Steven',
  age: 29
};
friend.sayHello = person.sayHello;
console.log(person.sayHello());
person.hobbies = [ 'Music'
];
console.log(person.hobbies);
console.log(person['name']);
console.log(person['age']);

let day = 'Thursday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);
console.log(friend.sayHello());
