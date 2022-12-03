import { useEffect } from "react";
import { useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    // console.log("User inside use token", user);

    const email = user?.user?.email;
    const currentUser = { email: email };
    if (email) {
      fetch(`http://localhost:5000/student/${email}`, {
        method: "PUT",
        Headers: {
          "content-type": "application.json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json(currentUser))
        .then((data) => {
          console.log("data inside usetoken", data);
        });
    }
  }, [user]);
  return [token];
};

export default useToken;
