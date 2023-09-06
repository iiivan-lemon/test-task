import logo from './logo.svg';
import './App.css';
import MainPage from "./components/mainPage";
import data from './mocks/tickets.json'
function App() {
  return (
    <div className="App">
      <MainPage data={data.tickets}></MainPage>
    </div>
  );
}

export default App;
