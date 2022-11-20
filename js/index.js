categoriesArray= [{
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


function setCatID(id) {
    localStorage.setItem("catId", id);
    window.location = "chapter.html"
}
function showCategories(array){
    let showOnHTML="";

    for(let item of array){
        showOnHTML += `
            <div class="col-lg-4 mt-4">
                <div onclick="setCatID(${item.id})" class="cards d-flex justify-content-center">
                    <img src="${item.imgSrc}"  class="cursor-active zoom imgCategories card">
                </div>
                
            
                <div class="text-center mt-3">
                    <h4 class=""> ${item.name} </h4>
                    <p class="overflow-auto pe-4 ps-4">${item.desc}</p>
                </div>     
            </div>
        `
    }
    document.getElementById('biggerCategories').innerHTML=showOnHTML;
}

document.addEventListener('DOMContentLoaded',()=>{
    showCategories(categoriesArray); 
})
