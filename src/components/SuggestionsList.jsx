import React from 'react';
import SuggestionItem from './SuggestionItem';

export default function SuggestionsList({ suggestions, isSearching, notFound, onItemClick }) {
  return (
    <div className="bg-white border border-gray-primary rounded-b-lg">
        {
            notFound ? <p className="p-3">No stocks available with this symbol</p> : null
        }
        {   isSearching ? <p className="p-3">Searching...</p> : suggestions.map((suggestion) => (
                <SuggestionItem 
                    key={suggestion["1. symbol"]} 
                    suggestion={suggestion}
                    onItemClick={onItemClick}
                />
            ))
        }
    </div>
  );
}
