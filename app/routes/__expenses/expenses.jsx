// /expenses => shared layout

import React from "react";

import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaPlus, FaDownload } from "react-icons/fa";

import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";

export default function ExpensesLayout() {
  const expenses = useLoaderData();

  const hasExpenses = expenses?.length > 0;

  return (
    <React.Fragment>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus />
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <FaDownload />
            <span>Load Raw Data</span>
          </a>
        </section>
        {hasExpenses && <ExpensesList expenses={expenses} />}
        {!hasExpenses && (
          <section id="no-expenses">
            <h1>No expenses found</h1>
            <p>
              Start <Link to="add">adding some</Link> today!
            </p>
          </section>
        )}
      </main>
    </React.Fragment>
  );
}

export function loader() {
  return getExpenses();
}
