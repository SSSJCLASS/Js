import './style.css'
// alert('я JS')
// var name = prompt ("What is your name?")
// alert('Hello ' + name)
// let input=parseFloat(prompt('Ввидите число') as string)
// alert("Число умноженное на два " + input*2)
// let input = perFormance(prompt('Ввидите число') as string)
// alert("Число возведенное во вторую степень",input**2)
// let input=parseFloat(prompt('Ввидите число') as string)
// alert("Число деленное на два " + input/2)
// var a=2
// var b=80
// var c=a+b
// alert("Уровнение: " + c)




// let year = prompt('В каком году была опубликована спецификация ECMAScript-2015?', '')

// if (year == '2015') {
//     alert( 'Да вы знаток!' )
// } else {
//     alert( 'А вот и неправильно!' )
// }
// let name = prompt('„Какое «официальное» название JavaScript?“','')

// if (name == 'ECMAScript' ) {
//     alert("Верно :) !")
// } else {
//     alert('Не знаете? “ECMAScript”!')
// }




// let value = (prompt('Ввидите число',) as string )

// if (value > '0'){
//     alert('1')
// } else if (value < '0')
//     alert(-1)
// else{
//     value == '0'
//     alert('0')
// }






// let result = ''
//     a = ''
//     b = ''

// result = (a + b < '4') ? 'Мало' : 'Много' ;









// let login =prompt() 

// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' :
//     '';
// alert(message)




// let age = prompt('Введите ваш возраст') 
// function whoAreYou(age:any) {
//     if(age>=0&&age<3) console.log('ты ребенок') 
//     else if(age>=3&&age<12) console.log('ты yung')
//     else if(age>=12&&age<19) console.log('ты подросток')
//     else if(age>18&&age<61) console.log('вы взрослый')
//     else if(age>60) console.log('вы очень постарели')
// }
// whoAreYou(age)







//! LeetCode
// class Solution {
//     public int sum(int num1, int num2) {
//         return num1 + num2;
//     }
// }




// let roma = {
//     name: "Рома",
//     sayHi: function() {
//     alert("Привет, дружище!");
//     }
//     };

// roma.sayHi(); // Привет, дружище!




// let str = "Привет";

// alert( str.toUpperCase() ); // ПРИВЕТ




// alert( typeof 0 ); // "число"

// alert( typeof new Number(0) ); // "object"!



// let zero = new Number(0);

// if (zero) {
//     // zero возвращает "true", так как является объектом
//     alert( "zero имеет «истинное» значение?!?" );
// }



// let num = Number("123"); // превращает строку в число



// alert(null.test); // ошибка




// var a = Number(prompt('Введите начальный диапозон',''));
// var n = Number(prompt('Введите конечный диапозон',''));
// var sum = 0;

// while(a <= n){

//     sum+=a;
//     a++;
// }
// alert(sum)



// <!-- <input id="num1" />


// 	<div id="operator_btns">
// 	  <button id="plus" onclick="op='+'">+</button>
// 	  <button id="minus" onclick="op='-'">-</button>
// 	  <button id="times" onclick="op='*'">x</button>
// 	  <button id="divide" onclick="op='/'">:</button>
// 	</div>


// 	<input id="num2" />
// 	<br>


// 	<button onclick="func()">Посчитать</button>

//   <p id="result"></p>



//   <script>
//     var op 
//         function func() {
//       var result
//       var num1 = Number(document.getElementById("num1").value)
//       var num2 = Number(document.getElementById("num2").value)
//       switch (op) {
//         case '+':
//           result = num1 + num2
//           break
//         case '-':
//           result = num1 - num2
//           break
//         case '*':
//           result = num1 * num2
//           break
//         case '/':
//           result = num1 / num2
//           break
//       }
//         document.getElementById("result").innerHTML = result
//     }
//   </script> -->








// alert('Введите 2 числа, что бы найти НОД');
// let num1 = prompt('Введите первое число');
// let num2 = prompt('Введите второе число');
// let num3;

// calc(num1,num2)
// alert('НОД чисел' + num1 + 'и' + num2 + 'будет:' + num3)

// function calc(a, b)
// let c;



                                            // Практическая работа №5


// function factorial(n) { 
//     return (n != 1) ? n * factorial(n - 1) : 1;
// }
// alert( factorial(5) ); 



// function* makeRangeIterator(start = 0, end = 100, step = 1) {
//     let iterationCount = 0;
//     for (let i = start; i < end; i += step) {
//         iterationCount++;
//         yield i;
//     }
//     return iterationCount;
// }

// var r1_10 = makeRangeIterator(1, 10);


// for (i of r1_10) {
// console.log(i); 
// }

// var num = 10,
// reverse = false;

// if(!reverse) for( var i=0;i<num;i++) log(i);
// else         while(num-- )      log(num);

// function log( num:number ) { console.log( num ); }




// var x = 54321
// var y = 0
// for(;x;x = Math.floor(x / 10)){
//    y*= 10
//    y+= x % 10

// }
// console.log(y);

// let xz: any = 5
// xz = "Вася"

// let uName = ''
// let toDos = [] as string[]


// const appDiv = document.getElementById('app')
// // if (appDiv) appDiv.innerHTML += `<p>Добро пожаловать на сайт</p>`
// function render() {
//   let isLogin = Boolean(uName)
//   if (appDiv) appDiv.innerHTML = ''
//   const pElelement = document.createElement('p')
//   pElelement.textContent = uName ? `${uName}, добро пожаловать на сайт` : `Добро пожаловать на сайт`

//   if (appDiv) appDiv.appendChild(pElelement) уощзщд
  

//   if (appDiv) appDiv.appendChild(pElelement)   

//   const button = document.createElement('button')
//   button.textContent = isLogin ? 'LogOut' : 'Login'
//   button.addEventListener('click', ()=>{
//     uName = isLogin ? '' : 'Niko'
//     toDos = !isLogin ? ['проснуться', 'позавтракать', 'умыться', 'работать', 'лечь спать'] : []
//     render()
//   })
//   if (appDiv) appDiv.appendChild(button) 
//   if (isLogin) {
//     const olElement = document.createElement('ol')
//     // for (let i=0;i<toDos.length;i++) {
//     //   const listElement = document.createElement('li')
//     //   listElement.textContent = toDos[i]
//     //   olElement.appendChild(listElement)
//     // }
//     for (let el of toDos) {
//       const listElement = document.createElement('li')
//       listElement.textContent = el
//       olElement.appendChild(listElement)
//     }
//     if (appDiv) appDiv.appendChild(olElement)
//   }
// }

// const appDiv = document.getElementById('app')
// // if (appDiv) appDiv.innerHTML += `<p>Добро пожаловать на сайт</p>`
// function render() {
//     let isLogin = Boolean(uName)
//     if (appDiv) appDiv.innerHTML = ''
//     const pElelement = document.createElement('p')
//     pElelement.textContent = uName ? `${uName}, добро пожаловать на сайт` : `Добро пожаловать на сайт`
//     if (appDiv) appDiv.appendChild(pElelement) 
    
//     const button = document.createElement('button')
//     button.textContent = isLogin ? 'LogOut' : 'Login'
//     button.addEventListener('click', ()=>{
//     uName = isLogin ? '' : 'Niko'
//     toDos = !isLogin ? ['проснуться', 'позавтракать', 'умыться', 'работать', 'лечь спать'] : []
//     render()
//     })
//     if (appDiv) appDiv.appendChild(button) 
//     if (isLogin) {
//     const olElement = document.createElement('ol')
//     // for (let i=0;i<toDos.length;i++) {
//     //   const listElement = document.createElement('li')
//     //   listElement.textContent = toDos[i]
//     //   olElement.appendChild(listElement)
//     // }
//     for (let el of toDos) {
//         const listElement = document.createElement('li')
//         listElement.textContent = el
//         olElement.appendChild(listElement)
//     }
//     if (appDiv) appDiv.appendChild(olElement)
//     }
// }


// render()


// let usr1 ={
//   name: "Lada",
//   age: 2018,
//   color: "green",
//   matorNumber: 23595
// }
// console.log(usr1)


// let distance = prompt("Введите расстояние");
// let speed = prompt("Введите среднюю скорость");

// let timeInWay = distance/speed;

// let timeInRest = (timeInWay%4 == 0)? (timeInWay/4 | 0) - 1: timeInWay/4| 0;

// let timeTotal = distance/speed + timeInRest;

// alert(`Общее время в пути Время в пути = ${timeTotal} часов`);