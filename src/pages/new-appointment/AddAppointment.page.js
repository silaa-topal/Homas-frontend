import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddAppointmentForm } from "../../components/add-appointment-form/AddAppointmentForm.comp";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";

const initialFormData = {
  doctor: "",
  appointmentDate: "",
  department: "",
};

export const AddAppointment = () => {
  const [formData, setFormData] = useState(initialFormData);
  useEffect(() => {}, [formData]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    //console.log(name, value);

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    console.log("From submit request received", formData);
  };

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="New Appointment" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddAppointmentForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            formData={formData}
          />
        </Col>
      </Row>
    </Container>
  );
};
