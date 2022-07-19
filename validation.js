const form = document.querySelector("#form1");
const numInput = document.getElementById("tel-input");
const mtn = document.getElementById("mtn-img");
const glo = document.getElementById("glo-img");
const airtel = document.getElementById("airtel-img");
const nineMobile = document.getElementById("nine-mobile-img");

// //this block is how i previously used it with preventdefault()
// //add event listener and validate form
// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   document.body.style.backgroundColor = "red";
//   CheckIfEmpty();
// });
// //this is the end of the block
//add event listener to input
numInput.addEventListener("input", (e) => {
  // console.log(numInput.value);
  setTimeout(checkServiceProvider, 2000);

  setTimeout(CheckIfEmpty, 7000);
});

// check if input is empty
function CheckIfEmpty() {
  const telNum = numInput.value.trim();
  if (telNum.toString().length == 0) {
    document.querySelector("small").innerHTML = "this field cannot be empty";
  } else {
    document.querySelector("small").innerHTML = " ";
    return true;
  }
}

// Validate service provider
function checkServiceProvider() {
  // Regular Expressions
  const mtnRegex =
    /^([\+]234|0)7025|([\+]234|0)7026|([\+]234|0)703|([\+]234|0)704|([\+]234|0)706|([\+]234|0)803|([\+]234|0)806|([\+]234|0)810|([\+]234|0)813|([\+]234|0)814|([\+]234|0)816|([\+]234|0)906|([\+]234|0)903|([\+]234|0)913|([\+]234|0)916/gi;
  const gloRegex =
    /^([\+]234|0)805|([\+]234|0)807|([\+]234|0)811|([\+]234|0)705|([\+]234|0)815|([\+]234|0)905|([\+]234|0)915/gi;
  const airtelRegex =
    /^([\+]234|0)802|([\+]234|0)808|([\+]234|0)812|([\+]234|0)701|([\+]234|0)708|([\+]234|0)902|([\+]234|0)907|([\+]234|0)901|([\+]234|0)904|([\+]234|0)912/gi;
  const ninieMobileRegex =
    /^([\+]234|0)809|([\+]234|0)817|([\+]234|0)818|([\+]234|0)908|([\+]234|0)909/gi;
  //end of block

  const telNum = numInput.value.toString().trim();

  // Mtn validation
  if (mtnRegex.test(telNum) == true) {
    mtn.style.visibility = "visible";
  } else {
    mtn.style.visibility = "hidden";
  }

  //Glo validation
  if (gloRegex.test(telNum) == true) {
    glo.style.visibility = "visible";
  } else {
    glo.style.visibility = " hidden";
  }

  //Airtel validation
  if (airtelRegex.test(telNum) == true) {
    airtel.style.visibility = "visible";
  } else {
    airtel.style.visibility = " hidden";
  }
  //9Mobile validation
  if (ninieMobileRegex.test(telNum) == true) {
    nineMobile.style.visibility = "visible";
  } else {
    nineMobile.style.visibility = " hidden";
  }
}

// validate form value
function validate() {
  let telNum = numInput.value.trim();
  CheckIfEmpty();
  checkServiceProvider();
}
