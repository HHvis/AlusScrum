let alus1 = document.getElementById("alus1_krepselis");
let alus2 = document.getElementById("alus2_krepselis");
let alus3 = document.getElementById("alus3_krepselis");
let krepselis = document.getElementById("krepselis");


let alus1_JSON = JSON.parse(localStorage.getItem("alus1")) || {"pavadinimas": "Alus1", "kaina": 2.99, "kiekis": 0};
let alus2_JSON = JSON.parse(localStorage.getItem("alus2")) || {"pavadinimas": "Alus2", "kaina": 1.99, "kiekis": 0};
let alus3_JSON = JSON.parse(localStorage.getItem("alus3")) || {"pavadinimas": "Alus3", "kaina": 2.59, "kiekis": 0};


var bendraKaina = 0;
let prekiuKiekis = 0;

function pranesimas(){
    Swal.fire({
         position: 'top-end',
         icon: 'success',
         title: 'Prekė įdėta į krepšelį',
         showConfirmButton: false,
         timer: 1000
       });
 }



if(alus1){
    $("#alus1_krepselis").live("click", function(){
        pranesimas();
        alus1_JSON.kiekis++;
        localStorage.setItem('alus1', JSON.stringify(alus1_JSON));
 });
}

if(alus2){
     $("#alus2_krepselis").live("click", function(){
        pranesimas();
        alus2_JSON.kiekis++;
        localStorage.setItem('alus2', JSON.stringify(alus2_JSON));
 });
}

if(alus3){
     $("#alus3_krepselis").live("click", function(){
        pranesimas();
        alus3_JSON.kiekis++;
        localStorage.setItem('alus3', JSON.stringify(alus3_JSON));
 });
}





if(krepselis){
if(localStorage.alus1 === undefined && localStorage.alus2 === undefined && localStorage.alus3 === undefined){
    document.getElementById("info").style.display = "none";
    krepselis.innerHTML = "<span>Krepšelis tuščias</span>";
} else {
    if(localStorage.alus1)
    {
        krepselis.innerHTML += "<div class='row p-2 d-flex justify-content-center align-items-center'>"+
                               "<div class='col-3'>" +
                               "<img src='images/beer1.png' width='25%'><span style='margin-left: 1rem;'>Alus1</span>"+
                               "</div>"+
                               "<div class='col-3'>"+
                               alus1_JSON.kiekis+
                               "</div>"+
                               "<div class='col-3'>"+
                               "$"+alus1_JSON.kaina+
                               "</div>"+
                               "<div class='col-3'>"+
                               "<i id='pirma_preke' class='fas fa-trash'></i>"+
                               "</div>"+
                               "</div>";
    }
    if(localStorage.alus2)
    {
        krepselis.innerHTML += "<div class='row p-2 d-flex justify-content-center align-items-center'>"+
                               "<div class='col-3'>" +
                               "<img src='images/beer2.png' width='25%'><span style='margin-left: 1rem;'>Alus2</span>"+
                               "</div>"+
                               "<div class='col-3'>"+
                               alus2_JSON.kiekis+
                               "</div>"+
                               "<div class='col-3'>"+
                               "$"+alus2_JSON.kaina+
                               "</div>"+
                               "<div class='col-3'>"+
                               "<i id='antra_preke' class='fas fa-trash'></i>"+
                               "</div>"+
                               "</div>";
    }
    if(localStorage.alus3)
    {
        krepselis.innerHTML += "<div class='row p-2 d-flex justify-content-center align-items-center'>"+
                               "<div class='col-3'>" +
                               "<img src='images/beer3.png' width='25%'><span style='margin-left: 1rem;'>Alus3</span>"+
                               "</div>"+
                               "<div class='col-3'>"+
                               alus3_JSON.kiekis+
                               "</div>"+
                               "<div class='col-3'>"+
                               "$"+alus3_JSON.kaina+
                               "</div>"+
                               "<div class='col-3'>"+
                               "<i id='trecia_preke' class='fas fa-trash'></i>"+
                               "</div>"+
                               "</div>";
    }

        bendraKaina = bendraKaina  + (alus1_JSON.kiekis * alus1_JSON.kaina) + 
        (alus2_JSON.kiekis * alus2_JSON.kaina) +
        (alus3_JSON.kiekis * alus3_JSON.kaina);
        
        krepselis.innerHTML +=  "<div class='row pt-4 pb-4'>"+
                                "<div class='col-6'>"+
                                "<a href='#' id='pasalintiPrekes' class='btn'>Pašalinti visas prekes iš krepšelio</a>"+"<a href='#' id='pirkti' class='btn' onclick='pristatymas()'>Pirkti</a>"+"</div>"+
                                "<div class='col-6'>"+
                                "<span id='kaina' style='font-size: 15px; font-weight:bold;'>Bendra kaina:  $" + bendraKaina.toFixed(2); + "</span>"+
                                "</div>"+
                                "</div>";

        let Alus1_pasalinti = document.getElementById("pirma_preke"); 
        let Alus2_pasalinti = document.getElementById("antra_preke"); 
        let Alus3_pasalinti = document.getElementById("trecia_preke");
        let pasalintiViska = document.getElementById("pasalintiPrekes");

        if(Alus1_pasalinti)
        {
            Alus1_pasalinti.addEventListener("click", function(){
                localStorage.removeItem("alus1");
                location.reload();
            });
        }
        if(Alus2_pasalinti)
        {
            Alus2_pasalinti.addEventListener("click", function(){
            localStorage.removeItem("alus2");
            location.reload();
            });
        }
        if(Alus3_pasalinti)
        {
            Alus3_pasalinti.addEventListener("click", function(){
            localStorage.removeItem("alus3");
            location.reload();
            });
        }
        if(pasalintiViska)
        {
            pasalintiViska.addEventListener("click", function(){
            localStorage.clear();
            location.reload();
            });
        }
  }
}

prekiuKiekis = alus1_JSON.kiekis + alus2_JSON.kiekis + alus3_JSON.kiekis;

if(prekiuKiekis > 0 ){
    document.querySelector("#krepsis").innerHTML += "<div class='dot'></div>";
    document.querySelector(".dot").innerHTML += prekiuKiekis;
}


        // pristatymas
        let pristatymoLangas=document.getElementById("pristatymoLangas");
        function pristatymas() {
            pristatymoLangas.style.display = "flex";   
        
        }
         
        function vieta(){
            document.getElementById("pristatymoVieta").style.display="block";
            let radios = document.getElementsByName("pasirinkimas");
        for(let i = 0, max = radios.length; i < max; i++) {
            radios[i].onclick = function() {
                let today = new Date();
                if(this.value=="kurjeriu"){
                    var pristatymoData=new Date(today.setDate(today.getDate() +4));
                    pristatymoData= pristatymoData.toISOString().split('T')[0];   
                    var message="Preliminari pristatymo data: ";
                    var bendraKaina= (alus1_JSON.kiekis * alus1_JSON.kaina) + 
                    (alus2_JSON.kiekis * alus2_JSON.kaina) +
                    (alus3_JSON.kiekis * alus3_JSON.kaina)+3.99;
                    document.getElementById("kaina").innerHTML="Bendra kaina:  $" + bendraKaina.toFixed(2);
                 }
                else if (this.value=="pastomatu"){
                    var pristatymoData=new Date(today.setDate(today.getDate() +2));   
                    pristatymoData= pristatymoData.toISOString().split('T')[0];
                    var message="Preliminari pristatymo data: ";
                    var bendraKaina= (alus1_JSON.kiekis * alus1_JSON.kaina) + 
                    (alus2_JSON.kiekis * alus2_JSON.kaina) +
                    (alus3_JSON.kiekis * alus3_JSON.kaina)+1.99;
                    document.getElementById("kaina").innerHTML="Bendra kaina:  $" + bendraKaina.toFixed(2);
                }
                else if (this.value=="parduotuveje"){
                    var message="Atsiimkite prekes šiandien adresu: Gedimino pr. 53";
                    var pristatymoData="";
                    var bendraKaina= (alus1_JSON.kiekis * alus1_JSON.kaina) + 
                    (alus2_JSON.kiekis * alus2_JSON.kaina) +
                    (alus3_JSON.kiekis * alus3_JSON.kaina);
                    document.getElementById("kaina").innerHTML="Bendra kaina:  $" + bendraKaina.toFixed(2);
                }
                document.getElementById("pristatymoSalygos").innerHTML= message + pristatymoData;
            }
        }
        
    }
