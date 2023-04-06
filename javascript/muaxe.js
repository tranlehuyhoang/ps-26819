
var xeArray = [];

function themxe(e) {
    var xelamboDivs = document.querySelectorAll('.xelambo');
    var imgSrc = xelamboDivs[e].querySelector('img').getAttribute('src');
    var price = xelamboDivs[e].querySelector('.giaxe h2').textContent;
    xeArray.push({ imgSrc: imgSrc, price: price });
    hienxe()


}
hienxe = () => {
    var ul = document.querySelector(".cart-list");
    ul.innerHTML = `
    <h3 class="heading3" style="display: flex; align-items: center; justify-content: space-between;">
                    <div class="chutos">Shopping cart-list</div>


                    <button onclick ="thanhtoan()"  style="float: right; display: flex; align-items: center; cursor: pointer; background: #0000005d; border: 0px; padding: 10px; border-radius: 50px;" class="thanhtoan cursorsHover">thanh
                      toán</button>
                  </h3>
    `
    xeArray.forEach((e, i) => {

        var li = document.createElement("li");
        li.innerHTML = ` 
  <img src="${e.imgSrc}" alt="" />
  <input type="number" style="width: 100px; height: 100%; font-size: 30px;" name="" id="" value='1' class="inputs" >
  <h4 class = "showgia" style="font-size: 30px;">${e.price}  </h4> <p>USD<p/> <button onclick='huyxe(${i})'>Hủy</button>
  `
        ul.appendChild(li);
    })
    nhantien()

}
function huyxe(e) {
    console.log(e);
    xeArray = xeArray.filter((item, index) => index !== e);
    console.log(xeArray);
    hienxe()
}
tongtien = () => {
    var thanhtoan = document.querySelector('.thanhtoan');
    var gia = 0;
    const liElements = document.querySelectorAll(".showgia");
    console.log('liElements', liElements)
    liElements.forEach(li => {
        gia += Number(li.textContent)
        thanhtoan.innerHTML = ` <img src="./img/logochinh.png" alt="" style="height: 30px; width: 25px;"/> thanh toán : ${formatter.format(gia)} USD`
    })
}
nhantien = () => {
    console.log('tien')
    const inputs = document.querySelectorAll('.inputs');
    const prices = document.querySelectorAll('.showgia');
    tongtien()
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs[i].value)
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
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
var gia = 0
var soluong = 0;
thanhtoan = () => {
    var li = document.querySelectorAll('.cart-list >li')
    li.forEach((e, i) => {
        gia += Number(e.querySelector('.showgia').innerHTML)
        soluong += Number(e.querySelector('.inputs').value)


    })
    console.log(gia)
    console.log(soluong)
    taoSanpham(soluong, gia)
    gia = 0
    soluong = 0;
    alert('Bấm vào Logo để xem thông tin')


}
taoSanpham = (soluong, gia) => {
    const coinRef = database.ref(`sanpham/${getTime()}`);
    coinRef.set({
        ten: userss.photo,
        soluong: soluong,
        gia: gia,
        thoigian: getTime()
    })

}
