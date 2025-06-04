
import React from 'react';
import { File } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface JobOfferCardProps {
  title: string;
  company: string;
  location: string;
  type: string;
  onSelect: () => void;
}

const JobOfferCard = ({ title, company, location, type, onSelect }: JobOfferCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-center">
      <div className="flex justify-center mb-3">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
          <File className="w-8 h-8 text-green-600" />
        </div>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      <p className="text-sm text-gray-600 mb-2">{company}</p>
      <p className="text-sm text-gray-600 mb-2">{location}</p>
      <p className="text-xs text-gray-500 mb-3">{type}</p>
      <Button 
        onClick={onSelect}
        size="sm"
        className="w-full bg-green-600 hover:bg-green-700"
      >
        Seleccionar
      </Button>
    </div>
  );
};

export default JobOfferCard;
