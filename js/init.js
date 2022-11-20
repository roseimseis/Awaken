
function getUser(){
    
  fetch('http://localhost:3001/usuario/'+username+'.json')
  .then(response => response.json())
  .then(data => {
    if(usuario != data.username){
      Swal.fire({
        title: 'No hay nadie ingresado',
        text: 'Por favor, inicie sesión',
        icon: 'error'
      }).then(function() {
        window.location = "login.html";
        });
    }
    
  });
}
document.addEventListener("DOMContentLoaded", function(){
  let usuario = document.getElementById('member').innerHTML;

  // Mostrar nombre del usuario
  document.getElementById('member').innerHTML = usuario;
   
 // Botón de cerrar sesión 
 document.getElementById('cierro').addEventListener('click', ()=>{
  Swal.fire({
    title: '¿Quiere cerrar sesión?',
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí'
  }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
        title: 'Que Rose le bendiga',
        icon: 'success'
      }).then(function() {
          window.location = "login.html";
            localStorage.removeItem('email');
        });
      }
    })
 })
})