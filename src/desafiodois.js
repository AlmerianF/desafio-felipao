let rankingPoints
let playerLevel = levelPoints(200,99)
console.log(`O herói tem o saldo de ${rankingPoints} e está no nível de ${playerLevel}`)

function levelPoints(victories, defeats){
    rankingPoints = victories - defeats
    if (rankingPoints < 10){
        rankingLevel = "Ferro"
    } else if (rankingPoints < 20) {
        rankingLevel = "Bronze"
    } else if (rankingPoints < 50){
        rankingLevel = "Prata"
    } else if (rankingPoints < 80){
        rankingLevel = "Ouro"
    } else if (rankingPoints < 90){
        rankingLevel = "Diamante"
    } else if (rankingPoints < 100){
        rankingLevel = "Lendário"
    } else if (rankingPoints >= 101){
        rankingLevel = "Imortal"
    }
    return rankingLevel
}