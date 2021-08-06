import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-primary">
      <div className="container mx-auto h-full max-w-screen-lg">
        <div className="flex justify-center h-full">
          <Link to="/">
            <div className="flex items-center text-gray-700 text-center cursor-pointer">
              Stock Picker Widget
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
