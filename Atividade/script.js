function submitForm() {
    // Obtendo os valores dos campos
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const city = document.getElementById('city').value;

    // Exibindo os valores coletados
    document.getElementById('resultName').innerText = name;
    document.getElementById('resultEmail').innerText = email;
    document.getElementById('resultPhone').innerText = phone;
    document.getElementById('resultDob').innerText = dob;
    document.getElementById('resultCity').innerText = city;

    // Mostrando o container de resultado
    document.getElementById('result').style.display = 'block';
}
