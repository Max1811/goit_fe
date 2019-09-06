'use strict'

const data = quizData;
const container = document.getElementById("fields-container");

for (let i = 0; i < data.length; i++) {
    const question = data[i];
    const fieldset = document.createElement("fieldset");
    container.appendChild(fieldset);

    const title = document.createElement("h4");
    title.textContent = question.question;
    fieldset.appendChild(title);

    for (let i = 0; i < question.choices.length; i++) {
        const element = question.choices[i];
        const label = document.createElement("label");
        label.style.padding = "10px";
        fieldset.appendChild(label);

        const variant = document.createElement("input");
        variant.type = "radio";
        variant.name = question.question;
        variant.value = i;
        label.appendChild(variant);

        const span = document.createElement("span");
        span.textContent = element;
        
        label.appendChild(span);
    }
        
}

function CheckedRadiobuttons() {
    const radiobuttons = document.querySelectorAll("label input");
    radiobuttons.forEach(element => {
        
    })
}

const button = document.querySelector(".button");
const answers = [];
button.addEventListener('click', () => {
    const radios = document.querySelectorAll('input[type=radio]:checked');
    let results = 0;
    for(let i = 0; i < radios.length; i++) {
        const r = radios[i];
        quizData.forEach(element => {
            if(element.question === r.name){
                let integer = parseInt(r.value, 10);
                if( element.answer === integer){
                    results += 1;
                }
            }
        });
        
    }
    console.log(results/quizData.length * 100 + "% of right answers ");
});

