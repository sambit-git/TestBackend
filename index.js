import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import ContactForm from "./models/contactform.model.js";

dotenv.config();
mongoose
  .connect(process.env.DB_CONN_STR)
  .then((res) => console.log("DB Connected!"))
  .catch((err) => console.log("Couldn't connect to the database!"));

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => res.send("Working!"));

app.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await ContactForm.create({ name, email, message });
    res.json({ success: true });
  } catch (error) {
    res.json({ success: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Server started at- http://localhost:${PORT}`)
);
