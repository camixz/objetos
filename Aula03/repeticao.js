const cliente = {
    nome: "camilly",
    idade: 17,
    email: "camilly@email.com",
    telefone: ["43988123456", "43988789000"]

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
})

    for (let chave in cliente){
        console.log(chave)
    }
    