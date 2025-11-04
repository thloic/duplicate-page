export interface Product {
  id: string;
  brand: string;
  model: string;
  imageUrl: string;
  price: number;
  priceWithAid: number;
  discount: number;
  rating?: number;
  reviewCount?: number;
  // Ajoutez les autres champs nécessaires selon votre interface
  power?: string;
  cop?: number;
  heating?: boolean;
  hotWater?: boolean;
  reversible?: boolean;
  features?: string[];
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    brand: "Mitsubishi Electric",
    model: "Ecodan Hydrobox Eco Inverter R32",
    imageUrl: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=300&fit=crop",
    price: 10799,
    priceWithAid: 9228,
    discount: 22,
    power: "8 kW",
    cop: 4.2,
    heating: true,
    hotWater: true,
    reversible: false,
    features: [
      "COP jusqu'à 4.2",
      "Gaz réfrigérant R32",
      "Silencieuse (niveau sonore réduit)",
      "Compatible radiateurs existants"
    ]
  },
  {
    id: "2",
    brand: "Mitsubishi Electric",
    model: "Ecodan Hydrobox Duo Eco Inverter R32",
    imageUrl: "https://images.unsplash.com/photo-1635274522883-e2c36df87f33?w=300&h=300&fit=crop",
    price: 15135,
    priceWithAid: 13034,
    discount: 20,
    rating: 5,
    reviewCount: 1,
    power: "11 kW",
    cop: 4.5,
    heating: true,
    hotWater: true,
    reversible: false,
    features: [
      "Ballon ECS intégré 200L",
      "COP jusqu'à 4.5",
      "Technologie Inverter",
      "Gestion intelligente"
    ]
  },
  {
    id: "3",
    brand: "Mitsubishi Electric",
    model: "Eco Inverter + Hyper Heating",
    imageUrl: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?w=300&h=300&fit=crop",
    price: 10735,
    priceWithAid: 9178,
    discount: 22,
    power: "8 kW",
    cop: 4.3,
    heating: true,
    hotWater: false,
    reversible: true,
    features: [
      "Fonctionne jusqu'à -25°C",
      "Technologie Hyper Heating",
      "Haute efficacité énergétique",
      "Réversible chaud/froid"
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Marie L.",
    location: "Paris (75)",
    rating: 5,
    comment: "Installation parfaite, équipe très professionnelle. Ma facture de chauffage a diminué de 60% ! Je recommande vivement.",
    date: "Il y a 2 semaines",
    verified: true
  },
  {
    id: "2",
    name: "Jean-Pierre M.",
    location: "Lyon (69)",
    rating: 5,
    comment: "Excellent service du début à la fin. Les aides ont été gérées par leurs soins, très appréciable. La PAC fonctionne parfaitement.",
    date: "Il y a 1 mois",
    verified: true
  },
  {
    id: "3",
    name: "Sophie D.",
    location: "Marseille (13)",
    rating: 4,
    comment: "Très satisfaite de l'installation. Petit délai d'attente mais résultat impeccable. La maison est bien chauffée et silencieuse.",
    date: "Il y a 3 semaines",
    verified: true
  }
];