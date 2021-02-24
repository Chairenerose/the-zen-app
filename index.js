function happinessInstructions(event) {
    event.preventDefault();
    let titleHappiness = document.querySelector("h5")
    titleHappiness.innerHTML = "I have the <br /> power to shape my <br />ideal reality";
}

function sadnessInstructions(event) {
    event.preventDefault();
    let titleSadness = document.querySelector("h5")
    titleSadness.innerHTML = "I forgive myself <br /> and set myself free.";
}

function hopefulnessInstructions(event) {
    event.preventDefault();
    let titleHopefulness = document.querySelector("h5")
    titleHopefulness.innerHTML = "I am Divinely <br /> guided and protected <br />at all times.";
}

function anxietyInstructions(event) {
    event.preventDefault();
    let titleAnxiety = document.querySelector("h5")
    titleAnxiety.innerHTML = "It’s only a thought, <br />and a thought <br />can be changed.";

}

let button1 = document.querySelector("#Happiness");
let button2 = document.querySelector("#Hopefulness");
let button3 = document.querySelector("#Anxiety");
let button4 = document.querySelector("#Sadness");

button1.addEventListener("click", happinessInstructions)
button2.addEventListener("click", hopefulnessInstructions)
button3.addEventListener("click", anxietyInstructions)
button4.addEventListener("click", sadnessInstructions)


