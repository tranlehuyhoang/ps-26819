
let lamborghiniModels = ["Lamborghini Diablo", "Lamborghini Gallardo", "Lamborghini Murcielago", "Lamborghini Reventon", "Lamborghini Veneno", "Lamborghini Centenario","Lamborghini Aventador", "Lamborghini Huracan", "Lamborghini Urus", "Lamborghini Sian", "Lamborghini Countach", "Lamborghini Miura"];


let lamborNames = document.querySelectorAll(".lamborname");

// Loop through each "lamborname" element
lamborNames.forEach(function(lamborName) {

  let randomIndex = Math.floor(Math.random() * lamborghiniModels.length);
  let randomModel = lamborghiniModels[randomIndex];

  lamborName.textContent = randomModel;
});

showmenu = (a) => {
  if (a == '1') {
    document.querySelector(`.subnav1`).classList.toggle("show");
    document.querySelector(`.subnav2`).classList.remove("show");
    document.querySelector(`.subnav3`).classList.remove("show");
  } else if (a == '2') {
    document.querySelector(`.subnav1`).classList.remove("show");
    document.querySelector(`.subnav2`).classList.toggle("show");
    document.querySelector(`.subnav3`).classList.remove("show");
  } else if (a == '3') {
    document.querySelector(`.subnav1`).classList.remove("show");
    document.querySelector(`.subnav2`).classList.remove("show");
    document.querySelector(`.subnav3`).classList.toggle("show");
  }
  // document.querySelectorAll(`.subnav`).forEach(e => {
  //   let slides = document.querySelector(`.subnav${a}`).classList.toggle("show");
  // })
}