import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div class="contact-style">  
      <form id="contact" action="" method="post" className='form-style'>
        <h3>Updating User {user.name}</h3>
        <fieldset>
          <input placeholder="First_Name" type="text" tabindex="1" required autofocus/>
        </fieldset>
        <fieldset>
          <input placeholder="Last_Name" type="text" tabindex="1" required autofocus/>
        </fieldset>
        <fieldset>
          <input placeholder="Image_Link" type="text" tabindex="1" required autofocus/>
        </fieldset>
        <fieldset>
          <input placeholder="Email Address" type="email" tabindex="2" required/>
        </fieldset>
        <fieldset>
          <input placeholder="designation" type="text" tabindex="3" required/>
        </fieldset>
        <fieldset>
          <textarea placeholder="Description...." tabindex="5" required></textarea>
        </fieldset>
        <fieldset>
          <button name="update" type="submit" className="contact-submit" data-submit="...Sending">Update User</button>
        </fieldset>
        <p className="copyright">Designed by <a href="https://edulogy.netlify.app" target="_blank" title="edulogy">Edulogy</a></p>
      </form>
    </div>
  );
};

export default UpdateUser;
