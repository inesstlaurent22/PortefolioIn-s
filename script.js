console.log("SCRIPT JS – PORTFOLIO CORRIGÉ V2");

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= CONTENUS ================= */
const CONTENT = {

  /* ===== PRÉSENTATION ===== */
  presentation: `
    <h2 class="title animate-title">Présentation</h2>

    <p>
      Je m’appelle Inès Saint Laurent, freelance spécialisée dans le développement
      d’activités commerciales sur les marchés locaux et internationaux.
    </p>

    <p>
      Forte de 5 années d’expérience en commerce international et marketing,
      j’accompagne les entreprises dans leurs phases clés de croissance.
    </p>

    <p>
      J’interviens sur le lancement de nouveaux produits, l’implantation sur de nouveaux marchés
      et le développement de la visibilité et des performances commerciales.
    </p>

    <button class="primary-btn" id="openEngagement">👉 Mon engagement</button>
  `,

  engagement: `
    <p>
      Vous bénéficiez d’un accompagnement personnalisé, discret et exigeant,
      pensé pour structurer, accélérer et sécuriser votre développement.
    </p>
    <p>
      ✨ Vous avez une vision. Je vous aide à la transformer en croissance maîtrisée.
    </p>
  `,

  /* ===== MON OFFRE ===== */
  offre: `
    <h2 class="title animate-title">🤝 Processus d’accompagnement stratégique</h2>

    <div class="center-buttons">
      <button class="step-btn step-rose" data-step="1">01</button>
      <button class="step-btn step-rose" data-step="2">02</button>
      <button class="step-btn step-rose" data-step="3">03</button>
    </div>

    <div id="programmeBubble" class="bubble hidden center-text"></div>

    <div class="offer-footer" style="margin-top:32px">
      <p class="center-text"><strong>🗓️ Durée & rythme des missions</strong></p>
      <p class="center-text">
        Les accompagnements sont proposés sur des formats de 3 mois, 6 mois
        ou jusqu’à 12 mois selon vos ambitions.
      </p>
      <p class="center-text">
        J +15 : restitution stratégique, validation du plan d’action et fixation des objectifs.
      </p>
      <p class="center-text">
        Chaque mois : comité de pilotage, suivi des performances et ajustements.
      </p>
    </div>
  `,

  offreSteps: {
    1: `
      <strong>Diagnostic & Vision</strong><br><br>
      Vision long terme<br>
      Marché cible<br>
      Objectifs business prioritaires<br>
      Indicateurs de performance
    `,
    2: `
      <strong>Intelligence marché & Stratégie</strong><br><br>
      Études de marché approfondies<br>
      Analyse concurrentielle<br>
      Recommandations produits<br>
      Plan d’action structuré
    `,
    3: `
      <strong>Déploiement & Pilotage</strong><br><br>
      Réunions mensuelles<br>
      Analyse KPI<br>
      Ajustements continus<br>
      Croissance durable
    `
  },

  /* ===== PARCOURS PROFESSIONNEL ===== */
  experience: `
    <h2 class="title animate-title">💻 Parcours professionnel</h2>

    <div class="card-list violet1-buttons">

      ${[
        ["Consultante en développement d’activité", "Gearbooker", "Audiovisuel & international",
        "Accompagnement stratégique international<br>Développement commercial BtoB / BtoC<br>Pilotage de la performance"],

        ["Commerciale Marketing", "Pachamamaï", "Cosmétique & marchés internationaux",
        "Prospection & lancements produits<br>Études de marché Europe & Asie<br>Fidélisation client"],

        ["CEO & Community Manager", "PUFFRAP", "Média & culture musicale",
        "Création de média digital<br>Gestion Instagram & TikTok<br>SEO & visibilité"],

        ["CEO & Développeuse Web", "KIT IN", "Entrepreneuriat & digital",
        "Plateforme éducative<br>HTML / CSS / JavaScript<br>Vision produit & business"],

        ["Stagiaire Comptable", "Pages Jaunes", "Finance & structure d’entreprise",
        "Comptabilité clients & fournisseurs<br>Analyse des flux financiers<br>Organisation & rigueur"],

        ["Vendeuse & Ambassadrice de marque", "Le Perchoir", "Restauration & événementiel",
        "Valorisation de l’image de marque<br>Relation client terrain<br>Développement de la notoriété"]
      ].map(job => `
        <button class="card-btn violet1-btn">
          ${job[0]}<br>
          <strong>${job[1]}</strong><br>
          <em>${job[2]}</em>
          <div class="bubble hidden bubble-violet">${job[3]}</div>
        </button>
      `).join("")}

    </div>
  `,

  /* ===== PARCOURS ACADÉMIQUE ===== */
  academic: `
    <h2 class="title animate-title">🎓 Parcours Académique</h2>

    <div class="academic-list">
      <p><strong>Master Import-Export</strong><br>KEDGE Business School — Marseille</p>
      <p><strong>Bachelor International Business</strong><br>INSEEC Paris Business School</p>
      <p><strong>BTS Commerce International</strong><br>Lycée Jean Lurçat — Paris</p>
      <p><strong>Licence de Gestion</strong><br>Université Paris 1 Panthéon-Sorbonne</p>
      <p><strong>Diplôme de Comptabilité et de Gestion (DCG)</strong><br>
        École Nationale de Commerce — Paris</p>
    </div>
  `,

  /* ===== LOGICIELS ===== */
  tools: `
    <h2 class="title animate-title">🧠 Logiciels</h2>

    <div class="card-list violet2-buttons">

      ${[
        ["CRM", "Notion, HubSpot, Salesforce"],
        ["Gestion de projet", "Trello, Google Workspace"],
        ["Communication", "Mailchimp, Zapier, Make"],
        ["Design", "Canva, Figma, CapCut, Photoshop"],
        ["IA", "ChatGPT, Claude, MidJourney, Gemini"],
        ["Développement Web", "GitHub"],
        ["Sites en ligne", "Webflow, WordPress, Shopify, Wix"],
        ["Analyse", "Google Analytics, Search Console, Meta Business Suite, LinkedIn Navigator"],
        ["Études de marché", "TradeMap, Kompass, Euromonitor, Statista, World Bank Data"]
      ].map(tool => `
        <button class="card-btn violet2-btn">
          <strong>${tool[0]}</strong>
          <div class="bubble hidden bubble-violet2">${tool[1]}</div>
        </button>
      `).join("")}

    </div>
  `,

  /* ===== RÉSEAUX SOCIAUX ===== */
  socials: `
    <h2 class="title animate-title">Réseaux sociaux</h2>

    <div class="socials socials-fixed">
      <a href="https://www.instagram.com/" target="_blank">
        <img src="images/Instagram.PNG" alt="Instagram">
      </a>
      <a href="https://www.linkedin.com/" target="_blank">
        <img src="images/Linkedin.PNG" alt="LinkedIn">
      </a>
      <a href="mailto:contact@email.com">
        <img src="images/Mail.PNG" alt="Email">
      </a>
    </div>
  `
};

/* ================= OUVERTURE BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    if (bloc.classList.contains("bleu1")) contentBox.innerHTML = CONTENT.presentation;
    if (bloc.classList.contains("rose1")) contentBox.innerHTML = CONTENT.offre;
    if (bloc.classList.contains("violet1")) contentBox.innerHTML = CONTENT.experience;
    if (bloc.classList.contains("violet2")) contentBox.innerHTML = CONTENT.tools;
    if (bloc.classList.contains("orange1")) contentBox.innerHTML = CONTENT.academic;
    if (bloc.classList.contains("jaune1")) contentBox.innerHTML = CONTENT.socials;

    colorBox.style.background = bloc.dataset.color || "#111";
    overlay.classList.add("active");
    contentBox.scrollTop = 0;
  });
});

/* ================= INTERACTIONS ================= */
contentBox.addEventListener("click", e => {

  if (e.target.id === "openEngagement") {
    contentBox.insertAdjacentHTML(
      "beforeend",
      `<div class="bubble" style="background:#fff;color:#3A6EFF;margin-top:20px;">
        ${CONTENT.engagement}
      </div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = CONTENT.offreSteps[e.target.dataset.step];
    bubble.style.background = "#fff";
    bubble.style.color = "#FF4FD8";
    bubble.classList.remove("hidden");
  }

  const card = e.target.closest(".card-btn");
  if (card) {
    const bubble = card.querySelector(".bubble");
    document.querySelectorAll(".card-btn .bubble").forEach(b => {
      if (b !== bubble) b.classList.add("hidden");
    });
    if (bubble) bubble.classList.toggle("hidden");
  }
});

/* ================= FERMETURE ================= */
overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  contentBox.innerHTML = "";
});
colorBox.addEventListener("click", e => e.stopPropagation());
