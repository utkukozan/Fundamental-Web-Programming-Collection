function validateForm() {
    // FILL VALIDATION
    if (document.registrationForm.name.value == "") {
        alert("Name must be filled out !");
        document.registrationForm.name.focus();
        return false;
    }
    if (document.registrationForm.surname.value == "") {
        alert("Surname must be filled out !");
        document.registrationForm.surname.focus();
        return false;
    }
    if (document.registrationForm.psw.value == "") {
        alert("Password must be filled out !");
        document.registrationForm.psw.focus();
        return false;
    }
    if (document.registrationForm.mail.value == "") {
        alert("E-mail must be filled out !");
        document.registrationForm.mail.focus();
        return false;
    }
    if (document.registrationForm.dateofbirth.value == "") {
        alert("Date of Birth must be filled out !");
        document.registrationForm.dateofbirth.focus();
        return false;
    }

    // NAME FIELD MUST BE TEXT
    var letters = /^[A-Za-z]+$/;
    if (!document.registrationForm.name.value.match(letters)) {
        alert("Name field should be text !")
        document.registrationForm.name.focus();
        return false;
    }

    // SURNAME FIELD MUST BE TEXT
    if (!document.registrationForm.surname.value.match(letters)) {
        alert("Surname field should be text !")
        document.registrationForm.surname.focus();
        return false;
    }

    // E-MAIL VALIDATION
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(registrationForm.mail.value))) {
        alert("You have entered an invalid email address!")
        return (false)
    }

    // PASSWORD VALIDATION
    var passw = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,15}$/
    if (!(document.registrationForm.psw.value.match(passw))) {
        alert('Password must be between 6 to 15 characters which should contain at least one uppercase letter, one numeric digit, and one special character.')
        return false;
    }
    
    // DATE VALIDATON
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    // Match the date format through regular expression
    if (document.registrationForm.dateofbirth.value.match(dateformat)) {
        document.registrationForm.dateofbirth.focus();
        var splitt = document.registrationForm.dateofbirth.value.split('-');
        lsplitt = splitt.length;
        
        // Extract the string into month, date and year
        if (lsplitt > 1) {
            var pdate = document.registrationForm.dateofbirth.value.split('-');
        }
        var dd = parseInt(pdate[0]);
        var mm = parseInt(pdate[1]);
        var yy = parseInt(pdate[2]);

        var ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (mm == 1 || mm > 2) {
            if (dd > ListofDays[mm - 1]) {
                alert('Invalid date format!');
                return false;
            }
        }
        // Leap year for February
        if (mm == 2) {
            var lyear = false;
            if ((!(yy % 4) && yy % 100) || !(yy % 400)) {
                lyear = true;
            }
            if ((lyear == false) && (dd >= 29)) {
                alert('Invalid date format!');
                return false;
            }
            if ((lyear == true) && (dd > 29)) {
                alert('Invalid date format!');
                return false;
            }
        }
    }
    else {
        alert("Invalid date format!");
        document.registrationForm.dateofbirth.focus();
        return false;
    }
    registrationForm.submit();
}
