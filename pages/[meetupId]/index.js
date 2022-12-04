import MeetupDetails from "../../components/meetups/MeetupDetails";

function MeetupDetailsPage() {
  return (
    <MeetupDetails
      image={
        "https://images.unsplash.com/photo-1646905065090-abeff1ccf975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
      }
      title={"First Meetup"}
      address={"Portishead, UK"}
      description={"THis is cool meetup"}
    />
  );
}

export default MeetupDetailsPage;
