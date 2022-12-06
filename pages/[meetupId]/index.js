import MeetupDetails from "../../components/meetups/MeetupDetails";
import { MongoClient, ObjectId } from "mongodb";

function MeetupDetailsPage(props) {
  const { image, title, address, description } = props.meetupData;
  return (
    <MeetupDetails
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
}
export async function getStaticPaths() {
  const USERNAME = process.env.MONGO_USERNAME;
  const PASSWORD = process.env.MONGO_PASSWORD;

  const client = await MongoClient.connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pgvopt0.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;

  const USERNAME = process.env.MONGO_USERNAME;
  const PASSWORD = process.env.MONGO_PASSWORD;

  const client = await MongoClient.connect(
    `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.pgvopt0.mongodb.net/meetups?retryWrites=true&w=majority`
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        image: selectedMeetup.image,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
      },
    },
  };
}
export default MeetupDetailsPage;
