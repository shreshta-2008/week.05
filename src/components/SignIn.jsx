import { useState } from 'react';

const SignIn = ({ onAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Derived state for complexity
  const canSubmit = email.includes('@') && password.length >= 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuth({ wizardName: email.split('@')[0], house: 'Gryffindor', email });
  };

  return (
    <div className="parchment-card">
      <h2>Alohomora</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Wizard Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Incantation" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" disabled={!canSubmit}>Revelio</button>
      </form>
    </div>
  );
};

export default SignIn;