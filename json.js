//JSON - JavaScript Object Notation
// Chave e valor com o objetivo de transferir dados

/* Introdução a JSON

O que é o JSON? Simplificando, ele serve para fazer agrupamento de dados de uma maneira mais organizada.
Uma maneira de transferir dados de um lugar para o outro de uma maneira mais organizada.
 */



let invoice = {
    name: "Helio",
    age: 27,
    products: {  
        0:["Mouse Logitech", 80],
        1:["Teclado mecânico", 140.99],
        2:["Monitor", 899.90],
        3:["Placa de video RTX 5090", 6000]
    },
}

generateInvoice(invoice)

    function generateInvoice(invoice){
        console.log(`O comprador é ${invoice.name}`)
        console.log(`A idade é ${invoice.age}`)
        console.log("--------------------------------")

        for(let index in invoice.products){
            let [productName, productPrice] = invoice.products[index]
            console.log(`- ${productName}: R$ ${productPrice}`)
        }
    }