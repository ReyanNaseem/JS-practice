// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

var char = prompt("Enter a charecter");
var check = char.charCodeAt(0);

if(char >= '0' && char <= '9'){
    alert("Your input is a number");
}else if(check >=65 && check <= 90){
    alert("Your input is an uppercase");
}else if(check >= 97 && check <= 122){
    alert("Your input is an lowercase")
}

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var int1 = +prompt("Enter integer 01");
var int2 = +prompt("Enter integer 02");

if(int1 > int2){
    alert("Larger integer is " + int1);
}else if(int1 < int2){
    alert("Larger integer is " + int2);
}else{
    alert("Both integers are equal");
}

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var num = +prompt("Enter a number");

if(num > 0){
    alert("The number is positive");
}else if(num < 0){
    alert("The number is negative");
}else if(num == 0){
    alert("The number is zero");
}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

var str = prompt("Enter a charecter");

if(str == 'a' || str == 'e' || str == 'i' || str == 'o' || str == 'u' || str == 'A' || str == 'E' || str == 'I' || str == 'O' || str == 'U'){
    alert("True");
}else{
    alert("False")
}

// 5. Write a program that
    // a. Store correct password in a JS variable.
    // b. Asks user to enter his/her password
    // c. Validate the two passwords:
    // i. Check if user has entered password. If not, then
    // give message “ Please enter your password”
    // ii. Check if both passwords are same. If they are
    // same, show message “Correct! The password you
    // entered matches the original password”. Show
    // “Incorrect password” otherwise.
var correct_pass = "1234";
var user_pass = prompt("Enter a password");

if(user_pass.length < 1){
    alert("Please enter your password");
}else if(user_pass == correct_pass){
    alert("Correct! The password you entered matches the original password");
}else{
    alert("Incorrect password");
}

// 6. This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
    console.log(greeting);
}else{
    greeting = "Good evening";
}

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

var time = +prompt("Enter the time as 24 hours clock format like: 1900 = 7pm.(in four digits)");

if(time >= 0 && time < 1200){
    alert("Good morning!");
}else if(time >= 1200 && time < 1700){
    alert("Good afternoon!");
}else if(time >= 1700 && time < 2100){
    alert("Good evening!");
}else if(time >= 2100 && time <=2359){
    alert("Good night");
}
