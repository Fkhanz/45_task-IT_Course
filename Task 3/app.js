"use strict";
/*Name Cases: Store a person’s name in a variable, and then print that person’s name
 in lowercase, uppercase, and titlecase*/
const personName = "fAizan kHan";
console.log(`Name in Uppercase : ${personName.toUpperCase()}`);
console.log(`Name in Lowerrcase : ${personName.toLowerCase()}`);
// for title case :
let step1 = personName.split(' ');
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.
    substr(1).toLowerCase());
let step3 = step2.join(' ');
console.log(`name in title case: ${step3}`);