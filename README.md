# 🌗 React Theme Toggle App (Context + Tailwind CSS)

This is a simple React app that allows users to switch between **light** and **dark** themes using the **Context API**. The UI is styled using **Tailwind CSS**, and the toggle button updates the background and text colors accordingly.

---

## 🔧 Features

- 🌞 Light and 🌚 Dark mode
- Built with **React functional components**
- Uses **Context API** for global theme state
- Styled with **Tailwind CSS**
- Fully responsive layout

--- 💡 How It Works

- A themeContext is created using createContext().
- The ThemeProvider component holds the state (theme) and a toggleTheme function
- Home.jsx uses useContext(themeContext) to access and toggle the theme.
- Tailwind classes are applied conditionally based on the current theme.
