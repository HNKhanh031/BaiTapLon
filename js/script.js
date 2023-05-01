var currentSlide = 0;
var listbanh = [
    banh1 = {
        id: 1,
        ten: "Banana Pudding Cookies",
        hinh: ["../img/Banana Pudding Cookies_1.jpg", "../img/Banana Pudding Cookies_2.jpg"],
        mota: "Banana pudding cookies are chewy cookies with a subtle banana flavor and creamy texture. They're made with butter, brown sugar, eggs, flour, baking powder, mashed bananas, and vanilla pudding mix.",
        gia: 25
    },
    banh2 = {
        id: 2,
        ten: "Birthday Cupcakes",
        hinh: ["../img/Birthday Cupcakes_1.jpg", "../img/Birthday Cupcakes_2.jpg", "../img/Birthday Cupcakes_3.jpg"],
        mota: "A birthday cupcake is a small cake served for one person on their birthday. They're baked in small liners, flavored with ingredients like vanilla or chocolate, and topped with frosting and decorations.",
        gia: 30
    },
    banh3 = {
        id: 3,
        ten: "Chocolate Cake",
        hinh: ["../img/Chocolate Cake_1.jpg", "../img/Chocolate Cake_2.jpg", "../img/Chocolate Cake_3.jpg"],
        mota: "Chocolate cake is a dessert made with chocolate, typically with ingredients such as flour, sugar, eggs, cocoa powder, and baking soda or baking powder. It can be enhanced with additional chocolate and layered with frosting such as buttercream.",
        gia: 25
    },
    banh4 = {
        id: 4,
        ten: "Chocolate Chunk Cookies",
        hinh: ["../img/Chocolate Chunk Cookies_1.jpg", "../img/Chocolate Chunk Cookies_2.jpg", "../img/Chocolate Chunk Cookies_3.jpg", "../img/Chocolate Chunk Cookies_4.jpg"],
        mota: "Chocolate chunk cookies are a type of cookie with chunks of chocolate in the dough. They're made with ingredients like butter, sugar, eggs, flour, baking soda, vanilla extract, and chopped chocolate. The dough is portioned into balls and baked until golden brown, resulting in crispy cookies with a soft, chewy interior.",
        gia: 30
    },
    banh5 = {
        id: 5,
        ten: "Chocolate Pudding Icebox Pie",
        hinh: ["../img/Chocolate Pudding Icebox Pie_1.jpg", "../img/Chocolate Pudding Icebox Pie_2.jpg", "../img/Chocolate Pudding Icebox Pie_3.jpg"],
        mota: "Chocolate pudding icebox pie is a no-bake dessert with a chocolate cookie crust and a filling made of chocolate pudding and whipped cream. The crust is made with crushed cookies and butter, and the filling is made with instant pudding mix and whipped cream. It's chilled until set and can be topped with various toppings.",
        gia: 40
    },
    banh6 = {
        id: 6,
        ten: "Confetti Cake",
        hinh: ["../img/Confetti Cake_1.png", "../img/Confetti Cake_2.png", "../img/Confetti Cake_3.jpg"],
        mota: "Confetti cake is a type of cake that is made with a white or yellow cake batter that has colorful sprinkles mixed into the batter. The sprinkles create a fun and festive look, resembling confetti. The cake is typically baked in layers and frosted with a vanilla buttercream frosting.",
        gia: 30
    },
    banh7 = {
        id: 7,
        ten: "Pastel Party Cake",
        hinh: ["../img/Pastel Party Cake_1.jpg", "../img/Pastel Party Cake_2.jpg", "../img/Pastel Party Cake_3.jpg"],
        mota: "A pastel party cake is a cake decorated with light-colored frosting in shades of pink, blue, green, or yellow. It's often served at parties, such as baby showers or springtime gatherings. The cake can be made in different flavors and sizes, and the frosting is typically made with butter, powdered sugar, and food coloring.",
        gia: 50
    },
    banh8 = {
        id: 8,
        ten: "Red Velvet Cupcakes",
        hinh: ["../img/Red Velvet Cupcakes_1.jpg", "../img/Red Velvet Cupcakes_2.jpg"],
        mota: "Red velvet cupcakes are cupcakes with a cocoa-based batter colored with red food coloring. They're typically topped with cream cheese frosting and can be decorated with red velvet cake crumbs or sprinkles.",
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
        let tenDN = document.getElementById("username").value;
        let mk = document.getElementById("password").value;
        localStorage.setItem('username', tenDN);
        localStorage.setItem('password', mk);
        alert("Register successful. Username: " + tenDN + " Password: " + mk);
    }
}

function Dangnhap() {
    let tenDN = document.getElementById("usernameDN").value;
    let mk = document.getElementById("passwordDN").value;
    let storedUsername = localStorage.getItem('username');
    let storedPassword = localStorage.getItem('password');
    if (tenDN === storedUsername && mk === storedPassword) {
        alert("Login successful");
        $("#myModal").modal("hide");
    } else {
        alert("Invalid username or password");
    }
}

function checkContact() {
    let con = document.getElementById("content").value;
    if (con == "") {
        document.getElementById("ercontact").innerHTML = "Contents must not be empty";
        return false;
    }
    else {
        return true;
    }
}

function Lienhe() {
    if (checkHoTen() && checkSDT() && checkEmail() && checkContact()) {
        alert("Send successful");
    }
}
function update_price(id, n) {
    listbanh = JSON.parse(sessionStorage.getItem('listbanh'));
    banh = listbanh[id - 1]
    qtt = document.getElementById("quantity" + id)
    ttp = document.getElementById("total_price" + id)
    if (n > 0)
        qtt.innerText = parseInt(qtt.innerText) + 1
    else if (parseInt(qtt.innerText) > 1)
        qtt.innerText = parseInt(qtt.innerText) - 1
    ttp.innerText = "$" + parseInt(qtt.innerText) * banh.gia
    cart = {
        id: id,
        sl: parseInt(qtt.innerText)
    }
    sessionStorage.setItem(id, JSON.stringify(cart))
    update_total_bill()
}
function update_total_bill(){
    total_bill = 0
    for (i = 1; i <= 8; i++) {
        cart = JSON.parse(sessionStorage.getItem(i))
        if (cart !== null) {
            banh = listbanh[cart.id - 1]
            total_bill += parseInt(cart.sl) * parseInt(banh.gia)
        }
    }
    document.getElementById("total_bill").innerText = "total bill: $" + total_bill
}
function remove_product(id){
    table = document.getElementById("tblcart");
    rowToRemove = document.getElementById(id);
    table.deleteRow(rowToRemove.rowIndex);
    sessionStorage.setItem(id, null)
    update_total_bill()
}