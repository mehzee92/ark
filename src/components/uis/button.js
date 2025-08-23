const Button = ({ text, onClick, variant = 'info', type = 'button' }) => {

  var variants = {
    info: `    mx-1  border border-1  border-gray-100  rounded-4xl font-bold  cursor-pointer text-gray-50 bg-gradient-to-r  font-semibold from-gray-400 to-gray-600 px-6 py-1 lg:py-2 focus:outline-none text-gray-50 transition hover:shadow-lg hover:shadow-cyan-400/25 text-xl`,
    success: ` mx-1  border border-1  border-gray-100  rounded-4xl font-bold  cursor-pointer bg-gradient-to-r from-green-600 to-green-900 px-3 lg:px-6 py-1 lg:py-2 focus:outline-none transition hover:shadow-lg hover:shadow-green-700/25 text-xl`,
    outlined: `mx-1  border border-1  border-gray-100  rounded-4xl font-bold  cursor-pointer border-cyan-300 text-gray-50 bg-transparent  px-6 py-1 lg:py-2 focus:outline-none transition hover:text-gree-400 text-xl`
  }

  return ( 
    <button
      type={type}
      onClick={onClick}
      className={variants[variant]}
    >
      {text}
    </button>
  );
};

export default Button;
  