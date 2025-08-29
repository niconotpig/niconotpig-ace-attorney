function textChange() {

    document.getElementById("bigbox").innerHTML = 'Will the defense choose a counterargument?';
    document.getElementById("aboutme").style.display = "none";
}
function closeButton(){

}
function showButton() {
    document.getElementById("buttontab").style.display = "block";
}  

// function displayInfo(evt, infoType){
//     const info = document.getElementById(infoType).innerHTML;
//     const textbox = document.getElementById("bigbox");
//     document.getElementById("buttontab").style.display = "none";
//     textbox.innerHTML = info;
// }

function displayInfo(evt, infoType){
    
    document.getElementById(infoType).style.display = "block";
    document.getElementById("buttontab").style.display = "none";
}
