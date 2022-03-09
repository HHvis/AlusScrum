let alus_1_reitingas = JSON.parse(localStorage.getItem("alus1_reitingas")) || { "reitingas" : 0, "zvaigzdutes": "" };
let alus_2_reitingas = JSON.parse(localStorage.getItem("alus2_reitingas")) || { "reitingas" : 0, "zvaigzdutes": "" };
let alus_3_reitingas = JSON.parse(localStorage.getItem("alus3_reitingas")) || { "reitingas" : 0, "zvaigzdutes": "" };

function pranesimasReitingas(){
    Swal.fire({
        title: 'Reitingas',
        text: 'Reitingas pridėtas',
       confirmButtonText: 'Gerai',
   });
}

function pranesimasReitingas_2(){
    Swal.fire({
        title: 'Reitingas',
        text: 'Reitingas atnaujintas',
       confirmButtonText: 'Gerai',
   });
}

function reitingoPridejimas_1(){
    for(let i = 1; i <= 5; i++){
        document.querySelector(".rate_alus1 #star"+i).addEventListener("click", function(){
        if(alus_1_reitingas.reitingas == 0){
        alus_1_reitingas.reitingas = i;
        alus_1_reitingas.zvaigzdutes = "document.querySelector('.rate_alus1 #star"+i+"').checked = true";
        localStorage.setItem('alus1_reitingas', JSON.stringify(alus_1_reitingas));
        pranesimasReitingas();
        } else {
        alus_1_reitingas.reitingas = i;
        alus_1_reitingas.zvaigzdutes = "document.querySelector('.rate_alus1 #star"+i+"').checked = true";
        localStorage.setItem('alus1_reitingas', JSON.stringify(alus_1_reitingas));   
        pranesimasReitingas_2();
        }
    });   
    }
}
function reitingoPridejimas_2(){
    for(let i = 1; i <= 5; i++){
        document.querySelector(".rate_alus2 #star"+i+"_2").addEventListener("click", function(){
        if(alus_2_reitingas.reitingas == 0){
        alus_2_reitingas.reitingas = i;
        alus_2_reitingas.zvaigzdutes = "document.querySelector('.rate_alus2 #star"+i+"_2"+"').checked = true";
        localStorage.setItem('alus2_reitingas', JSON.stringify(alus_2_reitingas));
        pranesimasReitingas();
        } else {
        alus_2_reitingas.reitingas = i;
        alus_2_reitingas.zvaigzdutes = "document.querySelector('.rate_alus2 #star"+i+"_2"+"').checked = true";
        localStorage.setItem('alus2_reitingas', JSON.stringify(alus_2_reitingas));
        pranesimasReitingas_2();
        }
    });   
    }
}
function reitingoPridejimas_3(){
   for(let i = 1; i <= 5; i++){
        document.querySelector(".rate_alus3 #star"+i+"_3").addEventListener("click", function(){
        if(alus_3_reitingas.reitingas == 0){
        alus_3_reitingas.reitingas = i;
        alus_3_reitingas.zvaigzdutes = "document.querySelector('.rate_alus3 #star"+i+"_3"+"').checked = true";
        localStorage.setItem('alus3_reitingas', JSON.stringify(alus_3_reitingas));
        pranesimasReitingas();
        } else {
        alus_3_reitingas.reitingas = i;
        alus_3_reitingas.zvaigzdutes = "document.querySelector('.rate_alus3 #star"+i+"_3"+"').checked = true";
        localStorage.setItem('alus3_reitingas', JSON.stringify(alus_3_reitingas));  
        pranesimasReitingas_2();
        }
    });   
    }
}

reitingoPridejimas_1();
reitingoPridejimas_2();
reitingoPridejimas_3();

if(alus_1_reitingas.zvaigzdutes){
    eval(JSON.parse(localStorage.getItem("alus1_reitingas")).zvaigzdutes);
};
if(alus_2_reitingas.zvaigzdutes){
    eval(JSON.parse(localStorage.getItem("alus2_reitingas")).zvaigzdutes);
};
if(alus_3_reitingas.zvaigzdutes){
    eval(JSON.parse(localStorage.getItem("alus3_reitingas")).zvaigzdutes);
};