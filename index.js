import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the 
following pieces of data */

//(a) Home Team name for 2014 world cup final

const finala = fifaData.filter(item => item["Year"] === 2014 && item["Stage"] === "Final")
console.log(finala[0]["Home Team Name"])

//(b) Away Team name for 2014 world cup final

const finalb = fifaData.filter(item => item["Year"] === 2014 && item["Stage"] === "Final")
console.log(finalb[0]["Away Team Name"])

//(c) Home Team goals for 2014 world cup final

const finalc =  fifaData.filter(item => item["Year"] === 2014 && item["Stage"] === "Final")
console.log(finalc[0]["Home Team Goals"])

//(d) Away Team goals for 2014 world cup final

const finald =  fifaData.filter(item => item["Year"] === 2014 && item["Stage"] === "Final")
console.log(finald[0]["Away Team Goals"])

//(e) Winner of 2014 world cup final 

const finale =  fifaData.filter(item => item["Year"] === 2014 && item["Stage"] === "Final" 
&& item["Home Team Goals"] > item["Away Team Goals"])
console.log(finale[0]["Home Team Name"])

/* Task 2: Create a function called getFinals that takes `data` as an argument and
 returns an array of objects with only finals data */

function getFinals(data) {
    const filteredTeams = data.filter(item => {
        return item["Stage"] === "Final";
    });
    return filteredTeams;
}

console.log(getFinals(fifaData));

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback 
function `getFinals`, and returns an array called `years` containing all of the years in 
the dataset */

function getYears(data, getFinalsCB) {
    return getFinalsCB(data).map(function(item){
        return item.Year;
    })
};

console.log(getYears(fifaData, getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback 
function `getFinals()` and determine the winner (home or away) of each `finals` game. 
Return the name of all winning countries in an array called `winners` */ 

function getWinners(data, getFinalsCB) {

    let winners = [];


    getFinalsCB(data).forEach(function(item){
    
        if(item["Home Team Goals"] > item["Away Team Goals"]){
            winners.push(item["Home Team Name"]);
        }
        else if(item["Home Team Goals"] < item["Away Team Goals"]){
            winners.push(item["Away Team Name"]);
        }
        else{
            winners.push(item['Win conditions']);
        }
        });
    console.log(winners);
    return winners;  
};

console.log(getWinners(fifaData, getFinals));


/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the 
following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears*/
 

function getWinnersByYear(getWinnersCB, getYearsCB) {

    let winners = getWinnersCB(fifaData, getFinals);
    console.log(winners);

    let years = getYearsCB(fifaData, getFinals)
    console.log(years);

    let yearlyWinners = [];

    winners.forEach(function(item, index) {
        yearlyWinners.push(`In ${years[index]}, ${item} won the world cup`)
    })

    console.log(winners);
    return yearlyWinners;
}

console.log(getWinnersByYear(getWinners, getYears));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and
 returns the the average number of home team goals and away team goals scored per match 
 (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
   let totalH, totalA = 0;

    const home = data.reduce((totalH, item) => {
         return totalH += item["Home Team Goals"];
    }, 0);

    const away = data.reduce((totalA, item) =>{
        return totalA += item["Away Team Goals"];

    }, 0);
    
    console.log("Home Average: " + home / data.length);
    console.log("Away Average: " + away / data.length);
    
};

getAverageGoals(fifaData);


/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters
 `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and 
returns the team with the most goals score per appearance (average goals for) in the 
World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` 
and calculates the team with the most goals scored against them per appearance 
(average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your 
chosing as listed in the README file. */
