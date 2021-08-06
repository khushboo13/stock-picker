import React, {useState, useEffect} from 'react';
import { useDebounce } from '../hooks/useDebounce';
import SuggestionsList from './SuggestionsList';

export default function AutoComplete({ apiHandler, onItemClick }) {
   const [userInput, setUserInput] = useState('');
   const [suggestions, setSuggestions] = useState([]);
   const [isSearching, setIsSearching] = useState(false);
   const [notFound, setNotFound] = useState(false);

   const debouncedValue = useDebounce(userInput, 100);

   useEffect(() => {
       if(debouncedValue) {
          setIsSearching(true);
          setNotFound(false);
          apiHandler(debouncedValue)
            .then((results) => {
                setIsSearching(false);
                if(results.bestMatches.length === 0) {
                    setNotFound(true);
                }
                setSuggestions(results.bestMatches)
            });
       }
       
   }, [debouncedValue, apiHandler]);
   const handleInputChange = (evt) => {
      setUserInput(evt.target.value);
   }
  return (
    <div className="w-full">
        <input type="text"
            className="h-16 bg-white border-b border-gray-primary w-full"
            value={userInput} 
            onChange={handleInputChange} 
            placeholder="Enter Symbol to Search"
        />
        <SuggestionsList 
            suggestions={suggestions} 
            isSearching={isSearching}
            notFound={notFound}
            onItemClick={onItemClick}
        />
    </div>
  );
}
