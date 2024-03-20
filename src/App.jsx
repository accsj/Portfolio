import { Outlet } from 'react-router-dom';
import './assets/styles/main.css';

function App() {
  return (
    <div className="App">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
