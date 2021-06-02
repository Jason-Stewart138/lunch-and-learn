// Clean Code: https://gist.github.com/wojteklu/73c6914cc446146b8b533c0988cf8d29 
var authors = [
    {
        id: 1,
        name: "Kevin"
    },
    {
        id: 2,
        name: "Mike"
    }
];
var options = ['yes', 'no'];
// var - general variable
// let - local variable
// const - constant variable
function variableNames() {
    var variable1 = "This variable name is too generic";
    var authorName = "Kevin"; // good variable name, bad value. 
    // const authorName = "Kevin"
}
function booleanValueNames() {
    var hasData = false;
    var isNull = true;
    var lengthIsValid = false;
    var validArray = ['one', 'two', 'three'];
    lengthIsValid = validArray.length > 0;
    lengthIsValid = hasData && !isNull;
}
function functionWithFlagParameters(data, putInReverse, showPositveNumbers) {
    if (data != null) {
        if (putInReverse === true) {
            data.reverse();
        }
        if (showPositveNumbers === true) {
            data = data.filter(function (i) { return i > 0; });
        }
    }
    return data;
}
console.log(functionWithFlagParameters([-2, 0, 2, 4, 5], false, false));
// Complex function can be broken up between pulling data, mapping data, and printing data.
function PrintComplexFunctionWithManySteps() {
    // better name: listOfStrings;
    var stringDataArray = ['pull', 'data', 'from', 'database'];
    // map and reverse name
    stringDataArray = stringDataArray.map(function (i) {
        return {
            name: i.split('').reverse().join('')
        };
    });
    // reverse the entire array
    var reversedArray = stringDataArray.reverse();
    // Print both data sets
    console.table(stringDataArray);
    console.table(reversedArray);
}
function getAuthorName(id) {
    return authors.filter(function (i) { return id === i.id; });
}
var getMikesUserAccount = getAuthorName(2);
var authorsName = getAuthorName(23);
console.table(authorsName);
console.table(getMikesUserAccount);
PrintComplexFunctionWithManySteps();
//console.table(globalVariables);
