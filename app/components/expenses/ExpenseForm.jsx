import { Form, Link, useActionData, useMatches, useNavigation /* useSubmit */, useParams } from "@remix-run/react";

function ExpenseForm() {
  const navigation = useNavigation();
  const params = useParams();
  const validationErrors = useActionData();
  const matches = useMatches();

  const expenses = matches.find((match) => match.id === "routes/__expenses/expenses").data;
  const expense = expenses.find((exp) => exp.id === params.id);

  const defaultValues = expense
    ? {
        title: expense.title,
        amount: expense.amount,
        date: expense.date.slice(0, 10),
      }
    : {
        title: "",
        amount: "",
        date: "",
      };

  // const submit = useSubmit();

  const isSubmitting = navigation.state !== "idle";
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   // perform your own validation
  //   // ...

  //   submit(event.currentTarget, {
  //     // action: "/expenses/add",
  //     method: "post",
  //   });
  // };

  return (
    <Form method={expense ? "patch" : "post"} className="form" id="expense-form" /* onSubmit={submitHandler} */>
      <p>
        <label htmlFor="title">Expense Title</label>
        <input type="text" id="title" name="title" required maxLength={30} defaultValue={defaultValues.title} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue={defaultValues.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input type="date" id="date" name="date" max={today} required defaultValue={defaultValues.date} />
        </p>
      </div>
      {validationErrors && (
        <ul>
          {Object.values(validationErrors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting ? "Saving..." : "Save Expense"}</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
