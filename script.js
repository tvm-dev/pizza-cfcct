function adicionarPessoa() {
    const tabela = document.getElementById("listaPessoas");
    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td><input type="text" placeholder="Nome"></td>
        <td><input type="number" min="1" value="1"></td>
    `;
    tabela.appendChild(linha);
}

function calcular() {
    const precoPizza = parseFloat(document.getElementById("precoPizza").value) || 0;
    const frete = parseFloat(document.getElementById("frete").value) || 0;
    const refrigerante = parseFloat(document.getElementById("refrigerante").value) || 0;
    
    let totalPecas = 0;
    let pessoas = [];
    document.querySelectorAll("#listaPessoas tr").forEach(linha => {
        const nome = linha.children[0].children[0].value.trim();
        const pedacos = parseInt(linha.children[1].children[0].value) || 0;
        if (nome && pedacos > 0) {
            pessoas.push({ nome, pedacos });
            totalPecas += pedacos;
        }
    });
    
    const totalPizzas = Math.ceil(totalPecas / 8);
    const custoTotal = totalPizzas * precoPizza + frete + refrigerante;
    
    let resultadoTexto = `<strong>Total de pedaços:</strong> ${totalPecas}<br>`;
    resultadoTexto += `<strong>Quantidade de pizzas:</strong> ${totalPizzas}<br>`;
    resultadoTexto += `<strong>Custo total:</strong> R$ ${custoTotal.toFixed(2)}<br><br>`;
    resultadoTexto += `<strong>Divisão por pessoa:</strong><br>`;
    
    pessoas.forEach(p => {
        const valorPorPedaco = custoTotal / totalPecas;
        const valorPessoa = p.pedacos * valorPorPedaco;
        resultadoTexto += `${p.nome} paga: R$ ${valorPessoa.toFixed(2)}<br>`;
    });
    
    document.getElementById("resultado").innerHTML = resultadoTexto;
}

function salvarPDF() {
    const elemento = document.querySelector(".container");
    html2pdf().from(elemento).save("Divisao_Pizza.pdf");
}
