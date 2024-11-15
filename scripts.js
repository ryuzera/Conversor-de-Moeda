// Cotação de moedas do dia 15/11/2024
const USD = 5.79
const EUR = 6.12
const CAD = 4.13
const AUD = 3.75
const GBP = 7.35
const JPY = 0.037


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

    switch (currency.value) {
        case "USD":
            convertCurrency(amount.value, USD, "US$")
                break
        
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        
        case "CAD":
            convertCurrency(amount.value, CAD, "C$")
                break
        
        case "AUD":
            convertCurrency(amount.value, AUD, "AU$")
            break

        case "GPB":
            convertCurrency(amount.value, GPB, "£")
            break
            
        case "JPY":
            convertCurrency(amount.value, JPY, "¥")
            break
    }
}

// Função para converter a moeda
function convertCurrency(amount, price, symbol) {
    console.log(amount, price, symbol)
}