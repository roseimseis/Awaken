let username = "";
let clave = "";

// function login (){
    
//     //Verificar si están todos los datos ingresados
//     if(username==="" || clave===""){
//         document.getElementById('member').classList.add('border-danger');
//         document.getElementById('password').classList.add('border-danger');
//     }else {
//         localStorage.setItem('miembro',username);
        
//     }
// }
function get(){
    
    fetch('http://localhost:3001/usuario/'+username+'.json')
    .then(response => {
        if(!response.ok){
            throw new Error();
        }
        return response.json();
    })
    .then(data => {
        if(data.username == username && data.password == clave){
            location.href='index.html';
            localStorage.setItem('miembro',username);
        }
    })
    .catch(() => {
    console.log("Error");        
    })  
}
//Funcione en el botón
document.addEventListener('DOMContentLoaded', ()=>{

    document.getElementById('login').addEventListener('click', ()=>{
        // login(); 
        username = document.getElementById('member').value;
        clave = document.getElementById('password').value;
        get();
    })
})        
