import "./App.css";
import Student from "./components/Student";
import "./components/student.css";
function App() {
  return (
    <div className="App">
      <h1>LearderBoard</h1>
      <div className="heading">
        <h4 className="name">Name</h4>
        <h4 className="score">Score</h4>
      </div>
      <hr />
      <Student name="Javed Ahmed" university="SALU" score={392} />
      <Student name="Zeeshan Ali" university="SALU" score={352} />
      <Student name="Sharoon Honey" university="MUET" score={341} />
    </div>
  );
}
export default App;
