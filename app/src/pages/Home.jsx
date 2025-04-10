import React, { useContext } from "react";
import { themeContext } from "../context/ThemeProvider";

const Home = () => {
  const { theme, toggleTheme } = useContext(themeContext);
  return (
    <div
      className={`flex flex-col items-center justify-center h-screen ${
        theme === "light" ? "bg-white" : "bg-black"
      } ${theme === "light" ? "text-black" : "text-white"}`}
    >
      <h1 className="text-3xl text-center mb-4">Building... ⛏️</h1>
      <div>
        <button
          className="border-none bg-blue-500 text-white font-bold p-3 rounded-xl cursor-pointer"
          onClick={toggleTheme}
        >
          Switch
        </button>
      </div>
    </div>
  );
};

export default Home;
