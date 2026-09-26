import { expandedArticles } from "@/data/expanded-articles";

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Article = {
  slug: string;
  title: string;
  deck: string;
  excerpt: string;
  category: "Sécurité incendie" | "Désenfumage" | "Formation" | "Maintenance" | "Sûreté" | "Organisation";
  publishedAt: string;
  displayDate: string;
  readingTime: string;
  image: string;
  imageAlt: string;
  takeaways: string[];
  sections: ArticleSection[];
  sources?: { title: string; url: string }[];
};

const existingArticles: Article[] = [
  {
    slug: "choisir-extincteurs-entreprise",
    title: "Comment choisir les extincteurs adaptés à son entreprise ?",
    deck: "Le bon appareil dépend du risque à couvrir, de l’activité et de la configuration réelle des locaux.",
    excerpt: "Types de feux, implantation et accessibilité : les points à analyser avant d’équiper un bâtiment professionnel.",
    category: "Sécurité incendie",
    publishedAt: "2026-09-10",
    displayDate: "10 septembre 2026",
    readingTime: "6 min",
    image: "/images/hero-fumexis.jpg",
    imageAlt: "Extincteur installé dans un bâtiment professionnel",
    takeaways: ["Partir des risques présents", "Rendre chaque appareil visible", "Prévoir le suivi dès l’installation"],
    sections: [
      {
        heading: "Commencer par les risques, pas par le catalogue",
        paragraphs: [
          "Un extincteur n’est réellement utile que si son agent extincteur correspond au combustible susceptible de brûler. Papier, carton, liquides inflammables, équipements électriques ou huiles de cuisson ne se traitent pas de la même manière. La première étape consiste donc à observer l’activité, les stockages, les machines et les locaux techniques.",
          "Cette lecture doit rester concrète. Une réserve, un atelier et un espace de bureaux peuvent appartenir au même établissement tout en présentant des risques très différents. Le choix des appareils se construit zone par zone, puis se vérifie à l’échelle du bâtiment.",
        ],
      },
      {
        heading: "Soigner l’implantation et la signalisation",
        paragraphs: [
          "Un appareil adapté mais dissimulé, encombré ou difficile à atteindre perd une grande partie de son efficacité. Les cheminements, les sorties, les changements de niveau et les habitudes d’occupation influencent son emplacement. La signalisation permet ensuite de le repérer rapidement, y compris par une personne qui connaît peu les lieux.",
          "L’installation doit aussi éviter les chocs, les variations de température incompatibles et les zones où l’accès peut être condamné par du mobilier ou du stockage temporaire.",
        ],
        bullets: ["Accès immédiat et sans obstacle", "Signal visible depuis les circulations", "Support stable et appareil protégé"],
      },
      {
        heading: "Intégrer la maintenance dès le départ",
        paragraphs: [
          "Identifier chaque extincteur et conserver une vision claire du parc simplifie les visites futures. Le suivi porte notamment sur l’état général, l’accessibilité, la signalisation et les opérations nécessaires. Une implantation documentée évite aussi que des appareils disparaissent au fil des réaménagements.",
          "FUMEXIS peut réaliser l’étude, l’installation et la maintenance afin de conserver une continuité entre le besoin initial et la vie réelle du bâtiment.",
        ],
      },
    ],
  },
  {
    slug: "maintenance-extincteurs-points-controle",
    title: "Maintenance des extincteurs : quels points contrôler ?",
    deck: "Une visite utile ne se limite pas à regarder une étiquette : elle vérifie la disponibilité réelle de l’équipement.",
    excerpt: "État, accessibilité, signalisation et traçabilité : comprendre ce qui structure une maintenance sérieuse.",
    category: "Maintenance",
    publishedAt: "2026-09-03",
    displayDate: "3 septembre 2026",
    readingTime: "5 min",
    image: "/images/hero-fumexis.jpg",
    imageAlt: "Technicien contrôlant un équipement de sécurité incendie",
    takeaways: ["Contrôler l’environnement de l’appareil", "Tracer les écarts observés", "Planifier les actions correctives"],
    sections: [
      {
        heading: "Vérifier que l’appareil reste disponible",
        paragraphs: [
          "Entre deux visites, un bâtiment évolue : les meubles bougent, les circulations changent et certaines zones sont réaffectées. La maintenance commence donc par une question simple : l’extincteur est-il toujours présent, visible et accessible dans la situation actuelle ?",
          "L’état extérieur, le support, le repérage et les éléments de sécurité sont examinés avec méthode. Tout écart doit être qualifié pour distinguer ce qui peut être corrigé immédiatement de ce qui nécessite une action complémentaire.",
        ],
      },
      {
        heading: "Relier le contrôle au risque couvert",
        paragraphs: [
          "Le parc doit rester cohérent avec l’activité. L’arrivée d’une nouvelle machine, la création d’un stockage ou la transformation d’un local peut modifier le besoin. Une visite de maintenance est aussi l’occasion de signaler ces changements et de réinterroger l’adéquation des équipements.",
        ],
        bullets: ["Nature des activités à proximité", "Évolution des aménagements", "Cohérence entre l’appareil et la zone"],
      },
      {
        heading: "Produire un suivi exploitable",
        paragraphs: [
          "La valeur du contrôle tient aussi à sa restitution. Le responsable de site doit pouvoir comprendre ce qui a été vérifié, les défauts constatés et les opérations à prévoir. Une traçabilité lisible facilite la planification et évite que les anomalies se transmettent d’une visite à l’autre sans décision.",
          "Un prestataire unique pour l’installation, la maintenance préventive et les corrections apporte une lecture plus continue du parc.",
        ],
      },
    ],
  },
  {
    slug: "desenfumage-naturel-ou-mecanique",
    title: "Désenfumage naturel ou mécanique : quelles différences ?",
    deck: "Deux principes techniques, un même objectif : maîtriser les fumées pour soutenir l’évacuation et l’intervention.",
    excerpt: "Comprendre les grandes différences entre ouvrants naturels et extraction mécanique avant d’étudier une solution.",
    category: "Désenfumage",
    publishedAt: "2026-08-27",
    displayDate: "27 août 2026",
    readingTime: "6 min",
    image: "/images/desenfumage-toiture.jpg",
    imageAlt: "Ouvrants de désenfumage installés sur une toiture",
    takeaways: ["Observer les volumes et circulations", "Étudier amenées d’air et évacuation", "Maintenir tous les organes du système"],
    sections: [
      {
        heading: "Le désenfumage naturel utilise les mouvements de l’air",
        paragraphs: [
          "Le désenfumage naturel s’appuie sur l’élévation des fumées chaudes et sur des ouvrants positionnés pour permettre leur évacuation. Exutoires en toiture ou ouvrants en façade s’intègrent à un ensemble qui comprend également les commandes et les amenées d’air nécessaires au fonctionnement attendu.",
          "La géométrie du volume, la hauteur, les circulations et les contraintes architecturales orientent l’étude. Il ne suffit pas d’ajouter un ouvrant : le système doit être pensé comme un cheminement de l’air et des fumées.",
        ],
      },
      {
        heading: "Le désenfumage mécanique organise l’extraction",
        paragraphs: [
          "Le principe mécanique repose sur des équipements d’extraction et des réseaux capables de déplacer les fumées. Cette approche peut répondre à des configurations où les évacuations naturelles ne suffisent pas ou ne peuvent pas être implantées de manière pertinente.",
          "Le dimensionnement, l’alimentation, les commandes et les interactions avec les autres équipements du bâtiment doivent être étudiés ensemble. Le choix n’est donc pas une préférence entre deux technologies, mais une réponse à la configuration du site.",
        ],
      },
      {
        heading: "La maintenance concerne toute la chaîne",
        paragraphs: [
          "Quelle que soit la solution, les commandes, ouvrants, liaisons, ventilateurs et amenées d’air doivent rester disponibles. L’encrassement, les modifications d’aménagement ou un obstacle peuvent dégrader le fonctionnement sans être immédiatement visibles.",
        ],
        bullets: ["Tester les dispositifs de commande", "Contrôler le mouvement des ouvrants", "Vérifier l’absence d’obstacle", "Tracer les défauts et corrections"],
      },
    ],
  },
  {
    slug: "preparer-verification-desenfumage",
    title: "Comment préparer la vérification d’un système de désenfumage ?",
    deck: "Un site accessible et des informations disponibles rendent le contrôle plus rapide, plus lisible et plus utile.",
    excerpt: "Documents, accès et interlocuteurs : une préparation simple pour faciliter la visite de maintenance.",
    category: "Désenfumage",
    publishedAt: "2026-08-18",
    displayDate: "18 août 2026",
    readingTime: "5 min",
    image: "/images/desenfumage-toiture.jpg",
    imageAlt: "Inspection d’ouvrants de désenfumage sur un bâtiment",
    takeaways: ["Rassembler les informations disponibles", "Libérer les accès", "Prévoir la remise en service"],
    sections: [
      {
        heading: "Identifier le périmètre avant la visite",
        paragraphs: [
          "Plans, inventaires, rapports précédents et historiques de travaux permettent de comprendre plus vite l’installation. Même incomplets, ces éléments peuvent révéler une modification récente ou un défaut déjà signalé. Il est utile de préciser les zones concernées et les contraintes d’exploitation dès la prise de rendez-vous.",
          "Pour une reprise de parc, l’absence de dossier n’empêche pas l’intervention. Elle implique simplement de prévoir un état des lieux plus approfondi pour reconstruire une base de suivi fiable.",
        ],
      },
      {
        heading: "Garantir les accès aux équipements",
        paragraphs: [
          "Les commandes, ouvrants, coffrets, circulations techniques et accès toiture doivent pouvoir être atteints sans improvisation. Une autorisation, une clé, un moyen d’accès ou l’accompagnement d’une personne habilitée peuvent être nécessaires selon le bâtiment.",
        ],
        bullets: ["Informer l’accueil et les équipes", "Préparer clés et autorisations", "Dégager les commandes et ouvrants", "Signaler les zones à accès contraint"],
      },
      {
        heading: "Anticiper les essais et la restitution",
        paragraphs: [
          "Certains essais peuvent avoir un impact temporaire sur l’activité. Les organiser avec l’interlocuteur du site limite les perturbations et facilite la remise en configuration normale. À l’issue de la visite, un échange court sur les constats aide à hiérarchiser les actions.",
          "L’objectif n’est pas seulement de réaliser un test, mais de laisser au responsable une vision claire de l’état de son installation.",
        ],
      },
    ],
  },
  {
    slug: "formation-manipulation-extincteurs",
    title: "Pourquoi former ses équipes à la manipulation des extincteurs ?",
    deck: "Connaître un équipement ne suffit pas : les équipes doivent comprendre quand et comment agir sans se mettre en danger.",
    excerpt: "Une formation concrète transforme un appareil familier en véritable moyen de première intervention.",
    category: "Formation",
    publishedAt: "2026-08-07",
    displayDate: "7 août 2026",
    readingTime: "6 min",
    image: "/images/formation-incendie.jpg",
    imageAlt: "Formation à la manipulation d’un extincteur avec des salariés",
    takeaways: ["Reconnaître les limites d’intervention", "Choisir le bon appareil", "Apprendre par la mise en pratique"],
    sections: [
      {
        heading: "Donner des repères avant l’urgence",
        paragraphs: [
          "Face à un départ de feu, le stress réduit le temps disponible pour réfléchir. Une formation prépare des repères simples : identifier l’alerte, se protéger, choisir un appareil adapté et conserver une possibilité de repli. Elle rappelle aussi qu’une intervention ne doit jamais retarder l’évacuation ni exposer une personne.",
          "L’objectif n’est pas de transformer les participants en professionnels du secours. Il est de leur permettre de comprendre leur environnement et d’adopter une réaction proportionnée.",
        ],
      },
      {
        heading: "Relier les gestes au bâtiment",
        paragraphs: [
          "Une formation gagne en efficacité lorsqu’elle parle des locaux réellement occupés. Où se trouvent les appareils ? Quels risques couvrent-ils ? Comment rejoindre une sortie ? Qui donne l’alerte ? Ces questions rendent le contenu immédiatement applicable.",
        ],
        bullets: ["Repérage des extincteurs du site", "Lecture de la signalisation", "Choix selon la situation", "Positionnement et distance de sécurité"],
      },
      {
        heading: "Faire pratiquer pour mieux retenir",
        paragraphs: [
          "La démonstration puis la mise en pratique permettent de lever les hésitations liées à la goupille, à la poignée ou au positionnement. Les participants peuvent poser des questions à partir de situations qu’ils rencontrent dans leur travail.",
          "FUMEXIS adapte le format au nombre de participants, à l’activité et aux objectifs de l’établissement afin de proposer une session concrète et directement utile.",
        ],
      },
    ],
  },
  {
    slug: "organiser-exercice-evacuation-entreprise",
    title: "Comment organiser un exercice d’évacuation utile ?",
    deck: "Un exercice efficace teste les cheminements et les rôles, puis transforme les observations en actions concrètes.",
    excerpt: "Préparation, observation et débriefing : les étapes pour faire progresser les équipes sans créer de confusion.",
    category: "Formation",
    publishedAt: "2026-07-29",
    displayDate: "29 juillet 2026",
    readingTime: "7 min",
    image: "/images/formation-incendie.jpg",
    imageAlt: "Équipe réunie pendant une formation à l’évacuation",
    takeaways: ["Définir un objectif précis", "Observer sans guider chaque geste", "Formaliser les améliorations"],
    sections: [
      {
        heading: "Définir ce que l’exercice doit vérifier",
        paragraphs: [
          "Un exercice peut tester le déclenchement de l’alerte, la compréhension des consignes, l’utilisation des cheminements ou la coordination de rôles spécifiques. Chercher à tout évaluer en même temps rend souvent le débriefing confus. Un objectif clair aide les observateurs à relever des faits utiles.",
          "Le scénario doit rester compatible avec l’activité, le public présent et les contraintes du site. Les personnes qui organisent l’exercice anticipent les situations particulières et la manière d’interrompre l’exercice si nécessaire.",
        ],
      },
      {
        heading: "Observer les comportements et les obstacles",
        paragraphs: [
          "Le temps global n’est qu’un indicateur. Il faut aussi regarder si l’alerte est comprise, si les itinéraires sont utilisés correctement, si les portes restent praticables et si le point de rassemblement joue son rôle. Les hésitations révèlent souvent un besoin de clarification plus intéressant qu’un simple chronomètre.",
        ],
        bullets: ["Réaction au signal", "Fluidité des cheminements", "Prise en compte des visiteurs", "Comptage et remontée d’information"],
      },
      {
        heading: "Débriefer et décider",
        paragraphs: [
          "Le retour doit distinguer ce qui a bien fonctionné, les écarts observés et les actions réalistes. Une consigne à reformuler, une porte encombrée ou un rôle mal compris peuvent souvent être corrigés rapidement. D’autres constats nécessitent une étude ou un aménagement.",
          "Conserver une synthèse permet de suivre les améliorations lors du prochain exercice et d’inscrire la formation dans la durée.",
        ],
      },
    ],
  },
  {
    slug: "plan-maintenance-securite-incendie",
    title: "Construire un plan de maintenance incendie lisible",
    deck: "Un calendrier pertinent relie les équipements, les sites, les priorités et les actions correctives.",
    excerpt: "Comment passer d’une succession de visites à un véritable pilotage de la maintenance incendie.",
    category: "Maintenance",
    publishedAt: "2026-07-16",
    displayDate: "16 juillet 2026",
    readingTime: "6 min",
    image: "/images/hero-fumexis.jpg",
    imageAlt: "Suivi technique d’équipements de protection incendie",
    takeaways: ["Créer un inventaire fiable", "Regrouper les interventions intelligemment", "Suivre les écarts jusqu’à leur clôture"],
    sections: [
      {
        heading: "Partir d’un inventaire exploitable",
        paragraphs: [
          "Un plan de maintenance repose sur une base simple : savoir quels équipements sont présents, où ils se trouvent et dans quel état ils sont suivis. Pour plusieurs bâtiments, une nomenclature commune évite les doublons et facilite la comparaison des sites.",
          "Lorsqu’un parc est repris sans historique complet, un état des lieux initial permet de reconstruire progressivement cette vision. Les incertitudes doivent être identifiées plutôt que masquées.",
        ],
      },
      {
        heading: "Organiser les visites autour de l’exploitation",
        paragraphs: [
          "Les accès, les horaires, la présence d’un interlocuteur et les périodes de forte activité influencent la planification. Regrouper certaines opérations peut limiter les interruptions, à condition de conserver un périmètre clair pour chaque intervention.",
        ],
        bullets: ["Calendrier partagé", "Accès techniques anticipés", "Interlocuteur identifié", "Périmètre de visite confirmé"],
      },
      {
        heading: "Ne pas perdre les actions correctives",
        paragraphs: [
          "Un rapport ne corrige pas un défaut à lui seul. Chaque écart doit pouvoir être compris, priorisé et suivi jusqu’à sa résolution. Une restitution synthétique aide le responsable de site à distinguer les actions immédiates, les travaux à programmer et les points à surveiller.",
          "La continuité entre maintenance préventive et corrective est l’un des leviers les plus importants pour garder un parc lisible dans le temps.",
        ],
      },
    ],
  },
  {
    slug: "signalisation-equipements-incendie",
    title: "Signalisation incendie : rendre les équipements visibles",
    deck: "Dans une situation dégradée, quelques secondes gagnées commencent souvent par un repérage sans ambiguïté.",
    excerpt: "Emplacement, lisibilité et cohérence : les principes d’une signalisation réellement utile sur le terrain.",
    category: "Sécurité incendie",
    publishedAt: "2026-07-02",
    displayDate: "2 juillet 2026",
    readingTime: "5 min",
    image: "/images/hero-fumexis.jpg",
    imageAlt: "Équipement incendie signalé dans une circulation",
    takeaways: ["Observer les axes de circulation", "Éviter les informations contradictoires", "Réexaminer après chaque aménagement"],
    sections: [
      {
        heading: "Penser depuis le point de vue de l’utilisateur",
        paragraphs: [
          "La personne qui cherche un extincteur ou un cheminement ne se trouve pas toujours juste devant lui. La signalisation doit être visible depuis les directions d’arrivée pertinentes et rester lisible malgré la hauteur, l’éclairage ou le mobilier.",
          "Une visite en conditions normales permet déjà de repérer les angles morts. Il faut aussi imaginer un environnement plus stressant, avec des personnes qui connaissent peu les lieux.",
        ],
      },
      {
        heading: "Conserver une lecture cohérente",
        paragraphs: [
          "Accumuler des panneaux ne garantit pas une meilleure information. Des indications homogènes, bien positionnées et sans contradiction offrent une lecture plus rapide. La signalisation doit rester associée à un équipement réellement accessible et à un cheminement praticable.",
        ],
        bullets: ["Visibilité à distance", "Cohérence des pictogrammes", "Absence d’obstacle visuel", "Correspondance avec la situation réelle"],
      },
      {
        heading: "Réviser la signalisation avec le bâtiment",
        paragraphs: [
          "Les cloisons, rayonnages et usages changent. Un panneau autrefois visible peut être masqué après un réaménagement, tandis qu’un équipement déplacé peut conserver une ancienne indication. Intégrer ce point aux contrôles réguliers évite ces décalages.",
          "FUMEXIS prend en compte la signalisation lors de l’installation et du suivi des extincteurs pour maintenir un ensemble compréhensible.",
        ],
      },
    ],
  },
  {
    slug: "reprendre-parc-incendie-existant",
    title: "Reprendre un parc incendie existant : par où commencer ?",
    deck: "Quand l’historique est incomplet, un état des lieux structuré permet de retrouver une base de suivi fiable.",
    excerpt: "Inventaire, analyse des écarts et priorités : la méthode pour reprendre une installation déjà en service.",
    category: "Maintenance",
    publishedAt: "2026-06-19",
    displayDate: "19 juin 2026",
    readingTime: "6 min",
    image: "/images/hero-fumexis.jpg",
    imageAlt: "Inventaire d’un parc d’équipements incendie existant",
    takeaways: ["Inventorier sans supposer", "Documenter les incertitudes", "Construire un plan d’action progressif"],
    sections: [
      {
        heading: "Établir une photographie de départ",
        paragraphs: [
          "La reprise commence par l’identification des équipements présents, de leur implantation et des informations disponibles. Les rapports, étiquettes, plans et témoignages du personnel peuvent aider, mais ils doivent être confrontés à la réalité du terrain.",
          "L’objectif est de créer une base suffisamment claire pour différencier les équipements suivis, les éléments à approfondir et les changements intervenus dans le bâtiment.",
        ],
      },
      {
        heading: "Qualifier les écarts sans tout mélanger",
        paragraphs: [
          "Un défaut d’accès, une information manquante et un équipement dégradé ne demandent pas la même réponse. Les constats doivent être formulés de manière compréhensible et associés à une prochaine étape. Cette hiérarchisation évite les listes longues qui ne débouchent sur aucune décision.",
        ],
        bullets: ["État et accessibilité", "Adéquation avec les usages", "Informations manquantes", "Corrections et études à programmer"],
      },
      {
        heading: "Installer une continuité de suivi",
        paragraphs: [
          "Une fois l’état initial posé, le calendrier de maintenance, les responsabilités et le circuit de validation des corrections peuvent être définis. Pour un parc multi-site, des règles communes de nommage et de restitution facilitent le pilotage.",
          "La reprise n’est donc pas seulement une visite technique : c’est le point de départ d’une organisation durable autour des équipements.",
        ],
      },
    ],
  },
  {
    slug: "prevention-incendie-batiments-professionnels",
    title: "Prévention incendie : 7 réflexes pour les bâtiments professionnels",
    deck: "La prévention quotidienne associe équipements disponibles, locaux maîtrisés et équipes préparées.",
    excerpt: "Sept habitudes concrètes pour maintenir la vigilance dans les bureaux, commerces, ERP et sites d’activité.",
    category: "Sécurité incendie",
    publishedAt: "2026-06-05",
    displayDate: "5 juin 2026",
    readingTime: "7 min",
    image: "/images/formation-incendie.jpg",
    imageAlt: "Équipe sensibilisée à la prévention du risque incendie",
    takeaways: ["Garder les circulations libres", "Signaler chaque changement", "Former et réactiver les consignes"],
    sections: [
      {
        heading: "Maintenir un environnement lisible",
        paragraphs: [
          "Les équipements et les procédures fonctionnent mieux dans un bâtiment dont les accès restent dégagés. Le stockage provisoire, les portes bloquées et les objets déposés devant une commande sont des situations banales qui peuvent pourtant compliquer une réaction.",
          "La prévention repose sur une vigilance partagée : chacun doit pouvoir identifier un écart simple et savoir à qui le signaler.",
        ],
        bullets: ["Libérer sorties et circulations", "Garder les extincteurs accessibles", "Ne pas masquer la signalisation", "Signaler les équipements endommagés"],
      },
      {
        heading: "Suivre les changements d’activité",
        paragraphs: [
          "Un nouveau stockage, un réaménagement, une machine ou une modification des effectifs peut faire évoluer les risques et les cheminements. Informer le responsable sécurité et le mainteneur permet de vérifier si les équipements et consignes restent cohérents.",
          "Les petits changements successifs sont souvent plus difficiles à percevoir qu’un grand chantier. Les intégrer aux échanges de maintenance évite qu’ils s’accumulent silencieusement.",
        ],
      },
      {
        heading: "Faire vivre les consignes avec les équipes",
        paragraphs: [
          "Une consigne affichée mais jamais expliquée reste abstraite. La sensibilisation, la manipulation des extincteurs et les exercices d’évacuation donnent du sens aux rôles et aux cheminements. Des rappels courts peuvent compléter les formations pour intégrer les nouveaux arrivants et réactiver les acquis.",
        ],
        bullets: ["Présenter les risques du site", "Expliquer l’alerte et l’évacuation", "Organiser des mises en pratique"],
      },
      {
        heading: "Relier prévention et maintenance",
        paragraphs: [
          "Enfin, les observations des équipes doivent pouvoir rejoindre le suivi technique. Un appareil déplacé, une commande difficile d’accès ou une anomalie constatée entre deux visites mérite d’être transmise. Cette boucle simple relie l’usage quotidien au travail de maintenance.",
        ],
      },
    ],
  },
];

export const articles: Article[] = [existingArticles[0], ...expandedArticles, ...existingArticles.slice(1)];

export const getArticle = (slug: string) => articles.find((article) => article.slug === slug);
