import LoadingSpinner from "./LoadingSpinner";

const Budgets = (props) => {
  const headers = ["Account Number", "Total Consume", "Budget", "Month"];
  return (
    <div>
      {props.data.length === 0 && <LoadingSpinner />}
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {headers.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((item) => (
              <tr key={item.id}>
                <td>{item.accountnum}</td>
                <td>{item.totalcon}</td>
                <td>{item.Budget}</td>
                <td>{item.Month}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Budgets;
