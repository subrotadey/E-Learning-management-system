import React from "react";

const AddTeachers = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const url = event.target.url.value;

    const user = { name, email, url };

    //send data to the server
    fetch("http://localhost:5000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert('user added successfully');
        event.target.reset();
      });
  };

  return (
    <div className="text-center">
      <h2>Please add a new Teacher</h2>
      <form action="" onSubmit={handleAddUser}>
        <input type="text" name="name" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="Email" />
        <br />
        <input type="url" name="url" placeholder="Image Link" />
        <br />
        <input type="submit" value="Add User" />
      </form>
      
    </div>
  );
};

export default AddTeachers;
