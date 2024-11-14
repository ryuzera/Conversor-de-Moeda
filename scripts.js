// Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const curency = document.getElementById("currency")

// Manipulando o input amount para receber somente numeros
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g

    // Não deixa digitar letra. Se digitar letra, vai substituir por nada
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Capturando o evento de submit no forumlário
form.onsubmit = (event) => {
    event.preventDefault()
    console.log(currency.value) // Pegando o value = USD, BRL, AUD
}