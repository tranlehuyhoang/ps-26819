
let lamborghiniModels = ["Lamborghini Diablo", "Lamborghini Gallardo", "Lamborghini Murcielago", "Lamborghini Reventon", "Lamborghini Veneno", "Lamborghini Centenario","Lamborghini Aventador", "Lamborghini Huracan", "Lamborghini Urus", "Lamborghini Sian", "Lamborghini Countach", "Lamborghini Miura"];


let lamborNames = document.querySelectorAll(".lamborname");

// Loop through each "lamborname" element
lamborNames.forEach(function(lamborName) {

  let randomIndex = Math.floor(Math.random() * lamborghiniModels.length);
  let randomModel = lamborghiniModels[randomIndex];

  lamborName.textContent = randomModel;
});