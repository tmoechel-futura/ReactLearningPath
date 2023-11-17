import styles from "./App.module.css";
import UserInfo from "./Components/UserInfo";
import UserList from "./Components/UserList";
import Job from "./Components/Job";
import Planet from "./Components/Planet";

function App() {
  const isGreen = false;
  const names = ["Mike", "Peter", "Bob"];

  const users = [
    { name: "Bob", age: 33 },
    { name: "Mike", age: 44 },
  ];

  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
  ];

  return (
    <div className={styles.App}>
      <UserInfo firstName="Thomas" lastName="Möchel" age={61} />
      <UserInfo firstName="Markus" lastName="Möchel" age={57} />
      <UserInfo firstName="Ursel" lastName="Möchel" age={60} />
      <Job position="Software Architect" salary={70000} />
      <Job position="Software Developer" salary={60000} />
      <h1 style={{ color: isGreen ? "green" : "red" }}> This has a color </h1>
      {/* other example of a logical operator (acts like if ) */}
      <h1> {isGreen && <button>this is a button</button>}</h1>
      {names.map((name, key) => {
        return <h1 key={key}> {name}</h1>;
      })}
      <h3> User Component test </h3>

      <UserList userList={users} />

      <h3> Show only planets that are not Gasplanets </h3>
      {planets.map((planet, key) => {
        return (
          !planet.isGasPlanet && (
            <div key={key}>
              <Planet planet={planet} />
            </div>
          )
        );
      })}
    </div>
  );
}

export default App;
