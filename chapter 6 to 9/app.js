//                          CHAPTER 06

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
var num = +prompt("Enter the value of a");
console.log("Result");
console.log("The value of a is " + num + "\n-------------------------\n\n");
console.log("The value of ++a is " + ++num);
console.log("Now the value of a is " + num + "\n\n");
console.log("The value of a++ is " + num++);
console.log("Now the value of a is " + num + "\n\n");
console.log("The value of --a is " + --num);
console.log("Now the value of a is " + num + "\n\n");
console.log("The value of a-- is " + num--);
console.log("Now the value of a is " + num + "\n\n");

// 2. What will be the output in variables a, b & result after execution of the following script:
var a = 2, b = 1;
console.log("a is " + a);
console.log("b is " + b);
var result = --a - --b + ++b + b--;
console.log("result is " + result);
// Explain the output at each stage:
    // --a;
    //  => a=1 because of predecrement.
    // --a - --b;
    //  => --b = 0 because of predecrement and value is 1-0=1
    // --a - --b + ++b;
    //  => ++b = 1 because of preincrement and value is 1-0+1=2
    // --a - --b + ++b + b--;
    //  => b-- = 1 because of postdecrement and value is 1-0+1+1=3

// 3. Write a program that takes input a name from user & greet the user.
var userName = prompt("Enter your name");
alert(userName + "! welcome to our website.");

// 5. Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.

var table = +prompt("Enter a number to write a table");

if(table == null || table == ""){
    table = 5;
    alert(
        table + "x 1 = " + (table*1) + "\n" +
        table + "x 2 = " + (table*2) + "\n" +
        table + "x 3 = " + (table*3) + "\n" +
        table + "x 4 = " + (table*4) + "\n" +
        table + "x 5 = " + (table*5) + "\n" +
        table + "x 6 = " + (table*6) + "\n" +
        table + "x 7 = " + (table*7) + "\n" +
        table + "x 8 = " + (table*8) + "\n" +
        table + "x 9 = " + (table*9) + "\n" +
        table + "x 10 = " + (table*10) + "\n"
    );
} else {
    alert(
        table + "x 1 = " + (table * 1) + "\n" +
        table + "x 2 = " + (table * 2) + "\n" +
        table + "x 3 = " + (table * 3) + "\n" +
        table + "x 4 = " + (table * 4) + "\n" +
        table + "x 5 = " + (table * 5) + "\n" +
        table + "x 6 = " + (table * 6) + "\n" +
        table + "x 7 = " + (table * 7) + "\n" +
        table + "x 8 = " + (table * 8) + "\n" +
        table + "x 9 = " + (table * 9) + "\n" +
        table + "x 10 = " + (table * 10) + "\n"
    )
}

// 6. Take
    // a) Take three subjects name from user and store them in 3 different variables.
    sub1 = prompt("Enter subject 01");
    sub2 = prompt("Enter subject 02");
    sub3 = prompt("Enter subject 03");
    // b) Total marks for each subject is 100, store it in another variable.
    totalMarks = 300;
    // c) Take obtained marks for first subject from user and stored it in different variable.
    obt1 = +prompt("Enter obtain marks in " + sub1);
    // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
    obt2 = +prompt("Enter obtain marks in " + sub2);
    obt3 = +prompt("Enter obtain marks in " + sub3);
    // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
    sum = obt1 + obt2 + obt3;
    percentage = (sum/totalMarks)*100;
    alert("Total mark is " + sum);
    alert("Your percentage is " + percentage + "%");