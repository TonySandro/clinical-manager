import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Clinical Manager API");
});

const PORT = process.env.PORT || 3333;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
