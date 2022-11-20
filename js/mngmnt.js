
let urlChapter ='https://6369a97815219b84961bf752.mockapi.io/Rose/';
let id ="";
let myTitle ="";
let chapeterObj ={};

// BIBLIA
function getBiblia(){
    
    fetch(urlBiblia)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
}

function updateChapter(){
    fetch(urlBiblia+id, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: 'POST',
        body: JSON.stringify({
            title: myTitle,
            name: myName,
            image: myImg,
            comment: myComment,
            fav: myFav,
            date: myDate
        })
    })
    .then(response => response.json())
    .then(data => console.log(data))
}


// function search(){
//     fetch(url+id)
//     .then(response => response.json())
//     .then(data => {

//         mostrar =
        
//         `<li>ID: ${data.id}</li>
//         <li>NOMBRE: ${data.title}</li>
//         `
        
//         document.getElementById('results').innerHTML = mostrar;
//     })
// }


function deleteById(){
    fetch(urlChapter+id, {
          method: 'DELETE'
    })
    .then(() => {
        getChapter();
    })
}

document.addEventListener('DOMContentLoaded', ()=>{
    getBiblia();
    getChapter();
    
    document.getElementById('btnGet1').addEventListener('click',()=>{
        id = document.getElementById('inputGet1Id').value;

        if(id == ""){
            getBiblia(); 
        }else{
            search();
        }

    })
    // document.getElementById('btnPost').addEventListener('click',()=>{
    //     id = document.getElementById('inputPostNombre').value;
    //     myplace = document.getElementById('inputPutId').value;
    //     addBiblia();
    // })

    // BIBLIA
    document.getElementById('btnSendChanges').addEventListener('click',()=>{
        id= document.getElementById('inputPutId').value;
        myTitle = document.getElementById('inputPutNombre').value;
        updateChapter();
    })
    document.getElementById('btnDelete').addEventListener('click',()=>{
        id= document.getElementById('inputDelete').value;
        deleteById();
    })
})
