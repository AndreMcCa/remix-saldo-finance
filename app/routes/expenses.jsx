// /expenses => shared layout

import React from "react";

import { Outlet } from "@remix-run/react";

export default function ExpensesLayout() {
  return (
    <main>
      <p>Shared element!</p>
      <Outlet />
    </main>
  );
}
