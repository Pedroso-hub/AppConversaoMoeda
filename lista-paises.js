let country_list = {
    "USD": [
        {name: "Estados Unidos", code: "US"},
        {name: "Equador", code: "EC"},
        {name: "El Salvador", code: "SV"},
        {name: "Panamá", code: "PA"}
    ],
    "EUR": [
        {name: "Alemanha", code: "DE"},
        {name: "França", code: "FR"},
        {name: "Espanha", code: "ES"},
        {name: "Itália", code: "IT"},
        {name: "Portugal", code: "PT"},
        {name: "Irlanda", code: "IE"},
        {name: "Áustria", code: "AT"},
        {name: "Grécia", code: "GR"},
        {name: "Bélgica", code: "BE"},
        {name: "Finlândia", code: "FI"}
    ],
    "JPY": [
        {name: "Japão", code: "JP"}
    ],
    "GBP": [
        {name: "Reino Unido", code: "GB"},
        {name: "Ilhas Malvinas", code: "FK"},
        {name: "Gibraltar", code: "GI"}
    ],
    "AUD": [
        {name: "Austrália", code: "AU"},
        {name: "Kiribati", code: "KI"},
        {name: "Nauru", code: "NR"}
    ],
    "CAD": [
        {name: "Canadá", code: "CA"}
    ],
    "CHF": [
        {name: "Suíça", code: "CH"},
        {name: "Liechtenstein", code: "LI"}
    ],
    "CNY": [
        {name: "China", code: "CN"}
    ],
    "NZD": [
        {name: "Nova Zelândia", code: "NZ"},
        {name: "Ilhas Cook", code: "CK"},
        {name: "Niue", code: "NU"}
    ],
    "HKD": [
        {name: "Hong Kong", code: "HK"}
    ]
};

let taxa = document.querySelector(".taxa-conversao");
taxa.innerText = "oi";

function populateCountryList(defaultCurrency, selectId, flagId) {
    //vai ser o selecione pais
    const selectElement = document.getElementById(selectId);
    const flagElement = document.getElementById(flagId);

    selectElement.innerHTML = '';

    for (let currencyCode in country_list) {
        const countries = country_list[currencyCode];

        countries.forEach(country => {
            const option = document.createElement("option");
            option.value = currencyCode;
            option.textContent = `(${currencyCode}) ${country.name}`;
            selectElement.appendChild(option);
        });
    }

    const defaultCountry = country_list[defaultCurrency][0]; 
    selectElement.value = defaultCurrency;
    
    flagElement.src = `https://flagsapi.com/${defaultCountry.code}/flat/64.png`;
    let moedaDe = "EUR";
    let moedaPara = "USD";

    selectElement.addEventListener('change', async function() {
        //essa var eh o valor do selectElement
        const selectedCurrency = this.value;
        if (selectElement.id == "selecione-pais"){
            console.log("moeda de: "+selectedCurrency);
            moedaDe = await selectedCurrency;

        }
        //
        else if (selectElement.id == "selecione-pais2"){
            console.log("moeda para: "+selectedCurrency);
            moedaPara = await selectedCurrency;
        }

        const selectedCountry = country_list[selectedCurrency][0]; 

        flagElement.src = `https://flagsapi.com/${selectedCountry.code}/flat/64.png`;

        //if (moedaDe!== undefined && moedaPara !== undefined){
        //    result = await taxaConversao(moedaDe, moedaPara);
        //    taxa.innerText = await result;    
       // }
        
        //problema: sempre que essa funçao eh chamada, as variaveis sao resetadas, e ela eh chamada sempre
        //que alguem muda um pais De, ou Para.
        taxaConversao(moedaDe, moedaPara).then((result)=> taxa.innerText= result);


        
    });



}


populateCountryList("EUR", "selecione-pais", "flag");
populateCountryList("USD", "selecione-pais2", "flag2");


async function taxaConversao (moedaDe, moedaPara) {
    let moedasRequest = moedaDe+"-"+moedaPara;
    let url = "https://economia.awesomeapi.com.br/last/"+moedasRequest;
    console.log(url);
    let moedasJson = moedaDe+moedaPara;
    const request = new Request(url) ;
    let taxaConversao;
     const result = await fetch(request)
     dados = await result.json()
     taxaConversao = dados[moedasJson].ask;
     taxaConversao

  return taxaConversao;
}





