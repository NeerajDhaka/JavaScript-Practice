function buttonClicked(){
    document.querySelector("h1").innerText="this text updated."
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function BackgroundTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('theme','dark');
        var popup=document.getElementById("myPopup");
        popup.innerText="Dark Theme enabled."
        popup.classList.toggle("show");
        console.log("Neeraj")
        await sleep(2000);
        console.log("Dhaka")
        popup.classList.toggle("hide");

    }
    else{
        document.documentElement.setAttribute('theme','light');
        var popup=document.getElementById("myPopup");
        popup.innerText="Light Theme enabled."
        console.log("Neeraj")
        popup.classList.toggle("show");
        console.log("Neeraj")
        await sleep(2000);
        console.log("Dhaka")
        popup.classList.toggle("hide");

    
    }
}

const toggleSwitch=document.querySelector('.switch input[type="checkbox"]');
toggleSwitch.addEventListener('change',BackgroundTheme,false);


