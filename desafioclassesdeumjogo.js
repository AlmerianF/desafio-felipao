class hero{
	constructor(name, age, type){
    	this.name = name
        this.age = age
        this.type = type
		}
	toAttack(){
    	let attack
        
        switch (this.type){
        	case "mago":
            	attack = "magia"
            	break
            case "guerreiro":
            	attack = "espada"
                break             
            case "monge":
            	attack = "artes marciais"
                break
            case "ninja":
            attack = "shuriken"
            default:
            	attack = "não possui um ataque definido"
                break
        }
    	console.log(`O ${this.type} ${this.name} atacou usando ${attack}`)
    }
}

const mago = new hero("Felipe", 13, "mago")

mago.toAttack()

const guerreiro = new hero("Almerian", 15, "guerreiro")

guerreiro.toAttack()

const monge = new hero("Altair", 18, "monge")

monge.toAttack()

const ninja = new hero("Gaara", 18, "ninja")

ninja.toAttack()