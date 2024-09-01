// USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user.If user enters “Karachi”, welcome the user like this “Welcome to city of lights”

var city_name = prompt("Enter your city");

if(city_name == "karachi"){
    alert("Welcome to city of lights");
}

// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

var gender = prompt("Enter your gender");

if(gender == "male"){
    alert("Good Morning Sir.");
}else if(gender == "female"){
    alert("Good Morning Ma'am.");
}else{
    alert("Enter male or female");
}

// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:

var color = prompt("Enter the color of traffic signal");

if(color == "red"){
    alert("Must Stop");
}else if(color == "yellow"){
    alert("Ready to move");
}else if(color == "green"){
    alert("Move now");
}else{
    alert("Enter valid color");
}

// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25 litres, show the message “Please refill the fuel in your car”

var fuel = +prompt("Enter your remaining fuel in car (in litres)")

if(fuel < 0.25){
    alert("Please refill the fuel in your car");
}else{
    alert("Go ahead");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.

// a. 
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
// b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// d. 
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
// e. 
if (true){
alert("True");
}
if (false){
alert("False");
}
// f.
if("car" < "cat"){
alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:

var total = +prompt("Enter the total marks of one subject")*3;
var marks1 = +prompt("Enter obtained marks in subject one");
var marks2 = +prompt("Enter obtained marks in subject two");
var marks3 = +prompt("Enter obtained marks in subject three");
var mark_obtained = marks1 + marks2 + marks3;
var percentage = (mark_obtained/total)*100;
if(percentage>=80){
    alert("MARK SHEET" + "\n" + "Total marks: "+total + "\n" + "marks obtained: " + mark_obtained + "\n" + "Percentage: " + percentage + "%" + "\n" + "Grade: A-one" + "\n" + "Remarks: Excellent.");
}else if(percentage>=70){
    alert("Total marks: "+total + "\n" + "marks obtained: " + mark_obtained + "\n" + "Percentage: " + percentage + "%" + "\n" + "Grade: A" + "\n" + "Remarks: Good.");
}else if(percentage>=60){
    alert("Total marks: "+total + "\n" + "marks obtained: " + mark_obtained + "\n" + "Percentage: " + percentage + "%" + "\n" + "Grade: B" + "\n" + "Remarks: You need to improve.");
}else{
    alert("Total marks: "+total + "\n" + "marks obtained: " + mark_obtained + "\n" + "Percentage: " + percentage + "%" + "\n" + "Grade: Fail" + "\n" + "Remarks: Sorry.");
}

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secret_num = Math.floor(Math.random()*10);
var user_guess = +prompt("Guess the number (ranging from 1 to 10)");
if(secret_num == user_guess){
    alert("Bingo! Correct answer");
}else if(user_guess == secret_num-1){
    alert("Close enough to the correct answer");
}

// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

var user_num = +prompt("Enter a number");

if(user_num%3 == 0){
    alert("Divisible by 3");
}else{
    alert("Not divisible by 3");
}

// 9. Write a program that checks whether the given input is an even number or an odd number.

var user_num = +prompt("Enter a number");

if(user_num%2 == 0){
    alert("Even number");
}else{
    alert("Odd number");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

var temp = +prompt("Enter the Temperature");
if(temp > 40){
    alert("It is too hot outside.");
}else if(temp>30){
    alert("The Weather today is Normal.");
}else if(temp >20){
    alert("Today’s Weather is cool.");
}else if(temp >10){
    alert("OMG! Today’s weather is so Cool.");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var first_num = +prompt("Enter first number");
var second_num = +prompt("Enter second number");
var operation = prompt("What would you like to do?" +"/n" + "+, -, *, /, %");

if(operation == "+"){
    alert(first_num + second_num);
}else if(operation == "-"){
    alert(first_num - second_num);
}else if(operation == "*"){
    alert(first_num * second_num);
}else if(operation == "/"){
    alert(first_num / second_num);
}else if(operation == "%"){
    alert(first_num % second_num);
}