
import React from 'react';

interface RecommendationCardProps {
  title: string;
  description: string;
  match: string;
  type: 'candidate' | 'offer';
}

const RecommendationCard = ({ title, description, match, type }: RecommendationCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
          type === 'candidate' 
            ? 'bg-blue-100 text-blue-800' 
            : 'bg-green-100 text-green-800'
        }`}>
          {match}
        </span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default RecommendationCard;
