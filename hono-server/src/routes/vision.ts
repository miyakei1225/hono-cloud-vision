import { Hono } from "hono";
import { analyzeImage } from "../services/visionService";

export const visionRoutes = new Hono();

// POST /vision/analyze で画像解析を実施
visionRoutes.post("/analyze", async (c) => {
  // リクエストボディから imageUrl を取得
  const { imageUrl } = await c.req.json();
  try {
    // Cloud Vision API を利用して画像解析
    const result = await analyzeImage(imageUrl);
    return c.json({ result });
  } catch (error: any) {
    return c.json({ error: error.message }, 500);
  }
});
