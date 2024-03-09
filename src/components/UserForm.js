import { Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  description: Yup.string().required("Description is required"),
  amount: Yup.number()
    .required("Amount is required")
    .positive("Amount must be a positive number"),
  date: Yup.date().required("Date is required"),
  type: Yup.string().oneOf(["income", "expense"]).required("Type is required"),
});

const UserForm = ({ addTransaction }) => {
  return (
    <div>
      <h2>Add Transaction</h2>
      <Formik
        initialValues={{
          description: "",
          amount: "",
          date: "",
          type: "expense",
        }}
        validationSchema={validationSchema}
        onSubmit={addTransaction}
      >
        {/* <Form>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <Field type="text" id="description" name="description" className="form-control" />
              <ErrorMessage name="description" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount:</label>
              <Field type="text" id="amount" name="amount" className="form-control" />
              <ErrorMessage name="amount" component="div" className="text-danger" />
            </div>
            <div className="form-group">
              <label htmlFor="date">Date:</label>
              <Field type="date" id="date" name="date" className="form-control" />
              <ErrorMessage name="date" component="div" className="text-danger" />
            </div>
            <div className="form-check">
              <Field type="radio" id="income" name="type" value="income" className="form-check-input" />
              <label htmlFor="income" className="form-check-label">Income</label>
            </div>
            <div className="form-check">
              <Field type="radio" id="expense" name="type" value="expense" className="form-check-input" />
              <label htmlFor="expense" className="form-check-label">Expense</label>
            </div>
            <Button type="submit" variant="primary" className="mt-2">Add Transaction</Button>
          </Form> */}
        <Form>
          <div className="mb-3">
            <label htmlFor="description">Description:</label>
            <Field
              type="text"
              id="description"
              name="description"
              className="form-control"
              placeholder="Enter Description"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="amount">Amount:</label>
            <Field
              type="text"
              id="amount"
              name="amount"
              className="form-control"
              placeholder="Enter Amount"
            />
            <ErrorMessage
              name="amount"
              component="div"
              className="text-danger"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="date">Date:</label>
            <Field
              type="date"
              id="date"
              name="date"
              className="form-control"
              placeholder="dd-mm-yy"
            />
            <ErrorMessage name="date" component="div" className="text-danger" />
          </div>
          {/* <div className="form-check">
              <Field type="radio" id="income" name="type" value="income" className="form-check-input" />
              <label htmlFor="income" className="form-check-label">Income</label>
            </div>
            <div className="form-check">
              <Field type="radio" id="expense" name="type" value="expense" className="form-check-input" />
              <label htmlFor="expense" className="form-check-label">Expense</label>
            </div> */}
          <div className="mb-3">
            <div role="group">
              <label>
                <Field type="radio" id="income" name="type" value="income" />
                INCOME
              </label>
              <label>
                <Field type="radio" d="expense" name="type" value="expense" />
                EXPENSE
              </label>
            </div>
            <ErrorMessage name="type" />
          </div>
          <Button type="submit" variant="primary" className="mt-2">
            Add Transaction
          </Button>
        </Form>
      </Formik>
    </div>
  );
};
export default UserForm;
