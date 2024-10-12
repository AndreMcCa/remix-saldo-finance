import { Form, Link, useSearchParams, useNavigation } from "@remix-run/react";
import { FaLock, FaUserPlus } from "react-icons/fa";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const navigation = useNavigation();

  const authMode = searchParams.get("mode") || "login";
  const isLoginMode = authMode === "login";

  const isSubmitting = navigation.state !== "idle";

  const submitBtnCaption = isLoginMode ? "Login" : "Create Account";
  const toggleBtnCaption = isLoginMode ? "Create new account" : "Log in with existing user";
  const toggleUrl = isLoginMode ? "?mode=signup" : "?mode=login";
  const icon = isLoginMode ? <FaLock /> : <FaUserPlus />;

  return (
    <Form method="post" className="form" id="auth-form">
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
        <button disabled={isSubmitting}>{isSubmitting ? "Authenticating..." : submitBtnCaption}</button>
        <Link to={toggleUrl}>{toggleBtnCaption}</Link>
      </div>
    </Form>
  );
}

export default AuthForm;
