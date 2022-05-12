import { data } from "../store/APIs";

const useCalls = (url) => {
  const getCall = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data[url]);
      }, 2000);
    });
  };

  return { get: getCall };
};

export default useCalls;
