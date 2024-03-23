// 1. Multiply

function mulButton() {
  let mulInput1 = parseFloat(document.getElementById("mulInput1").value);
  let mulInput2 = parseFloat(document.getElementById("mulInput2").value);
  let result = mulInput1 * mulInput2;
  document.getElementById("resultBox").innerText = result;
}

// 2. Get Planet Name By ID
function getPlanetName() {
  var id = parseInt(document.getElementById("input1").value);
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }

  document.getElementById("resultBox2").innerText = name;
}

//   3. Reversed Strings
function stringReverse() {
  let str = document.getElementById("input3").value;
  const arr = str.split("").reverse().join("");
  document.getElementById("resultBox3").innerText = arr;
}
//   4. Even or Odd
function evenORodd() {
  let number = document.getElementById("input4").value;
  if (number % 2 == 0) {
    document.getElementById("resultBox4").innerText = "Even";
  } else {
    document.getElementById("resultBox4").innerText = "odd";
  }
}
//   5. Counting sheep
function countSheeps() {
  let sheep = document.getElementById("input5").value.trim();
  let count = 0;
  let arr = sheep.split(",");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim() === "true") {
      count++;
    }
  }
  document.getElementById("resultBox5").innerText = count;
}
//  6. Vowel Count
function vowelCount() {
  let str = document.getElementById("input6").value.trim();
  let count = 0;
  str.toLowerCase();
  let arr = str.split("");
  for (let i = 0; i <= arr.length; i++) {
    if (
      arr[i] == "a" ||
      arr[i] == "e" ||
      arr[i] == "i" ||
      arr[i] == "o" ||
      arr[i] == "u"
    ) {
      count++;
    }
  }
  document.getElementById("resultBox6").innerText = count;
}
//  7. Jenny's secret message
function jennySecret() {
  let str = document.getElementById("input7").value.trim();
  str = str.toLowerCase();
  if (str === "johnny") {
    document.getElementById("resultBox7").innerText = "Hello, my love!";
  } else {
    document.getElementById("resultBox7").innerText = "Hello, " + str + "!";
  }
}
// 8. Is n divisible by x and y?
function isDivisible() {
  let n = parseInt(document.getElementById("input80").value);
  let x = parseInt(document.getElementById("input81").value);
  let y = parseInt(document.getElementById("input82").value);
  if (n % x == 0 && n % y == 0) {
    document.getElementById("resultBox8").innerText = "true";
  } else {
    document.getElementById("resultBox8").innerText = "false";
  }
}
// 9. Return Negative
function makeNegative() {
  let num = parseInt(document.getElementById("input9").value);
  if (num > 0) {
    document.getElementById("resultBox9").innerText = num * -1;
  } else if (num == 0) {
    document.getElementById("resultBox9").innerText = 0;
  } else {
    document.getElementById("resultBox9").innerText = num;
  }
}
// 10. Find the smallest integer in the array
function SmallestIntegerFinder() {
  let args = document.getElementById("input10").value.trim();
  let arr = args.split(",");
  arr = arr.map(Number);
  arr = arr.filter((num) => !isNaN(num));
  if (arr.length === 0) {
    document.getElementById("resultBox10").innerText = "Invalid";
  } else {
    arr = arr.sort((a, b) => a - b);
    document.getElementById("resultBox10").innerText = arr[0];
  }
}
// 11. Grasshopper - Summation
function summation() {
  let num = parseInt(document.getElementById("input11").value);
  let total = 0;
    for (let i = 1; i <= num; i++) {
      total += i;
    document.getElementById("resultBox11").innerText = total;
  }
}
// 12. Get the mean of an array
function getAverage(){
    let marks = document.getElementById("input12").value;
    let arr = marks.split(",");
  arr = arr.map(Number);
  arr = arr.filter((num) => !isNaN(num));
   let total = 0;
    for (let i = 0; i<arr.length;i++){
  total += arr[i]
      }
      const avg = total/arr.length;
    document.getElementById("resultBox12").innerHTML = Math.floor(avg);
  }
//   13. Rock Paper Scissors!
function rpsGame(){
    let p1 = document.getElementById("mulInput13-1").value.trim();
    let p2 = document.getElementById("mulInput13-2").value.trim();
    p1 = p1.toLowerCase();
    p2 = p2.toLowerCase();
        if (p1 == "s" && p2 == "p" ||
           p1 == "r" && p2 == "s"  ||
            p1 == "p" && p2 == "r" 
           ){
      document.getElementById("resultBox13").innerText = "Player 1 won!";
        }
        else if(p1 == "s" && p2 == "r" ||
               p1 == "p" && p2 == "s"  ||
                p1 == "r" && p2 == "p"
               ){
                document.getElementById("resultBox13").innerText = "Player 2 won!";
        }
        else if(p1 == "p" && p2 == "p" ||
               p1 == "r" && p2 == "r"||
                p1 == "s" && p2 == "s"
               ){
                document.getElementById("resultBox13").innerText = "Draw!";
        }
}
//  14. Remove First and Last Character
function removeChar(){
    let str = document.getElementById("input14").value.trim();
     const arr = str.split("");
   if (arr.length <= 2){
     document.getElementById("resultBox14").innerHTML = ""
   }
     else{
       let temp_arr = []
       for(let i=1; i<=arr.length-2;i++){
         temp_arr.push(arr[i])
       }
        const result = temp_arr.join("")
        document.getElementById("resultBox14").innerHTML = result
     }
   };
//    15. Sum of positive
function positiveSum() {
    let num = document.getElementById("input15").value;
    let arr = num.split(",");
  arr = arr.map(Number);
  arr = arr.filter((num) => !isNaN(num));
    let total = 0;
      for(let i=0;i<arr.length;i++){
        if(arr[i] > 0){
        total += arr[i]
        }
      }
      document.getElementById("resultBox15").innerHTML = total
  }
//     16. Basic Mathematical Operations
function basicOp() {
    let operation = document.getElementById("input16-0").value.trim();
    let value1 = parseInt(document.getElementById("input16-1").value);
    let value2 = parseInt(document.getElementById("input16-2").value);
    switch (operation) {
        case '+':
            document.getElementById("resultBox16").innerHTML = value1 + value2;
            break;
        case '-':
            document.getElementById("resultBox16").innerHTML = value1 - value2;
            break;
        case '*':
               document.getElementById("resultBox16").innerHTML = value1 * value2;
               break;
        case '/':      
            document.getElementById("resultBox16").innerHTML = value1 / value2;
            break;
        default:
            document.getElementById("resultBox16").innerHTML = "Invalid";
    }
}
//  17. String repeat
function repeatStr () {
    let n = parseInt(document.getElementById("input17-1").value);
    let s = document.getElementById("input17-2").value;
    let result = ""
    for(let i=0;i<n;i++){
  result += s
    }
    document.getElementById("resultBox17").innerHTML = result;
  }
//  18. Convert a string to an array
function stringToArray(){
    let str = document.getElementById("input18").value;
    let arr = str.split(" ")
    document.getElementById("resultBox18").innerHTML = arr.join(",");
  }
//  19. Remove String Spaces
function noSpace(){
    let x =  document.getElementById("input19").value;
    document.getElementById("resultBox19").innerHTML = x.replace(/\s/g, "");
  }
//  20. Beginner - Lost Without a Map
function maps(){
    let x = document.getElementById("input20").value;
    let arr = x.split(",");
    arr = arr.map(Number);
    arr = arr.filter((num) => !isNaN(num));
    let doubled_arr = []
    for(let i=0;i<arr.length;i++){
      doubled_arr.push(arr[i]*2)
    }
      document.getElementById("resultBox20").innerHTML = doubled_arr;
    }
//  21. Is he gonna survive?
function hero(){
    let bullets = parseInt(document.getElementById("input21-1").value)
    let dragons = parseInt(document.getElementById("input21-2").value)
    if (bullets >= dragons*2){
        document.getElementById("resultBox21").innerHTML = "true";
    }
      else{
        document.getElementById("resultBox21").innerHTML = "false";
      }
    }
//  22. Array plus array
function arrayPlusArray() {
    let arr1 = document.getElementById("input22-1").value;
    arr1 = arr1.split(",");
    arr1 = arr1.map(Number);
    arr1 = arr1.filter((num) => !isNaN(num));
    let arr2 = document.getElementById("input22-2").value;
    arr2 = arr2.split(",");
    arr2 = arr2.map(Number);
    arr2 = arr2.filter((num) => !isNaN(num));
    arr1 =  arr1.reduce((acc, num) => acc + num, 0);
    arr2 =  arr2.reduce((acc,num) => acc + num, 0);
    document.getElementById("resultBox22").innerHTML = arr1 + arr2;
  }
// 23. Century From Year
function century() {
    let year = parseInt(document.getElementById("input23").value)
    if (year % 100 === 0){
        let result = year / 100;
        document.getElementById("resultBox23").innerHTML = result;
    }
    else{
  let result = Math.floor((year / 100) + 1)
  document.getElementById("resultBox23").innerHTML = result;
    }
  }
//  24. Cat years, Dog years  
function humanYearsCatYearsDogYears(){
    let humanYears = parseInt(document.getElementById("input24").value);
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
        document.getElementById("resultBox24").innerHTML = [humanYears,catYears,dogYears];
}
//   25. Total amount of points
function points() {
    let x = document.getElementById("input25").value;
    let games = x.split(",");
    let total = 0;
    for (let i = 0; i < games.length; i++) {
        const parts = games[i].split(":");
        const scoreX = parseInt(parts[0]);
        const scoreY = parseInt(parts[1]);
        if (scoreX > scoreY) {
            total += 3;
        } else if (scoreX === scoreY) {
            total += 1;
        }
    }
    document.getElementById("resultBox25").innerHTML = total;
}
