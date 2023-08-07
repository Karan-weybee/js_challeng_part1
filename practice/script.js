// LECTURE: Values and Variables
// 1. Declare variables called 'country', 'continent' and 'population' and 
// assign their values according to your own country (population in millions)
// 2. Log their values to the console

var country ="india";
var continent = 'asia';
var population ='5000000';
console.log(`country is ${country} and continent is ${continent} and population is ${population}`);

// LECTURE: Data Types
// 1. Declare a variable called 'isIsland' and set its value according to your 
// country. The variable should hold a Boolean value. Also declare a variable
// 'language', but don't assign it any value yet
// 2. Log the types of 'isIsland', 'population', 'country' and 'language'
// to the console

isIsland=false;
var language =null;
console.log(`isIsland is ${isIsland} and population is ${population} country is ${country} and language is ${language}`);

// LECTURE: let, const and var
// 1. Set the value of 'language' to the language spoken where you live (some 
// countries have multiple languages, but just choose one)
// 2. Think about which variables should be const variables (which values will never 
// change, and which might change?). Then, change these variables to const.
// 3. Try to change one of the changed variables now, and observe what happens

language ="Gujrati";
const name="karan";
// name = "jay";

// LECTURE: Basic Operators
// 1. If your country split in half, and each half would contain half the population, 
// then how many people would live in each half?
// 2. Increase the population of your country by 1 and log the result to the console
// 3. Finland has a population of 6 million. Does your country have more people than 
// Finland?
// 4. The average population of a country is 33 million people. Does your country 
// have less people than the average country?
// 5. Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million 
// people speak portugues

var country1Population=population/2;
var country2Population=population/2;

population++;
console.log(`population is ${population}`);

if(population > 6000000){
    console.log("population is lower than finland");
}
else{
    console.log("population is higher than finland");
}

var popu_avg = population>33000000 ? "greater then " : "less than ";
console.log(`${popu_avg}`);

console.log(`${country} is in ${continent}, and its ${population/1000000} million people speak ${language}`);

// LECTURE: Strings and Template Literals
// 1. Recreate the 'description' variable from the last assignment, this time 
// using the template literal syntax

console.log(`${country} is in ${continent}, and its ${population/1000000} million people speak ${language}`);

// LECTURE: Taking Decisions: if / else Statements
// 1. If your country's population is greater that 33 million, log a string like this to the 
// console: 'Portugal's population is above average'. Otherwise, log a string like 
// 'Portugal's population is 22 million below average' (the 22 is the average of 33 
// minus the country's population)
// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to origina

if(population > 33000000){
    console.log(`${country}'s population is above average`);
}
else{
    
    console.log(`${country}'s population is below average`);
}

// LECTURE: Type Conversion and Coercion
// 1. Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
// 2. Execute the operations to check if you were righ

console.log('9' - '5');
console.log( '19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);

// LECTURE: Logical Operators
// 1. Comment out the previous code so the prompt doesn't get in the way
// 2. Let's say Sarah is looking for a new country to live in. She wants to live in a 
// country that speaks english, has less than 50 million people and is not an 
// island.
// 3. Write an if statement to help Sarah figure out if your country is right for her. 
// You will need to write a condition that accounts for all of Sarah's criteria. Take 
// your time with this, and check part of the solution if necessary.
// 4. If yours is the right country, log a string like this: 'You should live in Portugal :)'. If 
// not, log 'Portugal does not meet your criteria :('
// 5. Probably your country does not meet all the criteria. So go back and temporarily 
// change some variables in order to make the condition true (unless you live in 
// Canada :D

if(language=="english" && population < 55000000){
       console.log('You should live in portugal');
}
else{
    console.log(`${country} not meet your criteria`);
}

// LECTURE: The switch Statement
// 1. Use a switch statement to log the following string for the given 'language':
// chinese or mandarin: 'MOST number of native speakers!'
// spanish: '2nd place in number of native speakers'
// english: '3rd place'
// hindi: 'Number 4'
// arabic: '5th most spoken language'
// for all other simply log 'Great language too :D'

switch(language){
    case "mandarin":
    case "chinese": console.log("Most popular of native speak"); break;
    case "english" : console.log("native speaker"); break;
    case "hindi" : console.log("number 4");
    case "arebik" : console.log("5th most popular language"); break;
    default : console.log("Great language to d");

}

// LECTURE: The Conditional (Ternary) Operator
// 1. If your country's population is greater than 33 million, use the ternary operator 
// to log a string like this to the console: 'Portugal's population is above average'. 
// Otherwise, simply log 'Portugal's population is below average'. Notice how only
// one word changes between these two sentences!
// 2. After checking the result, change the population temporarily to 13 and then to 
// 130. See the different results, and set the population back to origina

var popu_avg1 = population>33000000 ? "greater then " : "less than ";
console.log(`${popu_avg}`);
