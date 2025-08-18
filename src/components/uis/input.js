const Input = ({ type = 'text', placeholder, value, onChange, className }) => {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full p-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none ${className}`}
      />
    );
  };
  
  export default Input;
  