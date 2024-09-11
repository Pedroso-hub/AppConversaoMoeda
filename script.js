let botao = document.querySelector(".icone");
botao.addEventListener("click", swap);

function swap() {

    let flag1 = document.querySelector("#flag");
    let flag2 = document.querySelector("#flag2");
    let selectPais1 = document.querySelector("#selecione-pais");
    let selectPais2 = document.querySelector("#selecione-pais2");

    let tempFlagSrc = flag1.src;
    let tempPaisSelecionado = selectPais1.value;

    flag1.src = flag2.src;
    flag2.src = tempFlagSrc;

    selectPais1.value = selectPais2.value;
    selectPais2.value = tempPaisSelecionado;
}

