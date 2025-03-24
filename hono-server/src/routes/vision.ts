import { Hono } from "hono";
import { analyzeImage } from "../services/visionService";
import { serveStatic } from "@hono/node-server/serve-static";

const visionRoutes = new Hono();

visionRoutes.post("/analyze", async (c) => {
  // リクエストボディから imageUrl を取得
  const { imageUrl } = await c.req.json();
  try {
    const url = serveStatic({ path: "../../static/image.png" });
    console.log(url.name, "urlの名前");
    const result = await analyzeImage(imageUrl);
    return c.json({ result });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});

export default visionRoutes;
