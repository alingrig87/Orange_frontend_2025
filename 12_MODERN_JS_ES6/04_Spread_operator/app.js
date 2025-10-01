const a = [1, 2];
const b = [3, 4, 5, 6];

const c = [...a, 2, 8, 9, ...b];
console.log(c);

const defaultValues = { x: 0, y: 0 };
const values = { y: 10, z: 5 };

const config = { ...defaultValues, ...values };
console.log(config);
