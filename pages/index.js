import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "first meetup",
    image:
      "https://images.unsplash.com/photo-1646905065090-abeff1ccf975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    address: "Portishead, UK",
    description: "First meetup",
  },
  {
    id: "m2",
    title: "second meetup",
    image:
      "https://images.unsplash.com/photo-1655283658746-7402b3195f88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    address: "Portland, UK",
    description: "Second meetup",
  },
];
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
