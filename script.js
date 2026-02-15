const heading = document.getElementById("Headerone");
const text = heading.textContent;
heading.textContent = "";

for(let char of text) {
    const span = document.createElement("span");

    if(char === " "){
        span.innerHTML = "&nbsp;";
    } else {
        span.textContent = char;
    }
    span.style.display = "inline-block";
    heading.appendChild(span);
}
 