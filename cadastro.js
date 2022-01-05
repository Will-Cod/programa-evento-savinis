// Sistema de cadastro de eventos para empresa Savinis

console.log ("Palestrantes, Ana, Pedro, João, Leticia, Barbara, William, Carlos, Luiza.")


let participantes = 99
if(participantes >= 100) {
    console.log ("Evento Lotado")
} else { console.log ("Para realizar o cadastro informe sua idade:")}

let idade = 19
if(idade >=18){
    console.log("Em qual data você gostaria de participar do envento?")
} else {console.log("Evento apenas para maiores de 18 anos!")}

let dataUsuario = "09-01-2022"
let hoje = "05-01-2022"

if (dataUsuario > hoje){
    console.log("Data para o evento encontrada, cadastro permitido")
} else {console.log("Data não encontrada, digite outra data.")}