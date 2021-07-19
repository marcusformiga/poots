
class Personagem {
    nome: string = ""
    ataque: number = 0
    defesa: number = 0
    energia: number = 0
    vida: number = 0
    constructor(nome: string, 
        ataque: number, 
        defesa: number, 
        energia: number, 
        vida: number){
        this.nome = nome
        this.ataque = ataque
        this.defesa = defesa
        this.energia = energia
        this.vida = vida
    }
}

class Monstro {
    constructor(public nome: string, 
        public ataque: number, 
        public defesa: number, 
        public energia: number, 
        public vida: number){
        this.nome = nome
        this.ataque = ataque
        this.defesa = defesa
        this.energia = energia
        this.vida = vida
    }
}
class Montaria {
    constructor(
        public nome: string,
        public ataque: number,
        public defesa: number,
        public energia: number,
        public vida: number
    ){}
}

let sansa: Personagem = new Personagem("Sansa Stark", 20, 15, 50, 100)
let inimigoDaFloresta: Monstro = new Monstro("Monstro da floresta", 30, 35, 70, 120)
let urso = new Montaria("Verão", 40, 50, 150, 150)

console.log("Personagem >>", sansa)
console.log("Monstro >>", inimigoDaFloresta)
console.log("Montaria >>", urso)