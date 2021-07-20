import prompt from 'prompt-sync'
class Personagem {
   protected _nome: string = ""
   protected _ataque: number = 0
   protected _defesa: number = 0
   protected _energia: number = 0
   protected _vida: number = 0
    constructor(nome: string, 
        ataque: number, 
        defesa: number, 
        energia: number, 
        vida: number){
        this._nome = nome
        this._ataque = ataque
        this._defesa = defesa
        this._energia = energia
        this._vida = vida
    }
    
    public get nome() : string {
        return this._nome
    }
     
    public set nome(nome : string) {
        this._nome = nome
    }
    
    
   public showStatus(): void{
        console.log("Personagem >>", this._nome)
        console.log("Energia:", this._energia.toFixed(1))
        console.log("Vida:", this._vida.toFixed(1))
        console.log("Ataque:", this._ataque.toFixed(1))
        console.log("Defesa:", this._defesa.toFixed(1))
    }
   public treinarAtaque(): void {
        this.estaMorto()
        this._ataque += Math.random() * 3
        this._energia -= Math.random() * 5
        if(this._ataque > 100){
            this._ataque = 100
        }
    }
   public treinarDefesa(): void {
        this.estaMorto()
        this._defesa += Math.random() * 3
        this._energia -= Math.random() * 5
        if(this._defesa > 100){
            this._defesa = 100
        }
    }
   public descansar(): void {
        this._energia += Math.random() * 5
        this._vida += Math.random() * 5
        if(this._energia > 100){
            this._energia = 100
            console.log("Você ja descansou o suficiente")
        }
        if(this._vida > 100){
            this._vida = 100
        }
    }
   public estaMorto(): boolean{
        if(this._energia < 0){
            console.log("O Personagem morreu")
            return true
        }else{
            return false
        }
    }
}

class Monstro extends Personagem{
    private _agilidade : number
    constructor(nome: string, ataque: number, defesa: number, energia: number, vida: number, agilidade: number){
        super(nome, ataque, defesa, energia, vida)
        this._agilidade = Math.random() * 3
    }
}


let person: Personagem = new Personagem("John Snow", 20, 20, 20, 100)
let monstro: Monstro = new Monstro("Monstro das trevas", 25, 30, 120, 120, 10)
const teclado = prompt()
let option: number = 0
while(option !== 9 || person.estaMorto()){
    console.log(`==============Personagem ${person.nome} ================`)
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
