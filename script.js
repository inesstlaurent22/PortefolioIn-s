/* ===========================
   SÉLECTION DES ÉLÉMENTS
=========================== */
const buttons = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ===========================
   CONTENU PAR BOUTON
=========================== */
const contents = {

  /* ===== BLEU : MON OFFRE ===== */
  bleu1: `
    <p><strong>Présentation</strong></p>

    <p><strong>Je m’appelle Inès Saint Laurent</strong>, freelance spécialisée dans le développement d’activités commerciales, aussi bien sur les marchés locaux qu’internationaux.</p>

    <p>Forte de <strong>5 années d’expérience en commerce international et marketing</strong>, j’accompagne les entreprises — de la startup à la grande structure — dans leurs phases clés de croissance.</p>

    <p>J’interviens sur des missions stratégiques telles que le <strong>lancement de nouveaux produits</strong>, l’implantation sur de nouveaux marchés, ainsi que le développement de la visibilité et des performances commerciales des marques, notamment via les réseaux sociaux.</p>

    <p>Mon expertise repose sur une connaissance approfondie des <strong>marchés français, européens et asiatiques</strong>, et sur des collaborations dans des secteurs variés : cosmétique, alimentation, musique et audiovisuel.</p>

    <p>Curieuse et polyvalente, j’ai également développé des compétences en <strong>community management</strong> et en <strong>développement web</strong>, me permettant d’avoir une vision globale, stratégique et opérationnelle des projets que j’accompagne.</p>

    <p><strong>👉 Mon objectif :</strong><br>
    transformer une idée ou une activité existante en un projet structuré, visible et rentable.<br>
    Si vous cherchez une approche humaine, stratégique et orientée résultats, échangeons.</p>
  `,

  /* ===== ROSE : MON PROGRAMME ===== */
  rose1: `
    <p><strong>♟️ Processus d’accompagnement stratégique</strong></p>

    <p><strong>01 — Diagnostic & Vision</strong></p>

    <p>Un premier rendez-vous stratégique confidentiel permet de poser les bases de votre développement.</p>

    <p>Nous y définissons :</p>

    <ul>
      <li>votre vision long terme,</li>
      <li>le marché ou pays cible,</li>
      <li>vos objectifs business prioritaires,</li>
      <li>les délais et indicateurs de performance.</li>
    </ul>

    <p>Cette étape garantit un alignement clair et précis avant toute mise en œuvre.</p>

    <p><strong>02 — Intelligence marché & Stratégie sur mesure</strong><br>
    <em>(10 à 15 jours après le diagnostic)</em></p>

    <p>Je vous livre une analyse complète et structurée, comprenant :</p>

    <ul>
      <li>études de marché approfondies,</li>
      <li>analyse concurrentielle et positionnement,</li>
      <li>recommandations produits & opportunités,</li>
      <li>stratégie commerciale et marketing,</li>
      <li>projection budgétaire et plan d’action.</li>
    </ul>

    <p>Une réunion de restitution permet d’ajuster la stratégie si nécessaire et de valider le périmètre de la mission ainsi que le devis.</p>

    <p><strong>03 — Déploiement & Pilotage stratégique</strong></p>

    <p>Une fois la stratégie validée, l’accompagnement démarre avec une approche agile, mesurable et orientée résultats.</p>

    <ul>
      <li>Réunion de pilotage mensuelle</li>
      <li>Analyse des performances et KPI</li>
      <li>Ajustements stratégiques continus</li>
      <li>Suivi des actions et priorités</li>
    </ul>

    <p>Chaque décision est guidée par la performance, la cohérence et la croissance durable.</p>

    <p><strong>📅 Durée & rythme des missions</strong></p>

    <p>Les accompagnements sont proposés sur des formats de <strong>3 mois, 6 mois ou jusqu’à 12 mois</strong>, selon vos ambitions.</p>

    <p><strong>Planning type :</strong></p>

    <ul>
      <li><strong>J +15</strong> après le diagnostic : restitution stratégique, validation du plan d’action et fixation des objectifs.</li>
      <li><strong>Chaque mois</strong> : comité de pilotage pour suivre l’évolution et affiner la stratégie.</li>
    </ul>

    <p><strong>📈 Mon engagement</strong></p>

    <p>Vous bénéficiez d’un accompagnement personnalisé, discret et exigeant, pensé pour structurer, accélérer et sécuriser votre développement sur des marchés à fort potentiel.</p>

    <p><strong>👉 Vous avez une vision.</strong><br>
    Je vous aide à la transformer en croissance maîtrisée.</p>
  `
};

/* ===========================
   OUVERTURE AU CLIC
=========================== */
buttons.forEach(button => {
  button.addEventListener("click", () => {

    /* reset animation */
    buttons.forEach(b => b.classList.remove("active"));
    button.classList.add("active");

    /* couleur de fond */
    colorBox.style.background = button.dataset.color;

    /* contenu selon bouton */
    const key = [...button.classList].find(c => contents[c]);
    contentBox.innerHTML = contents[key] || "";

    /* affichage overlay */
    overlay.classList.add("active");
  });
});

/* ===========================
   FERMETURE OVERLAY
=========================== */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  buttons.forEach(b => b.classList.remove("active"));
  contentBox.innerHTML = "";
});

/* Empêche la fermeture si clic dans l’encart */
colorBox.addEventListener("click", (e) => {
  e.stopPropagation();
});
