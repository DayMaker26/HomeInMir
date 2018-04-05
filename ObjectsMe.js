let person = {
  name: 'Garrett',
  age: 27,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM'
};
person.hobbies = [ 'Music', 'Fishing', 'Druidcraft'
];
console.log(person['hobbies']);
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
