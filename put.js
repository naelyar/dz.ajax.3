const urlTwo = 'https://jsonplaceholder.typicode.com/posts/2'

const putBtn = document.getElementById('put_Btn')
const userIdPut = document.getElementById('user_id_put')

const putInput = {
    userId:2,
    title: 'test' ,
    body:" test body "
}

function putFunc(e) {
    e.preventDefault();

    const id = userIdPut.value;

    fetch (`${urlTwo}${id}` ,{
        method:'PUT',
        //headers:{}
        body: JSON.stringify(putInput)
    })
    .then(response => response.json()) 
    .then(data => console.log(data))
}
putBtn.addEventListener('click' , putFunc)