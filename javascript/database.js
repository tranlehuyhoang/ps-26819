
var user = JSON.parse(localStorage.getItem('user'))
if (user) {
    document.querySelector('.g-signin2').innerHTML =
        `
<img src="${user.photo}" alt="">
<div>${user.name}</div>
`
    console.log(userss)
}
var userss = {
    name: user.name || '',
    photo: user.photo || ''
}
console.log(userss)

// const firebaseConfig = {
//     apiKey: "AIzaSyCQ1i7ayjCOy4lnsUwsHWQAORs02YoQntQ",
//     authDomain: "fir-3b1e0.firebaseapp.com",
//     projectId: "fir-3b1e0",
//     storageBucket: "fir-3b1e0.appspot.com",
//     messagingSenderId: "457136927764",
//     appId: "1:457136927764:web:b17b0120db7091651f2301",
//     measurementId: "G-8LW6KBNNJ5"
// };
// // Khởi tạo Firebase
// firebase.initializeApp(firebaseConfig);

// Cấu hình đăng nhập bằng Google

// Đăng ký tài khoản mới


// Đăng nhập bằng Google
function signIn() {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/userinfo.email');
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // Đăng nhập thành công
            var user = result.user;
            console.log(user)
            userss.name = user.displayName
            userss.photo = user.photoURL
            alert("Đăng nhập thành công!");
            localStorage.setItem('user', JSON.stringify(userss));
            document.querySelector('.g-signin2').innerHTML =
                `
    <img src="${userss.photo}" alt="">
    <div>${userss.name}</div>
    `

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
    return currentYear + '-' + currentMonth + '-' + currentDay + ' ' + currentHour + ':' + currentMinute + ':' + currentSecond
}
taoSanpham = () => {
    const coinRef = database.ref(`sanpham/${getTime()}`);
    coinRef.set({
        ten: userss.name,
        sanpham: userss.name,
        thoigian: getTime()
    })

}

