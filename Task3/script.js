document.getElementById('convertButton').addEventListener('click', function() {
    let inputTemperature = parseFloat(document.getElementById('inputTemperature').value);
    let inputUnit = document.getElementById('inputUnit').value;

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

    document.getElementById('celsiusResult').innerText = celsius.toFixed(2);
    document.getElementById('fahrenheitResult').innerText = fahrenheit.toFixed(2);
    document.getElementById('kelvinResult').innerText = kelvin.toFixed(2);
});

