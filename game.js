let city = JSON.parse(localStorage.getItem("city")) || {
  money: 1000,
  population: 10,
  happiness: 70
};

function updateUI() {
  document.getElementById("money").textContent = city.money;
  document.getElementById("population").textContent = city.population;
  document.getElementById("happiness").textContent = city.happiness;
  localStorage.setItem("city", JSON.stringify(city));
}

function buildHouse() {
  if (city.money >= 100) {
    city.money -= 100;
    city.population += 5;
    city.happiness += 2;
    updateUI();
  } else {
    alert("Uang tidak cukup!");
  }
}

function nextDay() {
  city.money += city.population * 2;
  city.happiness -= 1;
  if (city.happiness < 0) city.happiness = 0;
  updateUI();
}

updateUI();
