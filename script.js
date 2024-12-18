document.getElementById('carbono-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const eletricidade = parseFloat(document.getElementById('eletricidade').value) || 0;
    const transporte = parseFloat(document.getElementById('transporte').value) || 0;

    const carbonoDaEletricidade = eletricidade * 0.233; // Média de 0.233 kgCO2/kWh
    const carbonoDoTransporte = transporte * 0.21; // Média de 0.21 kgCO2/km para carros

    const totalCarbon = carbonoDaEletricidade + carbonoDoTransporte;

    const resultElement = document.getElementById('resultado');
    resultElement.textContent = `Seu impacto de carbono mensal é de aproximadamente ${totalCarbon.toFixed(2)} kg de CO2.`;
});