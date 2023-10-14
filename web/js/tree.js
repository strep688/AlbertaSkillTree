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
    console.log("it brokey");
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