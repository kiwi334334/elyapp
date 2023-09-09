import { Elysia } from "elysia";
import { html } from '@elysiajs/html'
import * as elements from "typed-html";

const app = new Elysia()

app.use(html())

app.get("/", ({ html }) =>
  html(
    <BaseHTML>
      <h1>Awsome</h1>
    </BaseHTML>
  ))
app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

let BaseHTML = ({ children }: elements.Children) => `
  <!DOCTYPE html >
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>nice</title>
        <script src="https://unpkg.com/htmx.org@1.9.5" integrity="sha384-xcuj3WpfgjlKF+FXhSQFQ0ZNr39ln+hwjN3npfM9VBnUskLolQAcN80McRIVOPuO" crossorigin="anonymous"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      ${children}
    </html>
`;