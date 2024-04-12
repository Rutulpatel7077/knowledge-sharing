import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      setLoading(true);
      // Simulate a delay
      await new Promise((resolve) => setTimeout(resolve, 4000));
      setLoading(false);
      setUserData({ id: 1, name: "John Doe", email: "johndoe@example.com" });
    };

    fetchUserData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitting Name: ${formData.name}, Email: ${formData.email}`);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <>
      <div>
        <h1>Counter</h1>
        <p data-testid="counterValue">{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <br />
        <br />

        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>

      <br />
      <br />
      <br />

      <div>
        <form onSubmit={handleSubmit}>
          <h2>User Information</h2>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              data-testid="nameInput"
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              data-testid="emailInput"
            />
          </label>
          <br />
          <button type="submit" data-testid="submitButton">
            Submit
          </button>
        </form>
      </div>

      <br />
      <br />
      <br />

      <div data-testid="userDataSection">
        {loading ? (
          <p>Loading user data...</p>
        ) : userData ? (
          <>
            <h3>User Data</h3>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
          </>
        ) : (
          <p>No user data found.</p>
        )}
      </div>

      <br />
      <br />
      <br />

      <div>
        <a href="/vehicles" data-testid="vehiclesLink">
          Vehicles
        </a>

        <br />
        <br />


        <a href="/race-condition" data-testid="raceConditionLink">
          Race Condition
        </a>
      </div>
    </>
  );
}

export default App;
