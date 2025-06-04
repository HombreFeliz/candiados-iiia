
import React from 'react';
import { User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CandidateCardProps {
  name: string;
  age: number;
  skills: string;
  experience: string;
  onSelect: () => void;
}

const CandidateCard = ({ name, age, skills, experience, onSelect }: CandidateCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
      <div className="flex justify-center mb-3">
        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
          <User className="w-8 h-8 text-blue-600" />
        </div>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-600 mb-2">Edad: {age} años</p>
      <p className="text-sm text-gray-600 mb-2">{skills}</p>
      <p className="text-xs text-gray-500 mb-3">{experience}</p>
      <Button 
        onClick={onSelect}
        size="sm"
        className="w-full bg-blue-600 hover:bg-blue-700"
      >
        Seleccionar
      </Button>
    </div>
  );
};

export default CandidateCard;
