
// showmenu = (a) => {
//   if (a == '1') {
//     document.querySelector(`.subnav1`).classList.toggle("show");
//     document.querySelector(`.subnav2`).classList.remove("show");
//     document.querySelector(`.subnav3`).classList.remove("show");
//   } else if (a == '2') {
//     document.querySelector(`.subnav1`).classList.remove("show");
//     document.querySelector(`.subnav2`).classList.toggle("show");
//     document.querySelector(`.subnav3`).classList.remove("show");
//   } else if (a == '3') {
//     document.querySelector(`.subnav1`).classList.remove("show");
//     document.querySelector(`.subnav2`).classList.remove("show");
//     document.querySelector(`.subnav3`).classList.toggle("show");
//   }
//   // document.querySelectorAll(`.subnav`).forEach(e => {
//   //   let slides = document.querySelector(`.subnav${a}`).classList.toggle("show");
//   // })
// }
// document.querySelectorAll(".a23000").forEach(e => {
//   e.innerHTML = `${Math.floor(Math.random() * (2000000 - 100000 + 1)) + 100000} `
// })

// laygia = (i) => {
//   return document.querySelectorAll(".a23000")[i].innerHTML
// }
// themxe = (e, index) => {
//   var ul = document.querySelector(".cart-list");

//   var li = document.createElement("li");
//   li.innerHTML = ` 
//   <img src="${e}" alt="" />
//   <input type="number" style="width: 100px; height: 100%; font-size: 30px;" name="" id="" value='1' class="inputs">
//   <h4 class = "showgia" style="font-size: 30px;">${laygia(index - 1)}  </h4> <p>USD<p/>
//   `


//   kiemtratrung(li)
//   ul.appendChild(li);
//   tongtien()
//   nhantien()
// }
// kiemtratrung = (li) => {

//   var ul_child = document.querySelectorAll(".cart-list > li");
//   ul_child.forEach((e, i) => {
//     if (li.querySelector('img').src == e.querySelector('img').src) {
//       console.log(li.querySelector('img').src, e.querySelector('img').src)
//       e.querySelector('input').value = Number(e.querySelector('input').value) + Number(li.querySelector('input').value)

//       document.querySelectorAll(".cart-list>li").removeChild(li)

//     }
//   })

// }

tongtien = () => {
  var thanhtoan = document.querySelector('.thanhtoan');
  var gia = 0;
  const liElements = document.querySelectorAll("div.cart-list h4");
  liElements.forEach(li => {
    gia += Number(li.textContent)
    thanhtoan.innerHTML = ` <img src="./img/logochinh.png" alt="" style="height: 30px; width: 25px;"/> thanh toán : ${formatter.format(gia)} USD`
  })
}
nhantien = () => {
  const inputs = document.querySelectorAll('.inputs');
  const prices = document.querySelectorAll('.showgia');

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const price = prices[i];
    const gia = prices[i].innerHTML;

    input.addEventListener('change', function () {
      const value = parseInt(input.value);
      const oldPrice = parseInt(gia);
      const newPrice = value * oldPrice;
      price.textContent = newPrice;
      tongtien()
    });
  }

}

// hiencart = () => {
//   document.querySelector(".cart-list").classList.toggle('show');
// }


// function xacnhandangki() {
//   return true

// }

// function xacnhandangnhap() {
//   return true

// }

// const formatter = new Intl.NumberFormat('en-US', {
//   style: 'currency',
//   currency: 'USD',
// });


