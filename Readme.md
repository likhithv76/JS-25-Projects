# *25 Javascript Coding Challenges*
--------------------------------------

## 1. Multiply

### Instructions: 
This code does not execute properly. Try to figure out why.
```
function multiply(a, b){
 a * b
}
```
### Solved:
```
function multiply(a, b){
 return a * b
}
```
## 2. Get Planet Name By ID

### Instructions: 
The function is not returning the correct values. Can you figure out why?
```
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
    case 2:
      name = 'Venus'
    case 3:
      name = 'Earth'
    case 4:
      name = 'Mars'
    case 5:
      name = 'Jupiter'
    case 6:
      name = 'Saturn'
    case 7:
      name = 'Uranus'
    case 8:
      name = 'Neptune'
  }
  
  return name;
}
```
### Solved:
```
function getPlanetName(id){
  var name;
  switch(id){
    case 1:
      name = 'Mercury'
      break;
    case 2:
      name = 'Venus'
      break;
    case 3:
      name = 'Earth'
      break;
    case 4:
      name = 'Mars'
      break;
    case 5:
      name = 'Jupiter'
      break;
    case 6:
      name = 'Saturn'
      break;
    case 7:
      name = 'Uranus'
      break;
    case 8:
      name = 'Neptune'
      break;
  }
  
  return name;
}
```
## 3. Reversed Strings

### Instructions: 
Complete the solution so that it reverses the string passed into it.
```
function solution(str){

}
```
### Solved:
```
function solution(str){
const arr = str.split("").reverse().join("")
return arr;
}
```
## 4. Even or Odd

### Instructions: 
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
```
function evenOrOdd(number) {

}
```
### Solved:
```
function evenOrOdd(number) {
  if (number %2 == 0){
    return "Even"
  }
  else{
    return "Odd"
  }
}
```
## 5. Counting sheep...

### Instructions: 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,  
[ true,  true,  true,  false,  
  true,  true,  true,  true ,  
  true,  false, true,  false,  
  true,  false, false, true ,  
  true,  true,  true,  true ,  
  false, false, true,  true ]

The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
```
function countSheeps(sheep) {
  // TODO
}
```
### Solved:
```
function countSheeps(sheep) {
  // TODO
  let count = 0;
  for(let i=0;i<=sheep.length;i++){
    if (sheep[i] === true){
      count++
    }
  }
    return count;
}
```
## 6. Vowel Count

### Instructions: 
Return the number (count) of vowels in the given string.  
We will consider a, e, i, o, u as vowels for this Kata (but not y).  
The input string will only consist of lower case letters and/or spaces.
```
function getCount(str) {
  return 0;
}
```
### Solved:
```
function getCount(str) {
  count = 0;
  str.toLowerCase();
  arr = str.split("");
  for (let i = 0; i<=arr.length;i++){
    if(arr[i] == 'a' || 
       arr[i] == 'e' ||
       arr[i] == 'i' ||
       arr[i] == 'o' ||
       arr[i] == 'u' 
      ){
      count++
    } 
  }
  return count;
}
```
## 7. Jenny's secret message

### Instructions: 
Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?
```
function greet(name){
  return "Hello, " + name + "!";
  if(name === "Johnny")
    return "Hello, my love!";
}
```
### Solved:
```
function greet(name){
  if(name === "Johnny"){
     return "Hello, my love!";
  }
  return "Hello, " + name + "!";
}
```
## 8. Is n divisible by x and y?

### Instructions: 
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
```
function isDivisible(n, x, y) {

}
```
### Solved:
```
function isDivisible(n, x, y) {
  if (n%x == 0 && n%y ==0){
return true
  }
  else{
    return false
  }
}
```
## 9. Return Negative

### Instructions: 
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

makeNegative(1);    // return -1  
makeNegative(-5);   // return -5  
makeNegative(0);    // return 0  
makeNegative(0.12); // return -0.12  

Notes  
The number can be negative already, in which case no change is required.  
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

```
function makeNegative(num) {
  
}
```
### Solved:
```
function makeNegative(num) {
  if (num > 0){
    return num * -1
  }
  else if(num == 0){
    return 0
  }
  else{
return num
  }
}
```
## 10. Find the smallest integer in the array

### Instructions: 
Given an array of integers your solution should find the smallest integer.

For example:

Given [34, 15, 88, 2] your solution will return 2  
Given [34, -345, -1, 100] your solution will return -345
You can assume, for the purpose of this kata, that the supplied array will not be empty.
```
class SmallestIntegerFinder {
  findSmallestInt(args) {

  }
}
```
### Solved:
```
class SmallestIntegerFinder {
  findSmallestInt(args) {
const arr = args.slice().sort((a,b)=>a-b);
    return arr[0]
  }
}
```
## 11. Grasshopper - Summation

### Instructions: 
Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

For example (Input -> Output):  
2 -> 3 (1 + 2)  
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
```
var summation = function (num) {
  // Code here
}
```
### Solved:
```
var summation = function (num) {
  let total = 0;
  while (num>0){
      for (let i= 1;i<=num;i++){
total += i;     
  }
 return total;
  }
}
```
## 12. Get the mean of an array

### Instructions: 
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.
```
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
}
```
### Solved:
```
function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
 let total = 0;
  for (let i = 0; i<marks.length;i++){
total += marks[i]
    }
    const avg = total/marks.length
  return Math.floor(avg)
}

// Another Solution

function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  const sumOf = marks.reduce((acc,mark)=>acc+mark,0)
  const avg = sumOf/marks.length
  return Math.floor(avg)
}
```
## 13. Rock Paper Scissors!

### Instructions: 
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples(Input1, Input2 --> Output):

"scissors", "paper" --> "Player 1 won!"  
"scissors", "rock" --> "Player 2 won!"  
"paper", "paper" --> "Draw!"
```
const rps = (p1, p2) => {
    // Your code here
 }
```
### Solved:
```
const rps = (p1, p2) => {
  if (p1 == "scissors" && p2 == "paper" ||
     p1 == "rock" && p2 == "scissors"  ||
      p1 == "paper" && p2 == "rock" 
     ){
return "Player 1 won!"
  }
  else if(p1 == "scissors" && p2 == "rock" ||
         p1 == "paper" && p2 == "scissors"  ||
          p1 == "rock" && p2 == "paper"
         ){
    return "Player 2 won!"
  }
  else if(p1 == "paper" && p2 == "paper" ||
         p1 == "rock" && p2 == "rock"||
          p1 == "scissors" && p2 == "scissors"
         ){
return "Draw!"
  }
};
```
## 14. Remove First and Last Character

### Instructions: 
It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
```
function removeChar(str){
 //You got this!

};
```
### Solved:
```
function removeChar(str){
 //You got this!
  const arr = str.split("");
if (arr.length <= 2){
  return ""
}
  else{
    let temp_arr = []
    for(let i=1; i<=arr.length-2;i++){
      temp_arr.push(arr[i])
    }
     const result = temp_arr.join("")
      return result
  }
};

// Another Way using splice method

function removeChar(str){
 //You got this!
  const arr = str.split("");
if (arr.length <= 2){
  return ""
}
  else{
    return str.slice(1,-1)
    }
};
```
## 15. Sum of positive

### Instructions: 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20  
Note: if there is nothing to sum, the sum is default to 0.
```
function positiveSum(arr) {
  
}
```
### Solved:
```
function positiveSum(arr) {
  let total = 0;
    for(let i=0;i<arr.length;i++){
      if(arr[i] > 0){
      total += arr[i]
      }
    }
     return total
}
```
## 16. Basic Mathematical Operations

### Instructions: 
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output  
('+', 4, 7) --> 11  
('-', 15, 18) --> -3  
('*', 5, 5) --> 25  
('/', 49, 7) --> 7
```
function basicOp(operation, value1, value2){
  //Code
  return 0;
}
```
### Solved:
```
function basicOp(operation, value1, value2){
  //Code
  if(operation == '+'){
    return value1 + value2
  }
    if(operation == '-'){
    return value1 - value2
  }
    if(operation == '*'){
    return value1 * value2
  }
    if(operation == '/'){
    return value1 / value2
  }
  
  return 0;
}

// Using Switch case

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
```
## 17. String repeat

### Instructions: 
Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

Examples(input -> output)  

6, "I"     -> "IIIIII"  
5, "Hello" -> "HelloHelloHelloHelloHello"
```
function repeatStr (n, s) {
  return ''
}
```
### Solved:
```
function repeatStr (n, s) {
  let result = ""
  for(let i=0;i<n;i++){
result += s
  }
  return result
}

// Another way

function repeatStr (n, s) {
  return s.repeat(n);
}
```
## 18. Convert a string to an array

### Instructions: 
Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):  
"Robin Singh" ==> ["Robin", "Singh"]
"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
```
function stringToArray(string){

	// code code code

}
```
### Solved:
```
function stringToArray(string){
  return string.split(" ")
}
```
## 19. Remove String Spaces

### Instructions: 
Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"  
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"  
"8aaaaa dddd r     " -> "8aaaaaddddr"
```
function noSpace(x){

}
```
### Solved:
```
function noSpace(x){
  return x.replace(/\s/g, "");
}
```
## 20. Beginner - Lost Without a Map

### Instructions: 
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
```
function maps(x){

}
```
### Solved:
```
function maps(x){
let doubled_arr = []
for(let i=0;i<x.length;i++){
  doubled_arr.push(x[i]*2)
}
  return doubled_arr;
}
```
## 21. Is he gonna survive?

### Instructions: 
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return true if yes, false otherwise :)

```
function hero(bullets, dragons){
//Get Coding!

}
```
### Solved:
```
function hero(bullets, dragons){
//Get Coding!
if (bullets >= dragons*2){
return true
}
  else{
    return false
  }
}
```
## 22. Array plus array

### Instructions: 
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too
```
function arrayPlusArray(arr1, arr2) {
  return arr1 + arr2; //something went wrong
}
```
### Solved:
```
function arrayPlusArray(arr1, arr2) {
  arr1 =  arr1.reduce((acc, num) => acc + num, 0);
  arr2 =  arr2.reduce((acc,num) => acc + num, 0)
  return arr1 + arr2;
}
```
## 23. Century From Year

### Instructions: 
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
The first century spans from the year 1 up to and including the year 100, the second century - f
Task
Given a year, return the century it is in.

Examples  
1705 --> 18  
1900 --> 19  
1601 --> 17  
2000 --> 20  
2742 --> 28
```
function century(year) {
  // Finish this :)
  return;
}
```
### Solved:
```
function century(year) {
  if (year % 100 === 0){
return year / 100
  }
  else{
return Math.floor((year / 100) + 1)
  }
}
```
## 24. Cat years, Dog years

### Instructions: 
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1  
humanYears are whole numbers only  

Cat Years  
15 cat years for first year  
+9 cat years for second year  
+4 cat years for each year after that  

Dog Years  
15 dog years for first year  
+9 dog years for second year  
+5 dog years for each year after that  

```
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  return [0,0,0];
}

```
### Solved:
```
var humanYearsCatYearsDogYears = function(humanYears) {
  // Your code here!
  let catYears = 0;
  let dogYears = 0;
    if(humanYears === 1){
       catYears = 15;
       dogYears = 15;
}
    else if(humanYears === 2){
      catYears = 15 + 9;
      dogYears = 15 + 9;
    }
    else{
      catYears = 15 + 9 + (humanYears - 2) * 4;
      dogYears = 15 + 9 + (humanYears - 2) * 5;
      }
      return [humanYears,catYears,dogYears]
}
```
## 25. Total amount of points

### Instructions: 
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)  
if x < y: 0 points (loss)  
if x = y: 1 point (tie)  
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:  
our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
```
function points(games) {
  return 0
}
```
### Solved:
```
function points(games) {
  let total = 0;
  for (let i=0;i<games.length;i++){
    const parts =  games[i].split(":");
    const x = parts[0]
    const y = parts[1]
    if(x > y){
      total += 3;
    }
    else if(x ===y ){
      total += 1;
    }
  }
  return total
}
```

