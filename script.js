var flag = true;
const history = [];

function init() {
  if (localStorage.getItem("color") == "dark") {
    dark();
  } else {
    light();
  }

  var historyJson = localStorage.getItem("historyofcalculation");

  history.push(...JSON.parse(historyJson));
}

function dark() {
  document.getElementById("capsule").classList.remove("mode");
  document.getElementById("capsule").classList.add("mode-dark");
  document.getElementById("keypad").classList.remove("mode");
  document.getElementById("keypad").classList.add("mode-dark");
  document.getElementById("screen").classList.remove("modey");
  document.getElementById("screen").classList.add("modey-dark");
  document.getElementById("calculation").classList.remove("modey");
  document.getElementById("calculation").classList.add("modey-dark");
  document.getElementById("result").classList.remove("modey");
  document.getElementById("result").classList.add("modey-dark");
  document.getElementById("top").classList.remove("mode");
  document.getElementById("top").classList.add("mode-dark");
  localStorage.setItem("color", "dark");
  console.log("Value of color is - ", localStorage.getItem("color"));
}
function light() {
  document.getElementById("capsule").classList.add("mode");
  document.getElementById("capsule").classList.remove("mode-dark");
  document.getElementById("keypad").classList.add("mode");
  document.getElementById("keypad").classList.remove("mode-dark");
  document.getElementById("screen").classList.add("modey");
  document.getElementById("screen").classList.remove("modey-dark");
  document.getElementById("calculation").classList.add("modey");
  document.getElementById("calculation").classList.remove("modey-dark");
  document.getElementById("result").classList.add("modey");
  document.getElementById("result").classList.remove("modey-dark");
  document.getElementById("top").classList.add("mode");
  document.getElementById("top").classList.remove("mode-dark");
  localStorage.setItem("color", "light");
  console.log("Value of color is - ", localStorage.getItem("color"));
}

function clearAll() {
  document.getElementById("calculation").value = "0";
  document.getElementById("result").value = "";
}

function inputValue(number) {
  if (flag) {
    document.getElementById("calculation").value = "";
    document.getElementById("result").value = "";
    flag = false;
  }
  document.getElementById("calculation").value += `${number}`;
}

function backspace() {
  var calculation = document.getElementById("calculation").value;
  calculation = calculation.toString().slice(0, -1);
  document.getElementById("calculation").value = calculation;
  if (document.getElementById("calculation").value === "") {
    document.getElementById("calculation").value = "0";
    flag = true;
  }
}

function equals() {
  var calculation = document.getElementById("calculation").value;
  var result = (document.getElementById("result").value = "");

  var result = eval(calculation);
  document.getElementById("result").value = result;
  flag = true;
  add();
  var jsonString = JSON.stringify(history);
  localStorage.setItem("historyofcalculation", jsonString);
}

function add() {
  history.push({
    calculation: document.getElementById("calculation").value,
    result: document.getElementById("result").value,
    timestamp: Date.now(),
  });

  console.log(JSON.stringify(history));
}

// function remove(){
//   history.pop({document.getElementById("calculation").value});
//   history.pop ({document.getElementById("result").value = result});

// }
