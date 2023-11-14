import "./App.css";
import UserInfo from "./Components/UserInfo";
import Job from "./Components/Job";

function App() {
  return (
    <div className="App">
      <UserInfo firstName="Thomas" lastName="Möchel" age={61} />
      <UserInfo firstName="Markus" lastName="Möchel" age={57} />
      <UserInfo firstName="Ursel" lastName="Möchel" age={60} />

      <Job position="Software Architect" salary={70000} />
      <Job position="Software Developer" salary={60000} />
    </div>
  );
}

export default App;
