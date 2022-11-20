chapterArray= [{
    "name": "Capítulo Rose",
    "imgSrc": 'img/IMG-20170616-WA0054.jpg',
    "desc": "En este capítulo encontrarás las palabras (fotos) de nuestra salvadora, cradora del universo, toda poderosa, Rose.",
    "id": 1
}, {
    "name": "Capítulo Ariel",
    "imgSrc": 'img/20171024_215937.jpg',
    "desc": "En este capítulo encontrarás las palabras (fotos) de la ayudante de Rose, Ariel aka Mugri.",
    "id": 2
}, {
    "name": "Capítulo Luisa",
    "imgSrc": 'img/luisa.jpg',
    "desc": "En este capítulo encontrarás las palabras (fotos) del mesías de nuestra salvadora Rose, Luisa aka Chicha.",
    "id": 3
}];

let url = ""; 
let title ="";
let srcData = "";

let myName = ""
let myUser = ""
let myComment = ""
let myDate = 0

function chapter(id){
    if(id == 1){
        url = 'https://6369a97815219b84961bf752.mockapi.io/Rose/';
        title = "Cápitulo Rose"
    }else if (id== 3){
        url='https://6369a97815219b84961bf752.mockapi.io/Luisa/';
        title = "Cápitulo Luisa"
    }
}


function showPictures(array){
    
}

function sendData(){
    fetch(url, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            // title: myTitle,
            name: myName,
            
            // comment: myComment,
            // fav: myFav,
            // date: myDate
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
}


document.addEventListener('DOMContentLoaded',()=>{
    

    let id = localStorage.getItem('catId');
    chapter(id);
    document.getElementById('title').innerHTML =  title;

    document.getElementById('upload').addEventListener('click',()=>{
    })
    document.getElementById('file').addEventListener('click', ()=>{

        
        myName = document.getElementById('name').value
        myUser = document.getElementById('user').value
        myComment = document.getElementById('comment').value
        myDate = document.getElementById('date').value

        Uploaded();     
})
    
})
