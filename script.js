function adotar(nome) {
  let modal = document.getElementById("modal");
  let mensagem = document.getElementById("mensagemModal");

  mensagem.textContent = "Você demonstrou interesse em adotar " + nome + " 🐾";
  modal.style.display = "block";
}

function fecharModal() {
  document.getElementById("modal").style.display = "none";
}

window.onclick = function(event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}