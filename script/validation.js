function formValidation()
{
    var uname = document.registration.username;
    var fname = document.registration.fullname;
    var phno = document.registration.phonenumber;
    var uemail = document.registration.emailId;
    var usubmit = document.registration.submit;

    
     if(allLetter(fname))
        {
            if(userid_validation(uname,5,12))
            {
                if(allnumeric(phno))
                {                     
                    if(ValidateEmail(uemail))
                    {   
                        if(checkSuccess(usubmit)){
                        }
                    }
                }
            }
        }
return false;
}

function userid_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        alert("User Id should not be empty / length be between "+mx+" to "+my);
        uid.focus();
        return false;
    }
return true;
}

function allLetter(fname)
{ 
    if(fname.value.length != 0){
        var letters = /^[A-Za-z]+$/;
        if(fname.value.match(letters))
        {
            return true;
        }
        else
        {
            alert('Name field must have alphabet characters only');
            fname.focus();
            return false;
        }
    }
    else
    {
        alert('Name field should not be empty');
        fname.focus();
        return false; 
    }
}

function allnumeric(phno)
{ 
    if(phno.value.length != 0 && phno.value.length == 10 ){
        var numbers = /^[0-9]+$/;
        if(phno.value.match(numbers))
        {
            return true;
        }
        else
        {
            alert('phone number must be numeric characters only');
            phno.focus();
            return false;
        }
    }
    else
    {
        alert('phone number should not be empty/ more or less than 10 digits');
        phno.focus();
        return false;
    }
}

function ValidateEmail(uemail)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat))
    {
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

function checkSuccess(usubmit){
    alert("success!");
}





