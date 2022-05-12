import { Link } from "react-router-dom";
import img from "../download.jpeg";
import classes from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={classes.body}>
      <div className={classes.login}>
        <img src={img} alt="ross" />
        <div>Ross</div>
      </div>
    </div>
  );
};

export default Menu;
