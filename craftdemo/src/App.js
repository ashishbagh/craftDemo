import { Route, Routes, Navigate, useParams } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { useDispatch, useSelector } from "react-redux";
import Menu from "./components/Menu";
import React, { Suspense, useEffect } from "react";
import { fetchRecord, fetchBudget, fetchData } from "./store/app-thunks";
import LoadingSpinner from "./components/LoadingSpinner";
//Lazy Loading
const Transactions = React.lazy(() => import("./components/Transactions"));
const Budgets = React.lazy(() => import("./components/Budgets"));

function App() {
  const state = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const params = useParams();
  let quoteId = 1;
  //Optimize this further
  useEffect(() => {
    dispatch(fetchRecord(quoteId, "accounts"));
  }, []);

  return (
    <div>
      <Suspense fallback={<LoadingSpinner />}>
        <Menu />
        <Routes className="App">
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home/" element={<Home data={state.accounts} />}>
            {/* Considering transaction is dependant on account and vice versa  */}
            <Route
              path={`trsact`}
              element={<Transactions transactions={state.transactions} />}
            ></Route>
            <Route
              path={`trsact/budgets`}
              element={<Budgets data={state.budgets} />}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
