import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { AuthProvider } from './components/AuthProvider';
import { LoginButton } from './components/LoginButton';
import './App.css';

function App() {
  const { instance } = useMsal();

  const handleLogout = () => {
    instance.logoutRedirect();
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Azure B2C SPA</h1>
            <UnauthenticatedTemplate>
              <LoginButton />
            </UnauthenticatedTemplate>
            <AuthenticatedTemplate>
              <div>
                <p>You are signed in!</p>
                <button onClick={handleLogout}>Sign Out</button>
              </div>
            </AuthenticatedTemplate>
          </header>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
