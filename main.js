function textChange() {
    const bigbox=document.getElementById("bigbox")
   
    bigbox.innerHTML = 'Will the defense choose a counterargument?';
                 
    // textbox.addEventListener ('click', function(){
    //     let evidence = document.getElementById("wamajama");
    //     if (evidence.style.display ==="block");
    //          textbox.onclick = evidence.style.display = "none";
    // })
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

function displayInfo(infoType){
    let info = document.getElementById(infoType);
    const textbox=document.getElementById("textbox");
    document.getElementById("buttontab").style.display = "none";
    info.style.display = "block";
    // window.onclick = info.style.display = "none";
}
