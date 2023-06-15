import { Route, Routes, useLocation } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
    // const location = useLocation();
    return (
        <div className="App">
            <header className="App-header">
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />{' '}
                </Routes>
            </header>
        </div>
    );
}

export default App;
