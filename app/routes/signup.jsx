/*
This line imports two components from the Remix library ie, Link and Form
Link -> this component is used to create navigable links with a Remix application.
     -> its functionality is similar to <a> tag in HTML, but it's optimized for
        client-side navigation.
     -> Using 'Link' allows for seamless transitions between pages without full page
        reloads, leveraging React Router's functionality under the hood.

        example:
        <Link to="/about"> About Us Page </Link>
        explanation:
        The above example would create a link that navigates to '/about' route when clicked.

Form -> the Form component is a specialized form handler that integrates with Remix's data loading
        and submission system.
     -> it enhances standard HTML forms by providing features such as automatic handling of form
        submissions, integration with server-side logic. (like loaders and actions) and support for
        transition and loading states.
     -> the `Form` component can handle different HTTP methods (GET,POST,etc) and manage form data more
        effectively than a standard HTML form.

        example:
        <Form method="post" action="/submit">
        <input type="text" name="username" />
        <button type="submit">Submit</button>
        </Form>

        explanation:
        this would create a form that submits data to the `/submit` endpoint using the POST method.
 */
import { Link, Form } from "@remix-run/react"

export default function Signup(){

  return (
    <div className="auth-container">
      <h1>Sign up</h1>
      <Form method="post" className="auth-form">
        <input type="text" name="username" placholder="Username" required />
        <input type="email" name="email" placholder="Email" required />
        <input type="password" name="password" placholder="Password" required />
        <button type="submit">Signup</button>
      </Form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export let action = async ({ request }) => {
  let formData = await request.formData();
  let username = formData.get("username");
  let email = formData.get("email");
  let password = formData.get("password");

  console.log("Signup Data:", { username, email, password });
  return { success: true };
};
