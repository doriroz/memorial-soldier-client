import express from "express";
import heroSchema from "./HeroDBSchema.js";
const router = express.Router();

router.get("/notes", async (req, res) => {
  const notes = heroSchema.notes;
  console.log(notes);
  const notesData = await notes.find({}).sort({ _id: -1 }).limit(5).exec();
  if (notesData) {
    res.send(JSON.stringify(notesData));
  }
});

router.post("/notes/addnote", async (req, res) => {
  const reqData = req.body;
  console.log(reqData);

  const note = new heroSchema.notes(reqData);

  try {
    const result = await note.save();
    console.log(result);
    res.status(201).json({ message: "note added succefully" });
    // res.setHeader("Cache-Control", "no-store, max-age=0");
    // res.status(301);
    // res.redirect("www.google.com");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal Error" });
  }
});

export default router;
