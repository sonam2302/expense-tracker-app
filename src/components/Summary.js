// import { Button, ListGroup, Container, Row, Col } from "react-bootstrap";

const Summary = ({ transactions }) => {
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((total, transaction) => total + transaction.amount, 0)
    .toFixed(2);
  const totalExpense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((total, transaction) => total + transaction.amount, 0)
    .toFixed(2);

  //     return (
  //         <Container>
  //   <Row>
  //     <Col>Income:</Col>
  //     <Col>Expense:</Col>
  //   </Row>
  //   <Row>
  //     <Col>{totalIncome}</Col>
  //     <Col>{totalExpense}</Col>
  //   </Row>
  // </Container>
  //     );
  return (
    <div className="summary-card ">
      <div>
        <span>Income:</span>
        <span>{totalIncome}</span>
      </div>
      <div className="line-bar"></div>
      <div>
        <span>Expense:</span>
        <span>{totalExpense}</span>
      </div>
    </div>
  );
};

export default Summary;
