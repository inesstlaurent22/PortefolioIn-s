const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* Contenus par bouton */
const contents = {
  bleu1: `
    <p><strong>Je m’appelle Inès Saint Laurent</strong>, freelance spécialisée dans le développement d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.</p>

    <p>Forte de <strong>5 années d’expérience en commerce international et marketing</strong>, j’accompagne les entreprises — de la startup à la grande structure — dans leurs phases clés de croissance.</p>

    <p>J’interviens sur des missions stratégiques telles que le <strong>lancement de nouveaux produits</strong>, l’implantation sur de nouveaux marchés, ainsi que le développement de la visibilité et des performances commerciales des marques, notamment via les réseaux sociaux.</p>

    <p>Mon expertise s’appuie sur une connaissance approfondie des <strong>marchés français, européens et asiatiques</strong>, et sur des collaborations dans des secteurs variés tels que le cosmétique, l’alimentation, la musique et l’audiovisuel.</p>

    <p>Curieuse et polyvalente, j’ai également développé des compétences en <strong>community management</strong> et en <strong>développement web</strong>, me permettant d’avoir une vision globale, stratégique et opérationnelle des projets que j’accompagne.</p>

    <p><strong>👉 Mon objectif :</strong> transformer une idée ou une activité existante en un projet structuré, visible et rentable.<br>
    Si vous cherchez une approche humaine, stratégique et orientée résultats, échangeons.</p>
  `
};

buttons.forEach(button => {
  button.addEventListener("click", () => {

    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    /* couleur */
    colorBox.style.background = button.dataset.color;

    /* contenu spécifique */
    const key = [...button.classList].find(c => contents[c]);
    contentBox.innerHTML = contents[key] || "";

    overlay.classList.add("active");
  });
});

/* fermeture */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  buttons.forEach(b => b.classList.remove("active"));
});

/* empêcher fermeture si clic dans l’encart */
colorBox.addEventListener("click", e => e.stopPropagation());
