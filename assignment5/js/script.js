let loginDisplay = document.getElementById("loginPopup");
let registerDisplay = document.getElementById("Register-parent");

function login() {

 

    let LOgOutIntoLogIn = document.getElementById("navLog").innerHTML;
    if(LOgOutIntoLogIn == "LogOut")
    {

    document.getElementById("navLog").innerHTML="LOGIN";
    let displayRegister = document.getElementById("navRegister");
    displayRegister.style.display= "block";

    }
    else{
    //console.log("login");
    loginDisplay.style.display = "block";
    }
}

function closeLoginPopup() {
    loginDisplay.style.display = "none";
}

function closeRegisterPopup() {
    registerDisplay.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == loginDisplay) {
        closeLoginPopup();
    } else if (e.target == registerDisplay) {
        closeRegisterPopup();
    }
};

function register() {
    registerDisplay.style.display = "block";
    loginDisplay.style.display = "none";
}


function matchingUser(){

    let userName = "shubham";
    let userPass = "12345";


    let userLogin = document.getElementById("username").value;
   let passLogin = document.getElementById("password").value;
   

   if(userName == userLogin && userPass== passLogin)
   {
    alert("log in successfull");
    document.getElementById("navLog").innerHTML="LogOut";
    closeLoginPopup();
    let navRegister = document.getElementById("navRegister");
    navRegister.style.display= "none";
    
   }
else{

    alert(" check the login ");
}


}






var validator = new Validator();


function Validator(){

		this.validate = validate;


function validate(event) {
    event.preventDefault();


    
const flNameReg = /^[a-zA-Z0-9]{3,12}$/i;
const ageReg = /^(1[89]|[2-9][0-9]|120)$/;
const dobReg = /([0-9]{2}[/][0-9]{2}[/][0-9]{4})/;


    // Reset errors
    document.getElementById("sname").innerText = "";
    document.getElementById("slname").innerText = "";
    document.getElementById("sage").innerText = "";
    document.getElementById("sdob").innerText = "";
    document.getElementById("sgender").innerText = "";
    document.getElementById("scourses").innerText = "";
    document.getElementById("scity").innerText = "";

    let fname = document.getElementById("fName").value;
    let Sname = document.getElementById("sname");

    let lname = document.getElementById("lName").value;
    let SLname = document.getElementById("slname");

    let fage = document.getElementById("age").value;
    let sAge = document.getElementById("sage");

    let dob = document.getElementById("DOB").value;
    let sdob = document.getElementById("sdob");

    let genderMale = document.getElementById("male");
    let genderFemale = document.getElementById("female");
    let sGender = document.getElementById("sgender");

    let Html = document.getElementById("html");
    let Java = document.getElementById("java");
    let python = document.getElementById("Python");
    let scourses = document.getElementById("scourses");

    const citySelect = document.getElementById('citySelect');
    const Scity = document.getElementById('scity');

    if (!flNameReg.test(fname)) {
        Sname.innerHTML = "Enter a valid first name";
        document.getElementById("sname").style.color = "red";
    }

    if (!flNameReg.test(lname)) {
        SLname.innerHTML = "Enter a valid last name";
        document.getElementById("slname").style.color = "red";
    }

    if (!ageReg.test(fage)) {
        sAge.innerText = "Enter valid age ";
        document.getElementById("sage").style.color = "red";
    }

    if (!dobReg.test(dob)) {
        sdob.innerHTML = "Enter valid DOB";
        document.getElementById("sdob").style.color = "red";
    }

    if (!genderMale.checked && !genderFemale.checked) {
        sGender.innerText = "Select gender";
        sGender.style.color = "red";
    } else {
        sGender.innerText = "";
    }

    if (!Html.checked && !Java.checked && !python.checked) {
        scourses.innerText = "Select at least one course";
        scourses.style.color = "red";
    } else {
        scourses.innerText = "";
    }

    if (citySelect.value === '') {
        Scity.textContent = 'Please select a city';
        Scity.style.color = "red";
    } else {
        Scity.innerText = ""; 
    }





	}




};






