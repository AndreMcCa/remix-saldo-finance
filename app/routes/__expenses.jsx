import React from "react";

import { Outlet } from "@remix-run/react";

import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import expensesStyles from "~/styles/expenses.css";

export default function ExpensesAppLayout() {
  return (
    <React.Fragment>
      <ExpensesHeader />
      <Outlet />
    </React.Fragment>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}
