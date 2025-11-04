export interface Product {
  id: string;
  brand: string;
  model: string;
  power: string;
  price: number;
  priceWithAid: number;
  features: string[];
  imageUrl: string;
  cop: string;
  heating: boolean;
  hotWater: boolean;
  reversible: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "atlantic-alfea-extensa-duo",
    brand: "Atlantic",
    model: "Alfea Extensa Duo +",
    power: "8 kW",
    price: 12500,
    priceWithAid: 4500,
    features: [
      "Chauffage + Eau chaude sanitaire",
      "Ballon intégré 190L",
      "Très silencieuse (35 dB)",
      "COP jusqu'à 4.5",
      "Garantie 5 ans"
    ],
    imageUrl: "/images/products/atlantic-pac.jpg",
    cop: "4.5",
    heating: true,
    hotWater: true,
    reversible: false
  },
  {
    id: "daikin-altherma-3",
    brand: "Daikin",
    model: "Altherma 3 H HT",
    power: "11 kW",
    price: 13800,
    priceWithAid: 5300,
    features: [
      "Haute température 70°C",
      "Fonction réversible",
      "Compatible radiateurs existants",
      "COP jusqu'à 4.3",
      "Garantie 5 ans"
    ],
    imageUrl: "/images/products/daikin-pac.jpg",
    cop: "4.3",
    heating: true,
    hotWater: false,
    reversible: true
  },
  {
    id: "mitsubishi-ecodan",
    brand: "Mitsubishi",
    model: "Ecodan Hydrobox",
    power: "8 kW",
    price: 14200,
    priceWithAid: 5700,
    features: [
      "Technologie Zubadan -25°C",
      "Ultra silencieuse",
      "Production ECS intégrée",
      "COP jusqu'à 4.6",
      "Garantie 7 ans"
    ],
    imageUrl: "/images/products/mitsubishi-pac.jpg",
    cop: "4.6",
    heating: true,
    hotWater: true,
    reversible: false
  },
  {
    id: "panasonic-aquarea",
    brand: "Panasonic",
    model: "Aquarea T-CAP",
    power: "9 kW",
    price: 11900,
    priceWithAid: 4400,
    features: [
      "Fonctionne jusqu'à -20°C",
      "Option ballon 200L",
      "Connectée et pilotable",
      "COP jusqu'à 4.4",
      "Garantie 5 ans"
    ],
    imageUrl: "/images/products/panasonic-pac.jpg",
    cop: "4.4",
    heating: true,
    hotWater: true,
    reversible: false
  },
  {
    id: "saunier-duval-genia",
    brand: "Saunier Duval",
    model: "Genia Air Max",
    power: "8 kW",
    price: 10800,
    priceWithAid: 3800,
    features: [
      "Compacte et design",
      "Pilotage intelligent",
      "Production ECS 180L",
      "COP jusqu'à 4.2",
      "Garantie 5 ans"
    ],
    imageUrl: "/images/products/saunier-duval-pac.jpg",
    cop: "4.2",
    heating: true,
    hotWater: true,
    reversible: false
  },
  {
    id: "de-dietrich-alezio",
    brand: "De Dietrich",
    model: "Alezio S V200",
    power: "11 kW",
    price: 15200,
    priceWithAid: 6200,
    features: [
      "Haute performance énergétique",
      "Ballon ECS 200L",
      "Mode rafraîchissement",
      "COP jusqu'à 4.7",
      "Garantie 7 ans"
    ],
    imageUrl: "/images/products/de-dietrich-pac.jpg",
    cop: "4.7",
    heating: true,
    hotWater: true,
    reversible: true
  }
];

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  product?: string;
}

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Marie Dubois",
    location: "Paris",
    rating: 5,
    date: "2024-10-15",
    comment: "Installation impeccable de notre pompe à chaleur Atlantic. L'équipe IZI by EDF a été très professionnelle. Nous constatons déjà une baisse significative de nos factures de chauffage !",
    product: "Atlantic Alfea Extensa Duo +"
  },
  {
    id: "2",
    name: "Jean-Pierre Martin",
    location: "Lyon",
    rating: 5,
    date: "2024-09-28",
    comment: "Très satisfait de ma PAC Daikin installée par IZI by EDF. Le conseiller a pris le temps de bien dimensionner l'installation. Le confort thermique est excellent même par grand froid.",
    product: "Daikin Altherma 3"
  },
  {
    id: "3",
    name: "Sophie Leroux",
    location: "Bordeaux",
    rating: 4,
    date: "2024-10-02",
    comment: "Bon accompagnement du début à la fin. L'installation s'est bien passée. Seul petit bémol : un léger bruit de l'unité extérieure mais rien de gênant. Je recommande !",
    product: "Mitsubishi Ecodan"
  },
  {
    id: "4",
    name: "Pierre Blanchard",
    location: "Nantes",
    rating: 5,
    date: "2024-09-10",
    comment: "Excellente prestation. Les aides financières ont été bien gérées par IZI. Notre Panasonic Aquarea fonctionne à merveille et nous fait économiser beaucoup sur nos factures de gaz.",
    product: "Panasonic Aquarea"
  },
  {
    id: "5",
    name: "Catherine Moreau",
    location: "Toulouse",
    rating: 5,
    date: "2024-08-22",
    comment: "Je recommande vivement IZI by EDF. Conseils pertinents, installation rapide et soignée. Notre maison est maintenant parfaitement chauffée avec la pompe à chaleur De Dietrich.",
    product: "De Dietrich Alezio"
  },
  {
    id: "6",
    name: "Alain Bernard",
    location: "Strasbourg",
    rating: 4,
    date: "2024-10-20",
    comment: "Très bon rapport qualité/prix avec la Saunier Duval. Installation professionnelle. L'artisan était ponctuel et a bien expliqué le fonctionnement de l'appareil.",
    product: "Saunier Duval Genia Air"
  }
];