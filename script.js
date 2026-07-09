const montantInput = document.getElementById("montant");
const resultatText = document.getElementById("resultat");

montantInput.addEventListener("input", function () {
  const montant = parseFloat(montantInput.value);

  if (!isNaN(montant) && montant > 0) {
    const pourboire = montant * 0.20;
    resultatText.textContent = ` ${pourboire.toFixed(2)} DH`;
  } else {
    resultatText.textContent = "Le pourboire est:";
  }
});
