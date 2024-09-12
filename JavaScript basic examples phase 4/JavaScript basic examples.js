1. Illustrate Different Set Operations - 
function union(a, b) {
    let unionSet = new Set(a);
    for (let i of b) {
        unionSet.add(i);
    }
    return unionSet
}
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['grapes', 'apple', 'banana']);
const result = union(setA, setB);
console.log(result);

2. Set a Default Parameter Value For a Function - 
function sum(x = 3, y = 5) {
    return x + y;
}
console.log(sum(5, 15));
console.log(sum(7));
console.log(sum());

3. Check If A Variable Is undefined or null - 
function checkVariable(variable) {
    if(variable == null) {
        console.log('The variable is undefined or null');
    }
    else {
       console.log('The variable is neither undefined nor null');
    }
}
let newVariable;
checkVariable(5);
checkVariable('hello');
checkVariable(null);
checkVariable(newVariable);

4. Get File Extension  - 
function getFileExtension(filename){
    const extension = filename.split('.').pop();
    return extension;
}
const result1 = getFileExtension('module.js');
console.log(result1);
const result2 = getFileExtension('module.txt');
console.log(result2);

5. Perform Intersection Between Two Arrays - 
function performIntersection(arr1, arr2) {
    const setA = new Set(arr1);
    const setB = new Set(arr2);
    let intersectionResult = [];
    for (let i of setB) {
        if (setA.has(i)) {
            intersectionResult.push(i);
        }   
    }
    return intersectionResult;
}
const array1 = [1, 2, 3, 5, 9];
const array2 = [1, 3, 5, 8];
const result = performIntersection(array1, array2);
console.log(result);

6. Get Random Item From an Array - 
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}
const array = [1, 'hello', 5, 8];
const result = getRandomItem(array);
console.log(result);
