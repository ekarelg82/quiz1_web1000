//1.Write a recursive function which receives an array and returns the sum of the elements of the array.

var arraySumaElements = function(arr) {
  return (arr.length === 0) ? 0 : arr[0] + arraySumaElements(arr.slice(1));
}

arraySumaElements([10, 43, 245, 98]); //396

//2.Given two temperatures, return true if one is less than 0 and the other is greater than 100.
//a.	icyHot(120, -1) → true
//b.	icyHot(-1, 120) → true
//c.	icyHot(2, 120) → false

function icyHot(k, g) {
  if ((k < 0 || g < 0) && (k > 100 || g > 100)) {
    return 'true';
  } else {
    return 'false';
  }
};


//3.Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
//a.	makes10(9, 10) → true
//b.	makes10(9, 9) → false
//c.	makes10(1, 9) → true

function makes10(k, g) {
  if ((k === 10 || g === 10) || k + g === 10) {
    return 'true'
  } else {
    return 'false'
  }
};

//4.Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.
//a.	front22("kitten") → "kikittenki"
//b.	front22("Ha") → "HaHaHa"
//c.	front22("abc") → "ababcab"

function front22(str) {
  var added = str.substring(0, 2);
  return added + str + added;
};

front22('kitten'); //"kikittenki"
