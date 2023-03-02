
  document.querySelector("form").addEventListener("submit", fnLogin);
  function fnLogin(event) {
    event.preventDefault();

    var cardNumber = document.querySelector(".cardNumber").value;
    var cvv = document.querySelector(".CVV").value;
    var expDate = document.querySelector(".expDate").value;

    if (cardNumber == 123 && cvv == 123 && expDate == "12/25") {
      alert(" OTP sent");
    } else {
      alert("Details incorrect!");
    }
  }
  
  document.getElementById("sub").addEventListener("click", submitOTP);
  function submitOTP(event){
      event.preventDefault();
      var otp = document.getElementById("otp").value;
      if(otp == 1234){
          alert("Order Placed Successfully.")
          window.location.href="index.html";
      } else{
          alert("Wrong OTP!")
      }
  }

// var ord=JSON.parse(localStorage.getItem("order"))||[];
// Document.getElementById("sub").addEventListener("click", function () {
//     addOrder(elem);
//   });
//   function addOrder(elem) {
//     ord.push(elem);
//     localStorage.setItem("order", JSON.stringify(ord));
//     alert(elem.title + " added to Cart");
//   }