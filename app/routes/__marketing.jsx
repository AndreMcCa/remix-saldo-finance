import React from "react";

import { Outlet } from "@remix-run/react";

import MainHeader from "~/components/navigation/MainHeader";

import marketingStyles from "~/styles/marketing.css";

export default function MarketingLayout() {
  return (
    <React.Fragment>
      <MainHeader />
      <Outlet />
    </React.Fragment>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: marketingStyles }];
}
