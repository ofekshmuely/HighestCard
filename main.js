
//2 random values
let RandomA = Math.floor(Math.random() * 6) + 1; //setting up random for image1
let RandomB = Math.floor(Math.random() * 6) + 1; //setting up random for image2



/* ----- A and B images changing value ----- */
let randomimageA = "images/dice" + RandomA + ".png";
let randomimageB = "images/dice" + RandomB + ".png";



document.querySelectorAll("img")[0].setAttribute("src", randomimageA);
document.querySelectorAll("img")[1].setAttribute("src", randomimageB); 



//terms of h1 headline
    if (RandomA > RandomB) {
        document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
        document.querySelector("p1wins").innerHTML = "Test!";

      }
      else if (RandomB > RandomA) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
      }
      else {
        document.querySelector("h1").innerHTML = "Its a Tie!";
      }
      
    //play again
      function refreshPage(){
        window.location.reload();
    } 


