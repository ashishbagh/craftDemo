import { appActions } from "./appSlice";
import { data } from "../store/APIs";

export const fetchData = (url, ids) => {
  const { fetchAll } = calls(url);
  return async (dispatch) => {
    const response = await fetchAll(ids);
    dispatch(appActions.addTransactions(response));
  };
};

export const fetchRecord = (id, url) => {
  const { fetchRecord } = calls(url);
  return async (dispatch) => {
    const response = await fetchRecord(id);
    dispatch(appActions.addAccounts(response));
  };
};

export const fetchBudget = (id, url) => {
  const { fetchRecord } = calls(url);
  return async (dispatch) => {
    const response = await fetchRecord(id);
    dispatch(appActions.addBudgets(response));
  };
};

// *******Dummy Fetch Methods****************//

const calls = (url) => {
  const fetchAll = async (ids) => {
    return new Promise((resolve, reject) => {
      const response = data[url].filter((item) => ids.includes(item.id));
      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  };

  const fetchRecord = async (id) => {
    return new Promise((resolve, reject) => {
      const response = data[url].filter((item) => {
        return item.id === id;
      });
      setTimeout(() => {
        resolve(response);
      }, 2000);
    });
  };

  return { fetchAll: fetchAll, fetchRecord: fetchRecord };
};
