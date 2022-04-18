const url = 'https://jsonplaceholder.typicode.com/posts?id=2'

const getBtn = document.getElementById('get_Btn')
const userId = document.getElementById('user_id')

getBtn.addEventListener('click', () =>{

const userIdValue = userId
//console.log(userIdValue );
console.log(`${url}${userIdValue}`);

//fetch(`${url}${userIdValue}`)
fetch(url)
.then(response => response.json())
.then(data => console.log(data))
 })