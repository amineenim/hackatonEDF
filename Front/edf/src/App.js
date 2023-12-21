import './App.css';
import MyHeader from './components/MyHeader';
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <div className="App">
      <MyHeader />
      <GamePage />
    </div>
  );
}

export default App;
