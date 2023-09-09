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



let xz: any = 5
xz = "Вася"

let uName = ''
let toDos = [] as string[]

const appDiv = document.getElementById('app')
// if (appDiv) appDiv.innerHTML += `<p>Добро пожаловать на сайт</p>`
function render() {
  let isLogin = Boolean(uName)
  if (appDiv) appDiv.innerHTML = ''
  const pElelement = document.createElement('p')
  pElelement.textContent = uName ? `${uName}, добро пожаловать на сайт` : `Добро пожаловать на сайт`
  if (appDiv) appDiv.appendChild(pElelement) 
  
  const button = document.createElement('button')
  button.textContent = isLogin ? 'LogOut' : 'Login'
  button.addEventListener('click', ()=>{
    uName = isLogin ? '' : 'Niko'
    toDos = !isLogin ? ['проснуться', 'позавтракать', 'умыться', 'работать', 'лечь спать'] : []
    render()
  })
  if (appDiv) appDiv.appendChild(button) 
  if (isLogin) {
    const olElement = document.createElement('ol')
    // for (let i=0;i<toDos.length;i++) {
    //   const listElement = document.createElement('li')
    //   listElement.textContent = toDos[i]
    //   olElement.appendChild(listElement)
    // }
    for (let el of toDos) {
      const listElement = document.createElement('li')
      listElement.textContent = el
      olElement.appendChild(listElement)
    }
    if (appDiv) appDiv.appendChild(olElement)
  }
}

render()

const userO = {               // объект
  name: "John",             // под ключом "name" хранится значение "John"
  age: 30,                  // под ключом "age" хранится значение 30
  "likes birds": true,      // имя свойства из нескольких слов должно быть в кавычках
  'backgound-color': 'red',
  0: 10,
} as Record<string,any>

console.log(userO)
console.log({...userO})
console.log(userO.name)
console.log(userO[0])
console.log(userO['backgound-color'])


const key = 'backgound-color'
console.log(userO[key])

userO.isAdmin = true
console.log({...userO})

delete userO[0]
delete userO.isLogin
delete userO['backgound-color']
console.log({...userO})

function makeUser(name:string='', age:number=0) {
  return {
    // вместо такой записи, где мы отдельно прописываем имя свойства, а значение берём из одноимённой переменной
    // name:name,
    // age:age,
    // мы можем просто указать имена переменных
    // В таком случае имя переменной станет именем свойства, а её значение,- значением свойства
    name, // тоже самое, что и name:name
    age,  // тоже самое, что и age:age
    admin:false,
    key: 20,
    noValue: undefined,
  } as any
}

const usr1 = makeUser('Niko', 35)
console.log(usr1)

// При обращении к свойству, которого нет, возвращается undefined.Это позволяет просто проверить существование свойства:
// Для чего вообще нужен оператор in? Разве недостаточно сравнения с undefined ?

// В большинстве случаев прекрасно сработает сравнение с undefined.Но есть особый случай, когда оно не подходит и нужно использовать "in".


console.log('"age" in usr1', "age" in usr1)    // true, usr1.age существует
console.log('"blabla" in usr1', "blabla" in usr1) // false, usr1.blabla не существует
console.log('usr1.blabla === undefined', usr1.blabla === undefined) // true, usr1.blabla не существует
// Это когда свойство существует, но содержит значение undefined
console.log('"noValue" in usr1', "noValue" in usr1) // true, usr1.noValue существует
console.log('usr1.noValue === undefined', usr1.noValue === undefined) // true, usr1.noValue существует, но его значение = undefined
console.log('usr1.noValue === undefined', usr1['noValue'] === undefined) // true, usr1.noValue существует, но его значение = undefined

// Подобные ситуации случаются очень редко, так как undefined обычно явно не присваивается.Для «неизвестных» или «пустых» свойств мы используем значение null

// !Цикл "for..in"
// На каждой итерации цикла в переменную key попадают имена свойств объекта (строкой)
for (let key in usr1) {
  console.log('key', key, 'value', usr1[key])
}

// Получить все ключи объекта массивом
const keys = Object.keys(usr1)
console.log(keys)
console.log(Object.values(usr1))
console.log(Object.entries(usr1)[2])


// Итого
// Объекты – это ассоциативные массивы с рядом дополнительных возможностей.

// Они хранят свойства(пары ключ - значение), где:

// Ключи свойств должны быть строками или символами(обычно строками).
// Значения могут быть любого типа.
// Чтобы получить доступ к свойству, мы можем использовать:

// Запись через точку: obj.property.
// Квадратные скобки obj["property"].Квадратные скобки позволяют взять ключ из переменной, например, obj[varWithKey].
// Дополнительные операторы:

// Удаление свойства: delete obj.prop.
// Проверка существования свойства: "key" in obj.
// Перебор свойств объекта: цикл for for (let key in obj).
// То, что мы изучали в этой главе, называется «простым объектом» («plain object») или просто Object.

// В JavaScript есть много других типов объектов:

// Array для хранения упорядоченных коллекций данных,
// Date для хранения информации о дате и времени,
// Error для хранения информации об ошибке.
// … и так далее.
// У них есть свои особенности, которые мы изучим позже.Иногда люди говорят что - то вроде «тип данных Array» или «тип данных Date», но формально они не являются отдельными типами, а относятся к типу данных Object.Они лишь расширяют его различными способами.

// Задание
// Создать объект, описывающий прямоугольник(хранит коор -
// динаты левой верхней и правой нижней точек), и написать следу -
// ющие функции для работы с таким объектом.


type Rect = {
  x0:number,
  y0:number,
  x1:number,
  y1:number,
}

const rect:Rect = {
  x0:50,
  y0:50,
  x1:100,
  y1:100,
}
  
const rectDiv = document.getElementById('rect')

const moveLeftTopButton = document.getElementById('moveLeftTop')
moveLeftTopButton?.addEventListener('click', () => { changeRectPosition(rect, -10, -10) })
const moveTopButton = document.getElementById('moveTop')
moveTopButton?.addEventListener('click', () => { changeRectPositionY(rect, -10) })
const moveRightTopButton = document.getElementById('moveRightTop')
moveRightTopButton?.addEventListener('click', () => { changeRectPosition(rect, 10, -10) })
const moveLeftButton = document.getElementById('moveLeft')
moveLeftButton?.addEventListener('click', () => { changeRectPositionX(rect, -10) })
const moveRightButton = document.getElementById('moveRight')
moveRightButton?.addEventListener('click', () => { changeRectPositionX(rect, 10) })
const moveLeftBottomButton = document.getElementById('moveLeftBottom')
moveLeftBottomButton?.addEventListener('click', () => { changeRectPosition(rect, -10, 10) })
const moveBottomButton = document.getElementById('moveBottom')
moveBottomButton?.addEventListener('click', () => { changeRectPositionY(rect, 10) })
const moveRightBottomButton = document.getElementById('moveRightBottom')
moveRightBottomButton?.addEventListener('click', () => { changeRectPosition(rect, 10, 10) })

const squeezeX = document.getElementById('squeezeX')
squeezeX?.addEventListener('click', () => { changeRectWidth(rect, -10) })
const expandX = document.getElementById('expandX')
expandX?.addEventListener('click', () => { changeRectWidth(rect, 10) })
const squeezeY = document.getElementById('squeezeY')
squeezeY?.addEventListener('click', () => { changeRectHeight(rect, -10) })
const expandY = document.getElementById('expandY')
expandY?.addEventListener('click', () => { changeRectHeight(rect, 10) })


console.log(rectDiv)
function renderRect(rect:Rect) {
  if (rectDiv) {
    rectDiv.style.top = rect.y0 + 'px'
    rectDiv.style.left = rect.x0 + 'px'
    rectDiv.style.width = getRectWidth(rect) + 'px'
    rectDiv.style.height = getRectHeight(rect) + 'px'
  }
}
renderRect(rect)



function showRectInfo(rect: Rect) {
  console.log(`top-left (${rect.x0}, ${rect.y0}) bootom-rigth (${rect.x1}, ${rect.y1})`)
}
showRectInfo(rect)


function getRectWidth(rect: Rect) {
  return rect.x1 - rect.x0
}



function getRectHeight(rect: Rect) {
  return rect.y1 - rect.y0
}



function getRectArea(rect: Rect) {
  return getRectWidth(rect) * getRectHeight(rect)
}
console.log(`площадь прямоугольника ${getRectArea(rect)}px`)



function getRectPerimetr(rect: Rect) {
  return getRectWidth(rect) * 2 + getRectHeight(rect) * 2 
}
console.log(`периметр прямоугольника ${getRectPerimetr(rect)}px`)


function changeRectWidth(rect: Rect, n:number) {
  rect.x1 += n
  renderRect(rect)
}


function changeRectHeight(rect: Rect, n: number) {
  rect.y1 += n
  renderRect(rect)
}



function changeRectWidthAndHeight(rect: Rect, x: number, y:number) {
  changeRectWidth(rect, x)
  changeRectHeight(rect, y)
  renderRect(rect)
}



function changeRectPositionX(rect: Rect, n: number) {
  rect.x0 += n
  rect.x1 += n
  renderRect(rect)
}


function changeRectPositionY(rect: Rect, n: number) {
  rect.y0 += n
  rect.y1 += n
  renderRect(rect)
}



function changeRectPosition(rect: Rect, x: number, y: number) {
  changeRectPositionX(rect, x)
  changeRectPositionY(rect, y)
  renderRect(rect)
}


