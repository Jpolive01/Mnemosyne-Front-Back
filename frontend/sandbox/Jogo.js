let nome = prompt("Nome do vendedor:") 
let nivel = prompt("Nivel do vendedor:")
let venda = prompt("quantidade de venda:")

let bonificacao = 0;
let mensagem = null;
if (nivel == 1) {
    if (venda >= 20000){
        bonificacao = venda*0.2

    }
 else if(venda >= 50000){
        bonificacao= venda * 0.35
}else if (venda >= 80000){
    mensagem = "O vendedor foi promovido ao novel II"
}else if (venda <= 5000){
    mensagem = `O vendedor${nivel} esta em risco de demissao`
       
} }

if (nivel == 2) {

    if (venda >= 90000){
        bonificacao = venda*0.25

    }
else if(venda >= 120000){
        bonificacao= venda * 0.4
}else if (venda >= 2000000){
    mensagem = `O vendedor ${nome}foi promovido ao novel III`
}else if (venda <= 50000){
    mensagem = `O vendedor${nome} nivel II esta em risco de virar nivel I`
       
} }
if (nivel == 3) {

    if (venda >= 210000){
        bonificacao = venda*0.30

    }
else if(venda >= 250000){
        bonificacao= venda * 0.45
}else if (venda >= 500000){
    mensagem = `O vendedor ${nome} virou dono da firma!`
}else if (venda <= 100000){
    mensagem = `O vendedor${nome} nivel III esta em risco de virar nivel II`     
} }

window.alert (mensagem);

if (bonificacao > 0) {
    window.alert(`O vendedor ${nome} e `)
}