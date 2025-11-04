"use client";

import { useState, useEffect } from "react";
import Calculator from "@/components/Calculator";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import { PRODUCTS, REVIEWS } from "@/constants/products";
import {
  CheckCircle2,
  XCircle,
  TrendingDown,
  Leaf,
  Home,
  Settings,
  Phone,
  ArrowRight,
  Award,
  Users,
  Clock,
  Euro
} from "lucide-react";

export default function PompeAChaleurAirEauPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState<'avantages' | 'fonctionnement' | 'installation'>('avantages');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Contenu gauche */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <Leaf className="text-green-300" size={18} />
                <span className="text-sm font-semibold">Solution écologique et économique</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Pompe à Chaleur <span className="text-blue-300">Air-Eau</span>
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Remplacez votre ancienne chaudière par une pompe à chaleur performante. 
                Jusqu'à <span className="font-bold text-white">65% d'aides</span> financières pour votre installation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-300 transform hover:scale-105">
                  <Phone size={20} />
                  Être rappelé gratuitement
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 px-8 py-4 rounded-xl font-semibold text-lg transition-all">
                  Calculer mes aides
                </button>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">65%</div>
                  <div className="text-sm text-blue-200">d'aides max</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">4.5</div>
                  <div className="text-sm text-blue-200">COP moyen</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm text-blue-200">ans de durée</div>
                </div>
              </div>
            </div>
            
            {/* Image droite */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl blur-3xl" />
                <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                    <span className="text-gray-400 text-4xl">🏠</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barre de confiance */}
      <section className="bg-white border-y border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Award className="text-blue-600 mb-2" size={32} />
              <div className="font-bold text-gray-900">Label RGE</div>
              <div className="text-sm text-gray-600">Artisans certifiés</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="text-blue-600 mb-2" size={32} />
              <div className="font-bold text-gray-900">50 000+</div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Clock className="text-blue-600 mb-2" size={32} />
              <div className="font-bold text-gray-900">48h</div>
              <div className="text-sm text-gray-600">Délai de réponse</div>
            </div>
            <div className="flex flex-col items-center text-center">
              <Euro className="text-blue-600 mb-2" size={32} />
              <div className="font-bold text-gray-900">Aides</div>
              <div className="text-sm text-gray-600">Gestion incluse</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Calculatrice */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Calculez le prix de votre pompe à chaleur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Obtenez une estimation personnalisée en 2 minutes et découvrez le montant de vos aides
            </p>
          </div>
          
          <Calculator />
        </div>
      </section>

      {/* Section Qu'est-ce qu'une PAC */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Qu'est-ce qu'une pompe à chaleur air-eau ?
              </h2>
              
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  C'est un équipement central qui permet de faire circuler de l'eau chaude 
                  dans les radiateurs de la maison. Elle se raccorde à un circuit de chauffage 
                  central et peut chauffer des radiateurs ou un plancher chauffant.
                </p>
                
                <p className="mb-4">
                  Elle se compose d'une <strong>unité extérieure</strong> chargée de puiser 
                  les calories de l'air et d'une <strong>unité intérieure</strong> qui réinjecte 
                  la chaleur produite dans le circuit de chauffage.
                </p>
                
                <p>
                  La pompe à chaleur exploite les calories présentes naturellement dans l'air, 
                  source d'énergie renouvelable et gratuite, pour produire de la chaleur. 
                  Vous participez ainsi à la protection de l'environnement grâce à ce 
                  chauffage écologique à haute efficacité énergétique.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Comment ça fonctionne ?
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Captation des calories</h4>
                    <p className="text-gray-700 text-sm">
                      L'unité extérieure capte les calories présentes dans l'air
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Compression</h4>
                    <p className="text-gray-700 text-sm">
                      Le fluide frigorigène comprime et augmente la température
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Diffusion</h4>
                    <p className="text-gray-700 text-sm">
                      La chaleur est diffusée dans votre circuit de chauffage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages/Inconvénients */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Avantages et inconvénients d'une pompe à chaleur air-eau
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Avantages */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Avantages</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Faible consommation d'énergie",
                  "Confort d'utilisation optimal",
                  "Pose simple et sans rejets",
                  "Production 2 en 1 : chauffage et eau chaude",
                  "Éligible aux aides financières",
                  "Économies importantes sur vos factures",
                  "Excellent rendement énergétique (COP élevé)"
                ].map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Inconvénients */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <XCircle className="text-orange-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Points d'attention</h3>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Niveau sonore de l'unité extérieure à considérer",
                  "Performances réduites par grand froid",
                  "Entretien annuel obligatoire",
                  "Nécessité d'un emplacement adapté",
                  "Investissement initial à prévoir"
                ].map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700">{disadvantage}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  💡 <strong>Bon à savoir :</strong> Les avantages l'emportent largement 
                  et les économies réalisées permettent de rentabiliser l'investissement rapidement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Prix */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prix d'une pompe à chaleur air-eau
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              L'achat d'une pompe à chaleur air-eau, pose comprise, oscille entre 9 000€ et 16 000€
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">9 000€</div>
              <div className="text-gray-700 font-semibold mb-4">Prix de départ</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• PAC simple chauffage</li>
                <li>• Puissance standard</li>
                <li>• Installation classique</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center border-2 border-green-300">
              <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                LE PLUS CHOISI
              </div>
              <div className="text-4xl font-bold text-green-600 mb-2">12 000€</div>
              <div className="text-gray-700 font-semibold mb-4">Prix moyen</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Chauffage + ECS</li>
                <li>• Ballon intégré</li>
                <li>• Marque premium</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">16 000€</div>
              <div className="text-gray-700 font-semibold mb-4">Haut de gamme</div>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• PAC réversible</li>
                <li>• Grande puissance</li>
                <li>• Options premium</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 border-2 border-orange-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingDown className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Réduisez votre investissement grâce aux aides
                </h3>
                <p className="text-gray-700 mb-4">
                  Des aides gouvernementales ont été mises en place pour réduire le coût 
                  d'une pompe à chaleur. Selon vos revenus, vous pouvez bénéficier de :
                </p>
                <ul className="grid md:grid-cols-2 gap-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-gray-700">MaPrimeRénov'</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-gray-700">Certificats d'économie d'énergie (CEE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-gray-700">Coup de pouce chauffage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-gray-700">Éco-prêt à taux zéro</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Produits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos pompes à chaleur air-eau
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre sélection de pompes à chaleur des plus grandes marques
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-sm text-gray-600">
              * Prix indicatif après déduction des aides pour les ménages aux revenus modestes
            </p>
          </div>
        </div>
      </section>

      {/* Section Avis clients */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 50 000 clients satisfaits par nos installations
            </p>
            
            <div className="flex justify-center items-center gap-2 mt-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>
              <span className="text-xl font-bold text-gray-900">4.8/5</span>
              <span className="text-gray-600">(2 847 avis)</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Section Différence PAC air-eau / air-air */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
            Différence entre PAC air-eau et air-air
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Home className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">PAC Air-Eau</h3>
              </div>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">
                    Production d'eau chaude sanitaire possible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">
                    Compatible avec radiateurs existants
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">
                    Éligible aux aides financières
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">
                    Idéale pour remplacer une chaudière
                  </span>
                </li>
              </ul>
              
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Prix :</strong> 9 000€ à 16 000€
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                  <Settings className="text-white" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">PAC Air-Air</h3>
              </div>
              
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">
                    Fonction climatisation réversible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">
                    Diffusion d'air chaud ou froid
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">
                    Pas de production d'eau chaude
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={20} />
                  <span className="text-gray-700">
                    Non éligible aux aides MaPrimeRénov'
                  </span>
                </li>
              </ul>
              
              <div className="bg-cyan-50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Prix :</strong> 6 000€ à 12 000€
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Prêt à passer à la pompe à chaleur ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Nos conseillers vous accompagnent gratuitement dans votre projet
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all">
              <Phone size={20} />
              01 82 88 99 88
            </button>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all">
              Demander un devis gratuit
              <ArrowRight size={20} />
            </button>
          </div>
          
          <p className="text-sm text-blue-200 mt-8">
            ✓ Devis gratuit en 48h • ✓ Artisans RGE certifiés • ✓ Aides gérées pour vous
          </p>
        </div>
      </section>
    </div>
  );
}