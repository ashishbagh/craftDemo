import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { Accounts } from "../store/APIs";
import Circle from "./Circle";
import classes from "./Home.module.css";
import { fetchBudget, fetchData } from "../store/app-thunks";
let isAssigned = false;
const id = 1;
const trxIds = [1, 2];
const Home = (props) => {
  const Items = [
    { id: 2, icons: "", name: "Transactions", path: "/home/trsact" },
    { id: 3, icons: "", name: "Trends", path: "/home/trsact" },
    { id: 4, icons: "", name: "Budgets", path: "/home/trsact/budgets" },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData("transactions", trxIds));
  }, [id, trxIds]);

  useEffect(() => {
    dispatch(fetchBudget(1, "budgets"));
  }, [id]);

  return (
    <div>
      <div className={classes.table}>
        {props.data.map((item) => {
          return <Circle key={item.id} data={item} />;
        })}
      </div>
      <div className={classes.sections}>
        {Items.map((item) => (
          <Link
            to={item.path}
            data={item.name}
            key={item.id}
            className={classes.sect}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
export default Home;
