"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface CalculatorProps {
  onEstimate?: (data: EstimateData) => void;
}

export interface EstimateData {
  houseType: string;
  surface: number;
  residents: number;
  currentHeating: string;
  revenues: string;
  estimatedPrice: number;
  estimatedAid: number;
  finalPrice: number;
}

export default function Calculator({ onEstimate }: CalculatorProps) {
  const [step, setStep] = useState(1);
  const [houseType, setHouseType] = useState("");
  const [surface, setSurface] = useState("");
  const [residents, setResidents] = useState("");
  const [currentHeating, setCurrentHeating] = useState("");
  const [revenues, setRevenues] = useState("");
  const [showResult, setShowResult] = useState(false);

  const calculateEstimate = (): EstimateData => {
    const surfaceNum = parseInt(surface) || 100;
    const residentsNum = parseInt(residents) || 2;
    
    // Calcul du prix de base en fonction de la surface
    let basePrice = 10000;
    if (surfaceNum > 150) basePrice = 14000;
    else if (surfaceNum > 100) basePrice = 12000;
    
    // Ajout pour production ECS
    if (residentsNum > 3) basePrice += 1500;
    
    // Calcul des aides en fonction des revenus
    let aidAmount = 0;
    if (revenues === "tres-modestes") {
      aidAmount = basePrice * 0.65; // 65% d'aides
    } else if (revenues === "modestes") {
      aidAmount = basePrice * 0.50; // 50% d'aides
    } else if (revenues === "intermediaires") {
      aidAmount = basePrice * 0.35; // 35% d'aides
    } else {
      aidAmount = basePrice * 0.20; // 20% d'aides
    }
    
    const finalPrice = basePrice - aidAmount;
    
    return {
      houseType,
      surface: surfaceNum,
      residents: residentsNum,
      currentHeating,
      revenues,
      estimatedPrice: basePrice,
      estimatedAid: aidAmount,
      finalPrice: Math.max(finalPrice, 0)
    };
  };

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    } else {
      const estimate = calculateEstimate();
      setShowResult(true);
      if (onEstimate) onEstimate(estimate);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProceed = () => {
    switch (step) {
      case 1: return houseType !== "";
      case 2: return surface !== "";
      case 3: return residents !== "";
      case 4: return currentHeating !== "";
      case 5: return revenues !== "";
      default: return false;
    }
  };

  const resetCalculator = () => {
    setStep(1);
    setHouseType("");
    setSurface("");
    setResidents("");
    setCurrentHeating("");
    setRevenues("");
    setShowResult(false);
  };

  if (showResult) {
    const estimate = calculateEstimate();
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Votre estimation personnalisée
        </h3>
        
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-medium">Prix de l'installation</span>
              <span className="text-2xl font-bold text-gray-900">
                {estimate.estimatedPrice.toLocaleString('fr-FR')} €
              </span>
            </div>
            <div className="flex justify-between items-center mb-4 pb-4 border-b border-blue-200">
              <span className="text-green-700 font-medium">Aides déduites</span>
              <span className="text-2xl font-bold text-green-600">
                - {estimate.estimatedAid.toLocaleString('fr-FR')} €
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-900">Reste à charge</span>
              <span className="text-3xl font-bold text-blue-600">
                {estimate.finalPrice.toLocaleString('fr-FR')} €
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 mb-1">Type de logement</div>
              <div className="font-semibold text-gray-900">
                {houseType === "maison" ? "Maison" : "Appartement"}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 mb-1">Surface</div>
              <div className="font-semibold text-gray-900">{surface} m²</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 mb-1">Occupants</div>
              <div className="font-semibold text-gray-900">{residents} personnes</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="text-gray-500 mb-1">Chauffage actuel</div>
              <div className="font-semibold text-gray-900 capitalize">{currentHeating}</div>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={resetCalculator}
              className="flex-1 px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
            >
              Nouvelle simulation
            </button>
            <button
              className="flex-1 px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg"
            >
              Être rappelé(e)
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-blue-600">
            Étape {step} sur 5
          </span>
          <span className="text-sm text-gray-500">
            {Math.round((step / 5) * 100)}% complété
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Quel est votre type de logement ?
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setHouseType("maison")}
              className={`p-6 rounded-xl border-2 transition-all ${
                houseType === "maison"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="text-4xl mb-3">🏠</div>
              <div className="font-semibold text-gray-900">Maison</div>
            </button>
            <button
              onClick={() => setHouseType("appartement")}
              className={`p-6 rounded-xl border-2 transition-all ${
                houseType === "appartement"
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 hover:border-blue-300"
              }`}
            >
              <div className="text-4xl mb-3">🏢</div>
              <div className="font-semibold text-gray-900">Appartement</div>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Quelle est la surface de votre logement ?
          </h3>
          <div className="space-y-4">
            <input
              type="number"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
              placeholder="Ex: 120"
              className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none"
            />
            <div className="flex gap-2 flex-wrap">
              {[80, 100, 120, 150, 200].map((s) => (
                <button
                  key={s}
                  onClick={() => setSurface(s.toString())}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-sm"
                >
                  {s} m²
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Combien de personnes occupent le logement ?
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <button
                key={n}
                onClick={() => setResidents(n.toString())}
                className={`p-6 rounded-xl border-2 transition-all ${
                  residents === n.toString()
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="text-3xl font-bold text-gray-900">{n}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Quel est votre système de chauffage actuel ?
          </h3>
          <div className="space-y-3">
            {[
              { value: "gaz", label: "Chaudière gaz", icon: "🔥" },
              { value: "fioul", label: "Chaudière fioul", icon: "🛢️" },
              { value: "electrique", label: "Électrique", icon: "⚡" },
              { value: "autre", label: "Autre", icon: "🔧" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setCurrentHeating(option.value)}
                className={`w-full p-4 rounded-xl border-2 transition-all flex items-center gap-4 ${
                  currentHeating === option.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <span className="text-2xl">{option.icon}</span>
                <span className="font-semibold text-gray-900">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 5 && (
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-900">
            Quelle est votre tranche de revenus ?
          </h3>
          <p className="text-sm text-gray-600">
            Cette information nous permet de calculer vos aides financières
          </p>
          <div className="space-y-3">
            {[
              { value: "tres-modestes", label: "Revenus très modestes", aid: "Jusqu'à 65% d'aides" },
              { value: "modestes", label: "Revenus modestes", aid: "Jusqu'à 50% d'aides" },
              { value: "intermediaires", label: "Revenus intermédiaires", aid: "Jusqu'à 35% d'aides" },
              { value: "superieurs", label: "Revenus supérieurs", aid: "Jusqu'à 20% d'aides" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setRevenues(option.value)}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  revenues === option.value
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-900">{option.label}</span>
                  <span className="text-sm text-green-600 font-medium">{option.aid}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        {step > 1 && (
          <button
            onClick={handleBack}
            className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
          >
            Retour
          </button>
        )}
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className={`flex-1 px-6 py-3 rounded-xl font-semibold transition-all ${
            canProceed()
              ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          {step === 5 ? "Voir mon estimation" : "Continuer"}
        </button>
      </div>
    </div>
  );
}