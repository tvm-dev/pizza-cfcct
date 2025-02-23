function salvarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Definindo a fonte e o estilo
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(24);
    doc.setTextColor(44, 62, 80); // Cor moderna (cinza escuro)
    doc.text("🍕 Calculadora de Pizza 🍕", 20, 20);

    doc.setFontSize(18);
    doc.setTextColor(52, 152, 219); // Cor azul moderna
    doc.text(`Total de pessoas: ${listaPessoas.length}`, 20, 30);
    doc.text(`Total de pizzas: ${Math.ceil(listaPessoas.reduce((acc, pessoa) => acc + pessoa.pedaços, 0) / 8)}`, 20, 40);
    doc.text(`Valor total: R$ ${(listaPessoas.reduce((acc, pessoa) => acc + pessoa.valor, 0)).toFixed(2)}`, 20, 50);

    doc.setFontSize(16);
    doc.setTextColor(231, 76, 60); // Cor vermelha para destaque
    listaPessoas.forEach((pessoa, index) => {
        doc.text(`${index + 1}. ${pessoa.nome} - Pedaços: ${pessoa.pedaços} - R$ ${pessoa.valor.toFixed(2)}`, 20, 60 + index * 10);
    });

    // Adicionando uma mensagem de agradecimento e boa refeição
    doc.setFontSize(18);
    doc.setTextColor(39, 174, 96); // Cor verde moderna para agradecer
    doc.text("🎉 Obrigado por usar a Calculadora de Pizza! 🍕", 20, 80 + listaPessoas.length * 10);
    doc.text("Bom apetite! 😋", 20, 90 + listaPessoas.length * 10);

    // Adicionando ícones modernos
    const iconX = 150;
    const iconY = 20;
    doc.addImage("https://cdn-icons-png.flaticon.com/512/100/100092.png", "PNG", iconX, iconY, 20, 20); // Ícone de pizza
    doc.addImage("https://cdn-icons-png.flaticon.com/512/61/61388.png", "PNG", iconX + 30, iconY, 20, 20); // Ícone de check

    // Personalizando o fundo com um gradiente de cores modernas
    const gradient = doc.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, "rgba(52, 152, 219, 1)"); // Azul claro
    gradient.addColorStop(1, "rgba(231, 76, 60, 1)"); // Vermelho
    doc.setFillColor(gradient);
    doc.rect(0, 0, 210, 297, 'F'); // Preenchendo o fundo com o gradiente

    // Salvando o PDF
    doc.save("calculadora_pizza_ultra_moderno.pdf");
}
