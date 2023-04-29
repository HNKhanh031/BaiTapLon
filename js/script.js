var slides = document.querySelectorAll('.slider .slide');
var currentSlide = 0;

function showSlide(n) {
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
var listBanh = [
    banh1 = {
        id: 1,
        ten: "Banh 1",
        hinh: "../img/banh1.png",
        mota: "Mô tả....",
        gia: "$123"
    },
    banh2 = {
        id: 2,
        ten: "Banh 2",
        hinh: "../img/banh1.png",
        mota: "Mô tả....",
        gia: "$20"
    },
    banh3 = {
        id: 3,
        ten: "Banh 3",
        hinh: "../img/product-6.jpg",
        mota: "Mô tả....",
        gia: "$111"
    },
    banh4 = {
        id: 4,
        ten: "Banh 4",
        hinh: "../img/banh3.png",
        mota: "Mô tả....",
        gia: "$30"
    },
    banh5 = {
        id: 5,
        ten: "Banh 5",
        hinh: "../img/product-1.jpg",
        mota: "Mô tả....",
        gia: "$100"
    },
    banh6 = {
        id: 6,
        ten: "Banh 6",
        hinh: "../img/product-2.jpg",
        mota: "Mô tả....",
        gia: "$12"
    },
    banh7 = {
        id: 7,
        ten: "Banh 7",
        hinh: "../img/product-3.jpg",
        mota: "Mô tả....",
        gia: "$50"
    },
    banh8 = {
        id: 8,
        ten: "Banh 8",
        hinh: "../img/product-4.jpg",
        mota: "Mô tả....",
        gia: "$30"
    }
];
function hienthi(ma) {
    let banh = listBanh.find(banh => banh.id === ma)
    localStorage.setItem("Ten", banh.ten);
    localStorage.setItem("Hinh", banh.hinh);
    localStorage.setItem("mota", banh.mota);
    localStorage.setItem("gia", banh.gia);
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