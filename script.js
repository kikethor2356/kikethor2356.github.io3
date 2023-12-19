const evento = document.getElementById('send')
const enviarFormulario =() => {
        let nombre = document.getElementById('nombres').value;
        let apellido = document.getElementById('apellidos').value;
        let mensaje = document.getElementById('mensaje').value;
        let numero= 3326770713;
var win= window.open(`https://wa.me/${numero}?text=Hola%20mi%20soy yo %20es%20${nombre}
%20${apellido} el amor de tu vida, Fecha de nacimiento:%20${mensaje}`,'_blank');       
}
evento.addEventListener('click', enviarFormulario)


