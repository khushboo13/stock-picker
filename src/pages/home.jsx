import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import AutoComplete from '../components/AutoComplete';
import Header from '../components/Header';
import { getSearchSymbols } from '../service/getSearchSymbols';

export default function Home() {
  const history = useHistory();
  useEffect(() => {
    document.title = 'Stock Picker homw';
  });

  const detailsPage = (id) => {
    history.push(`/details/${id}`);
  }

  return (
    <div className="bg-gray-background">
      <Header />
      <div style={{"height": '90vh'}} className="flex mx-auto max-w-screen-lg justify-between items-center w-full">
        <AutoComplete 
            apiHandler={getSearchSymbols} 
            onItemClick={detailsPage}
        />
      </div>
    </div>
  );
}
