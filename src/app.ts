import express, { Request, Response } from "express";
import * as mongoose from "mongoose";

const app = express();

const users = [
  {
    name: "Pavlo",
    age: 23,
    gender: "male",
  },
  {
    name: "Oleh",
    age: 20,
    gender: "male",
  },
  {
    name: "Karina",
    age: 18,
    gender: "female",
  },
];

const PORT = 5001;

app.get("/users", (res: Response) => {
  res.status(200).json(users);
});

app.post("/users", (req: Request, res: Response) => {
  const user = req.body;
  users.push(user);
  res.status(201).json({ message: "User has created" });
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  users[+id] = req.body;
  res.status(200).json({
    message: "User has updated",
    data: users[+id],
  });
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  users.splice(+id, 1);
  res.status(200).json({
    message: "User has deleted",
  });
});

app.listen(PORT, () => {
  mongoose.connect("mongodb://127.0.0.1:27017/preview");
  console.log(`Server has started on port ${PORT}`);
});
