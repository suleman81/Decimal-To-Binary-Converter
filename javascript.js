function convertDecimalToBinary(number) {
  var binary = "";
  var temp = number;

  while (temp > 0) {
    if (temp % 2 == 0) {
      binary = "0" + binary;
    } else {
      binary = "1" + binary;
    }

    temp = Math.floor(temp / 2);
  }

  return binary;
}
function myFunction() {
  var number = prompt("Please Enter a Decimal Number", "");
  if (number != null) {
    document.getElementById("demo").innerHTML = "You Enter : " + number;
    document.getElementById("demo2").innerHTML =
      "Binary Equivalent : " + convertDecimalToBinary(number);
  }
}
