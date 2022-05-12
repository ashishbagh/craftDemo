const Records = (props) => {
  return (
    <div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            {props.headers.map((item) => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.data &&
            props.data.map((item) => (
              <tr key={item.id}>
                <td>{item.type === "D" ? "Debit" : "Credit"}</td>
                <td>{item.amount}</td>
                <td>{item.closingBalance}</td>
                <td>{item.desc}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Records;
