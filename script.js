var operation = prompt("Оберіть операцію (add, sub, mult, div):");

var num1 = parseFloat(prompt("Введіть перше число:"));

var num2 = parseFloat(prompt("Введіть друге число:"));

var result;

if (operation === "add") {
  result = num1 + num2;
  alert(num1 + " " + "+" + " " + num2 + " = " + result);
} else if (operation === "sub") {
  result = num1 - num2;
  alert(num1 + " " + "-" + " " + num2 + " = " + result);
} else if (operation === "mult") {
  result = num1 * num2;
  alert(num1 + " " + "*" + " " + num2 + " = " + result);
} else if (operation === "div") {
  if (num2 !== 0) {
    result = num1 / num2;
    alert(num1 + " " + "/" + " " + num2 + " = " + result);
  } else {
    alert("Ділення на нуль неможливе.");
    result = "Невизначено";
  }
} else {
  alert("Неправильно обрана операція.");
  result = "Невизначено";
}

