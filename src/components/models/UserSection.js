import React, { useState, useEffect } from "react";
import "./style/userSection.css";

export const UserSection = () => {
  // Load from localStorage or use defaults
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: ""
  });

  const [editing, setEditing] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem("userProfile");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(user));
    setEditing(false);
  };

  return (
    <div className="UserContainer">
      <h1>User Profile</h1>

      <div className="UserCard">
        <div className="AvatarSection">
          {user.avatar ? (
            <img src={user.avatar} alt="Avatar" />
          ) : (
            <div className="AvatarPlaceholder">👤</div>
          )}
        </div>

        <div className="UserInfo">
          {editing ? (
            <>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                placeholder="Email"
              />
              <input
                type="text"
                name="avatar"
                value={user.avatar}
                onChange={handleChange}
                placeholder="Avatar URL"
              />
              <button onClick={handleSave}>Save</button>
            </>
          ) : (
            <>
              <h2>{user.name || "Your Name"}</h2>
              <p>{user.email || "your.email@example.com"}</p>
              <button onClick={() => setEditing(true)}>Edit Profile</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};