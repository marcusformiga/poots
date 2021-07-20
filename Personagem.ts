import prompt from 'prompt-sync'
class Personagem {
   private nome: string = ""
   private ataque: number = 0
   private defesa: number = 0
   private energia: number = 0
   private vida: number = 0
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
    treinarAtaque(): void {
        this.estaMorto()
        this.ataque += Math.random() * 3
        this.energia -= Math.random() * 5
        if(this.ataque > 100){
            this.ataque = 100
        }
    }
    treinarDefesa(): void {
        this.estaMorto()
        this.defesa += Math.random() * 3
        this.energia -= Math.random() * 5
        if(this.defesa > 100){
            this.defesa = 100
        }
    }
    descansar(): void {
        this.energia += Math.random() * 5
        this.vida += Math.random() * 5
        if(this.energia > 100){
            this.energia = 100
            console.log("Você ja descansou o suficiente")
        }
        if(this.vida > 100){
            this.vida = 100
        }
    }
    estaMorto(): boolean{
        if(this.energia < 0){
            console.log("O Personagem morreu")
            return true
        }else{
            return false
        }
    }
}

class Monstro {
    constructor(private nome: string, 
        private ataque: number, 
        private defesa: number, 
        private energia: number, 
        private vida: number){
        this.nome = nome
        this.ataque = ataque
        this.defesa = defesa
        this.energia = energia
        this.vida = vida
    }
}
class Montaria {
    constructor(
        private nome: string,
        private ataque: number,
        private defesa: number,
        private energia: number,
        private vida: number
    ){}
}

let person: Personagem = new Personagem("John Snow", 20, 20, 20, 100)
const teclado = prompt()
let option: number = 0
while(option !== 9 || person.estaMorto()){
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
        person.treinarAtaque()
        person.showStatus()
        break
        case 2:
        person.treinarDefesa()
        person.showStatus()
        break
        case 3:
        person.descansar()
        person.showStatus()
        break
        case 4:
        person.descansar()
        person.showStatus()
        break
        case 7:
        person.showStatus()
        break
      
        
    }
}
