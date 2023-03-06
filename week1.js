// *** Week 1 Node.js Backend Course ***//
// Problem #1: What should the following evaluations return?
// console.log(2 == '2' ) // true
// console.log('he' == 'she' ) //false
// console.log(2 === 2) // true
// console.log('true' == true ) //false
// console.log( true === true ) // true
// console.log( 'true' != true ) // true
// console.log( 'true' !== true) // true

// Problem #2: What are the three different ways you can declare a variable? And what is the differences between them?
    // let  - instatnitates a variable that can be re-assigned/updated in the future

    // const - short for constant. A variable that will not change/be re-assigned in the future 

    // var - shrot for variable. Not reccomended, more legacy syntax at this time 


// Problem #3: Write a simple function for each type of these functions:
// - First-Class Function 
        // no restriction on their use. Can appear anywhere in the program. 
        // const foo = () => {
        //     console.log("foobar");
        // };
        // foo(); 
// - Higher-Order Function 
        //mathematical concept of functions that operate on other functions - callbacks!
        // function greaterThan(n) {
        //     return m => m > n;
        // }
        // let greaterThan10 = greaterThan(10);
        // console.log(greaterThan(11)) // true
//- Callback Function
//    setTimeout(() => console.log("Tick"), 500)


// Problem #4: What is the value of the console.log of “a”, “b”, and “c” shown in the code below?
// const a = 'hi'; 
// console.log(c); // undefined -> no definition of c at this scope
// const someFunction = (arg) => { 
//     const b = 'bye';
//     if (arg) {
//     const c = 'see ya!'; 
//     console.log(a);  //'hi!'
//     console.log(b); // 'bye'
//     } 
// }


// Problem #5: Given the following data structure, write a for loop using:
// console.log each item in order 
// const someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for statement 
    // for (let i=0; i < someArray.length; i++) {
    //     console.log(someArray[i])
    // }
//  for ... of statement
    // for (const number of someArray ) {
    //     console.log(number)
    // }

// Problem #6: Given the following data structure (label each one as either Mutative or Non-Mutative):
// const someArray = [ 1, 2, 3, 4, 5 ];
// - Use the concat() method to merge the two arrays to return: [1, 2, 3, 4, 5]
        // non-mutative
// - Use the length property to return the length of the array
        // non-mutative
// - Use the filter() method to filter out the element “3” and return: [1, 2, 4, 5]
        // non-mutative makes a shallow copy 
// - Use the find() method to find and return the value of 5.
        // non-mutative returns a shallow copy 
// - Use the slice() method to return back this array: [3, 4]
        // non-mutative returns a shallow copy 
// - Use the splice() method to return back this array: [1, 2, 5]
        // mutative! changes original array
// - Use the includes() method to return back TRUE when I pass in “4” into the includes method.
        // non-mutative
// - Use the indexOf() method to return back the index of the element “2”
        // non-mutative 
// - Use the isArray() method to return back TRUE when I pass in the array
        //NM
// - Use the join() method to return back: “1, 2, 3, 4, 5”
        // NM shallow copy -> returns new item 
// - Use the map() method to return back a new array: [2, 4, 6, 8, 10]
        // NM creates new 
// - Use the pop() method to return back a new array: [1, 2, 3, 4]
        //mutative 
// - Use the push() method to return back a new array: [1, 2, 3, 4, 5, 6]
        //mutatitve 
// - Use the shift() method to return back a new array: [2, 3, 4, 5]
        //mutative 
// - Use the unshift() method to return back a new array: [0, 1, 2, 3, 4, 5]
        //mutative 
// - Sort this array [9, 1, 3, 5] to return from smallest to largest using the sort() method, should return:
// [1, 3, 5, 9]
        // Mutative 
// - Use the reduce() method to return back the sum of all numbers in the array
    //non -mutative 

// ***
// Problem #7: Given the following data structure:
// *** 
// const someObject = {
//     color: 'black'
// }
// console.log(someObject);

// // - Use the assign() method to add a new key value pair of: name: ‘john doe’
//     const namedObject = Object.assign( someObject, {name:'john doe'});
//     console.log(namedObject);
//     console.log(someObject);
// // - Use the dot notation to add a new key value pair of: age: 22
//     const age = someObject.age
//     someObject.age = 22;
//     console.log(someObject);
//     // console.log(age);
// // - Use the bracket notation to add a new key value pair of: address: ‘123 test address’
// someObject["address"] = '123 test address' ;
// console.log(someObject);
// // - Use the keys() method to return a array back of the keys: [“color”, “name”, “age”, “address”]
// const keys = Object.keys(someObject);
// console.log(keys);

// // - Use the values() method to return a array back of the values: [“black”, “john doe”, “22”, “123 test
// // address”]
// const vals = Object.values(someObject);
// console.log(vals);

// // - Use the for...in loop against this object to console.log each of the keys values.

// // Your terminal should return:
// // black
// // john doe  
// // 22
// // 123 test address
// for (const key in someObject) {
//     console.log(someObject[key])
// }

// ***
// Problem 8: given the following data structure 
// ***
// const numbers = [
//     {
//         num: 1
//     },
//     {
//         num: 2
//     },
//     {
//         num: 3
//     }
// ]
// // either for statement or for ... of loop to console.log each key's values
//should return  // 1 // 2// 3
// for (const obj of numbers) {
//     console.log(obj.num)
// }

// Problem #9: Create a new Set() object
// - Add a new value of: ‘john doe’
// - Check if the value of ‘john doe’ exists 
// - Remove the value of ‘john doe’
// const testSet = new Set();
// console.log(  testSet.add('john doe'))
// console.log( testSet.has('john doe'))
// console.log(  testSet.delete('john doe'))
// console.log(testSet)


// Problem #10: Create a new Map() object
// - Add a new key-value pair of: name: ‘john doe’ 
// - Check if the value ‘john doe’ exists
// - Remove the key-value pair of ‘john doe’
// const testMap = new Map();
// console.log(testMap)
// testMap.set('name', 'john doe')
// console.log(testMap)
// console.log( testMap.has('name', 'john doe'))
// console.log( testMap.get('name'))
// // console.log(testMap)
// testMap.delete('name')
// console.log(testMap)

// Problem #11: Explain what asynchronous programming means in 3 sentences. 
// the 
    //a paradigm where tasks are executed concurrently AND independently of each other, without blocking the main thread of execution. Allows for improved efficienct and scalability by avoiding wasted time waiting for long-running tasks to complete before moving on to the next task

// Problem #12: Explain what call back hell is.
    //many nested callbacks in asynchronous code. when multiple tasks depend on the result of each other. 

// Problem #13: Explain what is a promise and describe the possible states of promises. 
    // an object that represents the eventual completion or failure of an asynchronous operation and its resulting value. helps avoid callback hell
    // const promiseStates = ['pending/loading', 'fulfilled/success', 'reject/failure']

// Problem #14: What is async/await?
    // a syntactic feature in JavaScript used to write asynchronous code in a more synchronous style. Less need for callbacks or promises. ASync declares that a function is asynchronous, while await declares is used to pause the exection of that function until the asynchronous operation completes and returns a result.

// Problem #15: Create two async functions:
// - fetchRickAndMorty
// o Using this api: https://rickandmortyapi.com/api/character
// o Use a try/catch block
// o Your catch block should: console.log(error.message)
// o Fetch this api, and the function should return a payload of a ARRAY of the Characters’ name
// such as shown below:
// § [“Rick Sanchez”, “Morty Smith”, “Tom Jones”, .... ]
// o Hint: What array methods can you use to get the result above??


// const api1Call = async () => {
//     try {
//         const response = await(await fetch('https://rickandmortyapi.com/api/character')).json();
//         const { results } = response
//         const names = results.map(char => char.name)
//         console.log(names)
//     } catch (error){
//         console.log('Error calling API:', error);
//     }
// }
// api1Call();


// - fetchMultipleAPIs
// o Using these apis:
// § API 1: https://rickandmortyapi.com/api/character/2 
// § API 2: https://randomuser.me/api/?results=1
// o Use a try/catch block
// o Your catch block should: console.log(error.message)
// o Using a Promise.all() method, fetch both of these api’s concurrently, and the function should
// return a payload of the Names from each payload such as shown below:
// § [“Morty Smith”, “Tony Kim”]
// § The first value “Morty Smith” should be coming from API 1.
// § The second value “Tony Kim” should be coming from API 2. Keep in mind, this second
// API will have a new random user each time you call it!


// const api1URL = 'https://rickandmortyapi.com/api/character/2';
// const api2URL = 'https://randomuser.me/api/?results=1';

// const twoApiCalls = async () => {
//     try {
//         const [result1, result2] = await Promise.all([
//                 fetch(api1URL),
//                 fetch(api2URL)
//         ])
//         const [rickandmortyapi , randomuser] = await Promise.all([
//                 result1.json(),
//                 result2.json()
//         ])
//         // const { name } = rickandmortyapi;
//         const { results } =  await randomuser;
        
//         // console.log(results[0].name.first, results[0].name.last)
       
//         console.log([`${results[0].name.first} ${results[0].name.last}`, rickandmortyapi.name ])
//     }
//     catch(error) {
//         console.log(error);
//         // throw new Error('Error fetching data from the APIs')
//     };
// }
// twoApiCalls();


// Problem #16: OOP
// In this task create a Shape class. It has three properties: name, sides, and sideLength. This class only models
// shapes for which all sides are the same length, like a square or an equilateral triangle. We'd like you to:
// • Add a constructor to this class. The constructor takes arguments for the name, sides, and sideLength properties, and initializes them.
// • Add a new method calcPerimeter() method to the class, which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
// • Create a new instance of the Shape class called square. Give it a name of square, 4 sides, and a sideLength of 5.
// • Call your calcPerimeter() method on the instance, to see whether it logs the calculation result to the browser's console as expected.
// • Create a new instance of Shape called triangle, with a name of triangle, 3 sides and a sideLength of 3.
// Shape:{
//         name
//         sides
//         sideLength 
// }
// • Call triangle.calcPerimeter() to check that it works OK.

class Shape {
        constructor(name, sides, sideLength){
                this.name = name;
                this.sides = sides;
                this.sideLength = sideLength;
        }
        calcPerimeter(){
                // perimeter = length of outside. (sideLength x #of sides)?
                console.log(this.sides * this.sideLength)
                return this.sides * this.sideLength
        }
}
        const square = new Shape('square', 4, 5 );
        console.log(square)
        square.calcPerimeter();

        const triangle = new Shape('triangle', 3, 3);
        console.log(triangle);
        triangle.calcPerimeter();
        
// Problem #17: OOP (Part 2)
// Next we'd like you to create a Square class that inherits from Shape, and adds a calcArea() method that calculates the square's area. Also set up the constructor so that the name property of Square object instances is automatically set to square, and the sides property is automatically set to 4. When invoking the constructor, you should therefore just need to provide the sideLength property.
// Create an instance of the Square class called square with appropriate property values, and call its calcPerimeter() and calcArea() methods to show that it works OK.

// Problem #18: Using Git, please push this code up to your GitHub repo following the directions:
// 1. Initialize your project: git init
// 2. Git checkout to: git checkout -b week1-day
// 3. Git add all commits: git add --all
// 4. Git commit: git commit -m ‘week1-day1 assignment complete’
// 5. Push to your remote branch: git push