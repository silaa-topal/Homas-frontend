import React from "react";
import { Table } from "react-bootstrap";

export const AppointmentTable = ({ appointments }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>status</th>
          <th>Doctor</th>
          <th>Department</th>
          <th>Date</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        {appointments.length ? (
          appointments.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.status}</td>
              <td>{row.doctor}</td>
              <td>{row.department}</td>
              <td>{row.date}</td>
              <td>{row.time}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="6" className="text-center">
              No appointment to show{""}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
