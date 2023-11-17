import styles from "../App.module.css";


const UserInfo = (props) => {
  return (
    <div className="App">
      <h1 className={styles.name}>
        Hello {props.firstName} {props.lastName} you are {props.age} years old
      </h1>
    </div>
  );
};

export default UserInfo;
