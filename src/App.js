import React, { useState } from 'react';
import Header from './components/Header';
import Summary from './components/Summary';
import TransactionList from './components/TransactionList';
import UserForm from './components/UserForm';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import "./App.css";

// const validationSchema = Yup.object({
//   description: Yup.string().required('Description is required'),
//   amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
//   date: Yup.date().required('Date is required'),
//   type: Yup.string().oneOf(['income', 'expense']).required('Type is required'),
// });

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (values, { resetForm }) => {
    const newTransaction = {
      id: Date.now(),
      description: values.description,
      amount: parseFloat(values.amount),
      date: values.date,
      type: values.type,
    };

    setTransactions([...transactions, newTransaction]);
    resetForm();
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter(transaction => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  // return (
  //   <Container>
  //     <Row className="mt-5">
  //       <Col>
  //         <Header transactions={transactions} />
  //       </Col>
  //     </Row>

  //     <Row className="mt-3">
  //       <Col>
  //         <Summary transactions={transactions} />

  //       </Col>
       
  //     </Row>

  //     <Row className="mt-3">
  //       <Col>
  //         <UserForm addTransaction={addTransaction} />
  //       </Col>
  //     </Row>

  //     <Row className="mt-3">
  //       <Col>
  //         <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
  //       </Col>
  //     </Row>
  //   </Container>
  // );

  return (
    <div className="App">
      <div className="container">
        <div className="col-md-4 offset-md-4 text-center">
        <Header transactions={transactions} />
        </div>
        <div className="col-md-4 offset-md-4">
        <Summary transactions={transactions} />

        </div>
        <div className="col-md-4 offset-md-4">
        <UserForm addTransaction={addTransaction} />
        </div>
        <div className="col-md-4 offset-md-4">
        <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
        </div>
      </div>
    </div>
  );

};

export default App;
