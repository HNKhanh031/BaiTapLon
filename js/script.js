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
    if (dropdown.style.maxHeight === "50px"){
        dropdown.style.maxHeight = "0px";
    }
    else{
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
function hienthi(ma){
    let banh=listBanh.find(banh => banh.id === ma)
                localStorage.setItem("Ten",banh.ten);
                localStorage.setItem("Hinh",banh.hinh);
                localStorage.setItem("mota",banh.mota);
                localStorage.setItem("gia",banh.gia);
}