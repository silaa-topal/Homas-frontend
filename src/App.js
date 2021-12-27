import React from "react";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import AppointmentList from "./pages/appointment-list/AppointmentList.page";
import { Appointments } from "./pages/dashboard/Appointments";
import { Entry } from "./pages/entry/Entry.page";
import { AddAppointment } from "./pages/new-appointment/AddAppointment.page";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { PrivateRoute } from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Entry />}></Route>
          <Route
            path="/appointments"
            element={
              <PrivateRoute>
                <Appointments />
              </PrivateRoute>
            }
          />
          <Route
            path="/addAppointment"
            element={
              <PrivateRoute>
                <AddAppointment />
              </PrivateRoute>
            }
          />
          <Route
            path="/appointmentList"
            element={
              <PrivateRoute>
                <AppointmentList />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
