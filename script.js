/* ==========================================
   ANSHITA ARTS
   script.js
========================================== */

/* -----------------------------
   Language Translation
------------------------------*/

const translations = {

    en: {

        heroTitle: "Handcrafted Draped Ganpati Idols",

        heroText:
            "Every Ganpati is decorated with devotion, creativity and elegance.",

        heroButton: "Explore Collection",

        whyChoose: "Why Choose Anshita Arts",

        collection: "🪔 Our Collection"

    },

    mr: {

        heroTitle: "हस्तकलेने सजवलेले गणपती",

        heroText:
            "प्रत्येक गणपती भक्ती, प्रेम आणि कलात्मकतेने सजवला जातो.",

        heroButton: "संग्रह पहा",

        whyChoose: "अनुषिता आर्ट्स का निवडावे?",

        collection: "🪔 आमचा संग्रह"

    }

};

/* -----------------------------
   Language Button
------------------------------*/

const languageButton = document.querySelector(".language-btn");

let currentLanguage = "en";

languageButton.addEventListener("click", () => {

    currentLanguage = currentLanguage === "en" ? "mr" : "en";

    languageButton.innerHTML =
        currentLanguage === "en"
            ? "🌐 EN | मराठी"
            : "🌐 मराठी | EN";

    applyLanguage(currentLanguage);

});

/* -----------------------------
   Apply Translation
------------------------------*/

function applyLanguage(lang){

    const t = translations[lang];

    document.querySelector(".hero h1").innerHTML =
        t.heroTitle.replace("Ganpati", "<br>Ganpati");

    document.querySelector(".hero p").innerText =
        t.heroText;

    document.querySelector(".primary-btn").innerText =
        t.heroButton;

    document.querySelector(".features h2").innerText =
        t.whyChoose;

    document.querySelector(".collection h2").innerText =
        t.collection;

}

/* -----------------------------
   Smooth Scroll
------------------------------*/

document.querySelector(".primary-btn").addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector("#collection").scrollIntoView({

        behavior:"smooth"

    });

});

/* -----------------------------
   Scroll Animation
------------------------------*/

const observer = new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:0.15
}

);

document.querySelectorAll(".feature-card,.product-card").forEach((card)=>{

    card.classList.add("hidden");

    observer.observe(card);

});

/* -----------------------------
   Console
------------------------------*/

console.log("🎨 Anshita Arts Website Loaded Successfully");