hideContent();

function hideContent() {
    var x = document.getElementById('content');

    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function toggleContent() {
    
    const form = document.getElementById("form");
    form.addEventListener("sumbmit", (e) => {
        e.preventDefault();
        console.log(Object.fromEntries(new FormData(e.target)));
        console.log(Object.fromEntries(new FormData(form)));

    });


    var data1 = [];
    

    console.log(data1);
    console.log("gaming");
    hideContent();
    hideForm();
}

function hideForm() {
    {   
        var x = document.getElementById('userInput');

        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}


var z = 3;

window.onload = myMain;

function myMain() {
  document.getElementById("content").onclick = buton;
}

function buton(e) {
  if (e.target.tagName == 'BUTTON') {
    toggleButton(e)
  }
}

function toggleButton(e){
    if (e.target.style.backgroundColor == "lightblue"){
        e.target.style.backgroundColor = "beige";
    }else{
        e.target.style.backgroundColor = "lightblue";
        toggleCourseSkills(e);
    }
}

function toggleCourseSkills(e){

var name = e.target.id;
console.log(name);
console.log(String(z));
var zed = toString(z);

switch(e){  
    case Math1:
        document.getElementById('Math10C').style.zIndex = zed;
    break;
    case Math2:
        document.getElementById("Math20-1").style.zIndex = zed;
    break;
    case Math3:
        document.getElementById("Math30-1").style.zIndex = zed;
    break;
    case Eng1:
        document.getElementById("English10-1").style.zIndex = zed;
    break;
    case Eng2:
        document.getElementById("English20-1").style.zIndex = zed;
    break;
    case Eng3:
        document.getElementById("English30-1").style.zIndex = zed;
    break;
    case Soc1:
        document.getElementById("Social10-1").style.zIndex = zed;
    break;
    case Soc2:
        document.getElementById("Social20-1").style.zIndex = zed;
    break;
    case Soc3:
        document.getElementById("Social30-1").style.zIndex = zed;
    break;
    case Chem1:
        document.getElementById("Chemistry10-1").style.zIndex = zed;
    break;
    case Chem2:
        document.getElementById("Chemistry20-1").style.zIndex = zed;
    break;
    case Chem3:
        document.getElementById("Chemistry30-1").style.zIndex = zed;
    break;
    case Phys1:
        document.getElementById("Physics10-1").style.zIndex = zed;
    break;
    case Phys2:
        document.getElementById("Physics20-1").style.zIndex = zed;
    break;
    case Phys3:
        document.getElementById("Physics30-1").style.zIndex = zed;
    break;
    case Bio1:
        document.getElementById("Biology10-1").style.zIndex = zed;
    break;
    case Bio2:
        document.getElementById("Biology20-1").style.zIndex = zed;
    break;
    case Bio3:
        document.getElementById("Biology30-1").style.zIndex = zed;
    break;
    default:
        
    break;
}
    z++;
}

