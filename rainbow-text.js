const spans = document.querySelectorAll('span.rainbow');

const delayChangeSeconds = 0.15;
let delaySeconds = 0;

spans.forEach(span => {
    const text = span.textContent;
    span.textContent = "";

    for (let char of text) {
        const rainbowChar = document.createElement("span");
        rainbowChar.style.animationDelay = `-${delaySeconds}s`

        delaySeconds += delayChangeSeconds;
        rainbowChar.textContent = char;
        rainbowChar.className = "rainbow-char";

        span.appendChild(rainbowChar);
    }
})