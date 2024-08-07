
//                          CHAPTER 01

// 1. Write a script to greet your website visitor using JS alert box.
alert("Welcome to JS world");

// 2. Write a script to display following message on your web page.
alert("Error! Please enter a valid password");

// 3. Write a script to display following message on your webnpage: (Hint : Use line break)
alert("Welcome to JS land...\nHappy Coding");

// 4. Write a script to display following messages in sequence:
alert("Welcome to Js Land...");

// 5. Generate the following message through browser’s developer console:
alert("Hello... I can run JSthrough my web browser's console");

// 6. Make use of alerts in your new/existing HTML & CSS project.
alert("hello");

//                          CHAPTER 02

// 1. Declare a variable called username.
var username;

// 2. Declare a variable called myName & assign to it a string that represents your Full Name.
var myName = "REYAN NASEEM";

// 3. Write script to
   // a) Declare a JS variable, titled message.
        var title;
   // b) Assign “Hello World” to variable message
        title = "Hello World";
   // c) Display the message in alert box.
        alert(title);

// 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes.
var std_Name = "Jhone Doe";
var std_Age = 15;
var std_Skill = "Mobile Application Development";
alert(std_Name);
alert(std_Age + " years old");
alert("Certified " + std_Skill);

// 5. Write a script to display the following alert using one JS variable:
var x = "PIZZA\nPIZZ\nPIZ\nPI\nP";
alert(x);

// 6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation)
var email = "reyannaseem516@gmail.com";
alert("My Email address is " + email);

// 7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box:
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the book " + book);

// 8. Write a script to display this in browser through JS
console.log("Yeh! I can write HTML content through Javascript");

// 9. Store following string in a variable and show in alert and browser through JS “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”
var a = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(a);
console.log(a);

//                              CHAPTER 03

// 1. Declare a variable called age & assign to it your age. Show your age in an alert box.
var age = +prompt("Enter your age");
alert("I am " + age + " years old");

// 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”.
var visited = 1;
console.log("You have visited this site " + visited + " times");

// 3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser:
var birthYear = 2003;
console.log("My birth year is " + birthYear + "\nData type of my declared variable is " + typeof(birthYear));

// 4. A visitor visits an online clothing store www.xyzClothing.com . Write a script to store in variables the following information:
     // a. Visitor’s name
     var visitor_Name = prompt("Enter your name");
     // b. Product title
     var product_title = prompt("Enter product name");
     // c. Quantity i.e. how many products a visitor wants to order
     var quantity = +prompt("Enter the quantity");
     // Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
     console.log(visitor_Name + " ordered " + quantity + " " + product_title + " on XYZ Clothing store");
     alert(visitor_Name + " ordered " + quantity + " " + product_title + " on XYZ Clothing store");

                               // CHAPTER 04

// 1. Declare 3 variables in one statement.
var first, second, third;

// 2. Declare 5 legal & 5 illegal variable names.

     //Legal Variable names
     var first;
     var second_name;
     var thirdName;
     var FourthName;
     var $fifthname;

     // Illegal variable names
     // var 1_number;
     // var second number;
     // var if;
     // var #forth;
     // var fifth@;

// 3. Display this in your browser
     // a) A heading stating “Rules for naming JS variables”
     console.log("Rules for naming JS variables");
     // b) Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable
     console.log("Variable names can only contain, letters, numbers, $ and _. For Example $my_1stVariable");
     // c) Variables must begin with a ______, ______ or
     // _____. For example $name, _name or name
     console.log("Variables must begin with a letter, $ or _. For example $name, _name or name");
     // d) Variable names are case _________
     console.log("Variable names are case sensitive");
     // e) Variable names should not be JS _________
     console.log("Variable names should not be JS keywords");

                                 // CHAPTER 05

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.
     // For Addition
     var num1 = +prompt("Enter first number for Addition");
     var num2 = +prompt("Enter second number for Addition");
     var result = num1 + num2;
     alert("Sum of " + num1 + " and " + num2 + " is " + result);
     console.log("Sum of " + num1 + " and " + num2 + " is " + result);

// 2. Repeat task1 for subtraction, multiplication, division & modulus.
     // For Subtraction
     var num1 = +prompt("Enter first number for Subtraction");
     var num2 = +prompt("Enter second number for Subtraction");
     var result = num1 - num2;
     alert("Subtraction of " + num1 + " and " + num2 + " is " + result);
     console.log("Subtraction of " + num1 + " and " + num2 + " is " + result);
     // For Multiplication
     var num1 = +prompt("Enter first number for Multiplication");
     var num2 = +prompt("Enter second number for Multiplication");
     var result = num1 * num2;
     alert("Multiplication of " + num1 + " and " + num2 + " is " + result);
     console.log("Multiplication of " + num1 + " and " + num2 + " is " + result);
     // For Division
     var num1 = +prompt("Enter first number for Division");
     var num2 = +prompt("Enter second number for Division");
     var result = num1 / num2;
     alert("Division of " + num1 + " and " + num2 + " is " + result);
     console.log("Division of " + num1 + " and " + num2 + " is " + result);
     // For Modulus
     var num1 = +prompt("Enter first number for Modulus");
     var num2 = +prompt("Enter second number for Modulus");
     var result = num1 % num2;
     alert("Modulus of " + num1 + " and " + num2 + " is " + result);
     console.log("Modulus of " + num1 + " and " + num2 + " is " + result);

// 3.Do the following using JS Mathematic Expressions
     // a. Declare a variable.
     var number;
     // b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
     console.log("Value After variable declaration is: "+ number);
     // c. Initialize the variable with some number.
     number = 5;
     // d. Show the value of variable in your browser like “Initial value: 5”.
     console.log("Initial value: " + number);
     // e. Increment the variable.
     number = number + 1;
     // f. Show the value of variable in your browser like “Value after increment is: 6”.
     console.log("Value after increment is: " + number);
     // g. Add 7 to the variable.
     number = number + 7;
     // h. Show the value of variable in your browser like “Value after addition is: 13”.
     console.log("Value after addition is: " + number);
     // i. Decrement the variable.
     number = number - 1;
     // j. Show the value of variable in your browser like “Value after decrement is: 12”.
     console.log("value after decrement is: " + number);
     // k. Show the remainder after dividing the variable’s value by 3.
     number = number % 3;
     // l. Output : “The remainder is : 0”.
     console.log("The remainder is : " + number);

// 4. Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie.
var ticket_price = +prompt("Enter a price of movie ticket");
var tickets = +prompt("How many tickets you want");
var total_price = ticket_price * tickets;
console.log("Total cost to buy " + tickets + " tickets to a movie is " + total_price);
alert("Total cost to buy " + tickets + " tickets to a movie is " + total_price);

// 5. Write a script to display multiplication table of any number in your browser.
console.log("Table of 4");
var table = 4;
console.log(table + "x" + 1 + "=" + (table));
console.log(table + "x" + 2 + "=" + (table*2));
console.log(table + "x" + 3 + "=" + (table*3));
console.log(table + "x" + 4 + "=" + (table*4));
console.log(table + "x" + 5 + "=" + (table*5));
console.log(table + "x" + 6 + "=" + (table*6));
console.log(table + "x" + 7 + "=" + (table*7));
console.log(table + "x" + 8 + "=" + (table*8));
console.log(table + "x" + 9 + "=" + (table*9));
console.log(table + "x" + 10 + "=" + (table*10));

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
     // a. Store a Celsius temperature into a variable.
     var cel_temp = +prompt("Give temperature in celcius");
     // b. Convert it to Fahrenheit & output “NNoC is NNoF”.
     var fahrenheit_temp = (cel_temp * 9 / 5) + 32;
     console.log(cel_temp + "C is " + fahrenheit_temp + "F")
     alert(cel_temp + "C is " + fahrenheit_temp + "F")
     // c. Now store a Fahrenheit temperature into a variable.
     var fahrenheit_temp = +prompt("Give temperature in Fahrenheit");
     // d. Convert it to Celsius & output “NNoF is NNoC”.
     var cel_temp = (fahrenheit_temp - 32) * 5 / 9;
     console.log(fahrenheit_temp + "F is " + cel_temp + "C");
     alert(fahrenheit_temp + "F is " + cel_temp + "C");

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables

     // a. Price of item 1
     var price1 = +prompt("Enter the price of item 1");
     console.log("Price of item 1 is " + price1);
     // c. Ordered quantity of item 1
     var quantity1 = +prompt("Enter the quantity of item 1");
     console.log("Ordered quantity of item 1 is " + quantity1);
     // b. Price of item 2
     var price2 = +prompt("Enter the price of item 2");
     console.log("Price of item 2 is " + price2);
     // d. Ordered Quantity of item 2
     var quantity2 = +prompt("Enter the quantity of item 2");
     console.log("Ordered quantity of item 2 is " + quantity2);
     // e. Shipping charges
     var charges = 100;
     console.log("Shipping charges is " + charges);
     // Compute the total cost & show the receipt in your browser.
     console.log("Total cost of your order including charges is " + ((price1*quantity1)+(price2*quantity2)+charges));
     alert("Total cost of your order including charges is " + ((price1*quantity1)+(price2*quantity2)+charges));

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser
var total_marks = 980;
var marks_obtained = +prompt("Enter your obtained marks from the total of 980");
var percentage = marks_obtained/total_marks*100;
console.log(percentage + "%");
alert(percentage + "%");

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)
var US_dollars = +prompt("Enter currency in US dollar");
var saudi_riyals = +prompt("Enter currency in saudi riyal");
var PKR = (US_dollars*104.80) + (saudi_riyals*28);
console.log("Total Currency is PKR: " + PKR);
alert("Total Currency is PKR: " + PKR);

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
     // a. Add 5
     // b. Multiply by 10
     // c. Divide the result by 2
     // Perform all calculations in a single expression
     var number = +prompt("Enter a number");
     var result = (number + 5)*10/2;
     console.log(result);

// 11. The Age Calculator: Forgot how old someone is? Calculate it!
     // a. Store the current year in a variable.
     current_year = +prompt("Enter a current year");
     // b. Store their birth year in a variable.
     birth_year = +prompt("Enter your birth year");
     // c. Calculate their 2 possible ages based on the stored values.
     age = current_year - birthYear;
     // Output them to the screen like so: “They are either NN or NN years old”.
     console.log("Your age is " + age);
     alert("Your age is " + age);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
     var radius = +prompt("Enter the radius of a circle");
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
     var circumference = 2 * 3.142 * radius;
     console.log("The circumference is " + circumference);
     alert("The circumference is " + circumference);
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
     var area = 3.142 * radius *radius;
     console.log("The area is: " + area);
     alert("The area is: " + area);

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
     // a. Store your favorite snack into a variable
     var fav_snack = prompt("Enter your favorite snack");
     console.log("Favorati snack: " + fav_snack);
     // b. Store your current age into a variable.
     var current_age = +prompt("Enter your age");
     console.log("current age: " + current_age);
     // c. Store a maximum age into a variable.
     max_age = "65";
     console.log("Estimated Maximum age: " + max_age);
     // d. Store an estimated amount per day (as a number).
      var per_day = +prompt("Enter amount per day wants to eat");
      console.log("Amount of snack per day: " + per_day);
     // e. Calculate how many would you eat total for the rest of your life.
     var total = (max_age - current_age) * (per_day*365);
     // Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.
     console.log("You will need " + total + " " + fav_snack + " to last you until the ripe old age of " + max_age);
     alert("You will need " + total + " " + fav_snack + " to last you until the ripe old age of " + max_age);
