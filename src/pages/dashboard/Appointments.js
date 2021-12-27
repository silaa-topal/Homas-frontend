import { Container, Row, Col, Button } from "react-bootstrap";
import { FutureAppointmentTable } from "../../components/appointment-table/FutureAppointmentTable.comp";
import { AppointmentTable } from "../../components/appointment-table/AppointmentTable.comp";
import appointments from "../../assets/data/dummy-past-appointments.json";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { SearchForm } from "../../components/search-form/SearchForm.comp";

export const Appointments = () => {
  // const [str, setStr] = useState("");
  // const [displayAppointment, setDisplayAppointment] = useState(appointments);

  // useEffect(() => {}, [str, displayAppointment]);

  // const handleOnChange = (e) => {
  //   const { value } = e.target;
  //   setStr(value);
  //   searchAppointment(value);
  // };

  // const searchAppointment = (sttr) => {
  //   const displayAppointments = appointments.filter((row) =>
  //     row.department.toLowerCase().includes(sttr.toLowerCase())
  //   );

  //   setDisplayAppointment(displayAppointments);
  // };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Appointments" />
        </Col>
      </Row>
      <Row>
        {/* <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col> */}
        <Col className="mt-4">
          <Link to="/addAppointment">
            <Button
              variant="info"
              // style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Make Appointment
            </Button>
          </Link>
        </Col>
        <Col className=" mt-4 text-right">
          <Link to="/appointmentList">
            <Button
              variant="info"
              // style={{ fontSize: "2rem", padding: "10px 30px" }}
            >
              Search
            </Button>
          </Link>
        </Col>
      </Row>
      {/* <Row>
        <Col className="mt-5">Future Appointments</Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <FutureAppointmentTable />
        </Col>
      </Row>
      <hr /> */}
      <Row>
        <Col className="mt-5">
          <div>Appointments</div>
        </Col>
      </Row>
      <Row>
        {/* <Col>
          <AppointmentTable appointments={displayAppointment} />
        </Col> */}
        <Col className="past-appointments">
          <AppointmentTable appointments={appointments} />
        </Col>
      </Row>
    </Container>
  );
};
