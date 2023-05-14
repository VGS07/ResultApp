console.log('dom is loaded....')

function validateForm(){
    var name = document.myForm.fname.value;
    var email = document.myForm.email.value;
    var website = document.myForm.website.value;
    var image = document.myForm.image.value;
    var gender = document.myForm.gender.value;
    var checkval = document.getElementsByName('skill');
    var result ="";
  
      for (var i = 0; i < checkval.length; i++) {
                  if (checkval[i].checked) {
                      result += checkval[i].value +" ";
                  }
              }

    var nameErr = emailErr = websiteErr = imageErr = genderErr = true;

    if(name == "") {
        alert("Name cannot left blank");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            alert("Please enter a valid Name");
        } else {
            
            nameErr = false;
        }
    }
    if(image=="")
    {
        alert("Please provide image link");
    }else{
        genderErr = false;
    }


    if(email == "") {
        alert("Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            alert("Please enter a valid email address");
        } else{
            emailErr = false;
        }
    }

    if(gender == "") {
        alert("Please select your gender");
    } else {
        genderErr = false;
    }

    if((nameErr || emailErr || mobileErr || genderErr) == true) {
        return false;
     }

}