const MeetupDetails = (props) => {
  return (
    <>
      <img src={props.image} alt={props.title}></img>
      <h1>{props.title}</h1>
      <p>{props.address}</p>
      <p>{props.description}</p>
    </>
  );
};

export default MeetupDetails;
