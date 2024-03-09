const Header = ({ transactions }) => {
  // return (
  //   <div>
  //     <h1>Expense Tracker</h1>
  //     <p>Your Balance:  {transactions.reduce((total, transaction) => total + (transaction.type === 'income' ? transaction.amount : -transaction.amount), 0).toFixed(2)}</p>
  //   </div>
  // );
  return (
    <>
      <h1>Expense Tracker</h1>
      <h6>Your Balance</h6>
      <p>
        {transactions
          .reduce(
            (total, transaction) =>
              total +
              (transaction.type === "income"
                ? transaction.amount
                : -transaction.amount),
            0
          )
          .toFixed(2)}
      </p>
    </>
  );
};

export default Header;
