import express, { Express, Request, Response } from "express";
import cors from "cors";

const app: Express = express();

const corsOptions = {
  origin: "https://web-chat-mk.vercel.app", // Allow this specific origin
  credentials: true, // Allow credentials (cookies, etc.)
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
  allowedHeaders: ["Content-Type", "Authorization"], // Custom headers allowed
};

app.use(cors(corsOptions));

// Body parser
app.use(express.json());

app.post("/chat", (req: Request, res: Response) => {
  // Get message from req.body
  const { message } = req.body;

  // If message is empty, we send an error.
  if (message === "") {
    res
      .status(400)
      .json({ statusCode: 400, error: "Message can not be empty." });
    return;
  }

  // If everything is okay, we add " + Hello wolrd!" to the message and send the updated message to the client
  const updatedMessage = message + " + Hello wolrd!";

  return res.status(200).json({ statusCode: 200, message: updatedMessage });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
