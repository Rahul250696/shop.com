var electronicsData = [
    {
        link: "https://img.shop.com/Image/280000/283700/283767/products/1925077796.jpg?plain&size=400x400",
        title:
            "APPLE - Air Tag ",
        price: 499.99,
        type: "AirTag",
        cashBack: 2,
        percentCashBack: 4,
    },
    {
        link: "https://img.shop.com/Image/280000/281900/281909/products/1938809331.jpg?plain&size=400x400",
        title: 'SAMSUNG GALAXY A53',
        price: 421.96,
        type: "Mobile",
        cashBack: 1,
        percentCashBack: 4,
    },
    {
        link: "https://img.shop.com/Image/280000/281900/281909/products/1869578781.jpg?plain&size=400x400",
        title: "TCL 32-Inch TV",
        price: 415.34,
        type: "TV",
        cashBack: 1,
        percentCashBack: 2,
    },
    {
        link: "https://img.shop.com/Image/290000/291500/291508/products/1948919669.jpg?plain&size=400x400",
        title: "APPLE Airpods 2nd Gen ",
        price: 17.76,
        type: "Airpods",
        cashBack: 1,
        percentCashBack: 1,
    },
    {
        link: "https://img.shop.com/Image/290000/291500/291508/products/1948834881.jpg?plain&size=400x400",
        title: "APPLE Airpods 3rd Gen ",
        price: 41.69,
        type: "Airpods",
        cashBack: 1,
        percentCashBack: 3,
    },
    {
        link: "https://img.shop.com/Image/280000/281900/281909/products/1840586962.jpg?plain&size=400x400",
        title: "TCS 40-Inch TV",
        price: 4.57,
        type: "TV",
        cashBack: 1,
        percentCashBack: 1,
    },
    {
        link: "https://img.shop.com/Image/280000/281900/281909/products/1840586180.jpg?plain&size=400x400",
        title: "SAMSUNG 32-Inch Smart TV",
        price: 18.52,
        type: "TV",
        cashBack: 1,
        percentCashBack: 2,
    },
    {
        link: "https://img.shop.com/Image/280000/281900/281909/products/1893118674.jpg?plain&size=400x400",
        title: "Google Nest Hub ",
        price: 37.44,
        type: "Airpods",
        cashBack: 1,
        percentCashBack: 1,
    },
    {
        link: "https://img.shop.com/Image/290000/291500/291508/products/1943937698.jpg?plain&size=400x400",
        title: "APPLE iPhone XR 64GB",
        price: 33.82,
        type: "Mobile",
        cashBack: 1,
        percentCashBack: 1,
    },
    {
        link: "https://img.shop.com/Image/250000/251800/251872/products/1911421512.jpg?plain&size=400x400",
        title: "Oculus VR Headset",
        price: 5.56,
        type: "Headphone",
        cashBack: 1,
        percentCashBack: 3,
    },
    {
        link: "https://img.shop.com/Image/280000/281900/281909/products/1948159033.jpg?plain&size=400x400",
        title: "Google Nest Mini ",
        price: 45.39,
        type: "Headphone",
        cashBack: 1,
        percentCashBack: 2,
    },
    {
        link: "https://img.shop.com/Image/290000/290400/290460/products/1918679196.jpg?plain&size=1000x1000",
        title: "Razer Blade 15.6 Gaming Laptop Intel i7 ",
        price: 377.44,
        type: "Laptop",
        cashBack: 1,
        percentCashBack: 1,
    },
    {
        link: "https://img.shop.com/Image/280000/281900/281909/products/1846558333.jpg?plain&size=1000x1000",
        title: "Asus C434TADSM4T Chromebook Flip 14 inch m3",
        price: 633.82,
        type: "Laptop",
        cashBack: 1,
        percentCashBack: 1,
    },
    {
        link: "https://img.shop.com/Image/290000/291500/291508/products/1943937877.jpg?plain&size=1500x1500",
        title: "MICROSOFT SURFACE PRO 7 12.3 2736x1824",
        price: 555.56,
        type: "Laptop",
        cashBack: 1,
        percentCashBack: 3,
    },
    {
        link: "https://img.shop.com/Image/280000/281900/281909/products/1949910070.jpg?plain&size=1000x1000",
        title: "Apple MLY33 MacBook Air 13.6 inch Laptop - M2 chip - 8GB Memory - 256GB SSD (Latest Model) - Midnight",
        price: 545.39,
        type: "Laptop",
        cashBack: 1,
        percentCashBack: 2,
    },
    {
        link: "https://img.shop.com/Image/290000/291500/291508/products/1949244636.jpg?plain&size=880x880",
        title: "SAMSUNG GALAXY A13 A136U 5G 64GB SPRINT T-MOBILE - BLACK - Open Box",
        price: 545.39,
        type: "Mobile",
        cashBack: 1,
        percentCashBack: 2,
    },

    
];
localStorage.setItem("electronicsData", JSON.stringify(electronicsData));
var electronicsData = JSON.parse(localStorage.getItem("electronicsData")) || [];
var cartItems = JSON.parse(localStorage.getItem("CartArray")) || [];

populate(electronicsData);

function sortPrice() {
    var selected = document.querySelector("#sortPrice").value;
    console.log(selected);
    if (selected == "high") {
        electronicsData.sort(function (a, b) {
            return Number(b.price) - Number(a.price);
        });
    } else if (selected == "low") {
        electronicsData.sort(function (a, b) {
            return Number(a.price) - Number(b.price);
        });
    }
    populate(electronicsData);
}

function filteringHere(n) {
    var filteredArray = electronicsData.filter(function (elem) {
        return elem.type == n;
    });
    populate(filteredArray);
}


function populate(electronicsData) {
    document.querySelector("#container").innerHTML = "";

    electronicsData.map(function (elem) {
      var card = document.createElement("div");
      card.setAttribute("class", "card");

      var image = document.createElement("img");
      image.setAttribute("src", elem.link);

      var productInfo = document.createElement("div");
      productInfo.setAttribute("class", "productInfo");

      var name = document.createElement("p");
      name.setAttribute("class", "name");
      name.textContent = elem.title;

      var sellerDiv = document.createElement("div");
      sellerDiv.setAttribute("class", "soldByDiv");

      var cartIcon = document.createElement("img");
      cartIcon.setAttribute(
        "src",
        "https://img.shop.com/Image/resources/images/onecart-icon.svg"
      );
      cartIcon.setAttribute("class", "iconDollar");

      var soldBy = document.createElement("p");
      soldBy.setAttribute("class", "soldBy");
      soldBy.textContent = "Sold by Forza Sports";

      sellerDiv.append(cartIcon, soldBy);

      var p1 = document.createElement("p");
      p1.setAttribute("class", "price");
      p1.textContent = "$" + Number(elem.price);

      var cb = document.createElement("div");
      cb.setAttribute("class", "cashBack-div");

      var cashBack = document.createElement("p");
      cashBack.setAttribute("class", "cashBack");
      cashBack.textContent = "+ " + "$" + Number(elem.cashBack);

      var slash = document.createElement("p");
      slash.setAttribute("class", "slash");
      slash.textContent = "/";

      var iconDollar = document.createElement("img");
      iconDollar.setAttribute(
        "src",
        "https://img.shop.com/Image/resources/images/cashback-icon.svg"
      );
      iconDollar.setAttribute("class", "iconDollar");

      var p3 = document.createElement("p");
      p3.setAttribute("class", "p3");
      p3.textContent = "Cashback";

      var freeShipping = document.createElement("p");
      freeShipping.setAttribute("class", "freeShipping");
      freeShipping.textContent = "Free shipping";

      var percentCashBack = document.createElement("p");
      percentCashBack.setAttribute("class", "percentCashBack");
      percentCashBack.textContent = Number(elem.percentCashBack) + "%";

      cb.append(cashBack, slash, percentCashBack, iconDollar, p3);

      var buttons = document.createElement("div");
      buttons.setAttribute("class", "buttons");

      var btnBO = document.createElement("button");
      btnBO.setAttribute("class", "btn2");
      btnBO.textContent = "See Details";
      btnBO.addEventListener("click", function () { });

      var btn = document.createElement("button");
      btn.setAttribute("class", "btn");
      btn.textContent = "Add To Cart";
      btn.addEventListener("click", function () {
        addToCart(elem);
      });

      productInfo.append(name, sellerDiv, p1, cb, freeShipping);
      buttons.append(btnBO, btn);
      card.append(image, productInfo, buttons);
      document.querySelector("#container").append(card);

      function addToCart(elem) {
        cartItems.push(elem);
        localStorage.setItem("CartArray", JSON.stringify(cartItems));
        alert(elem.title + " added to Cart");
      }
    });
  }

