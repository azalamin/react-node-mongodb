import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const userStyle = {
    border: "2px solid tomato",
    padding: "10px",
    margin: "10px auto",
    borderRadius: "10px",
    width: "400px",
  };

  const handleUserDelete = (id) => {
    const proceed = window.confirm("Are you sure want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/user/${id}`;

      fetch(url, {
          method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => {
          console.log(data);
          if (data.deletedCount) {
              toast('deleted');
              const remaining = users.filter(user => user._id !== id);
              setUsers(remaining)
          }
      })

    }
  };

  return (
    <div>
      <h1>Users Available: {users.length}</h1>
      <ToastContainer />
      <div>
        {users.map((user) => (
          <div key={user._id}>
            <div style={userStyle}>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <Link to={`/update/${user._id}`}>
                <button>Update User</button>
              </Link>
              <button onClick={() => handleUserDelete(user._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
