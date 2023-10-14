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