const Button = ({ text, onClick, variant = 'info', type = 'button' }) => {

  var variants = {
    info: `rounded-lg text-gray-800 bg-gradient-to-r cursor-pointer text-gray-200 font-semibold from-cyan-300 to-cyan-400 px-6 py-2 focus:outline-none transition hover:shadow-lg hover:shadow-cyan-400/25`,
    success: `rounded-lg bg-gradient-to-r from-green-600 to-green-700 px-6 py-2 focus:outline-none transition hover:shadow-lg hover:shadow-green-600/25`,
    outlined: `rounded-lg border-2 cursor-pointer border-cyan-300 text-cyan-300 bg-transparent px-6 py-2 focus:outline-none transition hover:bg-cyan-300 hover:text-gray-800`
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
  