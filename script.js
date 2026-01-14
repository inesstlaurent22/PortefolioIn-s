console.log("SCRIPT JS – PORTFOLIO FINAL CORRIGÉ");

/* ================= LANGUE ================= */
let currentLang = "fr";

/* ================= SÉLECTEURS ================= */
const blocs = document.querySelectorAll(".bloc");
const overlay = document.getElementById("overlay");
const colorBox = document.getElementById("colorBox");
const contentBox = document.getElementById("contentBox");

/* ================= TEXTES ================= */
const T = {

  /* ================= PRÉSENTATION ================= */
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

    <p>
      Mon expertise couvre les marchés français, européens et asiatiques,
      avec des expériences dans le cosmétique, l’alimentation, la musique et l’audiovisuel.
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

  /* ================= MON OFFRE ================= */
  offre: `
    <h2 class="title animate-title">🤝 Processus d’accompagnement stratégique</h2>

    <div class="center-buttons">
      <button class="step-btn step-rose" data-step="1">01</button>
      <button class="step-btn step-rose" data-step="2">02</button>
      <button class="step-btn step-rose" data-step="3">03</button>
    </div>

    <div id="programmeBubble" class="bubble hidden center-text"></div>

    <p class="center-text"><strong>🗓️ Durée & rythme des missions</strong></p>
    <p class="center-text">Formats de 3, 6 ou jusqu’à 12 mois selon vos ambitions</p>
    <p class="center-text">J +15 restitution stratégique et validation du plan d’action</p>
    <p class="center-text">Suivi mensuel et ajustements continus</p>
  `,

  offreSteps: {
    1: `
      <strong>Diagnostic & Vision</strong><br><br>
      Vision long terme<br>
      Marché ou pays cible<br>
      Objectifs business prioritaires<br>
      Indicateurs de performance
    `,
    2: `
      <strong>Intelligence marché & Stratégie sur mesure</strong><br><br>
      Études de marché approfondies<br>
      Analyse concurrentielle et positionnement<br>
      Recommandations produits et opportunités<br>
      Projection budgétaire et plan d’action
    `,
    3: `
      <strong>Déploiement & Pilotage stratégique</strong><br><br>
      Réunions de pilotage mensuelles<br>
      Analyse des performances et KPI<br>
      Ajustements stratégiques continus<br>
      Suivi des actions et priorités
    `
  },

  /* ================= PARCOURS PROFESSIONNEL ================= */
  experience: `
    <h2 class="title animate-title">💻 Parcours professionnel</h2>

    <div class="card-list">

      <button class="card-btn">
        Consultante en développement d’activité<br>
        <strong>Gearbooker</strong><br>
        <em>Audiovisuel & international</em>
        <div class="bubble hidden bubble-violet">
          Accompagnement stratégique international<br>
          Développement commercial BtoB et BtoC<br>
          Analyse des performances et pilotage
        </div>
      </button>

      <button class="card-btn">
        Commerciale Marketing<br>
        <strong>Pachamamaï</strong><br>
        <em>Cosmétique & marchés internationaux</em>
        <div class="bubble hidden bubble-violet">
          Prospection commerciale et lancement de nouveaux produits<br>
          Réalisation d’études de marché Portugal Espagne Asie<br>
          Suivi et fidélisation de la clientèle<br>
          Participation à des salons internationaux
        </div>
      </button>

      <button class="card-btn">
        Stagiaire Comptable<br>
        <strong>Pages Jaunes</strong><br>
        <em>Finance & structure d’entreprise</em>
        <div class="bubble hidden bubble-violet">
          Comptabilité clients et fournisseurs<br>
          Compréhension des flux financiers<br>
          Rigueur organisation et vision analytique
        </div>
      </button>

      <button class="card-btn">
        Vendeuse & Ambassadrice de marque<br>
        <strong>Le Perchoir</strong><br>
        <em>Restauration & événementiel</em>
        <div class="bubble hidden bubble-violet">
          Représentation et valorisation de l’image de marque<br>
          Relation client et expérience terrain<br>
          Contribution à la notoriété de l’enseigne
        </div>
      </button>

    </div>
  `,

  /* ================= LOGICIELS ================= */
  tools: `
    <h2 class="title animate-title">🧠 Logiciels</h2>

    <div class="card-list">

      <button class="card-btn"><strong>CRM</strong>
        <div class="bubble hidden bubble-violet2">
          Notion Hubspot Salesforce
        </div>
      </button>

      <button class="card-btn"><strong>Gestion de projet</strong>
        <div class="bubble hidden bubble-violet2">
          Trello Google Workspace
        </div>
      </button>

      <button class="card-btn"><strong>Analyse</strong>
        <div class="bubble hidden bubble-violet2">
          Google Analytics Google Search Console LinkedIn Sales Navigator Meta Business Suite
        </div>
      </button>

      <button class="card-btn"><strong>Microsoft</strong>
        <div class="bubble hidden bubble-violet2">
          Azure Copilot Microsoft 360
        </div>
      </button>

      <button class="card-btn"><strong>Étude de marché</strong>
        <div class="bubble hidden bubble-violet2">
          TradeMap Kompass Euromonitor Statista World Bank Data
        </div>
      </button>

      <button class="card-btn"><strong>Communication</strong>
        <div class="bubble hidden bubble-violet2">
          Mailchimp Zapier Make
        </div>
      </button>

      <button class="card-btn"><strong>Design</strong>
        <div class="bubble hidden bubble-violet2">
          Canva Figma Capcut Photoshop
        </div>
      </button>

      <button class="card-btn"><strong>IA</strong>
        <div class="bubble hidden bubble-violet2">
          ChatGPT Claude Manus MidJourney Google Gemini
        </div>
      </button>

      <button class="card-btn"><strong>Développement Web</strong>
        <div class="bubble hidden bubble-violet2">
          GitHub
        </div>
      </button>

    </div>
  `
};

/* ================= OUVERTURE DES BLOCS ================= */
blocs.forEach(bloc => {
  bloc.addEventListener("click", () => {

    if (bloc.classList.contains("bleu1")) contentBox.innerHTML = T.presentation;
    if (bloc.classList.contains("rose1")) contentBox.innerHTML = T.offre;
    if (bloc.classList.contains("violet1")) contentBox.innerHTML = T.experience;
    if (bloc.classList.contains("violet2")) contentBox.innerHTML = T.tools;

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
      `<div class="bubble" style="background:#fff;color:#3A6EFF;">
        ${T.engagement}
      </div>`
    );
  }

  if (e.target.classList.contains("step-btn")) {
    const bubble = document.getElementById("programmeBubble");
    bubble.innerHTML = T.offreSteps[e.target.dataset.step];
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
