/* Q/23: Conditional Tests: Write a series of conditional tests. Print a statement describing
 each test and your prediction for the results of each test. Your code should look something like this:*/

 let car: string = 'subaru';

 console.log("\n5 tests evaluated to true :");

 console.log("Is car == 'subaru'? I predict True.");
 console.log(car ==='subaru');

 console.log("Is car != 'toyota'? I predict True.");
 console.log(car !== 'toyota');

 console.log("Is the length of car > 4? I preict True.");
 console.log(car.length > 4);

 console.log("Is the length of car <= 6? I predict True.");
 console.log(car.length <= 6);

 console.log("Does car start with 's'? I predict True.");
 console.log(car.startsWith('s'));

 console.log("\n5 tests evaluate to False :");

 console.log("Is car == 'honda'? I predict False.");
 console.log(car === 'honda');

 console.log("Is car in uppercase? I predict False.");
 console.log(car.toUpperCase() === car);

 console.log("Is car === 'Subaru'? I predict False.");
 console.log(car === 'Subaru');

 console.log("Is car == 'Audi'? I predict False.");
 console.log(car === 'Audi');

 console.log("Is the length of car === 7 ? I predict False.");
 console.log(car.length === 7);