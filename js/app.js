let totalGeral = 0;
limpar()




function adicionar() {

    let produto = document.getElementById("produto").value;
    let nomeProduto = produto.split("-")[0].trim();
    let valorUnitario = parseInt(produto.split("R$")[1].trim());
    let quantidade = parseInt(document.getElementById("quantidade").value);
    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida!");
        return;
    }
    let preco = quantidade * valorUnitario;
    let listaCarrinho = document.getElementById("lista-produtos");
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}
          </span>${nomeProduto}
          <span class="texto-azul">${preco}</span>
        </section>`;
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById("valor-total");
    campoTotal.textContent = `R$ ${totalGeral}`;




}

function limpar() {
    totalGeral = 0;
    document.getElementById("lista-produtos").textContent = "Sem produtos adicionados.";
    document.getElementById("valor-total").innerHTML = "R$ 0";
    document.getElementById("quantidade").value = "";

}