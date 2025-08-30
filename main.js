function textChange() {
    const bigbox=document.getElementById("bigbox")
    bigbox.innerHTML = 'Will the defense choose a counterargument?';
    let contents = document.getElementsByClassName("wamajam")
    for (i=0;i<contents.length;i++)
        contents[i].style.display = "none";
                 
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
    let info, dialogue_options;
    info = document.getElementById(infoType);
    dialogue_options = document.getElementById("buttontab")
    dialogue_options.style.display = "none"
    info.style.display = "block";
}

function likes_dislikes(){
    document.getElementById("likes/dislikes").innerHTML = "blanhahajhjhha"
}
