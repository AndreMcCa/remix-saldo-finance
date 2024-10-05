import { Link, useSearchParams } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const authMode = searchParams.get("mode") || "login";
  const isLoginMode = authMode === "login";

  const submitBtnCaption = isLoginMode ? "Login" : "Create Account";
  const toggleBtnCaption = isLoginMode ? "Create new account" : "Log in with existing user";
  const toggleUrl = isLoginMode ? "?mode=signup" : "?mode=login";
  const icon = isLoginMode ? <FaLock /> : <FaUserPlus />;

  return (
    <form method="post" className="form" id="auth-form">
      <div className="icon-img">{icon}</div>
      <p>
        <label htmlFor="email">Email Address</label>
        <input type="email" id="email" name="email" required />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" minLength={7} />
      </p>
      <div className="form-actions">
        <button>{submitBtnCaption}</button>
        <Link to={toggleUrl}>{toggleBtnCaption}</Link>
      </div>
    </form>
  );
}

export default AuthForm;
