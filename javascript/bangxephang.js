
var danhsach = document.querySelector('.xephang');

var sanphamList = [];
bangxephang = () => {
    console.log('#ffffff')
    document.querySelector('.bangxephang').classList.toggle('show')
}


function render() {
    danhsach.innerHTML = '';
    sanphamRef.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            var sanpham = childSnapshot.val();
            sanphamList.push(sanpham);
        });
        sanphamList.forEach((e, i) => {
            var chil = document.createElement('tr');
            console.log(typeof e.gia)
            chil.innerHTML =
                `
          <td>${i + 1}</td>
          <td><img src="${e.ten}" alt=""></td>
          <td>${e.soluong}</td>
          <td>${formatter.format(e.gia).replace(/(\.\d{2})?$/, '')}</td>
          <td>${e.thoigian}</td>
          `;
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