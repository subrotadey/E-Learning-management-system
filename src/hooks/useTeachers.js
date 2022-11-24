import { useEffect } from "react";
import { useState } from "react";
// import { useQuery } from "react-query";
// import Loading from "../Pages/Shared/Loading";

const useTeachers = () => {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    fetch("/teachers.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  //   const {
  //     data: teachers,
  //     isLoading,
  //     refetch,
  //   } = useQuery("teachers", () =>
  //     fetch("/teachers.json").then((res => res.json()))
  //   );
  //   if (isLoading) {
  //     return <Loading></Loading>;
  //   }
  return [teachers, setTeachers];
};

export default useTeachers;
