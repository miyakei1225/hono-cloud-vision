"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hono_1 = require("hono");
const visionService_1 = require("../services/visionService");
const serve_static_1 = require("@hono/node-server/serve-static");
const visionRoutes = new hono_1.Hono();
visionRoutes.post("/analyze", async (c) => {
    // リクエストボディから imageUrl を取得
    const { imageUrl } = await c.req.json();
    try {
        const url = (0, serve_static_1.serveStatic)({ path: "../../static/image.png" });
        console.log(url.name, "urlの名前");
        const result = await (0, visionService_1.analyzeImage)(imageUrl);
        return c.json({ result });
    }
    catch (error) {
        return c.json({ error: error.message }, 500);
    }
});
exports.default = visionRoutes;
