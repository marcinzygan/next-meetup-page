import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>NextJS meetups</title>
        <meta
          name="description"
          content="Browse list of amazing meetups made in NEXT.js"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  const USERNAME = process.env.MONGO_USERNAME;
  const PASSWORD = process.env.MONGO_PASSWORD;

  const client = await MongoClient.connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pgvopt0.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // revalidate: 1,
  };
}
export default HomePage;
