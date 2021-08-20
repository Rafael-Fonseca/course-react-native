function Pessoa(){
    this.idade = 0

    const self = this //Se descomentar o bind volta para o this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 100)
}

new Pessoa