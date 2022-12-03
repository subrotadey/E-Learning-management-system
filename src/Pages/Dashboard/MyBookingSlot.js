import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyBookingSlot = () => {
  const [booked, setBooked] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/enrollment?enrollment=${user.email}`)
        .then((res) => res.json())
        .then((data) => setBooked(data));
    }
  }, [user]);
  return (
    <div>
      <h2 className="text-center text-info">
        My Selected Course: {booked.length}
      </h2>
      <div>
        <Table responsive striped border="info">
          <thead>
            <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Course Name</th>
                <th>Email</th>
                <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {
                booked.map((book, index) => <tr
                key={index}
                >
                    <td>{index+1}</td>
                    <td>{book.studentName}</td>
                    <td>{book.bookingName}</td>
                    <td>{book.email}</td>
                    <td>{book.date}</td>
                  </tr>)
            }
            
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default MyBookingSlot;
