
// primer ejercicio
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    var n = arr.length
var positive = 0;
var negative = 0;
var zero = 0;

for (var i=0; i< n; i++){
    if(arr[i] > 0){
        positive += 1;
    }else if (arr[i]< 0){
        negative +=1;
    } else{
        zero += 1;
    }
    
 }
  var pos = positive/ n;
  var neg = negative/n;
  var zero = zero/n;
  
  console.log(pos.toFixed(6)+ "\n" + neg.toFixed(6) + "\n" + zero.toFixed(6));
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
 
// segundo ejercicio
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (let i = 0; i < 5; i++){
        if(max < arr[i]){
            max = arr[i];
        }
        if (min > arr[i]){
            min = arr[i];
        }
        sum += arr[i];
    }
    let maxSum = sum - min;
    let minsum = sum - max;
    console.log(minsum + " " + maxSum);
}

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}

// tercer ejercicio
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here     
    // 1. 12 AM -> 00
    // 2. 1 AM TO 12 PM -> DO NOTHING
    //3. 1PM 11PM -> TAKE ORGINAL HOUR, ADD 12
let amPm = s.charAt(8);
let militaryHour = "";
if (amPm == "A"){
    if (s.substring(0,2)== "12"){
        militaryHour = "00";
    }
    else{
        militaryHour = s.substring(0,2);
    }
}



//////////////////////////////////////////////////////week 2 ////////////////////////////////////////////////////////////////////////////////////
//  ejercicio 1 week 2
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a) {
    // Write your code here
a.sort((a,b)=> a-b)


    let uniq = Array.from(new Set(a));
    console.log("uniq: ", uniq);


    let finalArr = Array.from({length: uniq.length}, ()=> [])
    console.log("finalArr: ", finalArr);




    for(var i = 0; i < uniq.length; i++){


        console.log(i);


        let el = uniq[i];
        console.log("el: ", el);


        for(var j = 0; j < a.length; j++){
            let el2 = a[j];


            if(el2 === el){
                finalArr[i].push(el)
            }
     
        }
    }


    let finalNum = finalArr.filter(el=> el.length === 1).flat()[0];
    console.log(finalNum);
    return finalNum;
   


}

let arr = [ 0, 0, 1, 2, 1 ];
lonelyinteger(arr)


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = lonelyinteger(a);

    ws.write(result + '\n');

    ws.end();
}
 
// ejercicio 2 week 2
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
 let a = grades.map(el=> {


        if(el < 38){
            return el
        }


        let t = (el - (el % 5)) + 5 ;
        console.log(t);


        if(t - el < 3){
            return t;
        }
return el


    });




    console.log(a)
    return a;


}




let g = [ 84, 73, 67, 38, 33 ];
gradingStudents(g)



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
 

// 'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'flippingBits' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 */

function flippingBits(n) {
    // Write your code here

    let a = ((2**32)-1) - n;
    console.log(a);
    return a;
 }


 flippingBits(3)



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const n = parseInt(readLine().trim(), 10);

        const result = flippingBits(n);

        ws.write(result + '\n');
    }

    ws.end();
}


// ejercicio 4 week 2

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let lTr = 0;
    let rTl = 0;


    for(var i = 0; i < arr.length; i++){


        lTr = lTr + arr[i][i]
        rTl = rTl + arr[i][arr.length-i-1];
       
    }


    return Math.abs(rTl - lTr);


    // ! end of the function
}


let a1 = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]; // 15
diagonalDifference(a1);


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}

// ejercicio 5 week 2 counting sort 1
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr) {
    // Write your code here
let finalArr = [];


    for(var i = 0; i <100; i++){
        finalArr.push(0);
    }


    arr.forEach(el=> {
        finalArr[el] = finalArr[el] + 1
    })


    console.log(finalArr);
    return finalArr;




}


let input = '63 25 73 1 98 73 56 84 86 57 16 83 8 25 81 56 9 53 98 67 99 12 83 89 80 91 39 86 76 85 74 39 25 90 59 10 94 32 44 3 89 30 27 79 46 96 27 32 18 21 92 69 81 40 40 34 68 78 24 87 42 69 23 41 78 22 6 90 99 89 50 30 20 1 43 3 70 95 33 46 44 9 69 48 33 60 65 16 82 67 61 32 21 79 75 75 13 87 70 33'.split(' ').map(el=> Number(el));
// let input = [1,1,3,2,1];
// console.log("input: ", input);


countingSort(input)



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = countingSort(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}


//ejercicio 6 week 2 Counting Valleys
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
 const pathToArray = path.split('');
    let distanceFromSeaLevel = 0;
    let totalValleys = 0;


    pathToArray.forEach((el, index)=> {


        if(el === 'U'){
            distanceFromSeaLevel++      
        }


        if(el=== 'D'){
            distanceFromSeaLevel--
        }


        if(distanceFromSeaLevel === 0 && el === 'U'){
            totalValleys++;
        }


        // end of forEach loop
    })


    // console.log("totalValleys: ", totalValleys);


    return totalValleys
}


let stepsIn = 8;
let pathIn = 'UDDDUDUU';


countingValleys(stepsIn, pathIn)



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}

//ejercicio 7 week 2 Pangrams
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
const sent=s.toLowerCase();
const setString=new Set(sent);
const alpha='abcdefghijklmnopqrstuvwxyz';
const setAlpha=new Set(alpha);
if(setString.size<26){
    return 'not pangram';
}
else if(difference(setAlpha, setString).size ==0){
    return  'pangram'
}
    else{
        return 'not pangram';
    }
    function difference(setA, setB){
        let _diff=new Set(setA);
        for(let elem of setB){
            _diff.delete(elem);
        }
        return _diff;
    }
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}

//ejercicio 8 week 2 Mars Exploration
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here


    let strToArr = s.split('');
    // console.log("strToArr: ", strToArr);


    let finalArr = [];


    let changedLetters = 0;


   
   


    let a = strToArr.slice(0, 3);
    // console.log(a);




    for(let i = 0; i < strToArr.length; i = i + 3){
        finalArr.push(strToArr.slice(i, i+3))
    }


    // console.log("finalArr: ", finalArr);


    finalArr.forEach(el=> {
        // console.log(el)


        if(el[0] !== 'S'){
            changedLetters++
        }


        if(el[1] !== 'O'){
            changedLetters++
        }


        if(el[2] !== 'S'){
            changedLetters++
        }




    });


    console.log("changedLetters: ", changedLetters);
    return changedLetters;






// end of the function
}


let input1 = 'SOSSPSSQSSOR';
let input2 = 'QQQ'
marsExploration(input1)



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
