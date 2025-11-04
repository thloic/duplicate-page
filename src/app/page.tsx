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
  Euro,
  Thermometer,
  Droplets,
  Zap,
  Shield,
  MapPin,
  Wrench
} from "lucide-react";
import Header from "@/components/Header";

export default function PompeAChaleurAirEauPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section avec breadcrumb */}
      <section className="bg-white text-blue-800 py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="text-xs md:text-sm text-blue-500 mb-4 md:mb-6">
            <a href="/" className="hover:text-blue-700">Accueil</a>
            <span className="mx-2 text-gray-400">›</span>
            <a href="#" className="hover:text-blue-700">Chauffage & Climatisation</a>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-blue-800 font-medium">Pompe à chaleur Air-Eau</span>
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Pompe à chaleur Air-Eau
          </h1>
          <p className="text-base md:text-xl text-gray-600 max-w-3xl mb-6 md:mb-8">
            La pompe à chaleur air-eau (aussi appelée PAC air-eau) est un système qui peut assurer à la fois le chauffage et la production d'eau chaude sanitaire.
          </p>

          <button className="w-full md:w-auto bg-blue-600 text-white hover:bg-blue-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg shadow-md transition-all inline-flex items-center justify-center gap-2">
            Obtenir un devis
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      {/* Section Calculatrice */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Calculez le prix de votre pompe à chaleur
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Obtenez une estimation personnalisée en 2 minutes et découvrez le montant de vos aides
            </p>
          </div>
          
          <Calculator />
        </div>
      </section>

      {/* Section Produits - PLACÉE DIRECTEMENT APRÈS LA CALCULATRICE */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos pompes à chaleur air-eau
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre sélection de pompes à chaleur des plus grandes marques
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-8 md:mt-12">
            <p className="text-xs md:text-sm text-gray-600">
              * Prix indicatif après déduction des aides pour les ménages aux revenus modestes
            </p>
          </div>
        </div>
      </section>

      {/* Section Qu'est-ce qu'une PAC */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 md:mb-6">
                Qu'est-ce qu'une pompe à chaleur air-eau et comment ça fonctionne ?
              </h2>
              
              <div className="prose prose-sm md:prose-lg text-gray-700 space-y-3 md:space-y-4">
                <p>
                  C'est un équipement central qui va permettre de faire circuler de l'eau chaude 
                  dans les radiateurs de la maison. Elle se raccorde à un circuit de chauffage 
                  central et peut chauffer des radiateurs. Elle est également adaptée pour être 
                  reliée à un plancher chauffant.
                </p>
                
                <p>
                  Elle se compose d'une <strong>unité extérieure</strong> chargée de puiser 
                  les calories de l'air et d'une <strong>unité intérieure</strong> qui réinjecte 
                  la chaleur produite dans le circuit de chauffage. Entre les deux, se trouve un 
                  fluide frigorigène.
                </p>
                
                <p>
                  Pour son fonctionnement, la pompe à chaleur exploite les calories présentes 
                  naturellement dans l'air, source d'énergie renouvelable, et gratuite, ainsi 
                  que de l'électricité, afin de produire de la chaleur. Vous participez ainsi 
                  à la protection de l'environnement grâce à ce chauffage écologique, à haute 
                  efficacité énergétique.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Comment ça fonctionne ?
              </h3>
              
              <div className="space-y-4">
                <div className="flex gap-3 md:gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-base md:text-lg">Captation des calories</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      L'unité extérieure capte les calories présentes dans l'air
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 md:gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-base md:text-lg">Compression</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      Le fluide frigorigène comprime et augmente la température
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 md:gap-4 items-start">
                  <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1 text-base md:text-lg">Diffusion</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      La chaleur est diffusée dans votre circuit de chauffage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Comment choisir */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Comment choisir sa PAC air-eau avec IZI by EDF ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Home className="text-blue-600" size={20} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Configuration du logement</h3>
              <p className="text-sm md:text-base text-gray-700">
                Maison neuve ou ancienne, petite ou grande surface, isolation, géolocalisation, nombre d'habitants
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Thermometer className="text-blue-600" size={20} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Équipement existant</h3>
              <p className="text-sm md:text-base text-gray-700">
                Type de chauffage à remplacer et émetteurs de chaleur déjà présents (radiateurs, plancher chauffant)
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4">
                <Zap className="text-blue-600" size={20} />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3">Dimensionnement optimal</h3>
              <p className="text-sm md:text-base text-gray-700">
                Calcul de la puissance nécessaire par votre conseiller dédié IZI by EDF pour un confort optimal
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Les PAC hybrides</h3>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                Dans certains cas, on peut opter pour une pompe à chaleur hybride, afin d'associer 
                le fonctionnement de deux énergies telles que le gaz et l'électricité ou encore 
                le fioul et l'électricité.
              </p>
              <div className="flex items-center gap-2 text-purple-700 font-semibold text-sm md:text-base">
                <Shield size={18} />
                <span>Solution pour les régions froides</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Les PAC réversibles</h3>
              <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                Certains modèles de pompe à chaleur bénéficient d'une option réversible. 
                Dans ce cas, la PAC réversible permet un léger rafraîchissement du logement 
                quand il fait trop chaud.
              </p>
              <div className="flex items-center gap-2 text-cyan-700 font-semibold text-sm md:text-base">
                <Droplets size={18} />
                <span>Chauffage en hiver, fraîcheur en été</span>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-12 bg-white rounded-2xl p-6 md:p-8 border-2 border-blue-200">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 text-center">
              Nos marques partenaires premium
            </h3>
            <p className="text-center text-sm md:text-base text-gray-700 mb-4 md:mb-6">
              Nous choisissons pour vous les modèles les plus performants parmi nos marques partenaires
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 items-center">
              {["Atlantic", "Daikin", "Mitsubishi", "Panasonic", "Saunier Duval", "De Dietrich"].map((brand) => (
                <div key={brand} className="px-4 py-2 md:px-6 md:py-3 bg-gray-50 rounded-lg font-bold text-gray-700 border border-gray-200 text-sm md:text-base">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Prix */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Prix d'une pompe à chaleur air-eau
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              L'achat d'une pompe à chaleur air-eau, pose comprise, oscille actuellement entre 9 000 et 16 000€
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">9 000€</div>
              <div className="text-gray-700 font-semibold mb-3 md:mb-4">Prix de départ</div>
              <ul className="text-xs md:text-sm text-gray-600 space-y-2">
                <li>• PAC simple chauffage</li>
                <li>• Puissance standard</li>
                <li>• Installation classique</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 md:p-8 text-center border-2 border-green-300">
              <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold mb-2">
                LE PLUS CHOISI
              </div>
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">12 000€</div>
              <div className="text-gray-700 font-semibold mb-3 md:mb-4">Prix moyen</div>
              <ul className="text-xs md:text-sm text-gray-600 space-y-2">
                <li>• Chauffage + ECS</li>
                <li>• Ballon intégré</li>
                <li>• Marque premium</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 md:p-8 text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">16 000€</div>
              <div className="text-gray-700 font-semibold mb-3 md:mb-4">Haut de gamme</div>
              <ul className="text-xs md:text-sm text-gray-600 space-y-2">
                <li>• PAC réversible</li>
                <li>• Grande puissance</li>
                <li>• Options premium</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 md:p-8 border-2 border-orange-200">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingDown className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                  Les aides financières disponibles
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4">
                  L'État souhaite supprimer progressivement les anciennes chaudières au gaz ou au fioul, 
                  souvent énergivores au sein des habitations. Des aides gouvernementales ont donc été mises 
                  en place afin de réduire le coût d'une pompe à chaleur air-eau pour les foyers qui y sont éligibles.
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={16} />
                    <span className="text-sm md:text-base text-gray-700">MaPrimeRénov'</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={16} />
                    <span className="text-sm md:text-base text-gray-700">Certificats d'économie d'énergie (CEE)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={16} />
                    <span className="text-sm md:text-base text-gray-700">Coup de pouce chauffage</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={16} />
                    <span className="text-sm md:text-base text-gray-700">Éco-prêt à taux zéro</span>
                  </li>
                </ul>
                <div className="mt-3 md:mt-4 p-3 md:p-4 bg-white rounded-lg">
                  <p className="text-xs md:text-sm text-gray-700">
                    <strong>💡 Important :</strong> L'obtention des aides financières est soumise à certaines conditions 
                    telles que votre niveau de revenus annuels, et faire appel à un artisan professionnel qualifié RGE.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avantages/Inconvénients */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Quels sont les avantages et inconvénients d'une pompe à chaleur air-eau ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Avantages */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-green-600" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Avantages</h3>
              </div>
              
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Faible consommation d'énergie",
                  "Confort d'utilisation",
                  "Pose simple et sans rejets dans l'atmosphère",
                  "Production 2 en 1 : chauffage et eau chaude",
                  "Éligible aux aides financières",
                  "Économies importantes sur vos factures",
                  "COP élevés (jusqu'à 4,5)"
                ].map((advantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm md:text-base text-gray-700">{advantage}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Inconvénients */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <XCircle className="text-orange-600" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Points d'attention</h3>
              </div>
              
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Le niveau sonore de l'unité extérieure",
                  "Des performances moindres en hiver",
                  "Un entretien régulier à réaliser et un contrat plus cher",
                  "Avoir un emplacement idéal"
                ].map((disadvantage, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <XCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                    <span className="text-sm md:text-base text-gray-700">{disadvantage}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 rounded-lg">
                <p className="text-xs md:text-sm text-gray-700">
                  💡 <strong>Bon à savoir :</strong> Les coefficients de performance (COP) des PAC sont élevés, 
                  certains modèles produisent 4,5 fois plus d'énergie qu'ils n'en consomment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Différence PAC air-eau / air-air */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 md:mb-12 text-center">
            Différence entre une pompe à chaleur air-eau et air-air
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Home className="text-white" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">PAC Air-Eau</h3>
              </div>
              
              <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Production d'eau chaude sanitaire possible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Compatible avec radiateurs existants
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Éligible aux aides financières
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Idéale pour remplacer une chaudière
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Ballon d'eau chaude intégré (10 à 300L)
                  </span>
                </li>
              </ul>
              
              <div className="bg-white rounded-lg p-3 md:p-4">
                <p className="text-xs md:text-sm text-gray-800 font-semibold">
                  Prix : 9 000€ à 16 000€
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 rounded-2xl shadow-lg p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-cyan-600 rounded-full flex items-center justify-center">
                  <Settings className="text-white" size={20} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">PAC Air-Air</h3>
              </div>
              
              <ul className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Fonction climatisation réversible
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="text-cyan-600 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Diffusion d'air chaud ou froid
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Pas de production d'eau chaude
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Non éligible aux aides MaPrimeRénov'
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                  <span className="text-sm md:text-base text-gray-800">
                    Anciens radiateurs à désinstaller
                  </span>
                </li>
              </ul>
              
              <div className="bg-white rounded-lg p-3 md:p-4">
                <p className="text-xs md:text-sm text-gray-800 font-semibold">
                  Prix : 6 000€ à 12 000€
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Avis clients */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Ils nous font confiance
            </h2>
            <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto">
              Plus de 50 000 clients satisfaits par nos installations
            </p>
            
            <div className="flex justify-center items-center gap-2 mt-4 md:mt-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl md:text-2xl">★</span>
                ))}
              </div>
              <span className="text-lg md:text-xl font-bold text-gray-900">4.8/5</span>
              <span className="text-gray-600 text-sm md:text-base">(2 847 avis)</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Section CTA finale */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Prêt à passer à la pompe à chaleur ?
          </h2>
          <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8">
            Nos conseillers vous accompagnent gratuitement dans votre projet
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <button className="group flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-2xl transition-all">
              <Phone size={18} />
              01 82 88 99 88
            </button>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-2xl transition-all">
              Demander un devis gratuit
              <ArrowRight size={18} />
            </button>
          </div>
          
          <p className="text-xs md:text-sm text-blue-200 mt-6 md:mt-8">
            ✓ Devis gratuit en 48h • ✓ Artisans RGE certifiés • ✓ Aides gérées pour vous
          </p>
        </div>
      </section>
    </div>
  );
}