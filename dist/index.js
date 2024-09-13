"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
var corsOptions = {
    origin: "https://web-chat-mk.vercel.app", // Allow this specific origin
    credentials: true, // Allow credentials (cookies, etc.)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Custom headers allowed
};
app.use((0, cors_1.default)(corsOptions));
// Body parser
app.use(express_1.default.json());
app.post("/chat", function (req, res) {
    // Get message from req.body
    var message = req.body.message;
    // If message is empty, we send an error.
    if (message === "") {
        res
            .status(400)
            .json({ statusCode: 400, error: "Message can not be empty." });
        return;
    }
    // If everything is okay, we add " + Hello wolrd!" to the message and send the updated message to the client
    var updatedMessage = message + " + Hello wolrd!";
    return res.status(200).json({ statusCode: 200, message: updatedMessage });
});
var PORT = 8000;
app.listen(PORT, function () { return console.log("Listening on port ".concat(PORT)); });
//# sourceMappingURL=index.js.map