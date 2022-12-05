import MeetupDetails from "../../components/meetups/MeetupDetails";

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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}
export async function getStaticProps(context) {
  // fetch data for single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://images.unsplash.com/photo-1646905065090-abeff1ccf975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
        title: "First Meetup",
        address: "Portishead, UK",
        description: "THis is cool meetup",
      },
    },
  };
}
export default MeetupDetailsPage;
