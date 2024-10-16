## remix js
remix js is a full stack (front+back)end React-based framework that allows one to render code on the server
which is faster.

remix is built to simplify complex tasks like `nested routing, data fetching, and form handling.`
Its architecture allows for efficient rendering, loading only the necessary parts of the page.

remix ensures that your application works seamlessly, even when javascript is disabled.

### key features

Routing:
It supports routing based on file structures.
It allows you to create nested routes. In remix nested routes inherit their UI from the parent
route component.

Data fetching:
In any given route, you export a React component for your front-end UI.
But you can also define a loader function that will fetch data on the server and send it to the front-end.

Your React component could access the fetched data by using the useLoaderData hook.


## ssr - server side rendering



### routing in remix
routing in remix is file-base, which means routes of your application are determined by the files inside 
the routes/ directory. Each file corresponds to a route, and you can define nested routes
by creating nested directories and files.

> 'routes/index.tsx' page of your application. accessible at /
> 'routes/about.tsx' this would be accessible at /about
> 'routes/dashboard/index.tsx' this would handle /dashboard

remix allows dynamic routing using parameters. for instance, you can create a route like 
'routes/posts/$postsId.tsx' to handle dynamic URLs such as /posts/123


## managing routes and layouts
remix uses nested routes, which allows you to build complex layouts by nesting your routes within
one another.
