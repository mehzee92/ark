import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({ text, onClick, variant = 'info', type = 'button', className = '' }) => {

  const baseStyles = 'mx-1 px-4 py-2 lg:px-6 lg:py-2.5 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer text-base md:text-lg';

  const variants = {
    info: 'bg-gray-700 text-white border border-gray-600 hover:bg-gray-800 focus:ring-gray-500',
    success: 'bg-green-600 text-white border border-green-600 hover:bg-green-700 focus:ring-green-500',
    outlined: 'bg-transparent text-gray-200 border border-gray-400 hover:bg-gray-700 hover:border-gray-700 focus:ring-gray-500',
    'dark-outline': 'bg-transparent text-gray-200 border border-gray-400 hover:bg-gray-700 hover:border-gray-700 focus:ring-gray-500',
    'success-dark': 'bg-green-600 text-white border border-green-600 hover:bg-green-700 focus:ring-green-500',
    'light-outline': 'bg-transparent text-white border border-white hover:bg-white hover:text-gray-900 focus:ring-white'
  };

  const selectedVariant = variants[variant] || variants.info;

  return ( 
    <button
      type={type}
      onClick={onClick}
      className={twMerge(baseStyles, selectedVariant, className)}
    >
      {text}
    </button>
  );
};

export default Button;