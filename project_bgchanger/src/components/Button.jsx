function Button({ color,onClick }) {
    const colorVariants = {
      red: "bg-red-500 hover:bg-red-600",
      blue: "bg-blue-500 hover:bg-blue-600",
      green: "bg-green-500 hover:bg-green-600",
      yellow: "bg-yellow-500 hover:bg-yellow-600",
      black:"bg-black hover:bg-gray-800",
    };
  
    return (
      <button
        className={`min-w-24 px-4 py-2 text-white rounded-xl shadow-md hover:shadow-lg transition ${colorVariants[color]}`}
        onClick={onClick}
      >
        {color}
      </button>
    );
  }
  export default Button;