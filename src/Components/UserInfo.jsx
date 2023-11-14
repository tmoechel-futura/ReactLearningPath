const UserInfo = (props) => {
  return (
    <div className="App">
      <h1>
        {" "}
        Hello {props.firstName} {props.lastName} you are {props.age} years old
      </h1>
    </div>
  );
};

export default UserInfo;
