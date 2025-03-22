"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_server_1 = require("@hono/node-server");
var hono_1 = require("hono");
var app = new hono_1.Hono();
app.get("/", function (c) {
    return c.text("Hello Hono!");
});
var port = 8080;
console.log("Server running at http://localhost:".concat(port));
(0, node_server_1.serve)({
    fetch: app.fetch,
    port: port,
});
