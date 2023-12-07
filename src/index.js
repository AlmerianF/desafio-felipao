// Nome do heroi.
let nomeDoHeroi = "Almerian"

for (let contador = 9998; contador <10001; contador++) {
    console.log(contador)
    console.log("Aumentando os XP")
}

// Quantidade de XP que ele tem.
let xpDoHeroi = 10000  

// Nível com base na XP
let nivelDoHeroi
if (xpDoHeroi <= 1000) {
    nivelDoHeroi = "Ferro";
} else if (xpDoHeroi <= 2000) {
    nivelDoHeroi = "Bronze";
} else if (xpDoHeroi <= 5000) {
    nivelDoHeroi = "Prata";
} else if (xpDoHeroi <= 7000) {
    nivelDoHeroi = "Ouro";
} else if (xpDoHeroi <= 8000) {
    nivelDoHeroi = "Platina";
} else if (xpDoHeroi <= 9000) {
    nivelDoHeroi = "Ascendente";
} else if (xpDoHeroi <= 10000) {
    nivelDoHeroi = "Imortal";
} else {
    nivelDoHeroi = "Radiante";
}

// Aqui fica a mensagem com o nome do heroi e XP
console.log("Nome do heroi: " + nomeDoHeroi + " | Nível do heroi: " + nivelDoHeroi)