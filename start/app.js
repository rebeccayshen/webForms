

var checkRequirements = function (firstPassword, secondPassword, issuesList) {
    if (firstPassword.length > 100) {
        issuesList.push("Password must be shorter than 100 characters.");
    }
    if (firstPassword.length < 16) {
        issuesList.push("Password must be longer than 16 characters.");
    }
    if (!firstPassword.match(/[\!\@\#\$\%\^\&\*]/g)) {
        issuesList.push("Password must include one of these symbols: !@#$%^&* .");

    }
    if (!(firstPassword.match(/\d/g) )) {
        issuesList.push("Password must include at least one number");
    }
    if (!(firstPassword.match(/[a-z]/g))) {
        issuesList.push("Password must include at least one lower case letter.");
    }

    if(!(firstPassword.match(/[A-Z]/g))){
        issuesList.push("Password must include at least one upper case letter.");
    }
/*
    var illegalChars = firstPassword.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g);

    if (illegalChars) {
        illegalChars.forEach(function (illegalChar) {

            issuesList.push("Passwords cannot include illegal Character:" + illegalChar);
        });

    }
*/
    if (firstPassword.match(/[^A-z0-9\!\@\#\$\%\^\&\*]/g)) {
        issuesList.push("Password contains an illegal character.");
    }

};



/*
You might find you want to use RegEx. As this quiz is about setCustomValidity
and not RegEx, here are some RegEx patterns you might find useful:

match one of the required symbols: /[\!\@\#\$\%\^\&\*]/g
match a number: /[0-9]/g or /\d/g
match a lowercase letter: /[a-z]/g
match an uppercase letter: /[A-Z]/g
match a character that isn't allowed in this password: /[^A-z0-9\!\@\#\$\%\^\&\*]/g
 */

/*
Grabbing a few inputs to help you get started...
 */

var firstPasswordInput = document.querySelector('#first');
var secondPasswordInput = document.querySelector('#second');
var submit = document.querySelector('#submit');

/*

You'll probably find this function useful...
 */
submit.onclick = function () {
    var firstPassword = firstPasswordInput.value;
    var secondPassword = secondPasswordInput.value;
    var issuesList = [];
    var matchError = "";
   // console.info(issuesList);

    if (firstPassword === secondPassword && firstPassword.length >0) {

        checkRequirements(firstPassword, secondPassword, issuesList);
    } else {
        matchError = "Passwords do not match.";
    }

    firstPasswordInput.setCustomValidity(matchError);
    if (issuesList.length === 0) {
        secondPasswordInput.setCustomValidity("");
    } else {
        secondPasswordInput.setCustomValidity(issuesList.join("\n"));
    }

    if( (matchError==="") && (issuesList.length ===0) ) {
        console.info("password set successfully.");
        alert ("password set successfully.");
    };


    console.info({
        "issuesList": issuesList.length,
        "matchError": matchError
    });

//console(issuesList.size);

//    firstPasswordInput.setCustomValidity(issuesList.join("\n"));

//    secondPasswordInput.setCustomValidity(issuesList.join("\n"));

};