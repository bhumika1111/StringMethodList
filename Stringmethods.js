/*********Length ********/
var str = "Javascript is a great language";
var a = str.length;
console.log(a);

/**********LowerCase() ******/
var str = "Javascript is a great language";
var a = str.toLowerCase();
console.log(a);
/************toUppercase()************ */
var str = "Javascript is a great language";
var a = str.toUpperCase();
console.log(a);
/*************include*************/
var str = "Javascript is a great language";
var a = str.includes("is");
console.log(a);
/***********StartWith*******/
var str = "Javascript is a great language";
var a = str.startsWith("Java");
console.log(a);
/***********Endswith********** */
var str = "Javascript is a great language";
var a = str.endsWith("age");
console.log(a);
/*************search****** */
var str = "Javascript is a great language";
var a = str.search("is");
console.log(a);
/*************match**** */
var str = "Javascript is a great is language";
var a = str.match(/is/g);
console.log(a);
/***********indexof********** */
var str = "Javascript is a great language";
var a = str.indexOf("is");
console.log(a);
/**********lastindexof****** */
var str = "Javascript is a great is language";
var a = str.lastIndexOf("is");
console.log(a);
/***********replace******** */
var str = "Javascript is a great language";
var a = str.replace("Javascript","PHP");
console.log(a);
/**********trim******** */
// var str = "Javascript is a great language";
// var a = str.trim("v");
// alert(a);
/************charAt()********** */
var str = "Javascript is a great language";
var a = str.charAt(3);
console.log(a);
/**********charcodeat *******/
var str = "Javascript is a great language";
var a = str.charCodeAt("i");
console.log(a);
/********fromcharcode *******/
var a = String.fromCharCode(87)
console.log(a);
/*********concat******* */
var str = "Javascript is a great language";
var str2 = " rather than C "
var a = str.concat(str2);
console.log(a);
/*********split *******/
var str = "Javascript is a great language";
var a = str.split("sc");
console.log(a);
/*********repeat********/
var str = "Javascript language";
var a = str.repeat(3);
console.log(a);
/*********slice******* */
var str = "Javascript is a great language";
var a = str.slice(5,7);
console.log(a);
/********substring******** */
var str = "Javascript is a great language";
var a = str.substring (2,5);
console.log(a);
/********tostring******* */
var str = 50;
var a = str.toString();
console.log(a+20);