import { Links, LiveReload, Outlet } from "@remix-run/react";
import authStyles from "./styles/auth.css";

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}

export default function App() {
  return (
    <html lang="en">
    <head>
      <title>Auth App</title>
      <Links />
    </head>
    <body>
    <Outlet />
    <LiveReload />
    </body>
    </html>
  );
}
