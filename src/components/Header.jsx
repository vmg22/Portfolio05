import React from "react";
import NavBar from "./NavBar";
import useStore from "../store/UseStore";

import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-300 dark:border-gray-700">
      <div>
        <NavBar />
      </div>

      <div>
        <FormControlLabel
          control={
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              inputProps={{ "aria-label": "Toggle dark mode" }}
            />
          }
          label={isDarkMode ? "🌙 Oscuro" : "☀️ Claro"}
        />
      </div>
    </header>
  );
};

export default Header;
