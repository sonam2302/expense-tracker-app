// import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import { Button, ListGroup ,Container, Row, Col} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TransactionList = ({ transactions, deleteTransaction }) => {
  // return (
  //   <div>
  //     <ListGroup>
  //       {transactions.map(transaction => (
  //         <ListGroup.Item key={transaction.id} className={`d-flex justify-content-between align-items-center ${transaction.type === 'income' ? 'list-group-item-success' : 'list-group-item-danger'}`}>
  //           <div>
  //             <span>{transaction.date}</span>
  //             <span>{transaction.description}</span>
  //             <span>{transaction.type === 'income' ? `+ $${transaction.amount.toFixed(2)}` : `- $${transaction.amount.toFixed(2)}`}</span>
  //           </div>
  //           <Button variant="danger" size="sm" onClick={() => deleteTransaction(transaction.id)}>
  //             <FontAwesomeIcon icon={faTrash} />
  //           </Button>
  //         </ListGroup.Item>
  //       ))}
  //     </ListGroup>
  //   </div>
  // );
  return (
    <div className="list">
      <ul>
        {transactions?.map((transaction) => {
          return (
            <li
              className={
                "border-end border-5 " +
                (transaction.type === "expense"
                  ? "border-danger"
                  : "border-success")
              }
              key={transaction.id}
            >
              <span className="date">{transaction.date}</span>
              <span className="description">{transaction.description}</span>
              <span className="price">
                {transaction.type === "income" ? "+" : "-"}{" "}
                {transaction.amount.toFixed(2)}
                <button
                  onClick={() => deleteTransaction(transaction.id)}
                  className="btn btn-light"
                >
                  X
                </button>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TransactionList;
