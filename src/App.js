import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './components/Profile';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>

        <Route path="Profile" element={<Profile />} />
        <Route path="Missions" element={<Missions />} />

      </Routes>

    </div>
  );
}

export default App;
