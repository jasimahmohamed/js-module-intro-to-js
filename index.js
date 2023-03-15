// console.clear()
// console.log('hello')
// console.log(123)
// console.log(false)
// var greetings = 'blue'
// console.log(greetings)
// console.log([1, 2, 3, 4])
// console.log({ a: 1, b: 2 }, { a: 4, b: 5 })
// console.log([{ a: 1, b: 2 }, { a: 4, b: 5 }])
// console.table({ a: 1, b: 2 })
// console.error('there was a mistake')
// console.warn('warning!')
// console.time('Hello')
// console.log('bye')
// console.log('bye')
// console.log('bye')
// console.log('bye')
// console.log('bye')
// console.timeEnd('Hello')

//you can change arrays and objects that are assigned to const but you cannot reassign/redeclare the var with a new value

/*null is an intentional empty value,
undefined is a var that has been declared but not defined*/

/*var.length only works if var = 'string', to change a number, boolean, date or array into a string, wrap it like this var = String(5) or String(true) or String(new Date()) or String([1,2,3,4]) \\ output is 1 and 4 and 57 and 7(incl commas), all vars return as strings in console.

Alternatively, you can use the toString() method, var = (true).toString() \\ output is 'true'

  Alternatively, you can use var = Number('5') to convert a number string into a number. You can attach the .toFixed(n) method to a var to add n decimal places to your number
  You can also pass Number() for true, false, and null and output 1, 0, and 0 as their values in number.

    Number() does not work on strings, arrays or objects.

  Alternatively, var = parseInt('100.30') will output 100 as a whole number, and var = parseFloat('100.30') will output 100.3 as a float number, you can also attach the toFixed() method to the var to specify the amount of decimal places you want.

You can take a concatinated var = (num + string) and convert it into a number using Number() or parseInt(), this is different to var = (num + num) which will already output a number*/

/*THE MATH OBJECT: Math is an object that has properties(attr) and methods(func)
  var = Math.PI \\ 3.14
  var = Math.E \\ Euler's number
  var = Math.round(2.4) \\ 2
  var = Math.ceil(2.4) \\ rounds up to 3
  var = Math.floor(2.8) \\ rounds down to 2
  var = Math.sqrt(64) \\ squares to 8
  var = Math.abs(-3)\\ gives positive(absolute) version of num: 3
  var = Math.pow(8, 2) \\ 8 to the power of 2: 64
  var = Math.min(2,33,4,1,6,-2) \\ returns min value: -2
  var = Math.max(2,33,4,1,6,-2) \\ returns max value: 33
  var = Math.random() \\ returns random decimal between 0 and .99
    commonly used as Math.random() * n \\ outputs random num between 0 and (n - .1) but cannot be n
      can wrap Math.floor(Math.random() * 20 + 1) to get whole number between 0 and 20
  */

/*STRINGS:
  [can concatinate with ' + ']
  [can append with ' += ']
  [can escape with ' \ ' before an apostraphe in a string because of
  quoting errors, but can use template literals instead]

  Properties(do not need parenthesis):
    var = firstName.length \\ counts the characters in a string

  Methods:
    var = firstName.concat(' ', lastName) \\ but can use template literals instead
    firstName.toUpperCase() \\ all uppercase string
    firstName.toLowerCase() \\ all lowercase string
    firstName[0] \\ both arrays and strings use indexes, returns only the
      letter in the 0th index of the string
    firstName.indexOf('l') \\ returns the index number of the letter you
      pass into the method: ex: William: 2
    firstName.lastIndexOf('l') \\ returns the index number of the last
      occurance of the letter you pass in ex: william: 3
        <IF the character you input does not exist the output will be -1>
    firstName.charAt('2') \\ returns character at the index u input
    firstName.charAt(firstName.length - 1) \\ returns last character in a
      string
    firstName.substring(0,4) \\ outputs substring from the given index
      range but not including the last index
    firstName.slice(0,4) or .slice(-3) \\ outputs sliced string from the
      given index range but not including the last index, outputs string index starting from the end: 3 letters
        used for arrays as well
    firstName.split(' ') or (',') \\ splits string by whatever you input into the parameter
      in this case a space: useful for separating tags from a string of tags
    firstName.replace('Brad', 'Jack') \\ searches for Brad and replaces
      it with Jack in a string
    firstName.includes('word') \\ tests to see if input is in the string
  */

/*
Object constructors:
new Array()
new Date() */
/*
Template literals:
  use `<h1>var: ${jsVar}</h1>` to implement template literals,
  everything inside the ${} are javascript variables, functions, and tools
  EX:
    `<li>Name: ${name}</li>` \\ outputs value of name var
    `<li>Age: ${2 + 2}</li>` \\ outputs sum of input
    `<li>Function: ${func()}</li>` \\ outputs return value of function
    `<li>Terinary: ${age > 30 ? 'over 30' : 'underage'}</li>` \\ executes an if-statement: underage
  */


/*create arrays two ways: const nums = [n, n, n, n] or const nums2 =
new Array(n, n, n, n,) using the array constructor/array object.
Arrays can be of all types: strings, numbers, mixed, booleans, undefined, null, objects, dates using the date constructor: new Date()

Properties:
array.length \\ outputs length of array by index length in the form of a number

Methods:
Array.isArray(nums) \\ returns if var in input is or is not an array

Array.from('elms') \\ turns an html collection into an array

nums[i] \\ returns value stored in inputed index value {i}, starts at 0

nums[2] = 100 \\ changes value at index 2 to 100

nums.indexOf('value') \\ returns index of inputed value

Mutating arrays:
nums.push(250) \\ adds 250 to end of array

nums.unshift(120) \\ adds 120 to start of array

nums.pop() or (250) \\ removes last value or 250 from end of array

nums.shift() or (120) \\ removes first value or 120 from start of array

nums.splice(1,1) \\ removes values between the two inputted indexes

nums.reverse() \\ reverses values in the array

nums.concat(nums2) \\ concatinates two arrays

nums.sort() \\ sorts string arrays by alphabetical order,
  for number arrays use the compare function:
    nums.sort(function(x,y){
      return x - y;
    })
  oraganizes values from least to greatest
    nums.sort(function(x,y){
        return y - x;
      })
  organizes values from greatest to least

nums.find(under50)
function under50(num) {
  return num < 50
}
nums.find(under50) \\ finds first value that fits the function rules{under 50} and returns that one value
*/

/* Object literals:
const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@aol.com',
  hobbies: ['music', 'sports'],
  address: {                       <this is called an imbedded object>
    city: 'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return currentYear(ex:2023) - this.age

  <must use the this keyword when inside an object>
  }
}

let var
var = person
var = person.firstName  \\ outputs firstName value
var = person['firstName'] \\ outputs firstName value
var = person.age or person['age'] \\ outputs age value
var = person.hobbies \\ outputs hobbies array
var = person.hobbies[1] \\ outputs value at index 1 of hobbies array
var = person.address \\ outputs address array
var = person.address.state \\ outputs state value
var = person.address['city'] \\ outputs city value
var = person.getBirthYear() \\ retrieves birthyear value from function
*/

/*Arrays of objects:
const people = [
  {name: 'John', age: 30},
  {name: 'Steve', age: 24},
  {name: 'Mike', age: 45}
]
for(let i = 0; i < people.length; i++){
  console.log(people[i].name)
} \\ logs name of each person in array separately through each iteration
*/

/*
The Date object:
let var
const today = new Date()
var = today
console.log(var) \\ outputs today's date, typeof will be an object because
it is a reference type

you can change the type into a string using var = today.toString()

to set a specific date use:
new Date('9-10-1981 11:25:00')
new Date('September 10 1981')
new Date('9/10/1981')                   \\ gives date and time

const today = new Date(1/1/2001)
today.getMonth() \\ will return 0 even though Jan is month 1, the return value from this method is based on the months' index value: 0
today.getDate() \\ returns 1, so current date and not based on index
today.getDay() \\ returns a number. Sun. returns 0, wed. returns 3, so current day and not based on index
today.getFullYear() \\ returns current year
today.getHours() \\ returns current hour
today.getMinutes() \\ returns current minute
today.getSeconds() \\ returns current second
today.getMilliseconds() \\ returns current millisecond
today.getTime() \\ produces timestamp {seconds starting from Jan 1, 1970}

let birthday = new Date('12/23/04') : Dec 23 2004
birthday.setMonth(2) \\ changes pre birthday month from: Dec. to Mar.
birthday.setDate(12) \\ : Mar 12 2004
birthday.setFullYear(2003) \\ Mar 12 2003
birthday.setHours(n)
birthday.setMinutes(n)
birthday.setSeconds(n)

look at MDN docs for more information on the Date object
*/

/* if statements: 

const id = '100' <turning a num into a string effects the statements>

//equal to
 if (id == 100) {                 //doesn't care about type: correct
   console.log('correct')
 } else {
   console.log('incorrect')
 }

 //not equal to
 if (id != 101) {               // doesn't care about type: correct
   console.log('correct')
 } else {
   console.log('incorrect')
 }

if (id != 100) {           // doesn't care about type: incorrect
  console.log('correct')
} else {
  console.log('incorrect')
}

 //equal to value and type     //cares about type: incorrect
 if (id === 100) {
   console.log('correct')
 } else {
   console.log('incorrect')
 }


 //equal to value and type     //cares about type: correct
 if(id !== 100){
   console.log('correct')
 } else {
   console.log('incorrect')
 }
 
best practice is to use three equal signs === or !== to test value and type, == and != are weak and will not care about types
 
if you want to validate that your variable exists before using it in an if-statement, use the typeof operator to do so:

if(typeof id !== 'undefined'){
  console.log(`the ID is ${id}`)
} else {
  console.log('no ID')
}

if the id var passes the initial validation, it will run the primary code, else it will run the else statement as your var does not exist and is 'undefined' 

sometimes you need to account for alternate values that are not what you are expecting to compare by using a final else {} statement, like if you're
testing if something is red or blue but what if the input is green, but you haven't accounted for green

Logical operators: when building if-statements with many parameters
&& - and
|| - or

Ternary operator: <shortened and faster way to write a conditional, but isn't used in every if-statement>
const id = 100
(id === 100 ? 'correct' : 'incorrect') \\ : 'correct'

you don't have to use curly braces for the statement containers but it is highly recommended

Switches:     <another way to create an if-statement>
case switches are useful if you have a lot of cases and don't want to create several 'ifs' and 'elses'

ex:
let day = new Date().getDay()
switch (day) {
  case 0:               //case can be a num or 'string'
    day = 'Sunday'
    break
  case 1:
    day = 'Monday'
    break
  case 2:
    day = 'Tuesday'
    break
  case 3:
    day = 'Wednesday'
    break
  case 4:
    day = 'Thursday'
    break
  case 5:
    day = 'Friday'
    break
  case 6:
    day = 'Saturday'
    break
  default:
    break
}
console.log(`today is ${day}`)
*/

/*Functions: 
if you want your function to execute after you've declared it, you have to call it by typing: functionName(); in the app

paramaters are really common in functions, if you want your parameters to print, you must define them when calling the function, you do this by inserting the parameter values inside the functions parenthesis, and then calling the function with your custom values for the parameters with a , in between.
ex: function greet(fName, lName){     
  return `hello ${fName} ${lName}`
}
console.log(greet('John', 'Doe'))                 <===


you can also set defaults for the parameters by doing:

function greet(fName = 'John', lName='Doe') {}

This way, if you dont insert any values in your call, the parameter values will be set to the defaults and, not undefined. You can override the defaults by setting values when you call the function.

function expressions:
const square = function(x = 3){
  return x*x
}
console.log(square(8))  <== overrides default value of 3: 64

IIFEs - immediately invokable function expressions:
(function(){
  console.log('IIFE ran..')
})()

You can also pass in parameters:
(function(name){
  console.log(`Hello ${name}`)
})('Brad')

Functions in objects: when a function is put inside an object it is called a method:

You can create methods by typing:
const todo = {
  add: function (x, y) {
    console.log(x + y)
  },
  edit: function (id) {
    console.log(`Add todo ${id}`)
  }
}

todo.add(2, 4)      <== you've created your own object method
todo.edit(22) 


Or you can define a method outside the object, it is added to the object:

todo.delete = function() {
  console.log('Delete todo...')
}
todo.delete()

*/

/*Loops:
For loops:
for(declaration - no const ; condition ; change){}
for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log('This is the number 2')
    continue;
  }
  if (i === 5) {
    console.log('Loop stopped.')
    break;
  }
  console.log(`Number ${i}`)
}
  Continue stops the run for that loop and moves on to the next iteration and runs through the code again. Break stops the loop all together.

Some say to use a for loop when you know how many iterations there are going to be, and a while loop for when you don't, but it's not black and white.

While loops:
var is set outside of loop,
ex:
let var = x
while(condition){
  repeated code goes here;
  increment goes here;
}
let i = 0
while(i < 10) {
  console.log(`Number ${i}`)
  i++
}

Do-while loops:
always going to run once no matter what:
let i = 0
do {
  console.log(`Number ${i}`)
  i++
}
while (i < 10)

if i = 100 \\ output would be Number 100 as the while condition is not met. The function still runs at least once.

Array loops:

.forEach(): loops through every item in array
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota']
cars.forEach(function(car){
  console.log(car)
})

Possible paramaters:
forEach(iterator<current item>, index, array)


map(): opens current array and returns a new one based off the function code
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Sarah' },
  { id: 3, name: 'Karen' },
  { id: 4, name: 'Steve' }
]
const ids = users.map(function (user) {
  return user.id
})

console.log(ids) \\ : [1, 2, 3, 4], this is a number array

Object loops:  <note: objects contain key-value pairs, ex: key: fName,
  value: 'John'>

For-in loop: goes through object and retreives its key-value pairs
const user = {
  fName: 'John',
  lName: 'Doe',
  age: 40
}

for(let x in user){
  console.log(x)   <== gives just the key
  console.log(`${user[x]}`)  <== gives you just the key-value
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`)
}

*/
/*The window object: 
The document object is part of the window object. The window is the global object in client-side javascript. Node is a js runtime that runs as a stand-alone processor on your computer. In Node, your computer system is your environment, whereas in client-side js, the window is the global environment.  Node.js and Chrome use the same javascript engine v8, it works the same way but they are just in different environments. The window object has: localStorage, the fetchAPI, the navigator object, geolocation, alert(), prompt(), confirm().

By inference: The window object perhaps acts like an access to a local database whereas node.js is an external database. Kind of like inline and external css and javascript. I presume external documents always provide more functionality than inline/local.

type in window into console to view its different parts: its objects, methods, apis, events


Window methods / objects / properties:

Methods:
EX: window.alert(), window.document

-window.alert() \\ prompts an alert
-prompt() - const input = prompt()
  alert(input) \\ prompt is similar to alert but it takes an input, comes in the same box as an alert but with an input el inside
-if(confirm('Are you sure')){
  console.log('YES')
} else {
  console.log('NO')
}                    
  \\ validates if statement and runs confirmation that user wants to commit to action
  -you can impelement different looking alerts with bootstrap or something of the likes


Properties:
-height and width
let vad = window.outerHeight
let val = window.outerWidth
console.log(vad, val)

let van = window.innerHeight \\ exludes things like scrollbars, console, etc
let vat = window.innerWidth
console.log(van, vat)

You can set up an event where height is constantly being checked and do things with that.

-scroll points
val = window.scrollY \\ returns zero cause there is no scroll bar and u are at the top of the page.
val = window.scrollX \\ returns position point for horizontal scroll bar

Good for when you want things like animations to occur when you scroll to a certain point in your page.

Objects:
-location object
val = window.location \\ provides host, hostname, loopback address and port, pathname ex: "/", http, methods like reload() and replace(). You can redirect with the location obj and get query strings.
val = window.location.hostname \\ will be loopback or ur custom domain name.
val = window.location.port \\ ex: 5500
val = window.location.href \\ gives protocol, hostname, and port
val = window.location.search \\ outputs search parameters set in browser search bar ex: ?id=1&name=Brad&member=standard. You can extract these values and insert them into your script, like get-forms or links.
window.location.href = 'https:google.com' \\ updates href
window.location.reload() \\ constantly reloads page if not kept tidy

-history object
window.history.go() \\ inserting -1 or -2 into the parameter makes the site go back 1 or 2 pages
window.history.length \\ gives the number of sites you clicked on once entering the website

-navigator object
Deals with the browser not the window environment: chrome, firefox and gives you information about it. Console log window.navigator to view all its properties.
val = window.navigator
val = window.navigator.appName
val = window.navigator.appVersion
val = window.navigator.userAgent
val = window.navigator.platform \\ can use this to determine what to do with different pc manufacturers.
val = window.navigator.vendor \\ browser company: Google Inc.
val = window.navigator.language
console.log(val)
*/

/*let and const have a block scope, var has a global scope, it changes if you run functions in it. let and const can be declared with the same name outside of their scope and will be associated with the value that is only within their respective scope(anything wrapped in {}) */

/*
The DOM:
document.all \\ gives you all the document's elements in an html collection (cannot run forEach on html collections). You can access indexes like in an array though.
document.all.length \\ length of elements in the html collection
document.head
document.body
document.doctype
document.domain \\returns loopback address cause of being on local host
document.URL \\ whole url: protocol, port, and page
document.characterSet \\ : UTF-8
document.contentType \\ if html returns text/html

document.forms not recommended but returns an html collection of all the forms inside your html doc, access a single form by using an index: document.forms[1]
document.forms[0].id \\ returns id value
document.forms[0].method \\ returns method type
document.forms[0].action

document.links \\ returns html collection of all the links in your html doc, can access indexes and property values
document.links[0].classList \\ returns a DOMtokenlist with all the classes in a fake array

document.images
document.scripts to retrieve all scripts in your html doc
  can retrieve attributes: document.scripts[2].getAttribute('src') returns app.js if that is the 3rd item in the collection.


DOM lists => Arrays:
To convert html collections and token lists into an array:
  let scripts = document.scripts
  let scriptsArr = Array.from(scripts) \\ must assign scripts above first
  scriptsArr.forEach(function(script){
    console.log(script.getAttribute('src'))
  }) //turns into array and returns src attr values in console log
 */

/*
Selectors:
Selectors are very often assigned to a const variable:
  ex: const idTitle = document.getElementById('id-name')
  idTitle.innerHTML = '', idTitle.style.background = '#sfgfsg'
This is best practice for selectors.

document.getElementById('id-name') \\ returns id and values wrapped in the element tag ex:         <h1 id='id-name'>Welcome</h1>             , but:
document.getElementById('id-name').id returns just the id-name
document.getElementById('id-name').className returns just the class name values

document.getElementById('id-name').style.background = '#sdfsdf'
document.getElementById('id-name').style.padding = '5px'
document.getElementById('id-name').style.color = '#sdfsdf'
document.getElementById('id-name').style.display = 'none'
  styling is used to implement dynamic functionality rather than keeping the page static, these styles are triggered by events

document.getElementById('id-name').textContent = 'Input text!'
document.getElementById('id-name').innerText = 'Input text!'
document.getElementById('id-name').innerHTML = '<span
  style="color:red">Task List</span>'


Query selectors:
# for id, use ''
. for class-name, use ''
nothing for element, use ''. querySelector only selects the first element that appears on the HTML doc.

use querySelector('ul li') to select nested elements

use suedo classes: 
document.querySelector('ul li:last-child').style.color = 'red' 
  for last el in el list
document.querySelector('ul li:nth-child(3)').style.color = 'blue' 
  for nth el in the el list

document.querySelector('ul li:nth-child(even)') \\ only selects first
  even el
document.querySelector('ul li:nth-child(odd)') \\ only selects first odd
  el


HTML collections or node lists can be turned into an array, but these are some collections you can populate with js document methods:

document.getElementsByClassName:
const items = document.getElementsByClassName('collection-item')
console.log(items) \\ returns an HTML collection with an index
can do: console.log(items[0]) to access first array only
  ex: items[0].style.color = 'red'

this is to access elements on a global scope, however, you can use querySelector() to select a specific element you want to get a class from:
document.querySelector('ul').getElementsByClassName('collection-item')

document.getElementsByTagName('li'): 
Works the same as className but populates from tag name

To convert collections and lists into an array you must set the initial var to a let variable
let lis = document.getElementsByTagName('li')
lis = Array.from(lis) <== reassigned lis from a collec. to an array

You can now use the array methods on the lis variable.

querySelectorAll() creates a node list, not a collection. You can also pass in multiple paramaters like ('tag.className nestedtag.className') for querySelectors.
items.forEach(function(item, index){
  item.textContent = `${index}: Hello`
})

document.querySelectorAll('ul li:nth-child(even)')
document.querySelectorAll('ul li:nth-child(odd)') 
  are different to querySelector() as these select all even or odd children

  liOdd.forEach(function(li, index){
    li.style.background = '#ccc'
  })

  for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#fefefe'
  }

for-loops do work on html collections without being converted to an array, as u can use .length for them
 */

/*
Traversing the DOM:

Nodes:
const list = document.querySelector('ul.collection')
val = list.childNodes

This will return the child elements but also the text nodes cause by line breaks in between the children, it is a node list.
  ex: [0: #text, 1: li element, 3: #text, 4: 2nd li element]

val = list.children 

This returns a collection, without the additional text nodes.

list.children[0].textContent = 'Hello'
list.children[3].children \\ gives children of children
list.children[3].children[0].id = 'insert-id'


list.childNodes[0] \\ : #text  
list.childNodes[0].nodeName \\ : #text 
list.childNodes[0].nodeType \\ : 3

nodeTypes:
1 - element
2 - attribute (deprecated)
3 - text node
8 - comment
9 - document itself
10 - doctype

list.children
list.childNodes

list.firstChild \\ gives the first node not element
list.firstElementChild \\ gives the first element
list.lastChild \\ gives last element node
list.lastElementChild \\ gives last element child

list.childElementCount \\ will give the amount of children elements excluding nodes.

listItem.parentNode
listItem.parentElement
listItem.parentElement.parentElement

listItem.nextSibling \\ if #text node exists it will return that
listItem.nextElementSibling.nextElementSibling

listItem.previousSibling \\ if #text node exists it will return that
listItem.previousElementSibling.prevElementSibling

Creating elements in js:
document.createElement('li')
li.className = 'collection-id'
li.id = 'new-item'

li.setAttribute('attr', 'attrValue')
  ex: li.setAttribute('title', 'New Item')


Appending text to an element, then appending that element to its parent:
li.appendChild(document.createTextNode('Hello World'))
  This adds text inside of an element like inside an li or h3 tag.
  note: <h1>these words i'm typing are considered a text node</h1>
document.querySelector('ul.collection').appendChild(li)

For const variables you can add stuff to it like classes, modify it, run methods, but you cannot change the name of the actual const var (you can't redeclare)




IMPORTANT!!!!!




Example element creation in js:
const link = document.createElement('a')
link.className = 'delete-item secondary-content'
link.innerHTML = '<i class="fa fa-remove"></i>'
li.appendChild(link)
document.querySelector('ul.ul-collection').appendChild(li)

  what you create: 
  <ul class='ul-collection'>
    <li class="delete-item secondary-content">
      <i class="fa fa-remove"></i>
    </li>  
  </ul>

Example element replacement in js:
const newHeading = document.createElement('h2')
newHeading.id = 'task-title'
newHeading.appendChild(document.createTextNode('Task List'))
const oldHeading = document.getElementById('task-title')
const cardAction = document.querySelector('card.card-action')
cardAction.replaceChild(newHeading, oldHeading)

Steps: create new el in js, assign the same id as soon-to-be-replaced el,
append a text node, retrieve the old el by its id, retrieve old el's parent el, replace old el with new el: replaceChild(newEl, oldEl)

Example element removal in js:
const lis = document.querySelectorAll('li')
const list = document.querySelector('ul')
lis[3].remove()
list.removeChild(lis[3])


Classes and attributes:
const firstLi = document.querySelector('li:first-child')
const link = firstLi.children[0]

link.className
link.classList
link.classList[0]
link.classList.add('test')
link.classList.remove('test')

link.getAttribute('href')
link.setAttribute('href', 'https://google.com')
link.setAttribute('title', 'Google')
link.hasAttribute('href') \\ returns true or false
link.removeAttribute('title')
*/

/*
Events, event listeners, and the event object:
document.querySelector('.item-class').addEventListener('click', function(){
  console.log("Hello World")
})

For buttons, setting href to at least '#' will stop browser from redirecting by default. Although u can keep it blank and use the e parameter set to default as well.
Elements have default behaviors that will cause an action to happen that you don't necessarily want to happen. To prevent this and continue with your code, use the e(event) parameter:

un-named functions:
document.querySelector('.item-class').addEventListener('click', 
function(e){     <==
  console.log("Hello World")
  e.preventDefault()    <==
})

named functions:
document.querySelector('.item-class').addEventListener('click', 
onClick)
function onClick(e){
  create function here
  e.preventDefault()
}

The Event Object:
The event target is important because it represents the element that the event actually happened on.

e.target
e.preventDefault()
e.target.id
e.target.className
e.target.classList
e.target.innerText = 'Hello'
e.type - for event type like click or mouseover
e.timeStamp
e.clientY - number increases as you move down, relative to window
e.clientX - number increases as you move to the right, relative to window
e.offsetY - number somewhere from top of el to bottom
e.offsetX - number somewhere from left of el to right

Mouse events:
btn.addEventListener('click', runEvent) \\ 1 click
btn.addEventListener('dblclick', runEvent) \\ double click
btn.addEventListener('mousedown', runEvent) \\ hold mouse down
btn.addEventListener('mouseup', runEvent) \\ release mouse from hold
card.addEventListener('mouseenter', runEvent) \\ over el
card.addEventListener('mouseleave', runEvent) \\ out of el
card.addEventListener('mouseover', runEvent) \\ over el inside main el
card.addEventListener('mouseout', runEvent) \\ out of el inside main el
card.addEventListener('mousemove', runEvent) \\ movement of mouse across el

function runEvent(e) {
  console.log(`event type: ${e.type}`)
  heading.textContent = `mouseX: ${e.offsetX} mouseY: ${e.offsetY}`
  doc.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 20)`
}

keyboard and input events and the form el:
notes: forms can be attributed an action that you can set to the destination you want your input to go using the action='' attribute

form elements use the 'submit' event often

form.addEventListener('submit', runEvent)
function runEvent(e) {
  const inputEl = document.getElementById('input')
  console.log('smthn')
  console.log('inputEl.value') \\ use .value to retrieve inputs
  inputEl.value = '' \\ clears input el esp after submitting a form
  e.preventDefault() \\ to prevent btn from executing default command
}

const inputEl = document.getElementById('input')
inputEl.addEventListener('keydown', runEvent)
function runEvent(e) {
  console.log(e.target.value)
}

const inputEl = document.getElementById('input')
inputEl.addEventListener('keyup', runEvent) 
function runEvent(e) {
  console.log(e.target.value)
}

Logs once you let go of a single key after holding it down, keyup and keydown provide a code of which key was pressed, while keypress provides which character was entered

const inputEl = document.getElementById('input')
inputEl.addEventListener('keypress', runEvent)
function runEvent(e) {
  console.log(e.target.value)
}
input events:
'submit'
'keydown'
'keyup'
'keypress'
'focus' \\ when you focus on an input el. The typing image thingy shows up
'blur' \\ when you click out of an input el
'cut' \\ when you cut text with your mouse or with ctrl + X
'paste' \\ when you past text with mouse or with ctrl + v
'input' \\ causes input event to occur when you type in input, cut or paste

select event:
'change' \\ occurs when you change an option in a select list, you can get value by using (e) and e.target.value 
*/

/*
Event bubbling:
When you click on a nested element, it will fire the event on it's parent
and all the way up to the main el. Events bubble up the DOM

Event delegation:
const button = document.querySelector('.btn')
button.addEventListener('click', deleteItem)
function deleteItem() {
  console.log('delete item')
EVENT WILL NOT WORK THIS WAY with multiple elements of the same class, you must use event delegation if your target list contains multiple elements
Start:

document.body.addEventListener('click', deleteItem)
function deleteItem(e){
  if(e.target.parentElement.classList.contains === 'delete-item'){
    console.log('delete item')
    e.target.parentElement.parentElement.remove()
  }
}
 Why this works and its logic: 
If the event target was an icon of sorts and was nested into an anchor element, setting an event up on the icon would be problematic, so you do
.parentElement to target the target's parent, and then classList.contains with only the class you want to target, since className may be problematic if another class is added by another event(className also returns all classes which is also problematic), then {type in your function}

EX: if you want to delete an li element upon a click event of a nested anchor's(direct child) child icon element <e.target>, use:
if(e.target.parentElement.classList.contains === 'delete-item'){
  e.target.parentElement.parentElement.remove()
}
*/

/*
Local and Session storage:
If you type window into console and go down to localStorage you can view its methods. What you set for the key-value pair value must be a string. You use JSON.stringify() to do this when storing data, and when you pull it out to use it you use JSON.parse()

local storage stays until you clear it out manually, session storage is removed once you close your browser.

Use sessionStorage.setItem and localStorage.setItem
.setItem('keyName', 'valueName')
.removeItem('keyName')
.getItem('keyName')
.clear() \\ removes all items in storage

By inference: the best way to set and get items in storage is by conditional statements, because if it is simply hard-coded into your js, when you want to clear() it will just reset and get the items that were hard-coded previously. 

To add one JSON object string from the original DOM array from a form:
first you want to start with a 'submit' event listener, pass in the parameter e into the event function to retrieve info about the event target, and also set e.preventDefault(), next assign a const var to the form value, set up a plural let var of the form value, this will be the 'keyName' you will to localStorage, then set up an if statement that checks if this keyName already exists in localStorage, if it doesn't, set the js'keyName' to an empty array, if it does already exist, retrieve the JSON string and turn it into a js array by using JSON.parse(), then exit the if-statement and push the const var value that set off the event onto the js array, then set the item back into storage while also 
JSON.stringifying the new array. Perhaps set up an alert for users to see when the data is added. Here's the code:

document.querySelectore('form').addEventListener('submit', function(e){
  const task = document.getElementById('task').value
  let tasks
  if(localStorage.getItem('tasks') === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }
  tasks.push(task)
  localStorage.setItem('tasks', JSON.stringify(tasks))
  alert('Task saved')
  e.preventDefault()
})

Practice:
const taskList = ['oranges', 'apples', 'pears']
localStorage.setItem('tasks', JSON.stringify(taskList))
const tasks = JSON.parse(localStorage.getItem('tasks'))
console.log(tasks)
tasks.forEach(function (task) {
  console.log(task)
})
*/

/* 
constructors and the this keyword:
function Person(name, dob) {
  this.name = name
  this.birthday = new Date(dob)
  this.calculateAge = function() {
    const diff = Date.now() - this.birthday.getTiem()
    const ageDate = new Date(diff)
    return Math.abs(agfeDate.getUTCFullYear() - 1970)
  }
}

const brad = new Person('Brad', '9-10-1981')
console.log(brad.calculateAge())

constructors allow you to create multiple objects with the same data vars but by automation and the ability to set custom values
*/

/*
built in constructors:
new String(), new Number(), new Boolean, new Function('','','argument'), new Object(), new Array(), new RegExp('\\w+')

constructors are not used that often as there are other more efficient ways to create these things without them, but they may come across them sometimes
*/

/*Questions:
- what is the important of do-while loops
- for-in loops explanation
- how to create custom object methods */

