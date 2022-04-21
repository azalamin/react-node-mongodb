import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/user/${id}`)
        .then(res => res.json())
        .then(data => setUser(data));
    },[id])

    const handleUpdateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updatedUser = { name, email };
        // send data to server
        fetch(`http://localhost:5000/user/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("Success", data);
            toast("user updated successfully");
            event.target.reset();
          });
    }
    return (
      <div>
        <ToastContainer />
        <h2>Updating User {user.name}</h2>
        <form onSubmit={handleUpdateUser}>
          <input type="text" name="name" placeholder="Name" required />
          <br />
          <input type="email" name="email" placeholder="Email" required />
          <br />
          <input type="submit" value="Update User " />
        </form>
      </div>
    );
};

export default UpdateUser;