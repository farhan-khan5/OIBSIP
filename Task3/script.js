document.getElementById('convertButton').addEventListener('click', function() {
    let inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    let inputUnit = document.getElementById('inputUnit').value;

    if (isNaN(inputTemperature)) {
        alert("Please enter a valid temperature");
        return;
    }

    let celsius, fahrenheit, kelvin;

    if (inputUnit === 'Celsius') {
        celsius = inputTemperature;
        fahrenheit = (inputTemperature * 9/5) + 32;
        kelvin = inputTemperature + 273.15;
    } else if (inputUnit === 'Fahrenheit') {
        celsius = (inputTemperature - 32) * 5/9;
        fahrenheit = inputTemperature;
        kelvin = (inputTemperature - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'Kelvin') {
        celsius = inputTemperature - 273.15;
        fahrenheit = (inputTemperature - 273.15) * 9/5 + 32;
        kelvin = inputTemperature;
    }

    animateResult('celsiusResult', celsius.toFixed(2));
    animateResult('fahrenheitResult', fahrenheit.toFixed(2));
    animateResult('kelvinResult', kelvin.toFixed(2));
});

function animateResult(elementId, value) {
    let element = document.getElementById(elementId);
    element.style.opacity = 0;
    setTimeout(function() {
        element.innerText = value;
        element.style.opacity = 1;
    }, 300);
}
