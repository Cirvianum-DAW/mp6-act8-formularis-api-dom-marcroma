document.getElementById('registerForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Obtenir les dades del formulari
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const dni = document.getElementById('dni').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('gender').value;
    const password = document.getElementById('password').value;
    const terms = document.getElementById('terms').checked;

    // Validar les dades del formulari
    // Els camps no poden estar buits
    if (!firstName || !lastName || !email || !dni || !birthdate || !gender || !password) {
        alert('Tots els camps són obligatoris.');
        return;
    }

    if (!terms) {
        alert('Has d\'acceptar els termes i condicions.');
        return;
    }

    // La contrasenya ha de tenir com a mínim 6 caràcters. Heu de mostrar un missatge d'alerta si la contrasenya és massa curta.
    if (password.length < 6) {
        alert('La contrasenya ha de tenir com a mínim 6 caràcters.');
        return;
    }

    // L'adreça de correu ha de tenir un format vàlid.
    const emailRegex = '/^[^\s@]+@[^\s@]+\.[^\s@]+$/';

    if (!email.test(emailRegex)) {
        alert('L\'adreça de correu ha de tenir un format vàlid.');
        return;
    }

    // La data 

});