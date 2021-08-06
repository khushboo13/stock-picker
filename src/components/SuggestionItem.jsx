import React from 'react';
export default function SuggestionItem({ suggestion, onItemClick }) {
  return (
    <div>
        <p 
            className="block no-underline p-3 px-6 text-gray-700 hover:bg-gray-primary cursor-pointer" 
            onClick={() => onItemClick(suggestion["1. symbol"])}
        >
            {suggestion["2. name"]}
        </p>
    </div>
  );
}
