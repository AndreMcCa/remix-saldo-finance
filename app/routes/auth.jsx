import Auth from "../pages/Auth";

import authStyles from "../styles/auth.css";

export default function AuthRoute() {
  return <Auth></Auth>;
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
