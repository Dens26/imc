// Tableau de valeur pour le résultat
const BMIData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
];

// Variables
const form = document.querySelector(`.imc-form`);
let result = document.querySelector(".result");
let message = document.querySelector(".message");

// Ecouteur sur le bouton de formulaire
form.addEventListener("submit", evt => {
    evt.preventDefault();
    const height = document.querySelector(`#height-input`).value;
    const weight = document.querySelector(`#weight-input`).value;
    
    if (height <= 0 || weight <= 0) {
        result.textContent = "Oups !!";
        message.textContent = "Veuillez remplir les champs correctement"
    }
    else {
        result.textContent = (weight / Math.pow(height / 100, 2)).toFixed(1);
        const data = BMIData.find(data => {
            if (result.textContent > data.range[0] && result.textContent < data.range[1]) return data;
            else if (typeof data.range == "number" && result.textContent > data.range) return data;
        })
        result.style.color = data.color;
        message.textContent = `Résultat : ${data.name}`;
    }
}, false)