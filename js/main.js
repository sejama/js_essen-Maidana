let usuuarioLog;
if(sessionStorage.usuario){
  usuuarioLog = JSON.parse(sessionStorage.usuario) 
  let ingresoOcultar = document.getElementsByClassName("ocultar");
  ingresoOcultar[0].style.display = 'none'; 
  ingresoOcultar[1].style.display = 'none';
  let ingresoMostrar = document.getElementsByClassName("mostrar");
  ingresoMostrar[0].style.display = 'block';
  ingresoMostrar[0].innerHTML = usuuarioLog.usuario + "- Salir"
  }

const salir = document.querySelector(".mostrar");
salir.onclick = function () {
  sessionStorage.removeItem("usuario");
  Swal.fire({
    title:'Gracias por tu visita '+ usuuarioLog.usuario +'!',
    text:'Ojala vulevas pronto, que tengas un buen día!!!',
    icon:'success',
    confirmButtonText: "Aceptar",
    timer: 2500
  }).then(() => {
    window.location.href="./page/ingresar.html";
})
}