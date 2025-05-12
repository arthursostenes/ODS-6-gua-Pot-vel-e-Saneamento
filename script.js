// Botão de voltar ao topo
window.onscroll = function () {
  const btn = document.getElementById("btnTopo");
  btn.style.display =
    document.documentElement.scrollTop > 150 ? "block" : "none";
};

document.getElementById("btnTopo").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Rolagem até seções com botão
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
