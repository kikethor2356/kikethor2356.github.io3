const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click', function () {
    Swal.fire({
        title: '¡Aviso!',
        text: 'Sabía que ibas a decir que sí uwu',
        icon: 'success',
        confirmButtonText: '¡Entendido!'
    }).then((result) => {
        // Verificar si el usuario hizo clic en "¡Entendido!"
        if (result.isConfirmed) {
            // Redireccionar a formulario.html
            window.location.href = "corazon.html";
        }
    });
});


const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})