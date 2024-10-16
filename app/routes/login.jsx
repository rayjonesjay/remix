import { Link, Form } from "@remix-run/react";

export default function Login() {
  return (
    <div className="auth-container">
      <h1>Login</h1>
      <Form method="post" className="auth-form">
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </Form>
      <p>
        Don’t have an account? <Link to="/signup">Signup</Link>
      </p>
    </div>
  );
}

export let action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");

  console.log("Login Data:", { email, password });
  return { success: true };
};
