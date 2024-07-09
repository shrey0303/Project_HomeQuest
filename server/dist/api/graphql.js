"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express4_1 = require("@apollo/server/express4");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("../config/db")); // Adjust this path according to your structure
const context_1 = __importDefault(require("../graphql/context")); // Adjust this path according to your structure
const index_1 = __importDefault(require("../graphql/index"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const bootstrapServer = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.default)();
    yield index_1.default.start();
    app.use((0, cors_1.default)({
        origin: ['https://home-quest-mu.vercel.app', 'http://localhost:5173'],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true
    }));
    app.options('*', (0, cors_1.default)());
    app.use((0, cookie_parser_1.default)());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use("/api/graphql", (0, express4_1.expressMiddleware)(index_1.default, { context: context_1.default }));
    // Handle 404 errors - place this at the end of your middleware chain
    app.use((req, res, next) => {
        res.status(404).send('Not Found');
    });
});
bootstrapServer();
exports.default = app;
//# sourceMappingURL=graphql.js.map