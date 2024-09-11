document.addEventListener('DOMContentLoaded', () => {
    const paises = {
        "BR": "Brasil",
        "US": "Estados Unidos",
        "CA": "Canadá",
        "JP": "Japão",
        "GB": "Reino Unido",
        "AU": "Austrália"
    };

    const selectPaises1 = document.getElementById('selecione-pais');
    const selectPaises2 = document.getElementById('selecione-pais2');
    const flag1 = document.getElementById('flag');
    const flag2 = document.getElementById('flag2');

    // Função para preencher os selects com os países
    function preencherSelects() {
        for (const [codigo, nome] of Object.entries(paises)) {
            const option1 = new Option(nome, codigo);
            const option2 = new Option(nome, codigo);
            selectPaises1.add(option1);
            selectPaises2.add(option2);
        }

        // Define BR como padrão no primeiro select e US no segundo
        selectPaises1.value = "BR";
        selectPaises2.value = "US";
    }

    // Função para trocar as bandeiras e os valores dos selects
    function trocarBandeiras() {
        // Armazena temporariamente o valor e a bandeira do select 1
        const valorTemp = selectPaises1.value;
        const bandeiraTemp = flag1.src;

        // Troca o valor e a bandeira do select 1 com o select 2
        selectPaises1.value = selectPaises2.value;
        flag1.src = flag2.src;

        // Troca o valor e a bandeira do select 2 com o temporário
        selectPaises2.value = valorTemp;
        flag2.src = bandeiraTemp;
    }

    // Chama a função para preencher os selects
    preencherSelects();

    // Adiciona o evento de clique ao ícone de troca
    document.getElementById('trocarBandeira').addEventListener('click', trocarBandeiras);

    // Atualiza as bandeiras sempre que o usuário muda o país selecionado
    selectPaises1.addEventListener('change', () => {
        flag1.src = `https://flagsapi.com/${selectPaises1.value}/flat/64.png`;
    });

    selectPaises2.addEventListener('change', () => {
        flag2.src = `https://flagsapi.com/${selectPaises2.value}/flat/64.png`;
    });
});