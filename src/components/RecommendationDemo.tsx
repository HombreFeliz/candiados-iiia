
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Users, Briefcase } from 'lucide-react';
import CandidateCard from './CandidateCard';
import JobOfferCard from './JobOfferCard';
import RecommendationCard from './RecommendationCard';

const RecommendationDemo = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<string | null>(null);
  const [selectedOffer, setSelectedOffer] = useState<string | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const candidates = [
    {
      id: '1',
      name: 'Ana García',
      age: 28,
      skills: 'React, TypeScript, CSS',
      experience: '3 años en desarrollo frontend'
    },
    {
      id: '2',
      name: 'Carlos López',
      age: 32,
      skills: 'Node.js, MongoDB, AWS',
      experience: '5 años en desarrollo backend'
    },
    {
      id: '3',
      name: 'María Rodríguez',
      age: 26,
      skills: 'UI/UX, Figma, Photoshop',
      experience: '2 años en diseño digital'
    }
  ];

  const jobOffers = [
    {
      id: '1',
      title: 'Senior React Developer',
      company: 'TechCorp',
      location: 'Madrid, España',
      type: 'Tiempo completo, Remoto'
    },
    {
      id: '2',
      title: 'Frontend Lead',
      company: 'StartupXYZ',
      location: 'Barcelona, España',
      type: 'Tiempo completo, Híbrido'
    },
    {
      id: '3',
      title: 'Full Stack Developer',
      company: 'InnovaTech',
      location: 'Valencia, España',
      type: 'Tiempo completo, Presencial'
    }
  ];

  const mockRecommendations = [
    {
      title: "Ana García - Frontend Developer",
      description: "Especializada en React y TypeScript. 3 años de experiencia en desarrollo web.",
      match: "95% match",
      type: "candidate" as const
    },
    {
      title: "Senior React Developer - TechCorp",
      description: "Posición remota para desarrollar aplicaciones web con React y TypeScript.",
      match: "90% match",
      type: "offer" as const
    },
    {
      title: "María Rodríguez - UI/UX Designer",
      description: "Diseñadora con enfoque en experiencia de usuario y interfaces modernas.",
      match: "88% match", 
      type: "candidate" as const
    }
  ];

  const handleTryIt = () => {
    if (!selectedCandidate && !selectedOffer) {
      alert('Por favor, selecciona al menos un candidato o una oferta');
      return;
    }
    
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-8 h-8 text-indigo-600 mr-2" />
            <h1 className="text-3xl font-bold text-gray-800">
              Sistema de Recomendaciones IA
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            Conectamos candidatos ideales con las mejores oportunidades laborales
          </p>
        </div>

        {/* Candidates Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Users className="w-6 h-6 text-blue-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Candidatos Disponibles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {candidates.map((candidate) => (
              <div 
                key={candidate.id}
                className={`${selectedCandidate === candidate.id ? 'ring-2 ring-blue-500' : ''}`}
              >
                <CandidateCard
                  {...candidate}
                  onSelect={() => setSelectedCandidate(candidate.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Job Offers Section */}
        <div className="mb-8">
          <div className="flex items-center mb-4">
            <Briefcase className="w-6 h-6 text-green-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-800">Ofertas de Trabajo</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {jobOffers.map((offer) => (
              <div 
                key={offer.id}
                className={`${selectedOffer === offer.id ? 'ring-2 ring-green-500' : ''}`}
              >
                <JobOfferCard
                  {...offer}
                  onSelect={() => setSelectedOffer(offer.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Try It Button */}
        <div className="text-center mb-8">
          <Button
            onClick={handleTryIt}
            disabled={isLoading}
            size="lg"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 text-lg font-semibold"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Analizando matches...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Pruébalo Ahora
              </>
            )}
          </Button>
        </div>

        {/* Results Section */}
        {showResults && (
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6">
            <div className="flex items-center mb-6">
              <div className="flex items-center">
                <Sparkles className="w-6 h-6 text-indigo-600 mr-2" />
                <h2 className="text-2xl font-bold text-gray-800">Recomendaciones Generadas</h2>
              </div>
              <div className="ml-auto bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {mockRecommendations.length} matches encontrados
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockRecommendations.map((recommendation, index) => (
                <RecommendationCard
                  key={index}
                  {...recommendation}
                />
              ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start">
                <Briefcase className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                <div>
                  <h4 className="font-semibold text-blue-900 mb-1">
                    Algoritmo de Matching Avanzado
                  </h4>
                  <p className="text-blue-700 text-sm">
                    Nuestro sistema analiza habilidades, experiencia, ubicación y preferencias 
                    para encontrar las mejores coincidencias entre candidatos y ofertas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RecommendationDemo;
