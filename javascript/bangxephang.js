
var danhsach = document.querySelector('.xephang');

var sanphamList = [];
bangxephang = () => {
    console.log('#ffffff')
    document.querySelector('.bangxephang').classList.toggle('show')
    sanphamList = [];
    danhsach.innerHTML = '';
}


function render() {
    danhsach.innerHTML = '';
    sanphamRef.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var sanpham = childSnapshot.val();
            sanphamList.push(sanpham);
        });
        sanphamList.forEach((e, i) => {
            let now = Date.now();
            let then = new Date(e.thoigian).getTime();
            var chil = document.createElement('tr');
            console.log(typeof e.gia)
            if (Math.floor((now - then) / 1000) <= 60) {
                chil.innerHTML =
                    `
<td>${i + 1}</td>
<td><img src="${e.ten}" alt=""></td>
<td>${e.soluong}</td>
<td>${formatter.format(e.gia).replace(/(\.\d{2})?$/, '')}</td>
<td>${Math.floor((now - then) / 1000)} giây trước</td>
`
            } else {
                chil.innerHTML =
                    `
  <td>${i + 1}</td>
  <td><img src="${e.ten}" alt=""></td>
  <td>${e.soluong}</td>
  <td>${formatter.format(e.gia).replace(/(\.\d{2})?$/, '')}</td>
  <td>${Math.floor((now - then) / 1000 / 60)} phút trước</td>
  `;
            }
            danhsach.insertBefore(chil, danhsach.firstChild);
        });
        console.log(sanphamList);
    });
}

sanphamRef.on('value', function (snapshot) {

    sanphamList = [];
    danhsach.innerHTML = '';
    render();
});

 // lấy số giây hiện tại kể từ epoch
// lấy số giây kể từ epoch đến 06/04/2023 20:45:08 UTC
 // tính số giây trước đó
