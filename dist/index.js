import express from "express";
import cors from "cors";
var app = express();
var corsOptions = {
    origin: "https://web-chat-mk.vercel.app", // Allow this specific origin
    credentials: true, // Allow credentials (cookies, etc.)
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Custom headers allowed
};
app.use(cors(corsOptions));
// Body parser
app.use(express.json());
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