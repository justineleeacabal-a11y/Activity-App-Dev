import { useState } from "react";
import "./App.css";

function App() {
  const [guests, setGuests] = useState([]);
  const [name, setName] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingIndex !== null) {
      const updatedGuests = [...guests];
      updatedGuests[editingIndex].name = name;
      setGuests(updatedGuests);
      setEditingIndex(null);
    } else {
      setGuests([...guests, { name }]);
    }

    setName("");
  };

  const handleEdit = (index) => {
    setName(guests[index].name);
    setEditingIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = guests.filter((_, i) => i !== index);
    setGuests(filtered);
  };

  return (
    <div className="container">
      <h1>Guest List System</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={name}
          placeholder="Enter guest name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">
          {editingIndex !== null ? "Update Guest" : "Add Guest"}
        </button>
      </form>

      <h2>Guest Records</h2>

      {guests.length === 0 ? (
        <p>No guests added yet.</p>
      ) : (
        <ul className="guest-list">
          {guests.map((guest, index) => (
            <li key={index} className="guest-item">
              {guest.name}

              <div className="actions">
                <button className="edit" onClick={() => handleEdit(index)}>
                  Edit
                </button>
                <button className="delete" onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
