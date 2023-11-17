const UserList = (props) => {
  const users = props.userList.map((user, key) => (
    <>
      <h2 key={key}> Hello {user.name} </h2>
      <h2 key={key}> Your age is {user.age} </h2>
    </>
  ));
  return users;
};

export default UserList;
