import React from 'react';

export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white p-4 text-center">
      <p className="text-sm">© 2024 Organic Market. All rights reserved.</p>
      <p className="text-sm">
        <a href="/privacy-policy" className="text-blue-400 hover:underline">Privacy Policy</a> | 
        <a href="/terms-of-service" className="text-blue-400 hover:underline">Terms of Service</a>
      </p>
    </div>
  );
};
