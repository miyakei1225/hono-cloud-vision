"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_server_1 = require("@hono/node-server");
const hono_1 = require("hono");
const vision_1 = __importDefault(require("./routes/vision"));
const app = new hono_1.Hono();
app.get("/", (c) => {
    return c.text("Hello Hono!");
});
app.route("/vision", vision_1.default);
const port = 8080;
console.log(`Server running at http://localhost:${port}`);
(0, node_server_1.serve)({
    fetch: app.fetch,
    port,
});
