const convertButton = document.querySelector(".convertButton")
const currencySelect1 = document.querySelector(".coin1")
const currencySelect = document.querySelector(".coin2")

currencySelect1.addEventListener("change", checkEqualCoins);
currencySelect.addEventListener("change", checkEqualCoins);

function checkEqualCoins() {
    const selectedCoin1 = currencySelect1.value;
    const selectedCoin2 = currencySelect.value;

    if (selectedCoin1 === "Real" && selectedCoin2 === "Real") {
        alert("Você não pode converter a mesma moeda!");
        return currencySelect.value = "Dolar"; // Reseta para Dolar se ambos forem Real
    }
    if (selectedCoin1 === selectedCoin2) {
        alert("Você não pode converter a mesma moeda!");
        return currencySelect1.value = "Real"; // Reseta para Real se as moedas forem iguais
    }
}

function convertCurrency() {
    const inputValue = document.querySelector(".Valor").value;
    const enteredValue = document.querySelector("#enteredValue"); //valor digitado
    const convertedResult = document.querySelector("#convertedResult"); //valor convertido

    const realDolar = 5.25, realEuro = 5.75, realLibra = 6.50, realBitcoin = 200000;
    const dolarEuro = 0.85, dolarLibra = 0.80, dolarBitcoin = 0.000025;
    const euroLibra = 0.94, euroBitcoin = 0.000030;
    const libraBitcoin = 0.000032;

    if (currencySelect1.value === "Real" && currencySelect.value === "Dolar") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue / realDolar);
    } else if (currencySelect1.value === "Real" && currencySelect.value === "Euro") {
        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue / realEuro);
    } else if (currencySelect1.value === "Real" && currencySelect.value === "Libra") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue / realLibra);
    } else if (currencySelect1.value === "Real" && currencySelect.value === "Bitcoin") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 8,
        }).format(inputValue / realBitcoin);
    }

    if (currencySelect1.value === "Dolar" && currencySelect.value === "Real") {
        convertedResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValue * realDolar)
    } else if (currencySelect1.value === "Dolar" && currencySelect.value === "Euro") {
        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue * dolarEuro);
    } else if (currencySelect1.value === "Dolar" && currencySelect.value === "Libra") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue * dolarLibra);
    } else if (currencySelect1.value === "Dolar" && currencySelect.value === "Bitcoin") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 8,
        }).format(inputValue * dolarBitcoin)
    }

    if (currencySelect1.value === "Euro" && currencySelect.value === "Real") {
        convertedResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValue * realEuro)
    } else if (currencySelect1.value === "Euro" && currencySelect.value === "Dolar") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue / dolarEuro);
    } else if (currencySelect1.value === "Euro" && currencySelect.value === "Libra") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue * euroLibra);
    } else if (currencySelect1.value === "Euro" && currencySelect.value === "Bitcoin") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 8,
        }).format(inputValue * euroBitcoin)
    }

    if (currencySelect1.value === "Libra" && currencySelect.value === "Real") {
        convertedResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValue * realLibra)
    } else if (currencySelect1.value === "Libra" && currencySelect.value === "Dolar") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue / dolarLibra);
    } else if (currencySelect1.value === "Libra" && currencySelect.value === "Euro") {
        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue / euroLibra);
    } else if (currencySelect1.value === "Libra" && currencySelect.value === "Bitcoin") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 8,
        }).format(inputValue * libraBitcoin)
    }

    if (currencySelect1.value === "Bitcoin" && currencySelect.value === "Real") {
        convertedResult.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputValue * realBitcoin)
    } else if (currencySelect1.value === "Bitcoin" && currencySelect.value === "Dolar") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputValue / dolarBitcoin);
    } else if (currencySelect1.value === "Bitcoin" && currencySelect.value === "Euro") {
        convertedResult.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputValue / euroBitcoin);
    } else if (currencySelect1.value === "Bitcoin" && currencySelect.value === "Libra") {
        convertedResult.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputValue / libraBitcoin)
    }

    if (currencySelect1.value === "Real") {
        enteredValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue);
    }

    if (currencySelect1.value === "Dolar") {
        enteredValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue);
    }

    if (currencySelect1.value === "Euro") {
        enteredValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue);
    }

    if (currencySelect1.value === "Libra") {
        enteredValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue);
    }

    if (currencySelect1.value === "Bitcoin") {
        enteredValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC",
            maximumFractionDigits: 8
        }).format(inputValue);
    }

}

function changeCurrency1() {
    const currencyName = document.getElementById("moeda1")
    const currencyImg = document.querySelector(".logoM1")

    if (currencySelect1.value === "Real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./assets/Real.png"
    }
    if (currencySelect1.value === "Dolar") {
        currencyName.innerHTML = "Dólar estadunidense"
        currencyImg.src = "./assets/Dolar.png"
    }

    if (currencySelect1.value === "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }

    if (currencySelect1.value === "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/Libra.png"
    }

    if (currencySelect1.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertCurrency();
}

function changeCurrency() {
    const currencyName = document.getElementById("moeda2")
    const currencyImg = document.querySelector(".logoM2")

    if (currencySelect.value === "Dolar") {
        currencyName.innerHTML = "Dólar estadunidense"
        currencyImg.src = "./assets/Dolar.png"
    }
    if (currencySelect.value === "Real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImg.src = "./assets/Real.png"
    }

    if (currencySelect.value === "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro.png"
    }

    if (currencySelect.value === "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImg.src = "./assets/Libra.png"
    }

    if (currencySelect.value === "Bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }

    convertCurrency();
}
currencySelect1.addEventListener("change", changeCurrency1)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertCurrency)