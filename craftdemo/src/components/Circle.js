import classes from "./Circle.module.css";
const Circle = (props) => {
  return (
    <div className={classes.body}>
      <div className={classes.circle}>
        <div className={classes.center}>{props.data.name}</div>
        <div className={classes.center}>
          Current Balance Rs {props.data.balance}
        </div>
      </div>
    </div>
  );
};

export default Circle;
