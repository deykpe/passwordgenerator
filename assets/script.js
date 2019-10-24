var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "]", "[", ";", ":", "<", ">", ",", ".", "?"];
var lowercaseCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbersCharacters = ['1','2','3','4','5','6','7','8','9','0']; 
var validlength = false
var validspecialcharacters = false
function functionpassword() {
    var passwordlength=parseInt(prompt("How many characters would you like your pasword contain ?"))
    if (passwordlength < 8 || passwordlength > 125)  {

                
    
        alert("Invalid password - not number / <8 / >128")
        return;
    }
    var yesSpecial = confirm("Click Ok to have special characters");
    var yesLower = confirm("Click Ok to have Lowercase characters");
    var yesUpper = confirm("Click Ok to have Uppercase characters");
    var yesNumber = confirm("Click Ok to have Number characters");
    var i=1
    var passwordgen = "";
    while( i <= passwordlength) 
    {
        if(yesSpecial && i <= passwordlength) {
            var rndnum = Math.floor(Math.random()*specialCharacters.length);
            passwordgen = passwordgen + specialCharacters[rndnum];
            i++;
            console.log(passwordgen)
        }
        if(yesLower && i <= passwordlength) 
        {
            var rndnum = Math.floor(Math.random()*lowercaseCharacters.length);
            passwordgen = passwordgen + lowercaseCharacters[rndnum];
            i++;
        }
        if(yesUpper && i <= passwordlength) 
        {
            var rndnum = Math.floor(Math.random()*uppercaseCharacters.length);
            passwordgen = passwordgen + uppercaseCharacters[rndnum];
            i++;
        }
        if(yesNumber && i <= passwordlength) 
        {
            var rndnum = Math.floor(Math.random()*numbersCharacters.length);
            passwordgen = passwordgen + numbersCharacters[rndnum];
            i++;
        }
        
    }
    document.getElementById("output").innerHTML=passwordgen
       }

       function functioncopy(){
        var textElement = document.getElementById("output");
        textElement.focus()
        textElement.select();
        document.execCommand("copy"); 
        alert("password copied to clip board")
       }