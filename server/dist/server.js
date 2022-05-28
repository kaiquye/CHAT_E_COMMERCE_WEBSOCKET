"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class Server {
    constructor() {
        this.App = (0, express_1.default)();
        this.Middleware();
        this.Routes();
    }
    Middleware() {
        this.App.use(express_1.default.json());
        this.App.use(corsConfig());
        this.App.use(helmetConfig());
    }
    Routes() {
        this.App.get("/teste", (req, res) => {
            console.log(req);
        });
    }
}
exports.default = new Server().App;
