function Button({ color }) {

    const colorVariants = {
      red: "bg-red-500 hover:bg-red-600",
      blue: "bg-blue-500 hover:bg-blue-600",
      green: "bg-green-500 hover:bg-green-600",
      yellow: "bg-yellow-500 hover:bg-yellow-600",
      black:"bg-black hover:bg-gray-800",
    };
  
    return (
      <button
        className={`px-4 py-2 text-white rounded-md transition ${colorVariants[color]}`}
      >
        {color}
      </button>
    );
  }
  
  export default Button;