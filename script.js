const a = document.getElementById("a");
const q = document.getElementById("q");
const n = document.getElementById("n");
const szamok = [];
const gomb = document.getElementById("gomb").addEventListener("click",function(){
    if(!a.value || !q.value || !n.value){
        alert(`Hibás bemeneteli (adat)ok!`)
    }else{
        for (let index = 0; index < parseFloat(n.value); index++) {
            szamok.push(`${(parseFloat(a.value)*Math.pow(parseFloat(q.value),index)).toFixed(2)}`);
        }
        alert(`🔢 ${szamok.join(', ')}`);
    }
});