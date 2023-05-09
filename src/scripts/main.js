document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento){
        evento.preventDefault();
        const numeroMaximo = parseInt(document.getElementById('numero-maximo').value);
        
        let numeroAleatorio = Math.random() * numeroMaximo;
        
        document.getElementById('resultado-valor').innerText = Math.floor(numeroAleatorio + 1);
        document.querySelector('.resultado').style.display = 'block';
    })
})