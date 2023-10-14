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

    var x = document.getElementById("finished-courses").value;

    console.log(x);
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



window.onload = myMain;

function myMain() {
    document.getElementById("content").onclick = buton;
}

function buton(e) {
    if (e.target.tagName == 'BUTTON') {
        toggleButton(e)
    }
}

function toggleButton(e) {
    if (e.target.style.backgroundColor == "lightblue") {
        e.target.style.backgroundColor = "beige";
    } else {
        e.target.style.backgroundColor = "lightblue";
    }
}