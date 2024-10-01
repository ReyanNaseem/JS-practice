// 1. Declare an empty array using JS literal notation to store
// student names in future.
var stdName = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.
var stdName = [];

// 3. Declare and initialize a strings array.
var strArr = ['apple', 'mango', 'banana'];

// 4. Declare and initialize a numbers array.
var numArr = [1, 2, 3, 4, 5];

// 5. Declare and initialize a boolean array.
var boolArr = [true, false];

// 6. Declare and initialize a mixed array.
var mixArr = ['apple', 1, true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var education = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"]
console.log("Qualifications:");
for(var i=0; i<education.length; i++){
    console.log((i+1) + ") " + education[i])
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var studentName = ["Michel", "John", "Tony"];
var stdScore = [320, 230, 480];
for(var i=0; i<studentName.length; i++){
    var percentage = (stdScore[i]/500)*100;
    console.log("Score of " + studentName[i] + " is " + stdScore[i] + ".Percentage: " + percentage + "%")
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
var colorName = ['red', 'green', 'blue'];
alert(colorName);
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
var user_colorName = prompt("what color you wants to add?");
colorName.unshift(user_colorName);
alert(colorName);
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
var last_userColor = prompt("what color you wants to add to the end");
colorName.push(last_userColor);
alert(colorName);
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
var first_userColor = prompt("Add one more color in the begining");
var second_userColor = prompt("Add another color in the begining");
colorName.unshift(first_userColor);
colorName.unshift(second_userColor);
alert(colorName); 
// d. Delete the first color in the array. Display the updated
// array in your browser.
colorName.shift();
alert(colorName);
// e. Delete the last color in the array. Display the updated
// array in your browser.
colorName.pop();
alert(colorName);
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
var user_desiredIndex = +prompt("At which index you wants to add a color?")
var user_desiredColor = prompt("Give a color name");
colorName[user_desiredIndex] = user_desiredColor;
alert(colorName);
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// var user_deleteDesiredIndex = prompt("At which index you wants to delete a color?");

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
var std_score = [23, 18, 98, 65, 77];
console.log("Scores of Students: " + std_score);
std_score.sort();
console.log("Sorted Scores of Students: " + std_score);


// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
var city = ["Karachi", "Lahour", "Islamabad", "Quetta", "Peshawar"];
console.log(city);
var selectedCity = [];
selectedCity.push(city[2]);
selectedCity.push(city[3]);
console.log(selectedCity);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var arr = ['This', 'is', 'my', 'cat'];
var joined = arr.join(" ");
console.log(joined);

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var newArr = ['keyboard', 'mouse', 'printer', 'moniter'];
console.log(newArr);
console.log(newArr.shift());
console.log(newArr.shift());
console.log(newArr.shift());
console.log(newArr.shift());

// 14. Create a new array. Store values one by one in such a way
//     that you can access the values in reverse order. (Last In-
//     First Out)
var newArr2 = ['keyboard', 'mouse', 'printer', 'moniter'];
console.log(newArr2);
console.log(newArr2.pop());
console.log(newArr2.pop());
console.log(newArr2.pop());
console.log(newArr2.pop());

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:

var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");

for (let i = 0; i < manufacturers.length; i++) {
   document.write('<option value=' + manufacturers[i] + '>' + manufacturers[i] + '</option>');
}

document.write('</select>');
