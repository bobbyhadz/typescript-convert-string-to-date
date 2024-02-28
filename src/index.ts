export {};

// EXAMPLE 1 - Convert a String to a Date object in TypeScript

const str = '2024-07-21';

const date = new Date(str);
console.log(date); // 👉️ 2024-07-21T00:00:00.000Z

console.log(date.toDateString()); // 👉️ Sun Jul 21 2024

// ---------------------------------------------------

// // EXAMPLE 2 - Make sure your Date string is valid

// const str = '07_21_2024';

// const date = new Date(str);

// console.log(date); // 👉️ Invalid Date

// ---------------------------------------------------

// // EXAMPLE 3 - Getting date components from a date string

// const str = '07/21/2024';

// const [month, day, year] = str.split('/');

// console.log(month); // 👉️ "07"
// console.log(day); // 👉️ "21"
// console.log(year); // 👉️ "2024"

// const date = new Date(+year, +month - 1, +day);

// console.log(date); // 👉️ 2024-07-20T21:00:00.000Z

// ---------------------------------------------------

// // EXAMPLE 4 - Getting date and time components from a date-time string

// const str = '07/21/2024 04:24:37';

// const [dateComponents, timeComponents] = str.split(' ');

// console.log(dateComponents); // 👉️ "07/21/2024"
// console.log(timeComponents); // 👉️ "04:24:37"

// const [month, day, year] = dateComponents.split('/');
// const [hours, minutes, seconds] = timeComponents.split(':');

// const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);

// // 👇️ Sun Jul 21 2024 04:24:37
// console.log(date);

// ---------------------------------------------------

// // EXAMPLE 5 - Getting an ISO-formatted date

// const str = '07/21/2024 04:24:37';

// const [dateComponents, timeComponents] = str.split(' ');

// console.log(dateComponents); // 👉️ "07/21/2024"
// console.log(timeComponents); // 👉️ "04:24:37"

// const [month, day, year] = dateComponents.split('/');
// const [hours, minutes, seconds] = timeComponents.split(':');

// const date = new Date(+year, +month - 1, +day, +hours, +minutes, +seconds);

// // 👇️ Sun Jul 21 2024 04:24:37
// console.log(date);

// // 👇️ "2024-07-21T01:24:37.000Z"
// console.log(date.toISOString());

// ---------------------------------------------------

// // EXAMPLE 6 - Convert a String to a Date in TypeScript using date-fns

// import { parse } from 'date-fns';

// const str = '09-24-2024 09:44:21';

// const date = parse(str, 'MM-dd-yyyy hh:mm:ss', new Date());

// console.log(date); // 👉️ 2024-09-24T06:44:21.000Z

// ---------------------------------------------------

// // EXAMPLE 7 - Convert a String to a Date in TypeScript using moment.js

// import moment from 'moment';

// const str = '09-24-2024 09:44:21';

// const date = moment(str, 'MM-DD-YYYY hh:mm:ss').toDate();

// console.log(date); // 👉️ 2024-09-24T06:44:21.000Z
