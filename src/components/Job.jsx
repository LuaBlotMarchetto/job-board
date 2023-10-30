const Job = (props) => {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <div>
        <p>{props.contractType}</p>
        <p> &nbsp;-&nbsp; </p>
        <p>{props.country}</p>
        <p> &nbsp;-&nbsp; </p>
        <p>{props.city}</p>
      </div>
    </div>
  );
};

export default Job;
