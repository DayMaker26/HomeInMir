let cities = ['Nashville', 'Charlotte', 'Asheville', 'Austin', 'Boulder'];

let nums = [1, 50, 75, 200, 350, 525, 1000];


cities.forEach(city => console.log('Have you visited ' + city + '?'));


let longCities = cities.filter(city => city.length > 7);


let smallerNums = nums.map(num => num - 5);


nums.some(num => num < 0);
