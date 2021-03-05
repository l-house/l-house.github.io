/* document.getElementById("aboutButton").addEventListener("click", changeContentTitle);

function changeContentTitle() {
  document.getElementById("contentTitle").innerHTML = "About Me";
}

var aboutIsClicked = false;
var experienceIsClicked = false;
var contactIsClicked = false;

function 

function toggleContent(){
    var contentTitle = document.getElementById('contentTitle');

    

    var currentTitle = contentTitle.innerHTML;
    console.log(currentTitle);
}
*/

var aboutContent = "Hi my name is Laylah House I am currently a senior at the University of Texas at Austin.";

function changeToHome(){
    document.getElementById("contentTitle").innerHTML = "Welcome to my website!";
    document.getElementById("contentText").innerHTML = "Click on one of the tabs to learn more about me!";
}

function changeToAbout(){
    document.getElementById("contentTitle").innerHTML = "About Me";
    document.getElementById("contentText").innerHTML = aboutContent;
}

function changeToExperience(){
    document.getElementById("contentTitle").innerHTML = "Experience";
    document.getElementById("contentText").innerHTML = "laylah + tommy";
}

function changeToContact(){
    document.getElementById("contentTitle").innerHTML = "Contact";
    document.getElementById("contentText").innerHTML = "laylah + brandon";
}