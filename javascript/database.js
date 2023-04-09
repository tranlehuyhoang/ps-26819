var user = JSON.parse(localStorage.getItem('user'));
var userss = {
    name: '',
    photo: ''
};
if (user) {
    document.querySelector('.g-signin2').innerHTML =
        `
        <img src="${user.photo}" alt="">
        <div>${user.name}</div>
        `;
    userss.name = user.name;
    userss.photo = user.photo;
}
console.log(userss);

// Đăng nhập bằng Google
function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Đăng nhập thành công
            var user = result.user;
            console.log(user);
            userss.name = user.displayName;
            userss.photo = user.photoURL;
            localStorage.setItem('user', JSON.stringify(userss));
            document.querySelector('.g-signin2').innerHTML =
                `
                <img src="${userss.photo}" alt="">
                <div>${userss.name}</div>
                `;
        })
        .catch((error) => {
            // Đăng nhập không thành công
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

var database = firebase.database();
var sanphamRef = database.ref('sanpham');

getTime = () => {
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    console.log(currentHour + ':' + currentMinute + ':' + currentSecond);
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; // Tháng bắt đầu từ 0
    var currentDay = currentDate.getDate();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();
    return currentYear + '-' + currentMonth + '-' + currentDay + ' ' + currentHour + ':' + currentMinute + ':' + currentSecond;
};

taoSanpham = () => {
    const coinRef = database.ref(`sanpham/${getTime()}`);
    coinRef.set({
        ten: userss.name,
        sanpham: userss.name,
        thoigian: getTime()
    });
};
