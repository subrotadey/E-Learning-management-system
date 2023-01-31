import React from "react";

const AddTeachers = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const img_link = event.target.img_link.value;
    const email = event.target.email.value;
    const designation = event.target.designation.value;
    const description = event.target.description.value;

    const user = {
      first_name,
      last_name,
      img_link,
      email,
      designation,
      description,
    };

    //send data to the server
    fetch("https://edulogy.onrender.com/teacher", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("user added successfully");
        event.target.reset();
      });
  };

  return (
    <div className="contact-style">
      <form onSubmit={handleAddUser} id="contact" className="form-style">
        <h2>Please add a new Teacher</h2>
        <fieldset>
          <input
            name="first_name"
            placeholder="First_Name"
            type="text"
            tabIndex="1"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            name="last_name"
            placeholder="Last_Name"
            type="text"
            tabIndex="1"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            name="img_link"
            placeholder="Image_Link"
            type="text"
            tabIndex="1"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            name="email"
            placeholder="Email Address"
            type="email"
            tabIndex="2"
            required
          />
        </fieldset>
        <fieldset>
          <input
            name="designation"
            placeholder="designation"
            type="text"
            tabIndex="3"
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            name="description"
            placeholder="Description...."
            tabIndex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            value="Add User"
            name="add"
            type="submit"
            className="contact-submit"
            data-submit="...Sending"
          >
            Teacher add
          </button>
        </fieldset>
        <p className="copyright">
          Designed by{" "}
          <a href="https://edulogy.netlify.app" title="edulogy">
            Edulogy
          </a>
        </p>
      </form>
    </div>
  );
};

export default AddTeachers;
