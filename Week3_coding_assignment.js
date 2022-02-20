
var ages = [3, 9, 23, 64, 2, 8, 28, 93];    // 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log(ages[ages.length-1] - ages[0]);     // Print the result to the console.

ages.push(100); // Add a new age to your array and repeat the step above to ensure it is dynamic 
console.log(ages[ages.length-1] - ages[0]);     // Print the result to the console.

//1.c. 
var sum = 0;    //a new variable 
for(var i = 0; i < ages.length; i++) {
    sum += ages[i];         //loops through and adds them up
}
var avg = sum / ages.length;    //current length is 9 not 8
console.log(avg);

//2.
var names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
//console.log(names);
//2.a. Use a loop to iterate through the array and calculate the average number of letters per name. 
//Print the result to the console.
let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths);
let sumLet = 0;
for (let i=0; i < names.length; i++) {
    sumLet += names[i].length
    //console.log(aveNumLet);
}
var avgLet = sumLet / names.length;    //current length is 9 not 8
console.log(avgLet);
//2.b. Use a loop to iterate through the array again 
//and concatenate all the names together, separated by spaces, and print the result to the console.
conCatResult = [];
for (let i=0; i < names.length; i++) { //iterates through
    conCatResult = names.join(" "); //separator used is "space" per instructions
}
console.log(conCatResult);

//ATTN GRADER: Questions 3 and 4 are on the returned homework sheet.

//5.    5. Create a new array called nameLengths. 
//Write a loop to iterate over the previously created NAMES array and add the length of each name to the nameLengths array.
//For example:
//namesArray = ["Kelly", "Sam", "Kate"] //given this array
//nameLengths = [5, 3, 4] //create this new array
//namesLength =[];
let namesLength = names.map(function(element){  //this can be answered with the .map() method
    return element.length;
});
console.log(namesLength);
//OR
namesLength = [];
for (let i = 0; i < names.length; i++){     //Here, per directions, a loop is created
   namesLength[i] = names[i].length;        // namesLength becomes an array of the length of the strings in "previously created names array"
 }
 console.log(namesLength); // [9, 12, 15, 18]
 //6.Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. 
 //Print the result to the console.
let newSum =0;      //var "sum" previously used
for (let i =0; i < namesLength.length; i++){
    newSum += namesLength[i];
} 
console.log(newSum);
//7. Write a function that takes two parameters, word and n, as arguments 
//and returns the word concatenated to itself n number of times. 
//(i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).
function concatSelf(word, n){
    concat = "";        //someplece to put the new string
    for(let i =0; i <= n-1; i++){   //n-1 because starting at index 0
        concat += word;
    }
    return concat;      //returns iterated "concat"
}
console.log(concatSelf('Hello', 3));
//8. Write a function that takes two parameters, firstName and lastName, and returns a full name 
//(the full name should be the first and the last name separated by a space).
function makeFullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}
makeFullName("Clark", "Kent");
makeFullName("Diana", "Prince");
//9. Write a function that takes an array of numbers and returns true 
//if the sum of all the numbers in the array is greater than 100.
function nums(numArray){
    let sum = 0;
    for (let i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }if (sum > 100){
        return true;
     }else{
        return false;
     }
    
}
console.log(nums([10,20,30,40,50,60]));
console.log(nums([1,2,3,4,5,6,7,8,9]));
//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function returnAverage(arrayOfNums){
    let sum = 0;
    for (let i = 0; i < arrayOfNums.length; i++){
        sum += arrayOfNums[i];
    }
    return sum / arrayOfNums.length;
}
console.log(returnAverage([1,2,3,4,5,6,7,8]));
//11. Write a function that takes two arrays of numbers and returns true if the average of the elements 
//in the first array is greater than the average of the elements in the second array.
function compareTwo(arr1, arr2){
    let sum1 = 0;       //create new needed variables
    let sum2 = 0;
    let ave1 = 0;
    let ave2 = 0;
    for (let i = 0; i < arr1.length; i++){
        sum1 += arr1[i];
    }
    ave1 = sum1 / arr1.length;      //assign value of average of sum1 to ave1
    for (let i = 0; i < arr2.length; i++){
        sum2 += arr2[i];
    }
    ave2 = sum2 / arr2.length;
        if (ave1 > ave2){       //compare new averages
            return true;
    }else{
        return false;
    }
}
console.log(compareTwo([10,20,30,40], [1,2,3,4]));
console.log(compareTwo([1,2,3,4], [10,20,30,40]));
//12. Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
function willBuyDrink(isHotOutside, moneyInPocket){
    if (isHotOutside === true && moneyInPocket > 10.50){    //strict equality recommended
        return true;
    }else{
        return false;
    }
}
console.log(willBuyDrink(true, 12.50));     //test
console.log(willBuyDrink(false, 12.50));     //test
console.log(willBuyDrink(true, 1.50));     //test
//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// Write a function isLucky that takes a number between 0 and 9 and determines if it is a lucky number. 
// This is very important for numerologists.
function isLucky(num){
    if (num === 7){
        console.log("This is a lucky number!");

    }else{
        console.log("Sorry, " + (num) + " isn't lucky.")
    }
}
isLucky(7);
isLucky (4);