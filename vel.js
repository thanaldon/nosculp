// Assuming vega.isString() checks if a variable is a string
let evt1 = 'selector[attribute=value]';
let evt2 = ['item1', 'item2'];

const stream1 = vega.isString(evt1) ? vega.parseSelector(evt1, 'view') : vega.array(evt1);
const stream2 = vega.isString(evt2) ? vega.parseSelector(evt2, 'view') : vega.array(evt2);

console.log(stream1); // Outputs the parsed selector if evt1 is a string
console.log(stream2); // Outputs evt2 as an array
