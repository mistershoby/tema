// let js = "amazing";
// // if (js === "amazing") alert("JavaScript");
// console.log(40+8);

// console.log('Jonas');

// let firstName = "Jonas";
// console.log(firstName);

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// console.log(myFirstJob);


// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof 'Jonas');

// javascriptIsFun = 'YES!'
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year =1991;
// console.log(typeof year);

// console.log(typeof null);


//////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////Coding Challenge #1/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// Mark and John are trying to compare their BMI (Body Mass Index), which iscalculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement bothversions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// GOOD LUCK 😀

////////////////////////////////                                   ///////////////////////////////

// let markWeight = 78, markHeight = 1.68;
// let johnWeight = 92, johnHeight = 1.95;
// let markBMI = markWeight / markHeight ** 2, johnBMI = johnWeight / johnHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI,johnBMI,markHigherBMI);


//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


// const firstName ='Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);



// const age = 15;

// if(age >= 18){
//     console.log('Sarah can start driving license 🚗');
// } else{
//     console.log("Sarah can't start driving license 😒")
//     const yearsLeft = 18 - age;
//     console.log(`She is too young. Wait another ${yearsLeft} years`)
// }


// const birthYear = 1991;
// let century;
// if(birthYear <= 2000){
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

//////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////Coding Challenge #2/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement 😉

// GOOD LUCK 😀

////////////////////////////////                                   ///////////////////////////////

// let markWeight = 78, markHeight = 1.68;
// let johnWeight = 92, johnHeight = 1.95;
// let markBMI = markWeight / markHeight ** 2, johnBMI = johnWeight / johnHeight ** 2;


// if (markBMI > johnBMI){
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI}) !`)
// } else{
//     console.log(`John's (${johnBMI}) is higher than Mark's BMI (${markBMI}) !`)
// }

//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({})); //empty object

// const money = 0;
// if (money) {
//     console.log("Dont't spend it all ;");
// } else {
//     console.log("You should get a job!"); 
// }

// const age = "18";
// if(age === 18) console.log('You just became an adult (strict)');
// if(age == 18) console.log('You just became an adult (loose)');

// const favourite = prompt("What's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);



//////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////Coding Challenge #2/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator
// to test for minimum score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

// Test data:

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK 😀
 


////////////////////////////////                                   ///////////////////////////////

//////////////////////////////////////////////////////////////// v1
// const avgDolphinsScore = (96 + 108 + 90) / 3;
// const avgKoalasScore = (88 + 91 + 110) / 3;

// if (avgDolphinsScore > avgKoalasScore) {
//     console.log(`Dolphins team has won => ${avgDolphinsScore}(Dolphins Score) > ${avgKoalasScore}(Koalas Score)`);
// } else if ( avgDolphinsScore === avgKoalasScore){
//     console.log(`Koalas team has won => ${avgKoalasScore}(Koalas Score > ${avgDolphinsScore}(Dolphins Score)`)
// } else {
//     console.log(`It's a draw => ${avgDolphinsScore}(Dolphins Score) = ${avgKoalasScore}(Koalas Score)`);
// }

//////////////////////////////////////////////////////////////// v1.1
// const avgDolphinsScore = (97 + 112 + 101) / 3;
// const avgKoalasScore = (109 + 95 + 123) / 3;

// if (avgDolphinsScore > avgKoalasScore) {
//     console.log(`Dolphins team has won => ${avgDolphinsScore}(Dolphins Score) > ${avgKoalasScore}(Koalas Score)`);
// } else if ( avgDolphinsScore < avgKoalasScore){
//     console.log(`Koalas team has won => ${avgKoalasScore}(Koalas Score > ${avgDolphinsScore}(Dolphins Score)`)
// } else {
//     console.log(`It's a draw => ${avgDolphinsScore}(Dolphins Score) = ${avgKoalasScore}(Koalas Score)`);
// } 


//////////////////////////////////////////////////////////////// v2
// const avgDolphinsScore = (97 + 112 + 80) / 3;
// const avgKoalasScore = (97 + 112 + 81) / 3;

// if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore>=100) {
//     console.log(`Dolphins team has won => ${avgDolphinsScore}(Dolphins Score) > ${avgKoalasScore}(Koalas Score)`);
// } else if (avgDolphinsScore > avgKoalasScore && avgDolphinsScore<100){
//     console.log(`It's a draw => ${avgKoalasScore}(Koalas Score > ${avgDolphinsScore}(Dolphins Score), because the score is < 100`)
// } else if ( avgKoalasScore > avgDolphinsScore && avgKoalasScore >= 100 ){
//     console.log(`Koalas team has won => ${avgKoalasScore}(Koalas Score > ${avgDolphinsScore}(Dolphins Score)`)
// } else if ( avgDolphinsScore < avgKoalasScore && avgKoalasScore < 100 ){
//     console.log(`It's a draw => ${avgKoalasScore}(Koalas Score > ${avgDolphinsScore}(Dolphins Score), because the score is < 100`)
// } else {
//     console.log(`It's a draw => ${avgDolphinsScore}(Dolphins Score) = ${avgKoalasScore}(Koalas Score)`);
// }


//////////////////////////////////////////////////////////////// v3
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas){
//     console.log('Dolphins win the trophy 🏆')
// } else if (scoreKoalas > scoreDolphins){
//     console.log('Koalas win the trophy 🏆')
// } else if(scoreDolphins===scoreKoalas){
//     console.log('Both win the trophy!')
// }
//// BONUS 1
// const scoreDolphins = (97 + 112 + 81) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100){
//     console.log('Dolphins win the trophy 🏆')
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100){
//     console.log('Koalas win the trophy 🏆')
// } else if(scoreDolphins===scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
//     console.log('Both win the trophy!')
// } else{
//     console.log('No one wins the trophy 😒')
// }
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////




// let day;
// switch (prompt (`${day}`)) {
//     case 'monday':
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break
//     case 'tuesday':
//         console.log('Prepare theory videos');
//         break
//     case 'wednesday':
//         break
//      case 'thursday':
//         console.log('Write code examples');
//         break
//     case 'friday':
//         console.log('Record videos');
//         break
//      case 'saturday':
//         break 
//      case 'sunday':
//         console.log('Enjoy the weekend :D');
//         break            
//     default:
//         console.log('Not a valid day!');
            
// }


///THE SWITCH STATEMENT CHALLENGE


// let day;
// prompt (`${day}`);

// if (day === 'monday'){
//     console.log('Plan course structure');
//      console.log('Go to coding meetup');
// } else if (day === 'tuesday'){
//     console.log('Prepare theory videos');
// }else if (day === 'wednesday' || day === 'saturday')
//     {

//     }else if (day === 'thursday'){
//         console.log('Write code examples');
//     }else if(day === 'friday'){
//         console.log('Record videos');
//     }else if(day === 'sunday'){
//         console.log('Enjoy the weekend :D');
//     }else{
//         console.log('Not a valid day!');
//     }


// const age = 23;
// age >= 18 ? console.log('I like to drink wine') : console.log('I like to drink water');

// const age = 23;
// const drink = age >= 18 ? 'wine' : 'water';
// console.log(drink);

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine';
// } else {
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`);

//////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////Coding Challenge #4/////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////


// Coding Challenge #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. 
// If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”

// Test data:
// Data 1: Test for bill values 275, 40 and 430

// Hints:
// To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// GOOD LUCK 😀


////////////////////////////////  v1                                 ///////////////////////////////

// const bill = 25
// const tip = bill <= 50 && bill >= 300 ? `Bill will be (15*${bill}/100)` : `Bill will be (20*${bill}/100)`
// console.log(tip);

////////////////////////////////  v2 Value appears in the console                                ///////////////////////////////
const bill = 275
const tip = bill <= 50 && bill >= 300 ? ((15*bill)/100) : ((20*bill)/100)
console.log(tip);
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////





















































































































































































































































































































































