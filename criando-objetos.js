class formaDeBolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }

    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com recheio de ${this.saborRecheio}`)
    }

    assar(){
        console.log("Bolo assando de " + this.saborRecheio)
    }
}

let boloFesta = new formaDeBolo("massa de chocolate", "nutella")
let boloCasamento = new formaDeBolo("3 andares com decoração tema de casamento", "Baunilha")

boloFesta.escrever()
boloCasamento.escrever()
boloCasamento.assar()