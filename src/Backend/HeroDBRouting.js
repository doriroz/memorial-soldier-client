import express from "express";
import heroSchema from "./HeroDBSchema.js";
const router = express.Router();

router.get("/notes", async (req, res) => {
  const notes = heroSchema.notes;
  console.log(notes);
  const notesData = await notes.find({}).exec();
  if (notesData) {
    res.send(JSON.stringify(notesData));
  }
});

export default router;
