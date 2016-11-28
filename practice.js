// Practice Problem #1

/* This section creates functions for the bitwise operators 
   AND, OR, XOR, LEFT SHIFT, and RIGHT shift */
   
var num1 = Number(prompt("Enter number 1."));
var num2 = Number(prompt("Enter number 2."));

function bitwiseAnd(x, y)
{
  return x & y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 & num2 = " + bitwiseAnd(num1, num2))
document.write("<br>")


function bitwiseOr(x, y)
{
  return x | y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 | num2 = " + bitwiseOr(num1, num2))
document.write("<br>")


function bitwiseXor(x, y)
{
  return x ^ y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 ^ num2 = " + bitwiseXor(num1, num2))
document.write("<br>")


function bitwiseLeftShift(x, y)
{
  return x << y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 << num2 = " + bitwiseLeftShift(num1, num2))
document.write("<br>")


function bitwiseRightShift(x, y)
{
  return x >> y;
}
document.write("num1 = " + num1 + ", num2 = " + num2);
document.write("<br>")
document.write("num1 >> num2 = " + bitwiseRightShift(num1, num2))
document.write("<br>")


// Practice Problem #2

var text = prompt("Please enter string");
var subStr = prompt("Please enter substring you would like removed");

function removeSubStr(text, subStr)
{
  // Splits the substring given from the text given and joins the split text with what is in ""
  return text.split(subStr).join("");  
}

document.write(removeSubStr(text, subStr));
document.write("<br>");


// Practice Problem #3

// This section repeats a string by asking for a number of repeats.
var string = "I am awesome ";
var repeats = Number(prompt("Please enter number of repeats"));

function repeatString(string, repeats)
{
  return string.repeat(repeats);
}
document.write(repeatString(string, repeats));
document.write("<br>");


// Practice Problem #4

// This section checks if a string entered is a palindrome or not
function palindrome(myString)
{
  // Sets all characters in the myString parameter to lowercase
  var removeChar = myString.replace(/[^A-Z0-9]/ig,"").toLowerCase();
  
  // Reverses the string
  var checkPalindrome = removeChar.split('').reverse().join('');
  
  // Checks if the 2 variables are equal
  if(removeChar === checkPalindrome)
  {
    document.write(myString + " is a Palindrome.");
  }
  
  else 
  {
    document.write(myString + " is not a Palindrome.");
  }
}
palindrome(prompt("Please enter a phrase"));
document.write("<br>");


// Practice Problem #5

// This section orders numbers from least to greatest
function orderNumbers() 
{
  var x = 3;
  var y = 1;
  var z = 5;

  if (x<y && x<z)
  {
    if (y<z)
    {
      document.write(x + "," + y + "," +z);
    }
    else
    {
      document.write(x + "," + z + "," +y);
    }
  }

  else if (y<x && y<z)
  {
    if (x<z)
    {
      document.write(y + "," + x + ","+z);
    }
    else
    {
      document.write(y + "," + z + "," +x);
    }
  }

  else if (z<x && z<y)
  {
    if (x<y)
    {
      document.write(z + "," + x + ","+y);
    }
    else
    {
      document.write(z + "," + y + "," +x);
    }
  }
}
orderNumbers();
document.write("<br>");



// Practice Problem #6

// This section gives a letter grade based on the value entered
var grade = prompt ("Enter grade value from 0-100")
switch (true) 
{
  case (grade == 100):
    document.write("A+")
    break;
  
  case (grade >= 93 && grade <= 99.99):
    document.write("A")
    break;
    
  case (grade >= 90 && grade <= 92.99):
    document.write("A-")
    break;

  case (grade >= 87 && grade <= 89.99):
    document.write("B+")
    break;

  case (grade >= 83 && grade <= 86.99):
    document.write("B")
    break;

  case (grade >= 80 && grade <= 82.99):
    document.write("B-")
    break;

  case (grade >= 77 && grade <= 79.99):
    document.write("C+")
    break;

  case (grade >= 73 && grade <= 76.99):
    document.write("C")
    break;

  case (grade >= 70 && grade <= 72.99):
    document.write("C-")
    break;

  case (grade >= 69 && grade <= 69.99):
    document.write("D+")
    break;

  case (grade >= 68 && grade <= 68.99):
    document.write("D")
    break;

  case (grade >= 67 && grade <= 67.99):
    document.write("D-")
    break;

  case (grade <= 66.99):
    document.write("F")
    break;         
}

