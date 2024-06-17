const cliente = {
    nome: "camilly",
    idade: 17,
    email: "camilly@email.com",
    telefone: ["43988123456", "43988789000"],
    saldo: 200,
    efetuaePagamento: function (valorCompra){
        if(valorCompra > this.saldo){
            console.log("Saldo Insuficiente!")
        }else{
            this.saldo = this.saldo - valorCompra;
            console.log(`Pagamento Realiado! Novo Saldo: ${this.saldo}`)
        }
    }
};

cliente.endereços = [
{   rua: "R Joseph Cliber",
    numero: 878,
    apartamento: true,
    casa: true,
    complemento: "ap 354"
}
]

cliente.endereços.push({
    rua: "Harry Potter",
    numero: 934,
    apartamento: false,
    casa: true,
    complemento: "Hogwarts"
});

cliente.efetuaePagamento(50);