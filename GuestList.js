import React, { useState } from "react";

function GuestList() {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({ name: "", email: "" });
  const [editIndex, setEditIndex] = useState(null);

 
  const handleChange = (e) => {
    setNewGuest({ ...newGuest, [e.target.name]: e.target.value });
  };

  // Add a new guest
  const handleAdd = () => {
    if (!newGuest.name || !newGuest.email) {
      alert("Please fill in all fields.");
      return;
    }
    setGuests([...guests, newGuest]);
    setNewGuest({ name: "", email: "" });
  };

  // Delete a guest
  const handleDelete = (index) => {
    setGuests(guests.filter((_, i) => i !== index));
  };

  // Start editing
  const handleEdit = (index) => {
    setEditIndex(index);
    setNewGuest(guests[index]);
  };

  // Save edited guest
  const handleSave = () => {
    const updated = guests.map((guest, i) =>
      i === editIndex ? newGuest : guest
    );
    setGuests(updated);
    setNewGuest({ name: "", email: "" });
    setEditIndex(null);
  };

  return (
    <div className="guest-list">
      <div className="form">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={newGuest.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={newGuest.email}
          onChange={handleChange}
        />
        {editIndex !== null ? (
          <button onClick={handleSave}>💾 Save</button>
        ) : (
          <button onClick={handleAdd}>➕ Add</button>
        )}
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {guests.length > 0 ? (
            guests.map((guest, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{guest.name}</td>
                <td>{guest.email}</td>
                <td>
                  <button onClick={() => handleEdit(index)}>✏️ Edit</button>
                  <button onClick={() => handleDelete(index)}>🗑️ Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No guests added yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GuestList;
