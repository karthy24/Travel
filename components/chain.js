const orderItem = new Promise ((resolve, reject) => {
    const machineWorks = false;
      setTimeout(() => {
            if (machineWorks) {
                resolve('Order placed');
            }
            else {
                reject('Machine is not working');
            }
}, 1000)
})
console.log('Ordering...');


orderItem
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.error(error);
})
const posts = [
    {title:"One", body:"this is post one"},
    {title:"Two", body:"this is post two"}
];
function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output+=`<li> ${post.title} </li>`;
        })
        document.body.innerHTML=output;
    },1000);
}


function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        posts.push(post);
        const error=true;   // check with true also -> note the error in console
        if(!error)
            resolve();
        else
        reject('Error: Something went wrong');
       
    },2000);
});
   
   
}




createPost({title:'three', body:'this is post three'})
.then(getPosts)
.catch(err=>console.log(err));

const promise1= promiseHooks.resolve("hello");
const promise2=10;
const promise3=new promise1(resolve,reject)=>
    settimeout(esolve,2000)
const promise1= Promise.resolve("hello");
const promise2= 10;
const promise3= new Promise((resolve,reject)=>
    setTimeout(resolve,2000,"Bye")
);




Promise.all([promise1,promise2,promise3]).then(values=>console.log(values));
—--------------
Promise.race
const promise1 = new Promise((resolve) => setTimeout(() => resolve('one'), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve('two'), 500));


Promise.race([promise1, promise2])
  .then(value => {
    console.log(value);
  });
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => {
      const outputDiv = document.getElementById('demo');
      let html = '<h3>Comments:</h3><ul>';
      data.forEach(comment => {
        html += `<li>
          <strong>Post ID:</strong> ${comment.postId},
          <strong>Name:</strong> ${comment.name},
          <strong>Email:</strong> ${comment.email}
        </li>`;
        
const api1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
const api2 = fetch('https://jsonplaceholder.typicode.com/posts/2');


Promise.all([api1, api2])
  .then(responses => Promise.all(responses.map(res => res.json())))
  .then(data => {
    console.log(data); // array of API results
  })
  .catch(err => console.log(err)); 

  const api1 = fetch('https://jsonplaceholder.typicode.com/posts/1');
  const api2 = fetch('https://jsonplaceholder.typecode.com/posts/2');
  promise1.all([api1,api2])
  .then(responses => promise1.all(responses.map(res => res.json()))
  .then(data =>{
    console.log(data);
    const outputDiv = document.getElementById('demo');
    let html = '<h3>posts:</h3><ul>';
    data.forEach(post => {
      html += `<li>
        <strong>ID:</strong> ${post.id},
        <strong>Title:</strong> ${post.title},
        <strong>Body:</strong> ${post.body}
      </li>`;
    });
    html += '</ul>';
    outputDiv.innerHTML = html;
  })
  <script>
    sessionStorage.setItem('name', 'john Doe');
    document.getElementById('demo').innerHTML = sessionStorage.getItem('name');
    <script>
        const x = document.getElementById('demo');
        function getlocation(){
            if(navigator.getlocation){
                navigator.getlocation.getcurrentposition(showposition)

    </script>