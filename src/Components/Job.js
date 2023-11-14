const Job = (props) => {
  return (
    <div className="app">
      <h3>
        Your job is {props.position} with a salary of {props.salary}
      </h3>
    </div>
  );
};

export default Job;
