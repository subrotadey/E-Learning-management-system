import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `https://e-learning-management-system-server-site.vercel.app/teacher/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [id]);

  const handleUpdateTeacher = (event) => {
    event.preventDefault();
    const first_name = event.target.first_name.value;
    const last_name = event.target.last_name.value;
    const img_link = event.target.img_link.value;
    const email = event.target.email.value;
    const designation = event.target.designation.value;
    const description = event.target.description.value;

    const updatedTeacher = {
      first_name,
      last_name,
      img_link,
      email,
      designation,
      description,
    };

    //send data to the server
    const url = `https://e-learning-management-system-server-site.vercel.app/teacher/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedTeacher),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("teacher updated successfully");
        event.target.reset();
      });
  };

  return (
    <div className="contact-style">
      <form id="contact" onSubmit={handleUpdateTeacher} className="form-style">
        <h3>Updating Teacher {user.first_name}</h3>
        <fieldset>
          <input
            name="first_name"
            placeholder="First_Name"
            type="text"
            tabIndex={1}
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            name="last_name"
            placeholder="Last_Name"
            type="text"
            tabIndex={1}
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            name="img_link"
            placeholder="Image_Link"
            type="text"
            tabIndex={1}
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            name="email"
            placeholder="Email Address"
            type="email"
            tabIndex={2}
            required
          />
        </fieldset>
        <fieldset>
          <input
            name="designation"
            placeholder="designation"
            type="text"
            tabIndex={3}
            required
          />
        </fieldset>
        <fieldset>
          <textarea
            name="description"
            placeholder="Description...."
            tabIndex={5}
            required
          />
        </fieldset>
        <fieldset>
          <button
            name="update"
            type="submit"
            className="contact-submit"
            data-submit="...Sending"
          >
            Update User
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

export default UpdateUser;
