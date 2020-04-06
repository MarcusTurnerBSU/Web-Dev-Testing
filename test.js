const string = '2 Years Later';
let charCount = 0;

function think() {
    responseParagraph.textContent += string.charAt(charCount);
    
    charCount++;
    
    if (charCount < string.length) {
        setTimeout(think, 200);
    } else {
        setTimeout(checkGuess, 700);
    }
}

var i = 0;
var txt = 'Lorem ipsum typing effect!'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

function showBuyNow() { 
    document.getElementById("BuyNow").style.display = "inline"; 
}

//this calls the function above, 3000 milliseconds is 3 seconds, adjust here to make it a longer interval
setTimeout("showBuyNow()", 3000);

var myvar = href"code.jquery.com/jquery-1.11.0.min.js
         $(document).ready(function() {    $('#mybutton').delay(3000).fadeIn(2200);+
         });
    
function showButton() {
    location.href="//code.jquery.com/jquery-1.11.0.min.js">
    $(document).ready(function() {
        $('#mybutton').delay(3000).fadeIn(2200);
          });
    }    
}                                       