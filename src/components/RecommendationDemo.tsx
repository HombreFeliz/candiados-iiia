
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Users, Briefcase } from 'lucide-react';
import ImageGrid from './ImageGrid';
import RecommendationCard from './RecommendationCard';

const RecommendationDemo = () => {
  const [showResults, setShowResults] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const candidateImages = [
    'photo-1649972904349-6e44c42644a7',
    'photo-1581091226825-a6a2a5aee158',
    'photo-1519389950473-47ba0277781c'
  ];

  const offerImages = [
    'photo-1488590528505-98d2b5aba04b',
    'photo-1461749280684-dccba630e2f6',
    'photo-1486312338219-ce68d2c6f44d'
  ];

  const mockRecommendations = [
    {
      title: "Ana García - Frontend Developer",
      description: "Especializada en React y TypeScript. 3 años de experiencia en desarrollo web.",
      match: "95% match",
      type: "candidate" as const
    },
    {
      title: "Carlos López - Full Stack Developer", 
      description: "Experto en Node.js y bases de datos. Experiencia en arquitectura de software.",
      match: "88% match",
      type: "candidate" as const
    },
    {
      title: "María Rodríguez - UI/UX Designer",
      description: "Diseñadora con enfoque en experiencia de usuario y interfaces modernas.",
      match: "92% match", 
      type: "candidate" as const
    },
    {
      title: "Senior React Developer - TechCorp",
      description: "Posición remota para desarrollar aplicaciones web con React y TypeScript.",
      match: "90% match",
      type: "offer" as const
    },
    {
      title: "Frontend Lead - StartupXYZ",
      description: "Liderar equipo de frontend en startup de tecnología financiera.",
      match: "85% match",
      type: "offer" as const
    }
  ];

  const handleTryIt = () => {
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

        {/* Image Grids */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ImageGrid 
            title="Candidatos Disponibles"
            images={candidateImages}
            type="candidates"
          />
          <ImageGrid 
            title="Ofertas de Trabajo"
            images={offerImages}
            type="offers"
          />
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
                <Users className="w-6 h-6 text-indigo-600 mr-2" />
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
