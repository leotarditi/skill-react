import './App.css';
import Progress from './components/Progress';

function App() {
  return (
    <>
      <h1>React Skill Progress</h1>
      <Progress done="70" skill="HTML" />
      <Progress done="70" skill="CSS" />
      <Progress done="60" skill="Javascript" />
      <Progress done="60" skill="Java" />
      <Progress done="50" skill="Python" />
    </>
  );
}

export default App;
