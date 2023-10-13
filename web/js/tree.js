const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

function connectButtons(button1, button2) {
    const button1Rect = button1.getBoundingClientRect();
    const button2Rect = button2.getBoundingClientRect();

    const line = document.createElement("div");
    line.classList.add("line");
    line.style.left = `${button1Rect.left + button1Rect.width / 2}px`;
    line.style.top = `${button1Rect.top + button1Rect.height / 2}px`;
    line.style.width = `${button2Rect.left - button1Rect.left}px`;
    line.style.height = "1px";

    document.body.appendChild(line);
}

button1.addEventListener("click", () => connectButtons(button1, button2));
button2.addEventListener("click", () => connectButtons(button2, button1));