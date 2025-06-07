import React from "react";
import NavBar from "./NavBar";
import useStore from "../store/UseStore";


import Switch from "@mui/material/Switch";
import { FormControlLabel } from "@mui/material";

const Header = () => {
  const { isDarkMode, toggleDarkMode } = useStore();

  return (
    <header className="flex justify-between items-center ">
      <div className="m-4"> </div>
      <div >
        <NavBar  />
      </div>

      <div >
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
