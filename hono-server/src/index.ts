import { serve } from "@hono/node-server";
import { Hono } from "hono";
import visionRoutes from "./routes/vision";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/vision", visionRoutes);

const port = 8080;
console.log(`Server running at http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
