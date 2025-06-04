
import React from 'react';

interface ImageGridProps {
  title: string;
  images: string[];
  type: 'candidates' | 'offers';
}

const ImageGrid = ({ title, images, type }: ImageGridProps) => {
  const getImageUrl = (imageId: string) => `https://images.unsplash.com/${imageId}?auto=format&fit=crop&w=300&h=200`;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((imageId, index) => (
          <div key={index} className="relative group">
            <img
              src={getImageUrl(imageId)}
              alt={`${type} ${index + 1}`}
              className="w-full h-40 object-cover rounded-lg transition-transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all rounded-lg"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
