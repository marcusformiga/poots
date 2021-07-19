import prompt from 'prompt-sync'
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
    showStatus(): void{
        console.log("Personagem >>", this.nome)
        console.log("Energia:", this.energia.toFixed(1))
        console.log("Vida:", this.vida.toFixed(1))
        console.log("Ataque:", this.ataque.toFixed(1))
        console.log("Defesa:", this.defesa.toFixed(1))
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

let john: Personagem = new Personagem("John Snow", 20, 20, 20, 100)
const teclado = prompt()
let option: number = 0
while(option !== 9){
    console.log("==============Personagem ================")
    console.log("1 - Treinar ataque")
    console.log("2 - Treinar defesa")
    console.log("3 - Descansar")
    console.log("4 - Recuperar vida")
    console.log("5 - Procurar missão")
    console.log("6 - Treinar montaria")
    console.log("7 - Imprimir atributos")
    console.log("9 - Sair")
    option = +teclado("Escolha uma opção")
    switch(option){
        case 1: 
        john.ataque += Math.random()* 3
        john.energia -= Math.random() * 5
        john.defesa += Math.random() * 1
        john.showStatus()
        break
        case 2:
        john.defesa += Math.random() * 3
        john.energia -= Math.random() * 5
        john.ataque -= Math.random() * 1
        john.showStatus()
        break
        case 3:
        john.energia += Math.random() * 5
        john.showStatus()
        break
        case 4:
        john.vida += Math.random() * 5
        john.showStatus()
        break
        case 7:
        john.showStatus()
        break
      
        
    }
}
