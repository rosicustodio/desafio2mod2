let idade = 37
if (idade>18){
  console.log("você é maior de idade")
} else{
  console.log("você é menor de idade")
}


let humano = "true"
console.log  ("você é humano",humano)


let mês = 12
if ((mês ===01) || (mês ===12)){
    console.log("você faz aniversário em Janeiro ou Dezembro") 
} else{
    console.log("você não faz aniversário em Janeiro ou Dezembro")
}


let nome = "Rosimar"
if(nome.substring(0,1) === "R"){
    console.log("seu nome começa com R, show")
} else{
    console.log("seu nome não começa com R,sorry")
}

let lastName = "Custódio"
if ((lastName.length > 6) || (lastName.substring(0,1) === "E")){
    console.log("seu nome tem mais de 6 letras")
} 
    else{
    console.log("seu nome não tem mais de 6 letras")
}