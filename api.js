const BUTTON = document.querySelector('.btn');
const IMAGE = document.querySelector('.img');
const URL = 'https://aws.random.cat/meow';

async function getData() {
    try{
        const RESPONSE = await fetch(URL)
        const data = await RESPONSE.json();
        IMAGE.src = data.file;
    } catch(error){
        console.log(error);
    }
}

BUTTON.addEventListener('click', () =>{
    getData();
})
