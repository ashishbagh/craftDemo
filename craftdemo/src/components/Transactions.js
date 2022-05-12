import LoadingSpinner from "./LoadingSpinner";
import Records from "./Records";

const Transactions = (props) => {
  const headers = [
    "Transaction Type",
    "Amount",
    "Closing Balance",
    "Description",
  ];
  return (
    <div>
      {props.transactions.length === 0 && <LoadingSpinner />}
      {props.transactions.length > 0 && (
        <Records data={props.transactions} headers={headers} />
      )}
    </div>
  );
};

export default Transactions;
