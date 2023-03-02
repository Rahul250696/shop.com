var HealthData = [
    {
      link: "https://img.shop.com/Image/210000/214100/214196/products/561800349.jpg?plain&size=500x500",
      title:"Istonix OPC-3",
      price: 499.99,
      cashBack: 2,
      percentCashBack: 4,
    },
    {
      link: "https://img.shop.com/Image/240000/243300/243396/products/603891601.jpg?plain&size=500x500",
      title: 'Ultimate Aloe',
      price: 421.96,
      cashBack: 1,
      percentCashBack: 4,
    },
    {
      link: "https://img.shop.com/Image/210000/214100/214199/products/561800368.jpg?plain&size=500x500",
      title: "HEALTH & HEART - Omega III",
      price: 415.34,
      cashBack: 1,
      percentCashBack: 2,
    },
    {
      link: "https://img.shop.com/Image/270000/275200/275293/products/1730212451.jpg?plain&size=500x500",
      title: "PROBIOTICS-10",
      price: 17.76,
      cashBack: 1,
      percentCashBack: 1,
    },
    {
      link: "https://img.shop.com/Image/270000/275200/275287/products/1730212091.jpg?plain&size=500x500",
      title: "MochaTonix Single Canister",
      price: 41.69,
      cashBack: 1,
      percentCashBack: 3,
    },
    {
      link: "https://img.shop.com/Image/240000/243300/243395/products/559078811.jpg?plain&size=500x500",
      title: "TLS Nutrition Shake",
      price: 4.57,
      cashBack: 1,
      percentCashBack: 1,
    },
    {
      link: "https://img.shop.com/Image/240000/243300/243396/products/604981561.jpg?plain&size=500x500",
      title: "Ultimate Aloe Powder",
      price: 18.52,
      cashBack: 1,
      percentCashBack: 2,
    },
    {
      link: "https://img.shop.com/Image/270000/275200/275292/products/1730212096.jpg?plain&size=500x500",
      title: "Curcumin Extreme",
      price: 37.44,
      cashBack: 1,
      percentCashBack: 1,
    },
    {
      link: "https://img.shop.com/Image/240000/243300/243386/products/623809148.jpg?plain&size=500x500",
      title: "Prime Cardio Vitality formula",
      price: 33.82,
      cashBack: 1,
      percentCashBack: 1,
    },
    {
      link: "https://img.shop.com/Image/240000/243300/243395/products/1717564503.jpg?plain&size=500x500",
      title:"TLS Trim Cafe",
      price: 5.56,
      cashBack: 1,
      percentCashBack: 3,
    },
    {
      link: "https://img.shop.com/Image/280000/282300/282381/products/1930777744.jpg?plain&size=500x500",
      title: "Pure Collagen+",
      price: 45.39,
      cashBack: 1,
      percentCashBack: 2,
    },
    {
        link: "https://img.shop.com/Image/250000/259800/259815/products/1302874130.jpg?plain&size=500x500",
        title: "OPC-3 Chews",
        price: 45.39,
        cashBack: 1,
        percentCashBack: 2,
      },
  ];

  localStorage.setItem("HealthData", JSON.stringify(HealthData));
var HealthData = JSON.parse(localStorage.getItem("HealthData")) || [];
var cartItems = JSON.parse(localStorage.getItem("CartArray")) || [];

populate(HealthData);

function sortPrice() {
    var selected = document.querySelector("#sortPrice").value;
    console.log(selected);
    if (selected == "high") {
        HealthData.sort(function (a, b) {
            return Number(b.price) - Number(a.price);
        });
    } else if (selected == "low") {
        HealthData.sort(function (a, b) {
            return Number(a.price) - Number(b.price);
        });
    }
    populate(HealthData);
}

function filteringHere(n) {
    var filteredArray = HealthData.filter(function (elem) {
        return elem.type == n;
    });
    populate(filteredArray);
}


function populate(HealthData) {
    document.querySelector("#container").innerHTML = "";

    HealthData.map(function (elem) {
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
    