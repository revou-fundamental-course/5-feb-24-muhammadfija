function convertTemperature() {
  var celsius = parseFloat(document.getElementById("celsius").value);
  var fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").innerHTML = fahrenheit.toFixed(2);

  var calculation =
    celsius + " °C × 9/5 + 32 = " + fahrenheit.toFixed(2) + " °F";
  document.getElementById("calculation").innerHTML = calculation;
}
