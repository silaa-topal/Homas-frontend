import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import { AppointmentTable } from "../../components/appointment-table/AppointmentTable.comp";
import appointments from "../../assets/data/dummy-past-appointments.json";

export default function AppointmentList() {
  const [str, setStr] = useState("");
  const [displayAppointment, setDisplayAppointment] = useState(appointments);

  useEffect(() => {}, [str, displayAppointment]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchAppointment(value);
  };

  const searchAppointment = (sttr) => {
    const displayAppointments = appointments.filter((row) =>
      row.department.toLowerCase().includes(sttr.toLowerCase())
    );

    setDisplayAppointment(displayAppointments);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Appointment List" />
        </Col>
      </Row>
      <Row className="mt-4">
        {/* <Col>
          <Button variant="info">Add New Appointment</Button>
        </Col> */}
        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <AppointmentTable appointments={displayAppointment} />
        </Col>
      </Row>
    </Container>
  );
}
