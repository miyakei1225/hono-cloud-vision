import { serve } from "@hono/node-server";
import { Context, Hono } from "hono";
import visionRoutes from "./routes/vision";
import { cors } from "hono/cors";

const app = new Hono().use(
  "*",
  cors({
    // origin: process.env.WEB_URL
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.route("/vision", visionRoutes);

app.onError(async (e, c: Context) => {
  // エラーロギング,Sentry通知など
  console.error(e);
  return c.json({ error: e.message }, 500);
});

const port = 8080;
console.log(`Server running at http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
