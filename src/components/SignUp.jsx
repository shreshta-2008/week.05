import { useState } from 'react';

const SignUp = ({ onAuth }) => {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
    house: 'Gryffindor'
  });

  // Derived State
  const isReady = formData.email.includes('@') && formData.pass.length >= 8;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="parchment-card">
      <h2>The Sorting Scroll</h2>
      <form onSubmit={(e) => { e.preventDefault(); onAuth({ wizardName: formData.email.split('@')[0], house: formData.house }); }}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="pass" type="password" placeholder="Password (8+ chars)" onChange={handleChange} />
        <select name="house" onChange={handleChange}>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
        <button type="submit" disabled={!isReady}>Sort Me!</button>
      </form>
    </div>
  );
};

export default SignUp;