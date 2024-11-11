import { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <p>First Name:</p>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            required
          />
        </div>
        <div className="form-container">
          <p>Last Name:</p>
          <input
            type="text"
            value={form.lastName}
            onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <p>Full Name: {form.firstName} {form.lastName}</p>}
    </div>
  );
}

export default App;

