import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import es from "../assets/img/flags/Flag_of_Colombia.png";
import en from "../assets/img/flags/us.png";
import chveron_dark from "../assets/icons/chevron-down.svg";
import chveron_light from "../assets/icons/chevron-down-light.svg";

const Lenguage = (props) => {
  const { t, i18n } = useTranslation(["info"]);
  const textColor = props.theme === "light" ? "black" : "white";

  const [anchorEl, setAnchorEl] = useState(null);
  const [leng, setleng] = useState("en");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLenguagetoEs = () => {
    i18n.changeLanguage("es");
    setleng("es");
    setAnchorEl(null);
  };
  const changeLenguagetoEn = () => {
    i18n.changeLanguage("en");
    setleng("en");
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="MenuLenguage"
      >
        {leng === "es" ? (
          <div className="menu">
            <img className="flag" src={es} alt="" />
            {props.theme === "light" ? (
              <img src={chveron_dark} alt="" />
            ) : (
              <img src={chveron_light} alt="" />
            )}
          </div>
        ) : (
          <div className="menu">
            <img className="flag" src={en} alt="" />
            {props.theme === "light" ? (
              <img src={chveron_dark} alt="" />
            ) : (
              <img src={chveron_light} alt="" />
            )}
          </div>
        )}
      </Button>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="MenuLenguage"
      >
        {leng === "es" ? (
          <MenuItem onClick={changeLenguagetoEn} className={"menuitem"}>
            <img className="flag-menu" src={en} alt="Us-Flag" />
            <p style={{ color: textColor }}>English</p>
          </MenuItem>
        ) : (
          <MenuItem onClick={changeLenguagetoEs} className={"menuitem"}>
            <img className="flag-menu" src={es} alt="Col-Flag" />
            <p style={{ color: textColor }}>Spanish</p>
          </MenuItem>
        )}
      </Menu>
    </div>
  );
};

export default Lenguage;
