import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './pages/About/About';
import HomePage from './pages/Home/Home';
import ProjectsPage from './pages/Projects/Projects';
import ContactPage from './pages/Contact/Contact';



const AppRouter = () => {

    return (
        <Router>
            <Routes>
            <Route path='/' element={<App />}/>
                <Route index element={<HomePage />} />
                <Route path='sobre' element={<AboutPage />}  />
                <Route path='projetos' element={<ProjectsPage />} />
                <Route path='contatos' element={<ContactPage />} />
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppRouter />
);

