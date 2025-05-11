import express, { json } from "express";
import cors from "cors";
import { MongoClient } from "mongodb";

const app = express();
const port = 5000;

app.use(cors());
app.use(json());

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

app.post("/api/create-league", async (req, res) => {
  try {
    const leagueData = req.body;
    await client.connect();
    const db = client.db("codFantasy");
    const leagues = db.collection("leagues");

    const result = await leagues.insertOne(leagueData);
    res.status(200).json({ message: "League created", id: result.insertedId });
  } catch (err) {
    console.error("Error creating league:", err);
    res.status(500).json({ error: "Failed to create league" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
