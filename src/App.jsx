import { useState } from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  const [user, setUser] = useState(null); 
  const [view, setView] = useState('signin');
  const [isSorting, setIsSorting] = useState(false);

  const handleSorting = (userData) => {
    setIsSorting(true);
    setTimeout(() => {
      setUser(userData);
      setIsSorting(false);
    }, 3000); 
  };

  return (
    <div className="App">
      {isSorting ? (
        <div className="parchment-card">
          <img src="https://pngimg.com/uploads/harry_potter/harry_potter_PNG43.png" alt="Sorting Hat" className="sorting-hat-img" />
          <h2>Aha! Right then...</h2>
          <p>Difficult. Very difficult. Plenty of courage, I see...</p>
        </div>
      ) : user ? (
        <div className="parchment-card">
          <h2 className={user.house}>{user.house.toUpperCase()}!</h2>
          <p>Welcome to Hogwarts, Wizard {user.wizardName}.</p>
          {user.house === 'Slytherin' && (
            <p className="secret-message">Pure-bloods only in the common room tonight.</p>
          )}
          <button onClick={() => setUser(null)}>Mischief Managed</button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ marginBottom: '20px' }}>
            <button onClick={() => setView('signin')}>Sign In</button>
            <button onClick={() => setView('signup')} style={{ marginLeft: '10px' }}>Sign Up</button>
          </div>
          {view === 'signin' ? <SignIn onAuth={setUser} /> : <SignUp onAuth={handleSorting} />}
        </div>
      )}
    </div>
  );
}

export default App;