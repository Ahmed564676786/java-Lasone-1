'use strict'

// let x = 10;
// let y= 50*2-x;
// console.log(y);



// // const num = 7;

// // if (num % 2 === 0){
// //     console.log("even");

// // }else{
// //     console.log("odd");
// // }

// // for (let i = 10; i >= 1; i--){
// //     console.log(i)
// // }

// // for (let i = 1; i <= 20; i++){
// //     if(i % 2 ===0){
// //         console.log(i);
// //     }
// // }

// // const nums =[1,2,3,4,5];
// // const result = nums.map(n => n * 2);
// // console.log(result);


// // const nums = [5, 12, 8, 20, 3];
// // const result = nums.filter(n => n > 10);
// // console.log(result);


// // const nums = [5, 8, 2, 3,100];
// // const result = nums.find(n => n > 10);
// // console.log(result);

// // const users =[
// //     { name: "Ali", age: 17 },
// //   { name: "Ahmed", age: 22 },
// //   { name: "Sara", age: 19 }
// // ];

// // const result = users
// // .filter(user => user.age <18 )
// // .map(user => user.name);

// // console.log(result);

// // switch example

// // 1. switch (Basic)

// // 👉 Problem:
// // Take a number (1–7) and print the day name
// const day = 2;

// switch (day) {
//   case 1:
//     console.log("MOnday");
//     break; 
//     case 2:
//       console.log("Wed");
//       break;
//       case 3:
//         console.log("sunday");
//         break;

//         default:
//           console.log("invalid day")
// }

// // switch (Grade System)

// const grade = "A";

// switch (grade){
// case "A":
//   console.log("Excellent");
//   break;
//   case "B":
//     console.log("Good");
//     break;
//     case "C":
//       console.log("Average");
//       break;
//       default:
//         console.log("Fall");

// }


// // 3. for loop + array

// // 👉 Problem:
// // Find the sum of all numbers
// const nums = [10, 20, 30, 40];

//  let sum = 0
// for(let i = 0;i < nums. length; i++){
//   sum +=nums[i];

// }
// console.log(sum);


// // 🔹 4. while loop

// // 👉 Problem:
// // Print only numbers divisible by 3 from 1 to 20

// // setTimeout(() => {
// //   console.log("hi");
// // }, 2000);

// // setInterval(() =>{
// //   console.log("trick");
// // },1000);


// // Asyn - await 


// const ul = document.getElementById("list")




// // console.log(ul);



// // const ul = document.createElement('ul');
// // document.body.append(ul);

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => {
//     return res.json();   // convert response into JS data
//   })
//   .then((data) => {
//     console.log(data);

//     data.map((d, i) => {
//       const li = document.createElement('li');
//       li.textContent = `${i + 1} ${d.title}`;
//       ul.append(li);
//     });
//   })
//   .catch((err) => console.log(err));




//   axios.get("https://jsonplaceholder.typicode.com/posts",{timeout:5000})
//        .then(res => {return res.json()});




// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST", // 👈 important
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     title: "Hello",
//     body: "This is fetch POST",
//     userId: 1
//   })
// })
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err));




const data = axios.get();