import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "first meetup",
//     image:
//       "https://images.unsplash.com/photo-1646905065090-abeff1ccf975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
//     address: "Portishead, UK",
//     description: "First meetup",
//   },
//   {
//     id: "m2",
//     title: "second meetup",
//     image:
//       "https://images.unsplash.com/photo-1655283658746-7402b3195f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
//     address: "Portland, UK",
//     description: "Second meetup",
//   },
// ];
const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps() {
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }
export async function getStaticProps() {
  const client = await MongoClient.connect(
    "mongodb+srv://souloo:bananek1983@cluster0.pgvopt0.mongodb.net/meetups?retryWrites=true&w=majority"
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
