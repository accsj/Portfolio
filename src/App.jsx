import './assets/styles/main.css';
import './assets/styles/homeresponsive.css';
import './assets/styles/projectresponsive.css';
import './assets/styles/aboutresponsive.css';
import './assets/styles/contactresponsive.css';
import { Outlet } from 'react-router-dom';

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
