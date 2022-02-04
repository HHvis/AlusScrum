let mygtukasTaip = document.getElementById("mygtukas_taip");
let mygtukasNe = document.getElementById("mygtukas_ne");
let tekstas = document.querySelector(".tekstas_1");
let tekstas_2 = document.querySelector(".tekstas_2");

    mygtukasTaip.addEventListener("click", function (){
        location.replace("./index.html");
    });
    
    mygtukasNe.addEventListener("click", function (){
        tekstas.innerText = "Norėdami peržiūrėti šios svetainės turinį, turite būti pilnametis (-ė).";
        tekstas_2.style.display = "none";
        mygtukasTaip.style.display = "none";
        mygtukasNe.style.display = "none";
    });


