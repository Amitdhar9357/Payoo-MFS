// document.getElementById('id').addEventListener('click', fun)
// step-1 set even handler
// document.getElementById("btn-login")
//   .addEventListener("click", function (event) {
//     // set-2: prevent default behavior (prevent reloading browser)
//     event.preventDefault(); //<---vajal to beginners
//     console.log("login button clicked");

//     //step-3 get the phon number
//     const phonNumber = document.getElementById("phon-number").value;
//     const pinNumber = document.getElementById("pin-number").value;
//     // console.log(phonNumber, pinNumber);

//     //bad way to validate
//     if (phonNumber === "5" && pinNumber === "1234") {
//       console.log("you are logged in");
//       window.location.href = "/home.html";
//     } else {
//       alert("Wrong phon number or pin");
//     }
//   });




document.getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault(); //<---vajal to beginners
    console.log("login button clicked");
    const phonNumber = document.getElementById("phon-number").value;
    const pinNumber = document.getElementById("pin-number").value;
    // console.log(phonNumber, pinNumber);

    //bad way to validate
    if (phonNumber === "5" && pinNumber === "1234") {
      console.log("you are logged in");
      window.location.href = '/home.html';
    } else {
      alert("Wrong phon number or pin");
    }
  });
