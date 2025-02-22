function salvarPDF() {
    alert("Bom apetite e volte sempre para calcular mais pizzas!");

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFont('helvetica');
    doc.setTextColor(255, 255, 255);
    doc.setFillColor(33, 150, 243); 
    doc.rect(0, 0, 210, 297, 'F');
    doc.setTextColor(255, 255, 255); 

    doc.setFontSize(22);
    doc.text('Calculadora de Pizza - Resultado', 105, 30, null, null, 'center');

    doc.setFontSize(14);
    doc.text(`Total de pessoas: ${listaPessoas.length}`, 20, 50);
    doc.text(`Total de pedaços: ${listaPessoas.reduce((acc, pessoa) => acc + pessoa.pedaços, 0)}`, 20, 60);
    doc.text(`Total de pizzas necessárias: ${Math.ceil(listaPessoas.reduce((acc, pessoa) => acc + pessoa.pedaços, 0) / 8)}`, 20, 70);
    doc.text(`Valor total: R$ ${(listaPessoas.reduce((acc, pessoa) => acc + pessoa.pedaços, 0) / 8 * (parseFloat(document.getElementById('precoPizza').value) + parseFloat(document.getElementById('frete').value) + parseFloat(document.getElementById('refrigerante').value))).toFixed(2)}`, 20, 80);

    // Adiciona um fundo estilizado e uma mensagem moderna
    doc.setFillColor(255, 87, 34); // Laranja vibrante para o fundo
    doc.rect(15, 170, 180, 30, 'F'); 

    doc.setTextColor(255, 255, 255); // Cor do texto
    doc.setFontSize(16);
    doc.setFont('sans-serif');
    doc.text('Bom apetite e volte sempre para calcular mais pizzas!', 20, 190);

    // Adicionando sombra no texto para um efeito mais moderno
    doc.setTextColor(0, 0, 0); // Cor da sombra
    doc.text('Bom apetite e volte sempre para calcular mais pizzas!', 22, 192); // Sombra deslocada

    doc.save('relatorio_calculadora_pizza_moderno.pdf');
}
