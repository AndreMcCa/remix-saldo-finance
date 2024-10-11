import { useNavigate } from "@remix-run/react";

import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";

import { getExpense } from "~/data/expenses.server";

export default function ExpensesItemPage() {
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
export const loader = async ({ params }) => {
  const id = params.id;

  const expense = await getExpense(id);
  return expense;
};
