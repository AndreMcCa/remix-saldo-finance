import { useCatch, useLoaderData } from "@remix-run/react";

import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import Error from "~/components/util/Error";

import { getExpenses } from "~/data/expenses.server";

export default function ExpensesAnalysisPage() {
  const expenses = useLoaderData();

  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <main>
      <Error title={caught.statusText}>
        {<p>{caught.data?.message || "Something went wrong. Please try again later."}</p>}
      </Error>
    </main>
  );
}

export async function loader() {
  const expenses = await getExpenses();

  if (!expenses || expenses.length === 0) {
    throw new Response("Could not find expenses", {
      status: 404,
      statusText: "No expenses found",
    });
  }

  return expenses;
}
