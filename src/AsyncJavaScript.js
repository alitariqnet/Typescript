// All the promises I made
// const getTodos = (resource) => {
    
//     return new Promise ((resolve, reject)=>{
//         const request = new XMLHttpRequest();

//         request.addEventListener('readystatechange',()=>{
//             if(request.readyState===4 && request.status===200){
//                 const data = JSON.parse(request.responseText);
//             //callback(undefined, data);
//                 console.log('inside resolved block')

//                 resolve(data);
//             } 
//             else if(request.readyState===4){
//                 //callback('could not fetch data',undefined);
//                 console.log('inside reject block')

//                 reject('Promise brought failure');
//             }
//         });
        
//         request.open('GET', resource);
//         request.send();
//     });

// };

// getTodos('https://jsonplaceholder.typicode.com/todos')
                            // .then(data => console.log('Promise resolved:', data))
                            // .catch(error => console.log('Promise rejected:', error))
                            // .finally(() => console.log('do nothing'));
// console.log(1);
// console.log(2);

// getTodos('todos/luiji.json',(error, data) => {
//     console.log('callback fired');
//     if(error){
//         console.log(error)
//     } else {
//         console.log(data);
//     }
// });

// console.log(3);
// console.log(4);


// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         resolve(data);
//         reject(error);
//     });
// }

//getSomething().then((data) => {console.log(data);},(error) => {console.log(error);});
// getSomething().then(data => console.log(data)).catch(error => console.log(error)).finally(
//     console.log('finally promise finished')
// );

let myFirstPromise = new Promise((resolve, reject) => {
    // We call resolve(...) when what we were doing asynchronously was successful, and reject(...) when it failed.
    // In this example, we use setTimeout(...) to simulate async code.
    // In reality, you will probably be using something like XHR or an HTML5 API such as fetch API.
    setTimeout( function() {
      resolve("Success!")  // Yay! Everything went well!
    }, 250)
  })
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage)
  }).catch(
    () => {
      console.log('Nah! it failed')
    }
  ).finally(()=>{
    console.log('whatever, just finish it');
  });

// fetch API
// Promise API is under the hood in fetch API
// the difference is that we get the promise rejected when we have some kind
// of network error and we can't reach the API for some reason
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => console.log('resolved: ',data))
  .catch(error => console.log('rejected: ',error))
  .finally(()=> console.log('fetch API ends'));


//   var xhr = new XMLHttpRequest();
 
// xhr.addEventListener("readystatechange", function() {
//   if(this.readyState === 4) {

//     const data = JSON.parse(this.responseText);
//     console.log(data);
//     const titles = data.items;
//     titles.forEach(element => {
//         console.log(element.title);
//     });
//   }
// });
 
// xhr.open("GET", "https://imdb-api.com/en/API/Top250Movies/k_u049umz3");
 
// xhr.send();

// Async Await
const getTodo = async () => {
 const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
 const data = await response.json();
    return data;
};

console.log('112');
console.log('113');

getTodo().then(data => console.log('resolved with async await',data))
.catch(error => console.log('rejected with error message',error.message));

console.log(3);