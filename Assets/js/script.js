var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    alert("Please generate a password between 8 and 128 characters.");

    var password = {
      pwLower: confirm("Do you want to add lowercase characters to password?"),
      pwUpper: confirm("Do you want to add uppercase characters to password?"),
      pwNum: confirm("Do you want to add numbers to passwrod?"),
      pwSpecial: confirm("Do you want to add special characters to password?"),
      length: pwLength(
        parseInt(
          prompt("Choose a character count between 8 and 128 characters")
        )
      ),
    };

    //logic below to make sure user selects password from appropriate range

    function pwLength(num) {
      if (num >= 8 && num <= 128) {
        return num;
      } else {
        alert("Number must be between 8 and 128! Please enter valid number.");
      }
    }

    if (
      !password.pwLower &&
      !password.pwUpper &&
      !password.pwNum &&
      !password.pwSpecial
    ) {
      alert(
        "One of the four items must be chosen: Lowercase, Uppercase, Number, or Special Character."
      );
    }

    //Log what choices user password is going to contain based on above prompts/confirms
    console.log(`"Lowercase: " ${password.pwLower}`);
    console.log(`Uppercase: ${password.pwUpper}`);
    console.log(`Number: ${password.pwNum}`);
    console.log(`Special: ${password.pwSpecial}`);
    console.log(`Your password is ${password.length} characters long.`);

    var lowerRan = "1,2,3,4,5,6,7,8,9,0,";
    var upperRan = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,";
    var numberRan = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,";
    var specialRan = "!,@,#,$,%,^,&,*,(,),<,>,?,{,},],[,:,;,";

    let charSet = "";

    if (password.pwLower === true) {
      charSet = charSet + lowerRan;
    }
    if (password.pwUpper === true) {
      charSet = charSet + upperRan;
    }
    if (password.pwNum === true) {
      charSet = charSet + numberRan;
    }
    if (password.pwSpecial === true) {
      charSet = charSet + specialRan;
    }

    //logs which characters are going into final character set for password generator
    console.log(charSet);

    //splits string of random chars into string that selects each piece of char array selected

    finalCharset = charSet.split(",").filter((item) => item);

    console.log(finalCharset);

    let generatedPassword = "";
    for (let i = 0; i < password.length; i++) {
      getPass = Math.floor(Math.random() * finalCharset.length);
      generatedPassword += finalCharset[getPass];
    }

    password = generatedPassword;

    return password;
  }
}

generateBtn.addEventListener("click", writePassword);

/* const randomFunc = {
  lower: getLower,
  upper: getUpper,
  number: getNum,
  special: getSpecial,
};

const truthyFunc = function () {
  pwLower ? true : false;
  pwUpper ? true : false;
  pwNum ? true : false;
  pwSpecial ? true : false;
};

var pwLength = function () {
  var userInput = prompt(
    "Please pick a number between 8 and 128 for password length."
  );
  console.log(userInput);
  if (userInput < 8 || userInput > 128) {
    pwLength();
  } else {
    return userInput;
  }
};

pwLength();

var pwLower = function () {
  var lowerPrompt = confirm("Do you want to add lower case characters?");
  console.log(lowerPrompt);
};

pwLower();

var pwUpper = function () {
  var upperPrompt = confirm("Do you want to add upper case characters?");
  console.log(upperPrompt);
};

pwUpper();

var pwNum = function () {
  var numberPrompt = confirm("Do you want to add numeric characters?");
  console.log(numberPrompt);
};

pwNum();

var pwSpecial = function () {
  var specialPrompt = confirm("Do you want to add special characters?");
  console.log(specialPrompt);
};

pwSpecial();

function getLower() {
  if (pwLower == true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  } else {
    return false;
  }
}
function getUpper() {
  if (pwUpper == true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  } else {
    return false;
  }
}
function getNum() {
  if (pwNum == true) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
  } else {
    return false;
  }
}
function getSpecial() {
  if (pwSpecial == true) {
    var symbols = "!@#$%^&*()[]{}=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
  } else {
    return false;
  }
} */

//Start pw generation, filter out checked & unchecked regarding upper/lower/number/special.
//Loop over length for each function that was checked
//Adds final password after doing all of this

/* function generatePassword() {
  pwLength();

  var pwLower = confirm("Do you want to add lower case characters?");

  var pwUpper = confirm("Do you want to add upper case characters?");

  var pwNum = confirm("Do you want to add numeric characters?");

  var pwSpecial = confirm("Do you want to add special characters?");

  if (!pwLower && !pwUpper && !pwNum && !pwSpecial) {
    alert(
      "You must choose one of the four options! Lower, Upper, Number, or Special."
    );
    var pwLower = confirm("Do you want to add lower case characters?");

    var pwUpper = confirm("Do you want to add upper case characters?");

    var pwNum = confirm("Do you want to add numeric characters?");

    var pwSpecial = confirm("Do you want to add special characters?");
  }
}

generatePassword(); */

/* generatePassword(); */

//Driver function. Check each condition, generate some sort of for loop,

// Assignment Code

// Write password to the #password input

//create generate password function

// Add event listener to generate button
/* generateBtn.addEventListener("click", writePassword); */

//use length of the array, in the same way math.random on the array of get lower, get num, get special. Use

/* var pwLength = prompt(
  "Please pick a number between 8 and 128 for password length."
); */

/* var random = {
  lower: getLower,
  upper: getUpper,
  number: getNum,
  special: getSpecial,
}; */

/* const random = function (generate) {
  const lower = getLower;
  const upper = getUpper;
  const number = getNum;
  const special = getSpecial;

  result (lower, upper, number, special)
}; */

/* var pwLower = confirm("Do you want to add lower case characters?");

var pwUpper = confirm("Do you want to add upper case characters?");

var pwNum = confirm("Do you want to add numeric characters?");

var pwSpecial = confirm("Do you want to add special characters?"); */

/* function getLower() {
  var pwLower = confirm("Do you want to add lower case characters?");
  if (pwLower == true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    console.log(getLower());
  } else {
    return false;
  }
}
function getUpper() {
  var pwUpper = confirm("Do you want to add upper case characters?");
  if (pwUpper == true) {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    console.log(getUpper());
  } else {
    return false;
  }
}
function getNum() {
  var pwNum = confirm("Do you want to add numeric characters?");
  if (pwNum == true) {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    console.log(getNum);
  } else {
    return false;
  }
}
function getSpecial() {
  var pwSpecial = confirm("Do you want to add special characters?");
  if (pwSpecial == true) {
    var symbols = "!@#$%^&*()[]{}=<>/,.";
    return symbols[Math.floor(Math.random() * symbols.length)];
    console.log(getSpecial());
  } else {
    return false;
  }
}

getLower("");
getUpper("");
getNum("");
getSpecial("");
 */

/* var pwLength = function () {
  var enter = parseInt(
    prompt("Please pick a number between 8 and 128 for password length.")
  );
  if (enter < 8 || enter > 128) {
    pwLength();
  } else {
    return parseInt(
      prompt("Please pick a number between 8 and 128 for password length.")
    );
  }
}; */
