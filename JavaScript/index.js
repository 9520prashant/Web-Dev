// var myVar = 'Prashant';
// console.log(myVar);
// console.log(typeof myVar);

// var myAge = 18;
// console.log(typeof(myAge));

// var amIverma = true;

// console.log(amIverma);
// console.log(typeof(amIverma));

// var num = 1;
// var str  = "true";

// console.log(num + str);
// console.log(isNaN(num));
// console.log(isNaN(str));

// var a = 0;
// var b = 1;

// console.log(!(a || b));

// var str = "Steven";
// var str2 = "Varma";

// console.log(str + str2);

// console.log(3**3); // Power

// var  a = 1;
// var b  = 2;

// a = a+b;
// b = a-b;
// a = a-b;

// console.log(a);
// console.log(b);

// var num1 = 5;
// var num2 = '5';

// console.log(num1 == num2);
// console.log(num1 === num2);

// var num1 = 9;
// if (num1 >18) {
//     console.log("Ready");
// }else{
//     console.log("Not")
// }

// for(let i=0; i<5; i++){
//     if(i === 3){
//         continue;
//     }
//     console.log(i);
// }

// var key = 'p';
// switch (key) {
//     case 's':
//         console.log('Sunday');
//         break;
//     case 'm':
//         console.log('monday');
//         break;
//     case 'tu':
//         console.log('tuesday');
//         break;
//     case 'w':
//         console.log('wednesday');
//         break;
//     case 'thu':
//         console.log('thursday');
//         break;
//     case 'f':
//         console.log('friday');
//         break;
//     case 'S':
//         console.log('Saturday');
//         break;

//     default:
//         console.log("You Entered Wrong Key");
//         break;
// }

// var i = 0;
// console.log((i===0)?"zero":"not zero");

// let i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// function add(){
//     var a = 10;
//     var b = 20;
//     return a+b;
// }
// console.log(add());

// var sum = function (a, b){
//     return a+b;
// }
// console.log(sum(3,4));

// function mult(a,b){
//     return a*b;
// }
// console.log(mult(3,4));

// const sum =(a,b) =>{
//     return a*b;
// }
// console.log(sum(4,4));

// var nums = ["Steven",2,3,"Prasahnt"];
// for(let i=0; i<nums.length; i++){
//     console.log(nums[i]);
// }

// for (const key in nums) {
//    console.log(key);
// }
// console.log("For Of Loop")
// for (const iterator of nums) {
//     console.log(iterator)
// }

// nums.forEach(element => {
//     console.log(element)
// });

// var nums = [1,2,3,4,5,6,7,8,9];

// console.log(nums.indexOf(2,8));
// console.log(nums.lastIndexOf(9));
// console.log(nums.includes(9));
//  console.log(nums.find(9));
//  console.log(nums.filter(9));

// const cnt  = nums.push(10, 11, 12);
// console.log(cnt);

// var cont  = nums.unshift(11);
// console.log(cont);

// nums.pop()
// var temp = nums.pop();
// console.log(temp);

// nums.shift();
// console.log(nums);

// var month = ['jan', 'march', 'April', 'june', 'junly'];

// const newMonth = month.splice(5,0, 'December');
// console.log(month);
// console.log(newMonth);
// const iMonth = month.indexOf('aug');
// if(iMonth != -1){
//     month.splice(1,1,'March')
// }else{
//     console.log('Chutiya hai kya');
// }

// month.splice(3,3);
// console.log(month);

// const arr = [1,2,3,52];
// let newArr = arr.map((currelement, index, arr)=>{
//     return currelement > 9;
// })
// console.log(arr);
// console.log(newArr);

// let newArr = arr.map((currElm, indx, arr)=>{
//     return `index number = ${indx} and the value is ${currElm} belong to ${arr}`
// })
// console.log(newArr);

// let arr = [1,3,4];

// let sum = arr.reduce((accumulator, currelem, index, arr)=>{
//         debugger;
//         return accumulator *= currelem;
// })
// console.log(sum);

// const arr = [
//     ['zone-1', 'zone_2'],
//     ['zone-3', 'zone_4'],
//     ['zone-5', 'zone_6'],
// ];

// let flatArr = arr.reduce((accum, currelem)=>{
//     return accum.concat(currelem);
// });
// console.log(flatArr);

// let myName = "Prashant";
// let myChannel = "Steven";

// let ytName = new String ("Steven");
// console.log(ytName);

// console.log(myName.length);

// let anySentence = 'We are d gidng xgndi"grgburbg" ';
//  anySentence = "We are d gidng xgndi \"grgburbg\" ";
// console.log(anySentence);

// const myBioData = "I am Steven";
// console.log(myBioData.indexOf("Steven"));

// const str = 'I am Steven';

// let SData = str.search("Steven");
// console.log(SData);

// var str = "Apple, banana, Kiwi";

// let res = str.slice(0,4);
// console.log(res);

// let myTweets = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab maxime repellat, beatae maiores nemo tenetur iusto temporibus ullam nisi? Quisquam expedita libero dolorum porro? Autem porro voluptatem quaerat suscipit nulla.';

// let myActualTweet = myTweets.slice(0,28);
// console.log(myActualTweet);

// var str = "Apple, banana, Kiwi";
// let res = str.substring(9,-1);
// console.log(res);

// var str = "Apple, banana, Kiwi";
// let res = str.substr(0,4);
// console.log(res);

// var str  = "Steven";
// console.log(str.charAt(0));

// var str = "hello WorlD";
// let lastChar  = str.length-1;
// console.log(str.charCodeAt(lastChar));

// var str = "Hello World";
// console.log(str[0]);

// var str = "steven";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// var str1 = 'steven';
// var str2 = 'varma';
// console.log(str1.concat(str2));
// console.log(str1.concat(" ",str2));

// var txt = "a,b,c,d";
// console.log(txt.split(","));

// let currDate = new Date();
// console.log((currDate));

// console.log(currDate.toString());

// console.log(Date.now());

// var d = new Date(2023, 1, 14, 11, 58, 30, 0);
// var d = new Date(2023,0);
// console.log(d.toLocaleString());

// var d = new Date("October 13, 2023 12:01:80")
// console.log(d.toLocaleString());

// var d=new Date(1676355955684);
// console.log(d.toLocaleString());

// const currDate= new Date();

// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());

// console.log(currDate.setFullYear(2023));
// console.log(currDate.setFullYear(2023, 2, 14));
// console.log(currDate.setMonth(2));
// console.log(currDate.setDate(14));

// const time = new Date();

// console.log(time.getTime());
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());
// console.log(time.getMilliseconds());

// console.log(time.setTime(1));
// console.log(time.setHours(1));
// console.log(time.setMinutes(1));
// console.log(time.setSeconds(1));
// console.log(time.setMilliseconds(1));

// console.log(Math.PI);
// let num = 10.90;
// console.log(Math.round(num));
// console.log(Math.pow(2,4));
// console.log(Math.sqrt(144));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.1));

// console.log(Math.floor(Math.random()*10));

// console.log(Math.trunc(3.4242));

// let runAgain = true;
// const canDrive = (age) => {
//   if(age >= 18)
//     return true;
//   else  
//     return false;
// };

// while (runAgain) {
//   let age = prompt("Enter Your Age");

//   age = Number.parseInt(age);
//   if(age < 0){
//     console.error("Please enter a valid age");
//     break;
//   }
//   if (canDrive(age)) {
//       alert("yes you can drive");
//     } else {
//         alert("you can not drive");
//     }
//     runAgain = confirm("DO you Want to Play agian");
// }
    
function goback(){
    window.history.back();
}