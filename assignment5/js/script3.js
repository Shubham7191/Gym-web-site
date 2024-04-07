// let loginDisplay = document.getElementById("loginPopup");
// let registerDisplay = document.getElementById("Register-parent");
// window.onclick = function (e) {
//     if (e.target == loginDisplay) {
//        obj.closeLoginPopup();
//     } else if (e.target == registerDisplay) {
//         obj.closeRegisterPopup();
//     }
// }

// var validator = new Validator();


// function Validator() {

//     this.validate = validate;
    

//     function validate(event) {
//         event.preventDefault();

//         ///

//         const flNameReg = /^[a-zA-Z0-9]{3,12}$/i;
//         const ageReg = /^(1[89]|[2-9][0-9]|120)$/;
//         const dobReg = /([0-9]{2}[/][0-9]{2}[/][0-9]{4})/;


//         // Reset errors
//         document.getElementById("sname").innerText = "";
//         document.getElementById("slname").innerText = "";
//         document.getElementById("sage").innerText = "";
//         document.getElementById("sdob").innerText = "";
//         document.getElementById("sgender").innerText = "";
//         document.getElementById("scourses").innerText = "";
//         document.getElementById("scity").innerText = "";

//         let fname = document.getElementById("fName").value;
//         let Sname = document.getElementById("sname");

//         let lname = document.getElementById("lName").value;
//         let SLname = document.getElementById("slname");

//         let fage = document.getElementById("age").value;
//         let sAge = document.getElementById("sage");

//         let dob = document.getElementById("DOB").value;
//         let sdob = document.getElementById("sdob");

//         let genderMale = document.getElementById("male");
//         let genderFemale = document.getElementById("female");
//         let sGender = document.getElementById("sgender");

//         let Html = document.getElementById("html");
//         let Java = document.getElementById("java");
//         let python = document.getElementById("Python");
//         let scourses = document.getElementById("scourses");

//         const citySelect = document.getElementById('citySelect');
//         const Scity = document.getElementById('scity');

//         if (!flNameReg.test(fname)) {
//             Sname.innerHTML = "Enter a valid first name";
//             document.getElementById("sname").style.color = "red";
//         }

//      else if (!flNameReg.test(lname)) {
//             SLname.innerHTML = "Enter a valid last name";
//             document.getElementById("slname").style.color = "red";
//         }

//         else if(!ageReg.test(fage)) {
//             sAge.innerText = "Enter valid age ";
//             document.getElementById("sage").style.color = "red";
//         }

//         else if (!dobReg.test(dob)) {
//             sdob.innerHTML = "Enter valid DOB";
//             document.getElementById("sdob").style.color = "red";
//         }

//         else if(!genderMale.checked && !genderFemale.checked) {
//             sGender.innerText = "Select gender";
//             sGender.style.color = "red";
//          }// else {
//         //     sGender.innerText = "";
//         // }

//         else if (!Html.checked && !Java.checked && !python.checked) {
//             scourses.innerText = "Select at least one course";
//             scourses.style.color = "red";
//          } //else {
//         //     scourses.innerText = "";
//         // }

//         else if (citySelect.value === '') {
//             Scity.textContent = 'Please select a city';
//             Scity.style.color = "red";
//         } else {
//             Scity.innerText = "";
//             obj.closeRegisterPopup();
//            var formId= document.getElementById("fom");
//            formId.reset();
//                 }

//     };
// }


// var obj = new Popus();


//     function Popus() {

//             this.login = login;
//             this.closeLoginPopup = closeLoginPopup;
//             this.closeRegisterPopup= closeRegisterPopup;
//            this.register = register;



       

//         function login() {
//             //console.log("login");
//             loginDisplay.style.display = "block";
//         }


//         function closeLoginPopup() {
//             loginDisplay.style.display = "none";
//         }

//         function closeRegisterPopup() {
//             registerDisplay.style.display = "none";
//         }
//         function register() {
//             registerDisplay.style.display = "block";
//             loginDisplay.style.display = "none";
//         }

       
//         };

        
       






let formId ,fname,Sname,lname,SLname,fage,sAge,dob,sDob,address,genderMale,genderFemale,sGender,Html,Java,python,scourses;
let  mobileNo ,sMobileNo ,RegistrationPassword,sPassword ,sConfirm_Password ,confirm_Password ,  sPinCode ,pinCode;
let close_Table;
let  flNameReg , ageReg ,dobReg , mobileReg ,passwordReg ,pincodeReg;

let TableArray = [];

window.onload=function(){
		loginDisplay = document.getElementById("loginPopup");
	registerDisplay = document.getElementById("Register-parent");


     formId= document.getElementById("fom");
	fname = document.getElementById("fName");
    Sname = document.getElementById("sname");

	
        lname = document.getElementById("lName");
         SLname = document.getElementById("slname");

         fage = document.getElementById("fage");
        sAge = document.getElementById("sage");

        dob = document.getElementById("DOB");
         sDob = document.getElementById("sdob");

       genderMale = document.getElementById("male");
        genderFemale = document.getElementById("female");
         sGender = document.getElementById("sgender");

         address = document.getElementById('address');

       Html = document.getElementById("html");
         Java = document.getElementById("java");
         python = document.getElementById("Python");
        scourses = document.getElementById("scourses");

         citySelect = document.getElementById('citySelect');
         Scity = document.getElementById('scity');

		 mobileNo = document.getElementById('mobileNo');
         sMobileNo = document.getElementById('sMobile');
         
		 email = document.getElementById('email');
         sEmail = document.getElementById('sEmail');

         RegistrationPassword = document.getElementById('Registration_Password');
         sPassword = document.getElementById('sPassword');

         confirm_Password= document.getElementById('confirm-Password');
         sConfirm_Password = document.getElementById('sConfirm-Password');

         pinCode = document.getElementById('pinCode');
         sPinCode = document.getElementById('sPinCode');

         close_Table = document.getElementById('TableForPopUP');
         

		flNameReg = /^[a-zA-Z]{3,15}$/i;
        ageReg = /^(1[89]|[2-9][0-9]|120)$/;
       dobReg = /([0-9]{2}[/][0-9]{2}[/][0-9]{4})/;
	   mobileReg = /^(0|(91))?[6-9][0-9]{9}$/;
       emailReg = /^[a-zA-Z]{2}[a-zA-Z0-9_.]*@[a-zA-Z0-9]+([.][a-zA-Z]+)+/;
       passwordReg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,20}$/;
       pincodeReg=/^[1-9]{1}[0-9]{2}[0-9]{3}$/;

       TableArray = [];

      
	}

    window.onclick = function (e) {
        if (e.target == loginDisplay) {
           obj.closeLoginPopup();
        } else if (e.target == registerDisplay) {
            obj.closeRegisterPopup();
        }
        else if(e.target == close_Table )
        {
            document.getElementById('TableForPopUP').style.display="none";
    
    
        }
    }








var obj = new Popus();


    function Popus() {

            this.login = login;
            this.closeLoginPopup = closeLoginPopup;
            this.closeRegisterPopup= closeRegisterPopup;
           this.register = register;
            this.table_pop_up_block =table_pop_up_block;

			function login() {
            //console.log("login");
            loginDisplay.style.display = "block";
        }


        function closeLoginPopup() {
            loginDisplay.style.display = "none";
        }

        function closeRegisterPopup() {
            registerDisplay.style.display = "none";
        }
        function register() {
            registerDisplay.style.display = "block";
            loginDisplay.style.display = "none";
        }

        function table_pop_up_block(){
         
            TableForPopUP.style.display="block";
        
        };
        function close_Table()
        {
            TableForPopUP.style.display="none";
        };
    
       
   }; 



   ////////////////////////////     functions                              /////////////////////////////////////////////


   var validateParent=new ValidateParent();
function ValidateParent(){

    this.validateFirstName =validateFirstName;
    this.validateLastName=validateLastName;
    this.validateNumber = validateNumber;
    this.onlyNumberKey = onlyNumberKey;
    this.onlyCharacter = onlyCharacter;
    this.validateGmail = validateGmail;
    this.validatePassword = validatePassword;
    this.validateConfirmPassword = validateConfirmPassword;
    this.validateCourse = validateCourse;
    this.validatePinCode =validatePinCode;
    this.validateDateOfBirth=validateDateOfBirth;
    this.checkBirthdayDate = checkBirthdayDate;


   // Registration form validaation function is staarted 

   function validateFirstName() {
    if (fname.value === "") {
        Sname.innerHTML = "space is not allow";
        Sname.style.color = "red";

    }
         else if (!flNameReg.test(fname.value)) {
        Sname.innerHTML = "first name must be between 3 to 12";
        Sname.style.color = "red";
    }  else if (/^[0-9]/.test(fname)){
      Sname.innerHTML = "Dont enter numbers ";
        Sname.style.color = "red";
    
    }else {
        Sname.innerText = "";
    }
}

function validateLastName() {
   if (lname.value === "") {
        SLname.innerHTML = "space is not allow";
        SLname.style.color = "red";

    } else if (!flNameReg.test(lname.value)) {
        SLname.innerHTML = "last name must be between 3 to 12";
        SLname.style.color = "red";
    } else {
        SLname.innerText = "";
}
}


function validateNumber(){
 if (mobileNo.value === "")
    {
       sMobileNo.innerHTML = "space is not allow";
    sMobileNo.style.color = "red";
 }
else if(!mobileReg.test(mobileNo.value))
 {
    sMobileNo.innerHTML = "Please Enter mobile Number Correctly";
    sMobileNo.style.color = "red";
 }
 else 
     {
         sMobileNo.innerText = "";
     }
}

function onlyNumberKey(evt) {
    // Get the ASCII code of the pressed key from the event object
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode;

    // Check if the ASCII code corresponds to a character that is NOT a number
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) {
        // If the key is not a number, return false to prevent its input
        return false;
    } else {
        // If the key is a number, or a non-printable character (ASCII code 0 to 31),
        // return true to allow its input
        return true;
    }
}


function onlyCharacter(evt) {
    // Get the ASCII code of the pressed key from the event object
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode;

    // Check if the ASCII code corresponds to a character between A-Z or a-z
    if ((ASCIICode >= 65 && ASCIICode <= 90) || (ASCIICode >= 97 && ASCIICode <= 122)) {
        // If the key is a character between A-Z or a-z, return true to allow its input
        return true;
    } else {
        // If the key is not a character between A-Z or a-z, return false to prevent its input
        return false;
    }
}



function validateGmail(){
 if (email.value === "") {
     sEmail.innerHTML=" space is not allow ";
     sEmail.style.color="red";
     
 }
 else if(!emailReg.test(email.value)){
     sEmail.innerHTML="Enter Correct Email";
     sEmail.style.color="red";

 }
 else{

     sEmail.innerHTML="";

 }
}

function validatePassword(){


 if(RegistrationPassword.value === "")
 {
     sPassword.innerHTML=" space is not allow ";
     sPassword.style.color="red";
  
 }
 else if(!passwordReg.test(RegistrationPassword.value))
 {
     sPassword.innerHTML="Password should contain one uppercase one lowercase and one special character: 8-20";
     sPassword.style.color="red";
 }
 else{
     sPassword.innerHTML="";

 }
}



function validateConfirmPassword() {
 if (RegistrationPassword.value === "" || confirm_Password.value === "") {
     sConfirm_Password.innerHTML = "Both password fields should be filled";
     sConfirm_Password.style.color = "red";
 } else if (RegistrationPassword.value !== confirm_Password.value) {
     sConfirm_Password.innerHTML = "Passwords  miss  match";
     sConfirm_Password.style.color = "red";
 } else {
     sPassword.innerHTML = sConfirm_Password.innerHTML = "";
 }
}



function validateCourse(){


if (!Html.value.checked && !Java.value.checked && !python.value.checked) {
     scourses.innerText = "Select at least one course";
     scourses.style.color = "red";
}
}

function validatePinCode(){


 if(pinCode.value==="")
 {
     sPinCode.innerText = "Fill the Pincode";
     sPinCode.style.color = "red";
 }
 else if(!pincodeReg.test(pinCode.value)){
     sPinCode.innerText = "Enter Correct pincode";
     sPinCode.style.color = "red";

 }
 else{


     sPinCode.innerText = "";
   
 }
}

// function validateGender()
// {
//     if(genderMale.checked == false && genderFemale.checked == false)
//     {
//         sGender.innerHTML=" please select the gender "
//         sGender.style.color="red";

//     }
//     else{
//         sGender.innerHTML="";
//         console.log("hehe")

//     }

// }

// function validateDateOfBirth() {
//     // Assuming dob is a global variable
//     if (dob.value === "") {
//         sDob.innerHTML = "Enter Date of Birth";
//         sDob.style.color = "red";
//     } else if (!dobReg.test(dob.value)) {
//         sDob.innerHTML = "Please Enter a valid Date of Birth";
//         sDob.style.color = "red";
//     } else {
//         sDob.innerHTML = "";
//     }
// }



// function checkBirthdayDate(date) {
//     let splited_date = date.split("/");
//     console.log(splited_date);

//     let day = parseInt(splited_date[0]);
//     let month = parseInt(splited_date[1]);
//     let year = parseInt(splited_date[2]);

//     if (day > 31 || day < 1) {
//         sDob.innerHTML = "Please enter a valid day";
//         sDob.style.color = "red";
//     } else if (month > 12 || month < 1) {
//         sDob.innerHTML = "Please enter a valid month";
//         sDob.style.color = "red";
//     } else if (year > 2024) {
//         sDob.innerHTML = "Current birth year is not applicable";
//         sDob.style.color = "red";
//     } else {
//         sDob.innerHTML = "";
//     }
// }



function validateDateOfBirth() {
 if (dob.value === "") {
     sDob.innerHTML = "Enter Date of Birth";
     sDob.style.color = "red";
     return;
 } 
 
 if (!dobReg.test(dob.value)) {
     sDob.innerHTML = "Please Enter a valid Date of Birth";
     sDob.style.color = "red";
     return;
 } 
 
 sDob.innerHTML = ""; 

 // If the date  valid, then i am checking birthday date wise 
 checkBirthdayDate(dob.value);
}

function checkBirthdayDate(date) {
 let splited_date = date.split("/");
 console.log(splited_date);

 let day = parseInt(splited_date[0]);
 let month = parseInt(splited_date[1]);
 let year = parseInt(splited_date[2]);

 if (day > 31 || day < 1) {
     sDob.innerHTML = "Please enter a valid day";
     sDob.style.color = "red";
 } else if (month > 12 || month < 1) {
     sDob.innerHTML = "Please enter a valid month";
     sDob.style.color = "red";
 } else if (year > 2024) {
     sDob.innerHTML = "Current birth year is not applicable";
     sDob.style.color = "red";
 } else {
    let currentYear = new Date().getFullYear();
    let age = currentYear - year;

    fage.value = age;
    sDob.innerHTML = ""; 
 }
}

}






var validator = new Validator();


function Validator() {

    this.validate = validate;
   

    function validate(event) {
        event.preventDefault();

    
        // Reset errors
        document.getElementById("sname").innerText = "";
        document.getElementById("slname").innerText = "";
        document.getElementById("sage").innerText = "";
        document.getElementById("sdob").innerText = "";
        document.getElementById("sgender").innerText = "";
        document.getElementById("scourses").innerText = "";
        document.getElementById("scity").innerText = "";

 
       

        if (!flNameReg.test(fname.value)) {
            Sname.innerHTML = "Enter a valid first name";
            document.getElementById("sname").style.color = "red";
        }

     else if (!flNameReg.test(lname.value)) {
            SLname.innerHTML = "Enter a valid last name";
            document.getElementById("slname").style.color = "red";
        }

        else if(!ageReg.test(fage.value)) {
            sAge.innerText = "Enter valid age ";
            document.getElementById("sage").style.color = "red";
        }

        else if (!dobReg.test(dob.value)) {
            sdob.innerHTML = "Enter valid DOB";
            document.getElementById("sdob").style.color = "red";
        }

        else if(!genderMale.checked && !genderFemale.checked) {
            sGender.innerText = "Select gender";
            sGender.style.color = "red";
         }// else {
        //     sGender.innerText = "";
        // }

        else if (!Html.checked && !Java.checked && !python.checked) {
            scourses.innerText = "Select at least one course";
            scourses.style.color = "red";
         } //else {
        //     scourses.innerText = "";
        // }

        else if (citySelect.value === '') {
            Scity.textContent = 'Please select a city';
            Scity.style.color = "red";
        } else {
            Scity.innerText = "";

           obj.closeRegisterPopup();
           console.log("form is submitted");
          
           TableArray.push({
            fname: fname.value,
            lname: lname.value,
            dob: dob.value,
            fage: fage.value,
            mobileNo:mobileNo.value,
            email:email.value,
            address:address.value,
            RegistrationPassword:RegistrationPassword.value,
            confirm_Password:confirm_Password.value,
            pinCode:pinCode.value,
            citySelect:citySelect.value,
        });

          
          console.log(TableArray)
          displayTable(TableArray);
           
        formId.reset();
 
   
        
        }



    };
}







function displayTable(data) {
 
    let tableBody = document.getElementById("TableBody");
    tableBody.innerHTML = "";

    data.forEach(data => {
        let newRow = document.createElement('tr');

        Object.values(data) .forEach(cellData => {
            let cell = document.createElement('td');
            cell.textContent = cellData;
            newRow.appendChild(cell);
        });

        tableBody.appendChild(newRow);
    });
}



   /////////////////////////////////////////////////////////////////////////

   