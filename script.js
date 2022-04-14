// Remember, we're gonna use strict mode in all scripts now!
'use strict';
// prettier is an opinionated code formatter which means its makes assumptions about how good code should like
/*
// INSTALLING NODE.JS AND SETTING UP A DEV ENVIRONMENT
//SETTING UP PRETTIER AND VS CODE
// we created .prettierrc file to change doubleqoutes to singlequotes as due to prettier extension our singlequotes automatically converts to doublequotes so if we write there this then it will change to singlequotes :-
{
    "singleQuote": true // here firstly the value was false thats why it always changes to doublequotes so when we changed it to true then singlequotes will be applied
    similarly we changed "arrowParens": "always" to "arrowParens": "avoid"
}
*/

/*
const x = '23';
if (x === 23) console.log(23);

const calcAge = birthYear => 2037 - birthYear;

// we can write cl for console.log for the shortcut

console.log(calcAge(1991));
*/

/*
// USING GOOGLE, STACKOVERFLOW AND MDN
// PROBLEM 1 :
// we work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, calculate the temperature amplitude. keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - what is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
//- what's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (ampiltude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - with 2 arrays, should we implement functionality twice? NO! just merge two arrays
// - Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/*
// DEBUGGING WITH THE CONSOLE AND BREAKPOINTS
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // C) FIX BUG
    // value: Number(prompt('Degrees celsius:')), // prompt function always return string
    value: 10,
  };

  // B) FIND BUG
  console.table(measurement); // shows properties

  // console.log(measurement.value);
  // console.warn(measurement.value); // generate warning
  // console.error(measurement.value); // generate errors

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());
// we can use breakpoint from source in the chrome developer console At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values. After examining values, you can resume the execution of code (typically with a play button).

// using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 0, 5]);
console.log(amplitudeBug);
// we can use debugger in the code to debugg
*/
