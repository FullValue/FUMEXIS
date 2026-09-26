import type { Article } from "@/data/articles";

type DraftArticle = Omit<Article, "publishedAt" | "displayDate" | "readingTime">;

const references = {
  erp: {
    title: "Service-Public — Règles de sécurité incendie des ERP",
    url: "https://entreprendre.service-public.fr/vosdroits/F31684",
  },
  reglementErp: {
    title: "Légifrance — Règlement de sécurité des ERP",
    url: "https://www.legifrance.gouv.fr/loda/id/LEGITEXT000020303557",
  },
  habitation: {
    title: "Légifrance — Protection incendie des bâtiments d’habitation",
    url: "https://www.legifrance.gouv.fr/loda/id/JORFTEXT000000474032",
  },
  inrs: {
    title: "INRS — Prévenir le risque d’incendie au travail",
    url: "https://www.inrs.fr/risques/incendie-lieu-travail/demarche-prevention-risque-incendie",
  },
  education: {
    title: "Ministère de l’Éducation nationale — Le PPMS",
    url: "https://www.education.gouv.fr/bo/2023/Hebdo26/MENE2307453C",
  },
  cnil: {
    title: "CNIL — Vidéosurveillance au travail",
    url: "https://www.cnil.fr/fr/la-videosurveillance-au-travail",
  },
  interstats: {
    title: "Ministère de l’Intérieur — Statistiques des cambriolages",
    url: "https://www.interieur.gouv.fr/Interstats/Infractions-et-sentiment-d-insecurite/Cambriolages",
  },
};

// 21 sujets relevés dans les trois pages du blog cité par le client.
// Les textes ci-dessous sont des articles originaux adaptés au périmètre FUMEXIS.
const drafts: DraftArticle[] = [
  {
    slug: "outil-gestion-suivi-securite-batiment",
    title: "Un outil de gestion peut-il simplifier le suivi de la sécurité ?",
    deck: "Plans, équipements, visites et réserves gagnent à être suivis dans un même fil de travail.",
    excerpt: "Comment structurer les informations d’un site pour que chaque contrôle débouche sur une action claire.",
    category: "Organisation",
    image: "/images/hero-fumexis.jpg",
    imageAlt: "Technicien devant un équipement de sécurité incendie dans un bâtiment professionnel",
    takeaways: ["Identifier les équipements sans ambiguïté", "Relier chaque anomalie à une action", "Garder un historique consultable"],
    sections: [
      {
        heading: "Partir du bâtiment réel",
        paragraphs: [
          "Avant de choisir un logiciel, il faut savoir quelles informations les équipes utilisent vraiment : liste des équipements, emplacement, dernier contrôle, prochain passage et défauts ouverts. Une base courte et fiable rend davantage service qu’un inventaire exhaustif qui n’est jamais mis à jour.",
          "Chaque appareil peut recevoir un identifiant stable. Les plans et les comptes rendus deviennent alors plus faciles à rapprocher, même lorsqu’un local change de nom ou d’usage.",
        ],
      },
      {
        heading: "Transformer les constats en décisions",
        paragraphs: [
          "Un bon suivi ne s’arrête pas au dépôt d’un rapport. Il indique qui examine la réserve, quelle mesure est prévue et quand la correction a été vérifiée. Cette continuité évite que les mêmes anomalies reviennent d’une visite à l’autre.",
          "Pour un ensemble de bâtiments, un tableau partagé aide aussi à comparer les priorités sans confondre urgence technique et simple manque documentaire. L’outil reste un support : la qualité des contrôles et des décisions dépend toujours des personnes qui l’alimentent.",
        ],
        bullets: ["Inventaire daté", "Rapports reliés aux équipements", "Actions affectées et clôturées"],
      },
    ],
    sources: [references.erp],
  },
  {
    slug: "choisir-alarme-intrusion-site-professionnel",
    title: "Choisir une alarme intrusion pour un site professionnel",
    deck: "Une alarme utile part des accès, des horaires et de la réaction attendue après une alerte.",
    excerpt: "Périmètre, détection, transmission et exploitation : les questions à poser avant de comparer des systèmes.",
    category: "Sûreté",
    image: "/images/surete-batiment.jpg",
    imageAlt: "Accès d’un bâtiment tertiaire équipé de caméras",
    takeaways: ["Décrire les scénarios d’intrusion", "Prévoir le traitement des alertes", "Tester le système dans les usages réels"],
    sections: [
      {
        heading: "Définir ce qui doit être protégé",
        paragraphs: [
          "Le même bâtiment peut comporter une entrée publique, une réserve, des bureaux et une zone technique. Les accès, la valeur des biens, les plages d’occupation et les circulations dessinent des besoins différents. Un diagnostic sur place évite de multiplier les capteurs sans objectif précis.",
          "Il faut aussi distinguer une intrusion hors horaires d’une présence autorisée le soir ou le week-end. Les règles d’armement doivent rester compréhensibles pour les personnes qui ouvrent et ferment les locaux.",
        ],
      },
      {
        heading: "Organiser la réponse à l’alerte",
        paragraphs: [
          "Sirène, notification, levée de doute et appel d’un responsable n’ont de valeur que si une procédure indique qui agit et comment. La transmission doit être vérifiée là où le bâtiment est réellement exploité, y compris dans les zones où la couverture radio est plus faible.",
          "Si des caméras complètent l’installation, leur usage doit être défini et les personnes concernées informées. La sûreté du site se construit avec des règles d’exploitation autant qu’avec du matériel.",
        ],
        bullets: ["Accès et zones prioritaires", "Personnes à prévenir", "Essais après installation et réaménagement"],
      },
    ],
    sources: [references.cnil],
  },
  {
    slug: "detecteur-mouvement-entreprise-criteres",
    title: "Détecteurs de mouvement : les critères utiles en entreprise",
    deck: "La bonne technologie dépend surtout de la pièce, de ses usages et des conditions ambiantes.",
    excerpt: "Champ de détection, obstacles et fausses alertes : lire le lieu avant de positionner un détecteur.",
    category: "Sûreté",
    image: "/images/surete-batiment.jpg",
    imageAlt: "Hall de bâtiment professionnel sous surveillance",
    takeaways: ["Observer les trajets possibles", "Tenir compte de l’environnement", "Valider l’implantation par des essais"],
    sections: [
      {
        heading: "Lire la pièce avant la fiche produit",
        paragraphs: [
          "Une réserve avec des rayonnages, un accueil vitré et un couloir étroit ne présentent pas les mêmes angles morts. La position du détecteur doit couvrir les trajets plausibles tout en évitant les zones masquées par des portes, du mobilier ou des stockages mouvants.",
          "La température, les courants d’air et les activités du local peuvent influencer le choix de la technologie. Il vaut mieux noter ces contraintes lors de la visite plutôt que découvrir des déclenchements indésirables une fois le site en service.",
        ],
      },
      {
        heading: "Tester avec les utilisateurs",
        paragraphs: [
          "Après la pose, des parcours d’essai permettent de vérifier la zone réellement couverte. Les personnes qui occupent le site peuvent signaler les habitudes qui n’apparaissent pas sur un plan : nettoyage tardif, livraisons ou circulation d’un prestataire.",
          "Un détecteur n’est qu’un maillon. Son emplacement, sa liaison avec la centrale et la procédure de traitement de l’alerte doivent être cohérents pour que le dispositif soit exploitable.",
        ],
        bullets: ["Hauteur et orientation", "Obstacles temporaires", "Essais de parcours documentés"],
      },
    ],
  },
  {
    slug: "alerte-intrusion-etablissement-scolaire-ppms",
    title: "Établissement scolaire : préparer l’alerte face à une intrusion",
    deck: "Un signal doit être reconnu, entendu et relié à des consignes adaptées à l’établissement.",
    excerpt: "Le dispositif d’alerte prend son sens dans le PPMS, les exercices et la coordination des adultes.",
    category: "Sûreté",
    image: "/images/surete-batiment.jpg",
    imageAlt: "Entrée contrôlée d’un bâtiment",
    takeaways: ["Articuler l’alerte avec le PPMS", "Adapter les consignes aux locaux", "Exercer la chaîne d’information"],
    sections: [
      {
        heading: "Préparer plusieurs situations possibles",
        paragraphs: [
          "Une école ou un établissement peut devoir faire face à des risques très différents. Le plan particulier de mise en sûreté organise les conduites à tenir et les rôles, notamment en cas de menace. Une alarme intrusion ne remplace donc ni le diagnostic du site ni la préparation des équipes.",
          "Le signal choisi doit être distinct des autres alertes et reconnu dans les espaces réellement occupés. Les zones éloignées, les activités extérieures et les personnes qui connaissent peu les lieux méritent une attention particulière.",
        ],
      },
      {
        heading: "Faire vivre les consignes",
        paragraphs: [
          "Les exercices permettent de vérifier la compréhension du signal, les transmissions et la capacité à appliquer les consignes prévues. Le retour d’expérience doit relever les obstacles concrets sans transformer l’exercice en démonstration technique.",
          "Le dispositif évolue avec les locaux, les effectifs et les orientations des autorités compétentes. Toute modification doit être répercutée dans les documents et expliquée aux personnes concernées.",
        ],
        bullets: ["Signal identifiable", "Rôles connus", "Débriefing après exercice"],
      },
    ],
    sources: [references.education],
  },
  {
    slug: "reduire-risque-cambriolage-entreprise",
    title: "Réduire le risque de cambriolage dans une entreprise",
    deck: "La protection des biens commence par la compréhension des accès et des routines du site.",
    excerpt: "Clés, accès secondaires, éclairage et réaction aux alertes : les premiers points à examiner.",
    category: "Sûreté",
    image: "/images/surete-batiment.jpg",
    imageAlt: "Façade et accès d’un bâtiment professionnel",
    takeaways: ["Repérer les points d’entrée", "Clarifier les droits d’accès", "Prévoir une réaction après l’alerte"],
    sections: [
      {
        heading: "Observer les opportunités faciles",
        paragraphs: [
          "Une porte de service rarement utilisée, une livraison tardive ou un badge non restitué peuvent peser davantage qu’un équipement sophistiqué. La première visite consiste à suivre les parcours possibles, de l’extérieur jusqu’aux zones sensibles, puis à noter ce qui reste ouvert ou peu visible.",
          "Les mesures les plus utiles associent fermeture des accès, rangement des clés, éclairage adapté et règles simples pour les prestataires. Elles doivent rester compatibles avec l’évacuation et le fonctionnement normal du bâtiment.",
        ],
      },
      {
        heading: "Relier prévention et réaction",
        paragraphs: [
          "Une alarme peut signaler un événement, mais elle ne décide pas seule de la conduite à tenir. Qui reçoit l’information ? Comment vérifier la situation sans exposer une personne ? Quand prévenir les secours ou les forces de l’ordre ? Ces réponses doivent être définies à l’avance.",
          "Après un incident ou un changement d’usage, reprendre le parcours d’accès permet d’ajuster les mesures. La sûreté se pilote dans le temps, à partir de faits observés sur le site.",
        ],
        bullets: ["Inventaire des accès", "Gestion des clés et badges", "Procédure d’alerte connue"],
      },
    ],
  },
  {
    slug: "securite-incendie-erp-methode-suivi",
    title: "Sécurité incendie en ERP : bâtir une méthode de suivi",
    deck: "Le classement, les équipements et le registre de sécurité doivent former un ensemble cohérent.",
    excerpt: "Une manière pratique d’organiser les vérifications et les décisions dans un établissement recevant du public.",
    category: "Sécurité incendie",
    image: "/images/hero-fumexis.jpg",
    imageAlt: "Équipement incendie dans un bâtiment recevant du public",
    takeaways: ["Identifier le classement du site", "Tenir les preuves de vérification", "Traiter les réserves jusqu’à clôture"],
    sections: [
      {
        heading: "Partir du classement et de l’usage",
        paragraphs: [
          "Les exigences de sécurité d’un établissement recevant du public dépendent notamment de son type, de sa catégorie et de sa configuration. Avant d’appliquer une règle trouvée dans un article généraliste, il faut donc vérifier le classement du site et les prescriptions qui lui sont propres.",
          "L’analyse porte sur l’évacuation, les moyens de secours, les installations techniques et l’organisation humaine. Les modifications de locaux ou d’activité peuvent changer les conditions initiales et doivent être signalées.",
        ],
      },
      {
        heading: "Conserver un historique utile",
        paragraphs: [
          "Le registre de sécurité rassemble les informations nécessaires au suivi de l’établissement. Rapports, contrôles, exercices et travaux doivent être consultables par les responsables et permettre de comprendre les décisions prises.",
          "Une réserve relevée lors d’une visite appelle une action, un responsable et une date de vérification. Cette méthode simple évite qu’une anomalie documentée reste pourtant sans suite.",
        ],
        bullets: ["Classement confirmé", "Calendrier des visites", "Suivi des actions correctives"],
      },
    ],
    sources: [references.erp, references.reglementErp],
  },
  {
    slug: "surete-site-industriel-acces-usages",
    title: "Sûreté d’un site industriel : partir des accès et des usages",
    deck: "Un site industriel combine flux de salariés, visiteurs, transporteurs et zones techniques.",
    excerpt: "Comment hiérarchiser les zones et les parcours avant de choisir des mesures de sûreté.",
    category: "Sûreté",
    image: "/images/surete-batiment.jpg",
    imageAlt: "Entrée d’un site professionnel avec contrôle d’accès",
    takeaways: ["Cartographier les flux", "Différencier les niveaux d’accès", "Préserver la sécurité des personnes"],
    sections: [
      {
        heading: "Comprendre les mouvements du site",
        paragraphs: [
          "Les risques ne se répartissent pas uniformément entre un portail poids lourds, des bureaux, un atelier et un local informatique. Il faut observer qui entre, à quel moment et pour quelle tâche. Cette carte des usages révèle les zones où un simple contrôle d’accès suffit et celles qui demandent une procédure plus structurée.",
          "Les intervenants extérieurs et les livraisons doivent être intégrés au diagnostic. Une mesure qui perturbe fortement l’exploitation sera vite contournée si elle n’a pas été discutée avec les équipes.",
        ],
      },
      {
        heading: "Faire cohabiter sûreté et sécurité",
        paragraphs: [
          "Protéger un accès ne doit pas compliquer une évacuation. Les choix techniques doivent être confrontés aux consignes incendie, aux cheminements et aux situations de panne. Une coordination entre responsables sûreté, exploitation et sécurité incendie permet de résoudre ces interactions en amont.",
          "Le suivi porte ensuite sur les droits d’accès, les incidents, les changements d’occupation et les essais des dispositifs. La sûreté n’est pas figée au jour de l’installation.",
        ],
        bullets: ["Flux salariés et visiteurs", "Zones sensibles", "Compatibilité avec l’évacuation"],
      },
    ],
    sources: [references.inrs],
  },
  {
    slug: "centrale-alarme-entreprise-questions",
    title: "Centrale d’alarme : les questions à poser avant de choisir",
    deck: "La centrale doit relier des zones, des utilisateurs et une procédure de réaction simple.",
    excerpt: "Capacité, transmission, alimentation et exploitation : les critères à examiner au-delà du prix.",
    category: "Sûreté",
    image: "/images/surete-batiment.jpg",
    imageAlt: "Hall de bâtiment tertiaire équipé pour la sûreté",
    takeaways: ["Lister les zones à surveiller", "Prévoir les évolutions du site", "Vérifier la continuité de l’alerte"],
    sections: [
      {
        heading: "Décrire le fonctionnement attendu",
        paragraphs: [
          "Avant de comparer des centrales, il faut préciser les zones à armer séparément, les horaires, les personnes autorisées et les moyens de détection. Une petite implantation stable n’a pas les mêmes besoins qu’un bâtiment avec plusieurs occupants ou des accès qui changent souvent.",
          "La simplicité d’utilisation compte autant que la capacité technique. Si la mise en service est complexe, les utilisateurs risquent d’oublier une zone ou de neutraliser trop souvent le système.",
        ],
      },
      {
        heading: "Penser au jour où une alerte arrive",
        paragraphs: [
          "La centrale doit transmettre une information compréhensible : lieu, nature de l’événement et état du dispositif. La disponibilité de l’alimentation et de la liaison de transmission mérite d’être discutée selon les contraintes du site.",
          "Après l’installation, un essai avec les personnes concernées permet de vérifier les scénarios d’armement, de désarmement et de traitement de l’alerte. Les consignes doivent être accessibles sans divulguer inutilement les codes.",
        ],
        bullets: ["Zonage clair", "Gestion des utilisateurs", "Essais de transmission"],
      },
    ],
  },
  {
    slug: "ouvrants-desenfumage-comparer-solutions",
    title: "Ouvrants de désenfumage : comparer les solutions possibles",
    deck: "Façade ou toiture, un ouvrant s’inscrit dans le parcours de l’air et des fumées.",
    excerpt: "Implantation, commandes, amenées d’air et accès de maintenance : les points qui orientent le choix.",
    category: "Désenfumage",
    image: "/images/desenfumage-toiture.jpg",
    imageAlt: "Ouvrants de désenfumage en toiture",
    takeaways: ["Étudier le volume complet", "Vérifier l’amenée d’air", "Prévoir l’accès aux essais"],
    sections: [
      {
        heading: "Regarder le volume, pas seulement l’ouverture",
        paragraphs: [
          "Un ouvrant en façade et un exutoire en toiture ne répondent pas aux mêmes contraintes d’implantation. La hauteur, les compartiments, les circulations et les possibilités d’amenée d’air influencent l’étude. Un équipement pris isolément ne dit rien de la capacité du système à guider les fumées.",
          "Le projet doit aussi considérer l’architecture existante, les autres installations et les conditions d’accès pour la pose comme pour la maintenance.",
        ],
      },
      {
        heading: "Préparer la vie du système",
        paragraphs: [
          "Le mode de commande, les liaisons et les organes de déclenchement doivent être cohérents avec les scénarios de mise en sécurité. Des essais permettent de vérifier l’ouverture réelle et la remise en état après intervention.",
          "Le choix final appartient à une étude adaptée au bâtiment et à son cadre réglementaire. Les solutions ne sont pas interchangeables simplement parce qu’elles présentent la même surface visible.",
        ],
        bullets: ["Position de l’évacuation des fumées", "Arrivée d’air", "Commande et contrôle"],
      },
    ],
    sources: [references.reglementErp],
  },
  {
    slug: "maintenance-desenfumage-organiser-controles",
    title: "Maintenance du désenfumage : organiser les contrôles",
    deck: "La disponibilité du système dépend d’essais, d’accès préparés et d’un suivi des défauts.",
    excerpt: "Comment relier la vérification des composants aux exigences propres à chaque bâtiment.",
    category: "Maintenance",
    image: "/images/hero-slides/desenfumage.jpg",
    imageAlt: "Dispositif de désenfumage dans un bâtiment professionnel",
    takeaways: ["Connaître le périmètre installé", "Tester la chaîne complète", "Clôturer les anomalies"],
    sections: [
      {
        heading: "Identifier ce qui doit fonctionner ensemble",
        paragraphs: [
          "Le désenfumage rassemble souvent commandes, ouvrants ou bouches, amenées d’air et parfois ventilateurs. Une visite utile suit le scénario de mise en sécurité plutôt qu’une simple liste d’appareils. Les plans et les rapports précédents aident à repérer les équipements et les modifications.",
          "La périodicité et le contenu des vérifications dépendent du type de bâtiment et des prescriptions applicables. Le responsable du site doit s’appuyer sur ses documents de sécurité et sur un professionnel compétent.",
        ],
      },
      {
        heading: "Rendre la visite exploitable",
        paragraphs: [
          "L’accès aux coffrets, aux toitures et aux locaux techniques doit être préparé. Les essais peuvent nécessiter une coordination avec l’exploitation pour éviter une perturbation imprévue et garantir la remise en service.",
          "Le rapport final doit indiquer clairement ce qui a été testé, ce qui ne l’a pas été et les défauts à corriger. Une réserve ouverte doit ensuite être suivie jusqu’à la vérification de sa résolution.",
        ],
        bullets: ["Inventaire et plans", "Essais documentés", "Historique des corrections"],
      },
    ],
    sources: [references.erp, references.reglementErp],
  },
  {
    slug: "exutoire-toiture-criteres-choix",
    title: "Exutoire en toiture : quels critères examiner ?",
    deck: "La toiture impose des contraintes de pose, de commande et de maintenance souvent sous-estimées.",
    excerpt: "Surface utile, emplacement, structure et accès : les questions à régler avant de retenir un modèle.",
    category: "Désenfumage",
    image: "/images/desenfumage-toiture.jpg",
    imageAlt: "Exutoires de désenfumage intégrés à une toiture",
    takeaways: ["Vérifier la compatibilité de la toiture", "Relier l’exutoire aux amenées d’air", "Sécuriser les futures interventions"],
    sections: [
      {
        heading: "Confronter le besoin à la toiture",
        paragraphs: [
          "Une fiche produit ne remplace pas l’étude du volume à désenfumer. Il faut examiner l’emplacement possible, la pente, la structure, l’étanchéité et les autres équipements présents. La performance recherchée concerne le système complet et le parcours des fumées.",
          "L’exutoire doit également être relié à une commande adaptée au scénario de sécurité. Les conditions de vent, d’exploitation et de remise en position peuvent compter selon le site.",
        ],
      },
      {
        heading: "Ne pas oublier l’accès",
        paragraphs: [
          "Un appareil en toiture devra être contrôlé puis, si besoin, réparé. Prévoir le chemin d’accès et les conditions d’intervention dès le projet facilite ce suivi. Une installation difficile à atteindre risque de produire des visites incomplètes.",
          "Lors de la réception, il est utile de conserver les références, plans, notices et résultats d’essais. Ces informations éviteront de reconstruire l’historique à chaque passage.",
        ],
        bullets: ["Étude du volume", "Intégration à la toiture", "Accès et documentation"],
      },
    ],
    sources: [references.reglementErp],
  },
  {
    slug: "commande-desenfumage-chaine-fiable",
    title: "Commande de désenfumage : privilégier une chaîne fiable",
    deck: "Le déclenchement doit atteindre les bons équipements et produire l’effet attendu.",
    excerpt: "Positionnement, liaisons, scénario et essais : comprendre le rôle des commandes de désenfumage.",
    category: "Désenfumage",
    image: "/images/hero-slides/desenfumage.jpg",
    imageAlt: "Système de désenfumage dans un bâtiment",
    takeaways: ["Définir les zones concernées", "Rendre la commande repérable", "Tester jusqu’aux organes terminaux"],
    sections: [
      {
        heading: "Partir du scénario de mise en sécurité",
        paragraphs: [
          "La commande n’est pas un bouton indépendant du reste du bâtiment. Elle doit correspondre aux zones à traiter et aux autres fonctions de sécurité. Le choix de son mode d’action et de son emplacement dépend donc de la configuration du site et des prescriptions applicables.",
          "Une commande manuelle doit être comprise par les personnes habilitées et accessible dans les conditions prévues. Les indications doivent rester cohérentes avec le fonctionnement réel de l’installation.",
        ],
      },
      {
        heading: "Vérifier la chaîne entière",
        paragraphs: [
          "Un signal reçu par un coffret ne garantit pas à lui seul l’ouverture d’un exutoire ou le démarrage d’une extraction. Les essais doivent suivre la liaison jusqu’aux organes finaux et confirmer la remise en configuration normale.",
          "Après des travaux ou un changement de cloisonnement, un contrôle du scénario évite qu’une commande actionne une zone devenue différente de celle prévue sur les plans.",
        ],
        bullets: ["Repérage des commandes", "Traçabilité des essais", "Mise à jour après travaux"],
      },
    ],
    sources: [references.reglementErp],
  },
  {
    slug: "intrusion-definition-evaluer-risque",
    title: "Intrusion : définition et lecture des statistiques",
    deck: "Une statistique nationale ne remplace pas l’observation des accès et des habitudes d’un site.",
    excerpt: "Comprendre les données sur les cambriolages et construire un diagnostic local sans extrapolation.",
    category: "Sûreté",
    image: "/images/surete-batiment.jpg",
    imageAlt: "Accès d’un bâtiment professionnel en soirée",
    takeaways: ["Décrire les événements redoutés", "Distinguer tentative et accès autorisé", "Suivre les incidents du site"],
    sections: [
      {
        heading: "Nommer les situations concrètes",
        paragraphs: [
          "L’intrusion peut désigner une entrée non autorisée dans un bâtiment fermé, l’accès à une zone réservée pendant l’activité ou le maintien d’une personne après la fermeture. Ces scénarios appellent des mesures différentes. Les décrire précisément aide à éviter un discours vague sur le risque.",
          "Les flux de visiteurs, les interventions d’entreprises extérieures et les horaires de livraison peuvent créer des situations ambiguës. Une procédure d’accueil claire aide à les distinguer d’un véritable incident.",
        ],
      },
      {
        heading: "Utiliser les données avec prudence",
        paragraphs: [
          "Les statistiques publiques distinguent notamment les cambriolages de logements de ceux des locaux professionnels. Il faut regarder la période, le territoire et la catégorie d’infraction avant de comparer deux chiffres. Aucun indicateur national ne prédit à lui seul le risque d’un établissement particulier.",
          "Cette lecture permet de prioriser les actions sans promettre qu’un dispositif supprimera tout risque. Les mesures de sûreté doivent être réexaminées quand le site change.",
        ],
        bullets: ["Typologie d’incidents", "Points d’accès concernés", "Actions suivies dans le temps"],
      },
    ],
    sources: [references.interstats],
  },
  {
    slug: "surpression-escalier-gestion-fumees",
    title: "Surpression d’escalier : comprendre le rôle du dispositif",
    deck: "Maintenir une différence de pression peut contribuer à protéger un cheminement d’évacuation.",
    excerpt: "Un principe à étudier avec les portes, les amenées d’air et le scénario global de désenfumage.",
    category: "Désenfumage",
    image: "/images/hero-slides/desenfumage.jpg",
    imageAlt: "Installation technique liée à la gestion des fumées",
    takeaways: ["Étudier l’ensemble des circulations", "Vérifier l’ouverture des portes", "Tester le scénario réel"],
    sections: [
      {
        heading: "Comprendre le principe",
        paragraphs: [
          "Dans certaines configurations, un escalier protégé peut être mis en surpression afin de limiter l’entrée de fumées. Le résultat recherché dépend des ouvertures, des portes et des autres volumes reliés à l’escalier. Il ne suffit donc pas de prévoir un ventilateur et une consigne de pression.",
          "Le dispositif doit être conçu selon le cadre applicable au bâtiment. Le fonctionnement attendu peut varier entre un ERP, une habitation et d’autres catégories d’ouvrage.",
        ],
      },
      {
        heading: "Vérifier l’usage en situation dégradée",
        paragraphs: [
          "Une pression mal maîtrisée peut rendre une porte difficile à manœuvrer. Les essais doivent porter à la fois sur la circulation de l’air et sur l’utilisation des cheminements par les occupants et les secours.",
          "La maintenance suit les organes de commande, l’alimentation, les ventilateurs et les points de mesure prévus. Toute modification des portes ou du cloisonnement mérite une réévaluation du scénario.",
        ],
        bullets: ["Portes manœuvrables", "Équipements coordonnés", "Essais documentés"],
      },
    ],
    sources: [references.reglementErp, references.habitation],
  },
  {
    slug: "circulations-erp-etude-desenfumage",
    title: "Circulations d’ERP : quand étudier leur désenfumage ?",
    deck: "Le besoin dépend du classement de l’établissement, des locaux desservis et du cheminement prévu.",
    excerpt: "Une lecture du bâtiment et du règlement avant de choisir la technique d’extraction.",
    category: "Désenfumage",
    image: "/images/hero-slides/desenfumage.jpg",
    imageAlt: "Circulation d’un bâtiment professionnel équipée pour le désenfumage",
    takeaways: ["Confirmer le classement de l’ERP", "Observer les cheminements", "Étudier le scénario de sécurité"],
    sections: [
      {
        heading: "Identifier la circulation concernée",
        paragraphs: [
          "Un couloir encloisonné, une circulation ouverte sur un volume et un palier ne se traitent pas de façon identique. L’étude commence par le plan, la nature des locaux desservis et les issues utilisées par le public. Le type et la catégorie de l’ERP orientent ensuite la lecture des dispositions applicables.",
          "Il faut éviter de déduire une obligation d’un seul critère isolé. Les textes généraux, les dispositions particulières et les éventuelles prescriptions du site se lisent ensemble.",
        ],
      },
      {
        heading: "Concevoir une circulation praticable",
        paragraphs: [
          "Le désenfumage vise à contribuer à la mise en sécurité en agissant sur les fumées. Amenées d’air, extraction, compartimentage et commandes doivent fonctionner selon un scénario cohérent avec l’évacuation.",
          "Après travaux, une modification de porte ou de cloison peut changer ce scénario. Conserver les plans et vérifier les interactions lors des visites évite de maintenir une installation qui ne correspond plus à l’état réel du bâtiment.",
        ],
        bullets: ["Plans à jour", "Classement et prescriptions", "Essais après modification"],
      },
    ],
    sources: [references.reglementErp, references.erp],
  },
  {
    slug: "espaces-attente-securises-fumees",
    title: "Espaces d’attente sécurisés : intégrer la gestion des fumées",
    deck: "La mise en sécurité des personnes doit être pensée avec les accès, les communications et les fumées.",
    excerpt: "Comprendre le rôle d’un espace d’attente sécurisé dans l’organisation globale d’un ERP.",
    category: "Désenfumage",
    image: "/images/hero-fumexis.jpg",
    imageAlt: "Circulation intérieure d’un bâtiment professionnel",
    takeaways: ["Partir de la stratégie d’évacuation", "Vérifier la protection de l’espace", "Inclure les équipes dans les exercices"],
    sections: [
      {
        heading: "Situer l’espace dans le parcours des occupants",
        paragraphs: [
          "Un espace d’attente sécurisé s’inscrit dans une stratégie de mise en sécurité des personnes qui ne peuvent pas emprunter immédiatement le même cheminement que les autres occupants. Son emplacement, son repérage et sa relation avec les circulations doivent être compris par les équipes.",
          "La protection vis-à-vis des fumées relève de la conception globale du bâtiment. Les portes, les volumes voisins et les systèmes de sécurité ne peuvent pas être étudiés séparément.",
        ],
      },
      {
        heading: "Vérifier l’organisation autant que le local",
        paragraphs: [
          "Les consignes doivent préciser comment signaler la présence d’une personne, à qui transmettre l’information et comment coordonner l’intervention. Un espace correctement conçu mais inconnu des équipes ne remplit pas pleinement son rôle.",
          "Les visites et les exercices permettent de contrôler le repérage, l’accessibilité et l’absence d’usage détourné du local. Toute modification d’aménagement mérite un nouvel examen.",
        ],
        bullets: ["Signalisation compréhensible", "Cheminement libre", "Consignes connues"],
      },
    ],
    sources: [references.reglementErp],
  },
  {
    slug: "habitation-circulations-horizontales-desenfumage",
    title: "Immeuble d’habitation : comprendre les circulations à désenfumer",
    deck: "La protection des circulations communes dépend de la configuration et de la famille du bâtiment.",
    excerpt: "Un guide pour dialoguer avec le syndic ou l’exploitant sur les équipements et leur suivi.",
    category: "Désenfumage",
    image: "/images/desenfumage-toiture.jpg",
    imageAlt: "Dispositifs d’évacuation des fumées sur une toiture",
    takeaways: ["Identifier la catégorie du bâtiment", "Repérer circulations et escaliers", "Conserver un suivi des dispositifs"],
    sections: [
      {
        heading: "Lire la configuration de l’immeuble",
        paragraphs: [
          "Les circulations horizontales communes relient les logements aux escaliers ou aux sorties. Leur protection contre les fumées s’apprécie selon la hauteur, la famille et l’organisation du bâtiment. Les règles applicables à une habitation ne se déduisent pas directement de celles d’un ERP.",
          "Un relevé des plans et des équipements existants aide à comprendre les chemins prévus pour les fumées et pour l’air. Les transformations successives des parties communes peuvent avoir modifié cette lecture.",
        ],
      },
      {
        heading: "Suivre ce qui est installé",
        paragraphs: [
          "Le gestionnaire gagne à disposer d’un inventaire clair des ouvrants, commandes, portes et accès techniques. Les essais doivent permettre de vérifier le fonctionnement réel et de signaler les obstacles ou équipements dégradés.",
          "En présence d’un doute sur la conformité ou sur une modification ancienne, une analyse du bâtiment par un professionnel compétent est préférable à une conclusion tirée d’une photographie ou d’une règle générale.",
        ],
        bullets: ["Plans des parties communes", "Équipements identifiés", "Anomalies suivies"],
      },
    ],
    sources: [references.habitation],
  },
  {
    slug: "desenfumage-erp-exigences-batiment",
    title: "Désenfumage en ERP : lire les exigences du bâtiment",
    deck: "Le règlement se traduit en choix techniques seulement après l’étude du classement et des volumes.",
    excerpt: "Une méthode de lecture pour relier textes, plans et installation existante.",
    category: "Désenfumage",
    image: "/images/hero-slides/desenfumage.jpg",
    imageAlt: "Installation de désenfumage d’un bâtiment professionnel",
    takeaways: ["Confronter textes et plans", "Identifier les zones à traiter", "Documenter les essais"],
    sections: [
      {
        heading: "Ne pas appliquer une règle hors contexte",
        paragraphs: [
          "Le règlement de sécurité des ERP comporte des dispositions générales et des règles liées au type d’établissement. Le besoin de désenfumage dépend des volumes, des circulations et de la configuration de l’ouvrage. Une réponse valable pour un local n’est pas automatiquement transposable à un autre.",
          "Le classement, les plans disponibles et les prescriptions propres au site doivent être réunis avant de définir une solution ou de juger une installation existante.",
        ],
      },
      {
        heading: "Relier conception et exploitation",
        paragraphs: [
          "Un système doit intégrer extraction ou évacuation, amenées d’air, commandes et interactions avec les autres fonctions de mise en sécurité. Les essais de réception et les contrôles ultérieurs vérifient ce scénario complet.",
          "Pour l’exploitant, les plans, notices et rapports forment une mémoire utile. Ils facilitent les travaux futurs et permettent de comprendre pourquoi une zone est commandée d’une certaine manière.",
        ],
        bullets: ["Classement du site", "Scénarios par zone", "Dossier technique conservé"],
      },
    ],
    sources: [references.reglementErp, references.erp],
  },
  {
    slug: "extraction-mecanique-fumees-cas-etude",
    title: "Extraction mécanique des fumées : dans quels cas l’étudier ?",
    deck: "Un réseau d’extraction peut répondre à des volumes où l’évacuation naturelle n’est pas adaptée.",
    excerpt: "Ventilateurs, conduits, amenées d’air et commandes doivent être dimensionnés comme un ensemble.",
    category: "Désenfumage",
    image: "/images/hero-slides/desenfumage.jpg",
    imageAlt: "Équipement technique de désenfumage mécanique",
    takeaways: ["Comparer les contraintes du volume", "Étudier l’air entrant et sortant", "Prévoir essais et maintenance"],
    sections: [
      {
        heading: "Comparer les possibilités du bâtiment",
        paragraphs: [
          "L’extraction mécanique mérite d’être étudiée lorsque la forme du bâtiment, les façades ou la toiture rendent une solution naturelle peu pertinente. Le choix ne peut pas reposer sur une préférence de principe : il faut examiner le volume, les cheminements des fumées et les contraintes de l’exploitation.",
          "Les amenées d’air font partie de l’équilibre du système. Sans elles, l’extraction ne produit pas nécessairement le mouvement attendu dans la zone à protéger.",
        ],
      },
      {
        heading: "Préparer la continuité de fonctionnement",
        paragraphs: [
          "Les ventilateurs, conduits, volets, commandes et alimentations doivent être conçus et testés ensemble. Leurs interactions avec le compartimentage et les autres équipements de sécurité sont déterminantes.",
          "Une fois le système en service, la maintenance doit suivre les performances attendues, les défauts et les modifications du bâtiment. Des accès techniques prévus dès la conception facilitent ces vérifications.",
        ],
        bullets: ["Étude aéraulique", "Chaîne de commande", "Accès aux composants"],
      },
    ],
    sources: [references.reglementErp],
  },
  {
    slug: "conduits-desenfumage-points-vigilance",
    title: "Conduits de désenfumage : les points de vigilance",
    deck: "Le réseau doit transporter les fumées dans les conditions prévues par la conception.",
    excerpt: "Parcours, traversées, étanchéité et accès : pourquoi le conduit ne doit pas être traité comme un simple tuyau.",
    category: "Désenfumage",
    image: "/images/hero-slides/desenfumage.jpg",
    imageAlt: "Réseau technique lié au désenfumage",
    takeaways: ["Suivre le parcours du réseau", "Vérifier les traversées de parois", "Conserver les accès de contrôle"],
    sections: [
      {
        heading: "Regarder le réseau dans son ensemble",
        paragraphs: [
          "Un conduit de désenfumage traverse parfois plusieurs zones et doit conserver les caractéristiques prévues dans le projet. Le tracé, les raccordements et les traversées de parois demandent une attention particulière pour préserver la cohérence du compartimentage.",
          "La compatibilité des composants se vérifie dans le cadre réglementaire du bâtiment et des documents de conception. Remplacer une pièce par un élément ressemblant ne garantit pas le même comportement.",
        ],
      },
      {
        heading: "Protéger l’installation au fil des travaux",
        paragraphs: [
          "Les modifications de faux plafond, de cloisons ou de réseaux voisins peuvent affecter un conduit sans toucher directement au ventilateur. Une visite après travaux permet de repérer les percements, obstacles ou changements de parcours.",
          "Les plans à jour et les accès d’inspection aident à contrôler l’ensemble. Les constats doivent être tracés et traités avant de considérer le système comme disponible.",
        ],
        bullets: ["Tracé documenté", "Traversées examinées", "Contrôle après travaux"],
      },
    ],
    sources: [references.reglementErp],
  },
  {
    slug: "desenfumage-role-regles-entretien",
    title: "Désenfumage : relier rôle, règles et entretien",
    deck: "Un système n’est utile que si sa conception, son usage et son suivi restent cohérents.",
    excerpt: "La vue d’ensemble à connaître avant d’étudier ou de reprendre une installation de désenfumage.",
    category: "Désenfumage",
    image: "/images/desenfumage-toiture.jpg",
    imageAlt: "Ouvrants de désenfumage sur un bâtiment",
    takeaways: ["Comprendre le scénario de sécurité", "Appliquer le cadre du bâtiment", "Entretenir la chaîne complète"],
    sections: [
      {
        heading: "Comprendre l’objectif du système",
        paragraphs: [
          "Le désenfumage agit sur la circulation des fumées pour contribuer à la mise en sécurité des occupants et aux conditions d’intervention. Selon le bâtiment, il peut reposer sur des évacuations naturelles ou sur une extraction mécanique. Les amenées d’air, les commandes et les zones traitées font partie du même scénario.",
          "La solution se définit à partir de la configuration réelle des volumes et du règlement qui s’applique à l’ouvrage, notamment en ERP ou en habitation.",
        ],
      },
      {
        heading: "Faire durer la fonction prévue",
        paragraphs: [
          "Après la mise en service, des essais et des contrôles permettent de vérifier que la commande déclenche les bons organes et que les ouvrants ou ventilateurs fonctionnent. Les modifications de locaux doivent être signalées afin de vérifier leurs effets sur le scénario.",
          "Un historique lisible des essais, réserves et corrections permet au responsable de site de savoir ce qui a été contrôlé et ce qui reste à traiter. C’est la continuité entre conception et exploitation qui donne du sens à l’équipement.",
        ],
        bullets: ["Scénario documenté", "Essais réguliers adaptés au site", "Réserves clôturées"],
      },
    ],
    sources: [references.reglementErp, references.habitation],
  },
];

export const expandedArticles: Article[] = drafts.map((draft) => {
  const wordCount = draft.sections.flatMap((section) => section.paragraphs).join(" ").split(/\s+/).length;
  return {
    ...draft,
    publishedAt: "2026-09-26",
    displayDate: "26 septembre 2026",
    readingTime: `${Math.max(2, Math.ceil(wordCount / 180))} min`,
  };
});
