// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// const UpdateUser = () => {
//   const { id } = useParams();
//   const [user, setUser] = useState({});
//   useEffect(() => {
//     const url = `http://localhost:5000/user/${id}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => setUser(data));
//   }, []);

//   const handleUpdateTeacher = (event) => {
//     event.preventDefault();
//     const first_name = event.target.first_name.value;
//     const last_name = event.target.last_name.value;
//     const img_link = event.target.img_link.value;
//     const email = event.target.email.value;
//     const designation = event.target.designation.value;
//     const description = event.target.description.value;

//     const updatedTeacher = { first_name, last_name,img_link, email, designation,  description };

//     //send data to the server
//     const url = `http://localhost:5000/user/${id}`;
//     fetch(url, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(updatedTeacher),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log("success", data);
//         alert('user added successfully');
//         event.target.reset();
//       });
//   };

//   return (
//     <div className="contact-style">
//       <form id="contact" onSubmit={handleUpdateTeacher} action="" method="put" className='form-style'>
//         <h3>Updating Teacher {user.first_name}</h3>
//         <fieldset>
//           <input placeholder="First_Name" type="text" tabindex="1" required autoFocus/>
//         </fieldset>
//         <fieldset>
//           <input placeholder="Last_Name" type="text" tabindex="1" required autoFocus/>
//         </fieldset>
//         <fieldset>
//           <input placeholder="Image_Link" type="text" tabindex="1" required autoFocus/>
//         </fieldset>
//         <fieldset>
//           <input placeholder="Email Address" type="email" tabindex="2" required/>
//         </fieldset>
//         <fieldset>
//           <input placeholder="designation" type="text" tabindex="3" required/>
//         </fieldset>
//         <fieldset>
//           <textarea placeholder="Description...." tabindex="5" required></textarea>
//         </fieldset>
//         <fieldset>
//           <button name="update" type="submit" className="contact-submit" data-submit="...Sending">Update User</button>
//         </fieldset>
//         <p className="copyright">Designed by <a href="https://edulogy.netlify.app" title="edulogy">Edulogy</a></p>
//       </form>
//     </div>
//   );
// };

// export default UpdateUser;
