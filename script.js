function catchAnswer() {
    const name = document.getElementById('fieldName').value;
    const altura = document.getElementById('fieldAltura').value;
    const peso = document.getElementById('fieldPeso').value;

    if (name && altura && peso) {
        const imc = peso / (altura * altura);
        const resultMsg = `Obrigado por visitar nosso site! ${name}, seu IMC é ${imc.toFixed(2)}.`;

        document.getElementById('resultMsg').innerText = resultMsg;

        document.getElementById('resultContainer').style.display = 'block'; 

        document.getElementById('link1').style.display = 'inline';
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}
