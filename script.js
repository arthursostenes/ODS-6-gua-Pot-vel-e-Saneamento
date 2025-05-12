// Mostra o botão quando o usuário desce a página
window.onscroll = function() {
  const btn = document.getElementById("btnTopo");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Voltar suavemente ao topo
document.getElementById("btnTopo").addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
