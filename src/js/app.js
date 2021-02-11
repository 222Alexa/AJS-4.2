import sortedHealth from './health';

const arr = [
  { name: 'лучник', health: 81 },
  { name: 'мечник', health: 13 },
  { name: 'маг', health: 67 },
];

console.log(sortedHealth(arr));
// это для того, чтобы Eslint проглотил 'sortedHealth' is defined but never used  no-unused-vars
