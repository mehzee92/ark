const Button = ({ text, onClick, variant = 'info', type = 'button' }) => {

  var variants = {
    info: `mx-1 my-1 rounded-lg text-gray-800 bg-gradient-to-r cursor-pointer text-gray-200 font-semibold from-cyan-300 to-cyan-400 px-6 py-1 lg:py-2 focus:outline-none transition hover:shadow-lg hover:shadow-cyan-400/25`,
    success: ` mx-1 border border-1 border-green-100 rounded-lg cursor-pointer bg-gradient-to-r from-green-600 to-green-900 px-3 lg:px-6 py-1 lg:py-2 focus:outline-none transition hover:shadow-lg hover:shadow-green-700/25 text-lg lg:text-2xl`,
    outlined: ` mx-1 my-1 rounded-lg border-2 cursor-pointer border-cyan-300 text-cyan-300 bg-transparent px-6 py-2 focus:outline-none transition hover:bg-cyan-300 hover:text-gray-800`
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
  