// o'zgaruvchilar 3 xil bolar ekan
// let var const

// var name = "Suhrob"

// name = "Abror"

// console.log(name);

// malumot turlari
// string number boolean null NaN undifenid bigInt arr function object

// let name = 'Shohruh' // string
// // const a = 45; // number
// var isMerray = true // boolean
// let b; // null
// b = 45
// let text = "salom dunyo"
// let length = 45;
// console.log(text / length); // NaN

// let num
// console.log(num);


// const data = 'hello world'
// console.log(typeof (data));

// const arr = [1, 2, 3, 5] // massiv array
// console.log(arr[3]);

// const obj = { name: "salom", price: 45000, age: 22 } // obyekt
// console.log(obj.age);

// function myFunc() {

// }
// // foydalanuvchi bilan muloqat
// // const malumot = prompt('Malumot kiriting') // har doim string malumot turi qaytaradi
// // alert(typeof(malumot))

// const calcOne = +prompt('birinchi sonni kiriting...')
// const calcTwo = +prompt('Ikkinchi sonni kiritin...')
// alert(calcOne + calcTwo)

// // operatorlar
// console.log(15+20); // qoshish
// console.log(15-5); //ayirish
// console.log(15*5); // kupaytirish
// console.log(15/5); // bolish
// let a = 45;
// console.log(a++); // incerment
// console.log(a--); // decrement
// // > katta < kichik >= <= = == === ! || &&

// // shart operatorlari
// const web = +prompt("Yoshingizni kiriting...")
// if(web < 18) {
//     alert("Siz bizning saytimizdan foydalana olmaysiz!");
// } else if (web >= 18 && web <= 25) {
//     alert("Saytimizga xush kelibsiz!")
// } else {
//     alert("Sizning profilengiz blocklangan!!")
// }

// const week = prompt("xafta kunini kiriting...");

// switch (week) {
//     case "Dushanba":
//         alert("Darsga bordim")
//         break;
//     case "Seshanba":
//         alert('Futbol oynadik')
//         break;

//     default:
//         alert('Bunday kun mavjud emas!!!')
//         break;
// }

// // `` '' ""

// let kino = +prompt('Nechta kino kurdingiz')
// if(kino == 1) {
//     let kinoName = prompt('Korgan kinongiz nomi')
//     let ball = prompt('Kinoga ball bering')
//     alert(`${kinoName} uchun bergan ball: ${ball}`)
// } else if (kino == 2) {
//     let kinoName = prompt('Korgan kinongiz nomi')
//     let ball = prompt('Kinoga ball bering')
//     alert(`${kinoName} uchun bergan ball: ${ball}`)
// } else {
//     alert('1 yoki 2 ta kino korgan bolishingiz kerak! ')
// }


// let test;
// test ? "salom" : "xayir"


// skill operatorlari
// Skill 3 xil boladi 
// for, while, do while


// while (skill <= 10) {
//     skill++;
//     console.log(skill);
// } // while boshlangich qiymat tashqarida bolgani uchun uni hisobga olmaydi

// let skill = 0;
// do {
//     skill++;
//     console.log(skill);
// } while (skill < 5)

// for(let i = 0; i <= 10; i++) {
//     if(i == 7) {
//         alert("Ranoldo")
//     }
// }

// funksiyalar
// decloration

// function myFunc(name) {
//     return name
//     // qiymat qaytarib beruvchi method - funksiya
// }
// console.log(myFunc('salom'));
// console.log(myFunc('dunyo'));


// // expression
// const expFunc = function (a, b) {
//     return (a + b) * 10;
// }
// console.log(expFunc(10, 5));


//Arrow function
// let xisobla1 = +prompt('Birinchi sonni kiriting')
// let xisobla2 = +prompt('Ikkinchi sonni kiriting')

// const arrowFunc = (xisobla1, xisobla2) => {
//     return(xisobla1 + xisobla2);
// }
// alert(arrowFunc(xisobla1, xisobla2))

// obyektlar
// const User = {
//     name: "Asilbek",
//     age: 45,
//     hobby: {
//         game: 'Football',
//         music: 45
//     }
// }
// // iteratsiya bu obyektni ichidagi har bir xossasiga murojat qilish massivda esa elementoga murojat qilish
// console.log(User)

// for (let key in User) {
//     console.log(`Xossasi: ${key} value: ${User[key]}`) 
//     // User[key] - bu yerada obyektni ichidagi xossalarning type tekshiriyabdi har skill
//     if(typeof(User[key]) === "object") {
//         for(let i in User[key]) {
//             console.log(typeof User[key][i]);
//         }
//     }
// }

// const Person = { 
//     fristName: "Abror",
//     lastName: "Zopirov",
//     age: 22,
//     job: {

//     }
// }

// function greeting(callback) {
//     console.log('Hi Bro')
//     callback()
// }
// greeting(() => console.log('are you from ?'))

// Array - Massivlar
// const fruits = ['olma', 'anor', 'uzum']
// push, pop, shift, unshift, length, concat
// push - bu massivni oxirgi elementidan keyin yangi element qo'shib beradi
// pop - bu massivni oxirgi elementini olib tashlaydi
// length - massiv uzunligi
// fruits.push('banan, tarvuz, olcha')
// fruits.pop()                                                                                                                                               
// console.log(fruits);


// unshift - massivni boshidan yangi element qoshib beradi
// shift - massivni boshidagi elementni olib tashlaydi
// fruits.unshift('behi')
// fruits.shift()
// console.log(fruits);

// const arr1 = [1,2,3,4]
// const arr2 = [5,6,7,8,9]
// const result = arr1.concat(arr2)
// console.log(result);


// String methodlari
// 1-length - bu uzunligi yani nechta belgidan iborat ekanligini bildiradi
// 2-toUpperCase() - bu berilgan sozni hammasini bosh harfda qilib beradi
// 3-toLowerCase() - bu berilgan sozlarni hammasini kichik harflarda qilib beradi
// 4-trim() - Matndagi boshi va oxiridagi bosh joylarni tozalab beradi
// 5 slice() - berilgan matni ixtiyoriy oraliqda kesib olish mumkin
// 6 substring() - slice ga oxshash lekin start va end manfiy bolsa 0 deb hisoblaydi
// 7 replace() - matn ichidagi birinchi mos kelgan sozni almashtirib beradi
// replaceAll() - hammasini almashtirib beradi
// indexOf() - matndagi birinchi sozni indexsini olib beradi
// split() - matnni massivga ajratib beradi
// chartAt() - berilgan indexsdagi harfni qaytaradi
// repaet() - matnni n martta takrorlab beradi
// lastIndexOf() - matndagi oxirgi sozning indexini oladi
// startsWith() - matn berilgan soz bilan boshlanadimi yani boshlansa true boshlanmasa false qaytaradi
// endsWith() - matn berilgan soz bilan tugaydimi tugasa true tugamasa false qaytaradi
// includes() - matn ichida qidirilgan soz bor yoki yoqligini tekshriadi ture yoki false

// const txt = ' salom salom salom '
// console.log(txt.length);
// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());
// console.log(txt.trim());
// console.log(txt.slice(1, 5)); // faqat musbat qiymat qabul qiladi
// console.log(txt.substring(-1, 5));
// console.log(txt.replace('salom', 'hi'));
// console.log(txt.replace('dunyo', 'world'));
// console.log(txt.replaceAll('salom', 'Hello'));
// console.log(txt.indexOf());
// console.log(txt.lastIndexOf('o'));
// console.log(txt.charAt(10));
// console.log(txt.split(" "));// joy tashlamasak har bir harfni oladi joy tashlasak har bir sozni oladi
// console.log(txt.repeat(2));
// console.log(txt.startsWith());
// console.log(txt.endsWith(' '));
// console.log(txt.includes(''));


// const months = ["Jan", "March", "April", "June"];
// months.splice(1, 0, "Feb");
// // Inserts at index 1
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, "May");
// // Replaces 1 element at index 4
// console.log(months);
// // Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// const elements = ["Fire", "Air", "Water"];

// console.log(elements.join());
// // Expected output: "Fire,Air,Water"

// console.log(elements.join(""));
// // Expected output: "FireAirWater"

// console.log(elements.join("-"));
// // Expected output: "Fire-Air-Water"

// const beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.indexOf("bison"));
// // Expected output: 1

// // Start from index 2
// console.log(beasts.indexOf("bison", 2));
// // Expected output: 4

// console.log(beasts.indexOf("giraffe"));
// // Expected output: -1

// const animals = ["Dodo", "Tiger", "Penguin", "Dodo"];

// console.log(animals.lastIndexOf("Dodo"));
// // Expected output: 3

// console.log(animals.lastIndexOf("Tiger"));
// // Expected output: 1

// const arr1 = [0, 1, 2, [3, 4]];

// console.log(arr1.flat());
// // expected output: Array [0, 1, 2, 3, 4]

// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// +console.log(arr2.flat());
// // expected output: Array [0, 1, 2, Array [3, Array [4, 5]]]

// console.log(arr2.flat(2));
// // expected output: Array [0, 1, 2, 3, Array [4, 5]]

// console.log(arr2.flat(Infinity));
// // expected output: Array [0, 1, 2, 3, 4, 5]

// const arr5 = [1, 2, 1];

// const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));

// console.log(result);
// // Expected output: Array [1, 2, 2, 1]



// DOM
// const container = document.getElementById('container')
// const cont = document.getElementsByClassName('container')
// const name = document.getElementsByTagName('button')
// console.log(container);
// console.log(cont[2]);

// const select = document.querySelectorAll('#container')
// console.log(select);

// const btn = document.querySelectorAll('button')
// const colors = ['red', 'blue', 'green', 'yellow', 'pink']
// let index = 0;
// btn.addEventListener('click', (e) => {
//     setInterval(() => {
//         btn.style.background = colors[index]
//         index = (index + 1) % colors.length
//     }, 100)
// })


// mouse events
// click - bosilganda
// dbclick - 2 martta bosilganda
// mouseenter - element ichiga kirganda
// mouseout - element ichidan chiqganda
// mousemove - element ichida harakatlanganda
// mousedown - sichqoncha bosib turganda
//mouseup - sichqoncha quyib yuborilganda

// const cont = document.querySelector('.container')
// // cont.addEventListener('mousemove', (e) => {
// //    if(e.clientX > 200) {
// //     cont.style.opacity = '0'
// //    }
// //    console.log(e.clientX);


// // }) // mouseout - bu elementdan chiqganda ishlaydi
// // cont.addEventListener('mouseout', (e) => {
// //     cont.style.opacity = '1'
// // })

// cont.addEventListener('mouseenter', (e) => {
//     cont.style.background = 'pink'
// })
// const container = document.querySelector('.container')
// function  myEvent() {
//     // container.innerHTML = `
//     // <p>Salom dunyo</p>
//     // `
//     container.innerText = `
//     <p>Salom dunyo</p>
//     `
// }
// // innerHTML - text va html sturktura yaratib beradi
// // innerText - faqat text yaratib beradi

// container.addEventListener('mouseout', myEvent)

// const btn = document.querySelector('button')
// const menublock = document.querySelector('.menu')
// btn.addEventListener('click', (e) => {
//     menublock.classList.toggle('active')
// })

// Amaliy ish
// const data = [
//     { id: 1, fullName: "Shohruh Fayzullayev", work: "3-Maktab 11-sinf", hobby: "Code, game, music" },
//     { id: 2, fullName: "Abror zopirov", work: "Student", hobby: "Code, game, music" },
//     { id: 3, fullName: "Suhrob Bozorov", work: "Student", hobby: "Code, game, music" },
//     { id: 4, fullName: "Ali Fayzullayev", work: "3-Maktab 11-sinf", hobby: "Code, game, music" },
//     { id: 5, fullName: "Shermamat Fayzullayev", work: "3-Maktab 11-sinf", hobby: "Code, game, music" },
//     { id: 6, fullName: "Nortoy Fayzullayev", work: "3-Maktab 11-sinf", hobby: "Code, game, music" },
//     { id: 7, fullName: "Bekorchi Fayzullayev", work: "3-Maktab 11-sinf", hobby: "Code, game, music" },
//     { id: 8, fullName: "Vali Fayzullayev", work: "3-Maktab 11-sinf", hobby: "Code, game, music" },
// ]

// const tbody = document.querySelector('#tbody')
// data.forEach((list) => {
//     tbody.innerHTML += `
//         <tr key=${list.id}>
//             <td>${list.id}</td>
//             <td>${list.fullName}</td>
//             <td>${list.work}</td>
//             <td>${list.hobby}</td>
//         </tr> 
//     ` 
// })


// Keyboard Event keyup, keydown, keyprees
const int = document.getElementById('int')
const txt = document.querySelector('.textH')
// int.addEventListener('keyup', (e) => {
//     txt.innerHTML = e.target.value
// })

//input event change, focus, input
int.addEventListener('input', (e) => {
    txt.innerHTML = e.target.value
})

// Interval
const loader = document.querySelector('.loader-block')
setTimeout(() => {
loader.style.display = 'none'
loader.style.transition = '1s all'
}, 3000)

// setTimeout(message, 5000)
// function message() {
//     alert("Salom dunyo")
// }

// const time = setInterval(() => {
//     alert('salom dunyo')
// }, 1000)

// clearInterval(time)