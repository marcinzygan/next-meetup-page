// api/new-meetup
import { MongoClient } from "mongodb";
import { useRouter } from "next/router";

async function handler(req, res) {
  const router = useRouter();
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://souloo:bananek1983@cluster0.pgvopt0.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "Meetup added" });
    router.push("/");
  }
}

export default handler;
