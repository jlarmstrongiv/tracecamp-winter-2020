<h1 align="center">
  🔮 Day 4 - Serverless 🔮
</h1>

## Prerequisites

Learn more about how the [internet](../day-0/reference/04-internet.md) works and [frontend vs backend](../day-0/reference/05-frontend-vs-backend.md). An API (Application Programming Interface) is a way for two different applications to talk with each other.

## About serverless

Serverless does not mean you are running your code without a server. Rather, it means your hosting provider is in charge of the server and will only run your code when needed. As a result, you will only pay for the time when your code is actually running, rather than paying for a server to run 24/7.

### Why

Why not just write all our code on the client?

Unfortunately, we cannot trust the client. If we have our API keys on the client, then a malicious user could copy that key and use it for their own purposes. Our server gives us a secure layer to write business logic (our code), which connects to services like databases and 3rd-party APIs.

### Example

There are many patterns to organize your server code. However, our use cases are small, and we will focus on the essentials.

When you make a request to the server, the server will handle the request (req) and send a response (res). Take this bare bones example:

```js
// hello.js
export default (req, res) => {
  response.statusCode = 200;
  response.json({ name: "John Doe" });
};
```

## RESTful API

RESTful API stands for REpresentational State Transfer. Don’t worry too much about it, but feel free to Google it and learn more.

A RESTful API is an architectural style, which helps developers standardize their code and describes what an API should look like. A RESTful API involves status codes and methods, along with other things.

### Status codes

An HTTP Status Code indicates whether a request has been completed. Learn all about the [various](https://http.cat/) codes. The most common one we will use is `200 OK`, meaning the request has completed successfully.

### Methods

There are several HTTP methods. The most common ones are:

- **GET** - Used when retrieving data
- **POST** - Used when creating data
- **PUT** - Used when replacing data entirely
- **PATCH** - Used when updating a part of the data
- **DELETE** - Used when deleting data

```js
export default (req, res) => {
  // check the method on the req
  console.log(req.method);

  response.statusCode = 200;
  response.json({ name: "John Doe" });
};
```

We will make `GET` requests most of the time. An http status code may have different meanings depending on the method.

## Nextjs API routes

Nextjs makes it easy to write serverless functions. Inside the `pages` folder, you will find an `api` folder. Similar to how every file in the `pages` folder becomes a page, every file in the `api` folder will become an api route.

### Demonstration

You will find an example `hello.js` inside the default project made with `create-next-app`. Run your code with `npm run dev`.

Open `http://localhost:3000/api/hello` to make a `GET` request from your browser. Your response should be `{"name":"John Doe"}`.

#### Helpful apps

Download your favorite http client app:

- [Insomnia](https://insomnia.rest/)
- [Postman](https://www.postman.com/)

These clients will help you customize and test your request, allowing you to use different methods or send data.

## Documentation

To learn more about requests and responses:

```js
export default (req, res) => {
  console.log("req", req);
  console.log("res", res);

  response.statusCode = 200;
  response.json({ name: "John Doe" });
};
```

You will find a ton of information. To learn more about the highlights, read the docs:

- https://nextjs.org/docs/api-routes/introduction
- https://vercel.com/docs/serverless-functions/introduction

### Query parameters

You can pass variables to your serverless function handler by using query strings. A query string is the question mark and everything after it in a url. For example, in `https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the query string is `?v=dQw4w9WgXcQ`. Use query strings for non-sensitive information.

`npm install axios query-string`

Client:

```js
import axios from "axios";
import queryString from "query-string";

// http://localhost:3000/api/queryparams?location=Clemson&day=Christmas
const url = queryString.stringifyUrl({
  url: "http://localhost:3000/api/queryparams",
  query: {
    location: "Clemson",
    day: "Christmas",
  },
});

axios.get(url).then((response) => console.log(response.data));
```

Server:

```js
// pages/api/queryparams.js

export default (req, res) => {
  response.json({
    location: req.query.location,
    day: req.query.day,
    forecast: "Snow",
  });
};
```

### Body

A request body should only be sent with `POST`, `PATCH`, and `PUT`. A request body is the secure way to send data.

`npm install axios`

Client:

```js
import axios from "axios";

axios
  .post("http://localhost:3000/api/body", {
    username: "johndoe",
    password: "123456",
  })
  .then((response) => console.log(response.data));
```

Server:

```js
// pages/api/body.js

// pseudo code
function getUser(username, password) {
  return {
    username,
  };
}

export default (req, res) => {
  if (req.method !== "POST") {
    response.statusCode = 405;
    response.json({ error: "Method Not Allowed" });
    return;
  }

  // verify user code here
  const user = getUser(req.body.username, req.body.password);

  response.statusCode = 200;
  response.json(user);
};
```

## Example

### Machine learning

- https://lobe.ai/
- https://github.com/jlarmstrongiv/tfjs-node-lambda-example

### Email sender

- https://sendgrid.com/docs/for-developers/sending-email/quickstart-nodejs/

## Homework

- Make an API route
- Communicate with a 3rd party API that uses a private key
  - If you don’t know which API to use, explore [Rapid API](https://rapidapi.com/)
- Build an interface with React
