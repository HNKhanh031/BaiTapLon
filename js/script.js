var currentSlide = 0;
var listbanh = [
    banh1 = {
        id: 1,
        ten: "Banana Pudding Cookies",
        hinh: ["../img/Banana Pudding Cookies_1.jpg", "../img/Banana Pudding Cookies_2.jpg"],
        mota: "Mô tả....",
        gia: 25
    },
    banh2 = {
        id: 2,
        ten: "Birthday Cupcakes",
        hinh: ["../img/Birthday Cupcakes_1.jpg", "../img/Birthday Cupcakes_2.jpg", "../img/Birthday Cupcakes_3.jpg"],
        mota: "Mô tả....",
        gia: 30
    },
    banh3 = {
        id: 3,
        ten: "Chocolate Cake",
        hinh: ["../img/Chocolate Cake_1.jpg", "../img/Chocolate Cake_2.jpg", "../img/Chocolate Cake_3.jpg"],
        mota: "Mô tả....",
        gia: 25
    },
    banh4 = {
        id: 4,
        ten: "Chocolate Chunk Cookies",
        hinh: ["../img/Chocolate Chunk Cookies_1.jpg", "../img/Chocolate Chunk Cookies_2.jpg", "../img/Chocolate Chunk Cookies_3.jpg", "../img/Chocolate Chunk Cookies_4.jpg"],
        mota: "Mô tả....",
        gia: 30
    },
    banh5 = {
        id: 5,
        ten: "Chocolate Pudding Icebox Pie",
        hinh: ["../img/Chocolate Pudding Icebox Pie_1.jpg", "../img/Chocolate Pudding Icebox Pie_2.jpg", "../img/Chocolate Pudding Icebox Pie_3.jpg"],
        mota: "Mô tả....",
        gia: 40
    },
    banh6 = {
        id: 6,
        ten: "Confetti Cake",
        hinh: ["../img/Confetti Cake_1.png", "../img/Confetti Cake_2.png", "../img/Confetti Cake_3.jpg"],
        mota: "Mô tả....",
        gia: 30
    },
    banh7 = {
        id: 7,
        ten: "Pastel Party Cake",
        hinh: ["../img/Pastel Party Cake_1.jpg", "../img/Pastel Party Cake_2.jpg", "../img/Pastel Party Cake_3.jpg"],
        mota: "Mô tả....",
        gia: 50
    },
    banh8 = {
        id: 8,
        ten: "Red Velvet Cupcakes",
        hinh: ["../img/Red Velvet Cupcakes_1.jpg", "../img/Red Velvet Cupcakes_2.jpg"],
        mota: "Mô tả....",
        gia: 30
    }
];
sessionStorage.setItem("listbanh", JSON.stringify(listbanh))


function showSlide(n) {
    var slides = document.querySelectorAll('.slide');
    if (n < 0) {
        n = slides.length - 1;
    } else if (n >= slides.length) {
        n = 0;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
    }

    slides[n].classList.add('active');
    currentSlide = n;
}

function prev() {
    showSlide(currentSlide - 1);
};

function next() {
    showSlide(currentSlide + 1);
};
function downSearch() {
    var dropdown = document.getElementById("form-search");
    if (dropdown.style.maxHeight === "50px") {
        dropdown.style.maxHeight = "0px";
    }
    else {
        dropdown.style.maxHeight = "50px";
    }
}
function hienthi(id) {
    sessionStorage.setItem('id', id);
}
function plus() {
    n = document.getElementById("quantity")
    n.innerText = parseInt((n.innerText)) + 1
}
function minus() {
    n = document.getElementById("quantity")
    if (parseInt((n.innerText)) > 1)
        n.innerText = parseInt((n.innerText)) - 1
}
function themsl(id) {
    cart = {
        id: id,
        sl: document.getElementById("quantity").innerText
    }
    sessionStorage.setItem(id, JSON.stringify(cart))
}

function checkTenDN() {
    let ten = document.getElementById("username").value;
    if (ten == "") {
        document.getElementById("ertendn").innerHTML = "Username must not be empty";
        return false;
    }
    else {
        let patten = /^\w{3,16}/;
        if (patten.test(ten)) {
            document.getElementById("ertendn").innerHTML = "*";
            return true;
        } else {
            document.getElementById("ertendn").innerHTML = "Wrong syntax";
            return false;
        }
    }

}

function checkMatKhau() {
    let mk = document.getElementById("password").value;
    if (mk == "") {
        document.getElementById("ermk").innerHTML = "Password must not be empty";
        return false;
    }
    else {
        let patmk = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;;
        if (patmk.test(mk)) {
            document.getElementById("ermk").innerHTML = "*";
            return true;

        } else {
            document.getElementById("ermk").innerHTML = "Wrong syntax";
            return false;
        }
    }
}

function checkMatKhauRe() {
    let mkre = document.getElementById("password-confirm").value;
    if (mkre == "") {
        document.getElementById("ermkre").innerHTML = "Password confirm must not be empty";
        return false;
    }
    let patmkre = document.getElementById("password").value;
    let patmk = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;;
    if (patmkre == mkre && patmk.test(mkre)) {
        document.getElementById("ermkre").innerHTML = "*";
        return true;
    } else {
        document.getElementById("ermkre").innerHTML = "Incorrect password confirm";
        return false;
    }
}

function checkHoTen() {
    let hoTen = document.getElementById("fullname").value;
    if (hoTen == "") {
        document.getElementById("erhoten").innerHTML = "Fullname must not be empty";
        return false;
    } else {
        let pathoten = /^([A-Z]{1}[a-z]*\s)*([A-Z]{1}[a-z]*)+$/;
        if (pathoten.test(hoTen)) {
            document.getElementById("erhoten").innerHTML = "*";
            return true;
        } else {
            document.getElementById("erhoten").innerHTML = "Wrong syntax";
            return false;
        }
    }
}

function checkNgaySinh() {
    const ngaySinh = document.getElementById("birthdate").value;
    const birthday = new Date(ngaySinh);
    const today = new Date();
    if (birthday.getTime() < today.getTime()) {
        document.getElementById("erbirthdate").innerHTML = "*";
        return true;
    } else {
        document.getElementById("erbirthdate").innerHTML = "Date of birth must be before current date";
        return false;
    }
}

function checkSDT() {
    let sdt = document.getElementById("phone").value;
    if (sdt == "") {
        document.getElementById("ersdt").innerHTML = "Phone numbers must not be empty";
        return false;
    } else {
        let patSDT = /^0\d{9,10}$/;
        if (patSDT.test(sdt)) {
            document.getElementById("ersdt").innerHTML = "*";
            return true;
        } else {
            document.getElementById("ersdt").innerHTML = "Wrong syntax";
            return false;
        }
    }
}

function checkEmail() {
    let email = document.getElementById("email").value;
    if (email == "") {
        document.getElementById("eremail").innerHTML = "Email must not be empty";
        return false;
    } else {
        let patemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (patemail.test(email)) {
            document.getElementById("eremail").innerHTML = "*";
            return true;
        } else {
            document.getElementById("eremail").innerHTML = "Wrong syntax";
            return false;
        }
    }
}

function Dangky() {
    if (checkTenDN() && checkMatKhau() && checkMatKhauRe() && checkHoTen() && checkNgaySinh() && checkSDT() && checkEmail()) {
        alert("Đăng ký thành công");
    }
}