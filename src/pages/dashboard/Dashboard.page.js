import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FutureAppointmentTable } from "../../components/appointment-table/FutureAppointmentTable.comp";
import { AppointmentTable } from "../../components/appointment-table/AppointmentTable.comp";
import appointments from "../../assets/data/dummy-past-appointments.json";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{ fontSize: "2rem", padding: "10px 30px" }}
          >
            Make Appointment
          </Button>
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
        <Col className="past-appointments">
          <AppointmentTable appointments={appointments} />
        </Col>
      </Row>
    </Container>
  );
};
