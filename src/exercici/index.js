const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Obtenir les dades del formulari
    const formData = {
        firstName: firstName = document.getElementById('firstName').value,
        lastName: lastName = document.getElementById('lastName').value,
        email: email = document.getElementById('email').value,
        dni: dni = document.getElementById('dni').value,
        birthdate: birthdate = document.getElementById('birthdate').value,
        gender: gender = document.getElementById('genderSelect').value,
        password: password = document.getElementById('password').value,
        terms: terms = document.getElementById('terms').checked,
    }


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

    // La contrasenya ha de tenir com a mínim 6 caràcters. 
    // Heu de mostrar un missatge d'alerta si la contrasenya és massa curta.
    if (password.length < 6) {
        alert('La contrasenya ha de tenir com a mínim 6 caràcters.');
        return;
    }

    // L'adreça de correu ha de tenir un format vàlid.
    // const emailRegex = '/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/';

    // // if (!email.match(emailRegex)) {
    // //     alert('L\'adreça de correu ha de tenir un format vàlid.');
    // //     return;
    // // }

    // L'usuari ha de ser major d'edat.
    const birthdateDate = new Date(birthdate);
    const now = new Date();
    let age = now.getFullYear() - birthdateDate.getFullYear();
    const month = now.getMonth() - birthdateDate.getMonth();
    if (month < 0 || (month === 0 && now.getDate() < birthdateDate.getDate())) {
        age--;
    }

    if (age < 18) {
        alert('L\'usuari ha de ser major d\'edat.');
        return;
    }

    // Verificar el format del DNI.
    // let dniRegex = '/^[0-9]{8}[A-Z]$/';
    // if (!dni.match(dniRegex)) {
    //     alert('El DNI ha de tenir un format vàlid.');
    //     return;
    // }

    // WEB STORAGE
    // Guardar les dades del formulari a localStorage
    // localStorage.setItem('formData', JSON.stringify(formData));

    // Guardar les dades del formulari a sessionStorage
    sessionStorage.setItem('formData', JSON.stringify(formData));
    console.log(sessionStorage.getItem('formData'));

    window.location.href = 'weather.html';

});