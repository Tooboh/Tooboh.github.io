console.log("click")
const svar_div = document.getElementById("svar_div");
const antal_vinster = document.getElementById("input_antal_vinster");

const vinster = [
"Leif GW Persson",
"Lennart Blad",
"Jimmie Åkesson",
"Enkelbiljett till Somalien",
"Markrättigheterna till Siberia",
"Tjuga stockar Ettan Lös",
"Atombomb",
"Volvo 740",
"Aids",
"En isbjörn",
"Tsarbomba",
"Dragonlore",
"Bli diktator över Sverige",
"En Miata"
]

function slumpaClick(){
    let vinst = `<h3>Dina vinster</h3>`;
    let antalv = antal_vinster.value 
    let int_antalv = parseInt(antalv)

    for (i=0; i<int_antalv; i++){
        let slumptal = Math.floor (Math.random() * 13);
        let t_vinst = vinster[slumptal];
        vinst += `<p>${t_vinst}</p>`;
    }

svar_div.innerHTML = vinst;
}



