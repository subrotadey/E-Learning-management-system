import { useEffect } from "react";
import { useState } from "react";
// import { useQuery } from "react-query";
// import Loading from "../Pages/Shared/Loading";

const useTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("https://edulogy.onrender.com/teacher")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return [teachers, setTeachers];
};

export default useTeachers;
