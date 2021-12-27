import React from "react";
import { Form, Button, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import "./add-appointment-form.style.css";

export const AddAppointmentForm = ({
  handleOnSubmit,
  handleOnChange,
  formData,
}) => {
  console.log(formData);

  return (
    <div className="jumbotron">
      <h1 className="text-info text-center">Make New Appointmet</h1>
      <hr />
      <div className="mt-3 add-new-appointment bg-light">
        <Form autoComplete="off" onSubmit={handleOnSubmit}>
          <Form.Group>
            <Form.Label>Department</Form.Label>
            <Form.Control
              name="department"
              value={formData.department}
              onChange={handleOnChange}
              placeholder="Enter department"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Doctor</Form.Label>
            <Form.Control
              type="doctor"
              name="doctor"
              value={formData.doctor}
              onChange={handleOnChange}
              placeholder="Enter doctor"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Time</Form.Label>
            <Form.Control
              type="time"
              name="time"
              onChange={handleOnChange}
              required
            />
          </Form.Group>
          <hr />

          <Button type="submit" variant="info" block>
            Add Appointment
          </Button>
        </Form>
      </div>
    </div>
  );
};

AddAppointmentForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};
