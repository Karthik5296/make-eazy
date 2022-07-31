let heightMark="1.69";
let massMark="78";
let bmiMark= massMark / heightMark ** 2;

console.log(bmiMark);

let heightJohn="1.95";
let massJohn="92";
let bmiJohn= massJohn / heightJohn ** 2;

console.log(bmiJohn);

if (bmiMark > bmiJohn){
    console.log(`Mark's BMI ${bmiMark} is higher than John's BMI ${bmiJohn}`);
} else {
    console.log(`John's BMI ${bmiJohn} is higher than Mark's BMI ${bmiMark}`);
}


const continent= "Asia";
const country="India";
let population="112345664";

if(population>33000000){
    console.log(`Indias population is above average`);
} else{
    console.log(`India's population is below average`);
}
let firstHalfPopulation = population / 2 ;

console.log(firstHalfPopulation);

let populationFinland="6000000";
console.log(population>populationFinland);

let avgCountryPopulation ="33000000";
console.log(population<avgCountryPopulation);

console.log(`${country} is in ${continent}, and its ${population} people speak Hindi`);



const age = 1;

if (age >= 18){
    console.log(`Sarah can get Driving Licence, since she is ${age} years old`)
} else {
    const yearsLeft=18-age;
    console.log(`Sarah is too old for getting Driving Licence.It takes ${yearsLeft} years to get it`)
}


