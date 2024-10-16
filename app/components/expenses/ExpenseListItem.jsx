import { /* Form, */ Link, useFetcher /*  useSubmit */ } from "@remix-run/react";

function ExpenseListItem({ id, title, amount }) {
  // const submit = useSubmit();
  const fetcher = useFetcher();

  function deleteExpenseItemHandler() {
    // submit(null, { method: "delete", action: `/expenses/${id}` });
    const procees = confirm("Are you sure?");

    if (!procees) {
      return;
    }

    fetcher.submit(null, { method: "delete", action: `/expenses/${id}` });
  }

  if (fetcher.state === "loading") {
    return <article className="expense_item locked">Deleting ...</article>;
  }

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
      </div>
      <menu className="expense-actions">
        {/* <Form method="delete" action={`/expenses/${id}`}>
          <button>Delete</button>
        </Form> */}

        <button onClick={deleteExpenseItemHandler}>Delete</button>
        <Link to={id}>Edit</Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
