// All the promises you made
const getTodos = (resource) => {
    
    return new Promise ((resolve, reject)=>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',()=>{
            if(request.readyState===4 && request.status===200){
                const data = JSON.parse(request.responseText);
            //callback(undefined, data);
            resolve(data);
            } 
            else if(request.readyState===4){
                //callback('could not fetch data',undefined);
                reject('Promise brought failure');
            }
        });
        
        request.open('GET', resource);
        request.send();
    });

};
getTodos('todos/luiji.json').then(data => console.log('Promise resolved:',data))
                            .catch(error => console.log('Promise rejected:', error))
                            .finally(() => console.log('do nothing'));
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
    // In reality, you will probably be using something like XHR or an HTML5 API.
    setTimeout( function() {
      resolve("Success!")  // Yay! Everything went well!
    }, 250)
  })
  
  myFirstPromise.then((successMessage) => {
    // successMessage is whatever we passed in the resolve(...) function above.
    // It doesn't have to be a string, but if it is only a succeed message, it probably will be.
    console.log("Yay! " + successMessage)
  });

