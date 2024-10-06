import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import ExpenseForm from "~/components/expenses/ExpenseForm";

import Modal from "~/components/util/Modal";

import { addExpenses } from "~/data/expenses.server";
import { validateExpenseInput } from "~/data/validation.server";

export default function AddExpensesPage() {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate("..");
  };

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpenses(expenseData);
  return redirect("/expenses");
}
