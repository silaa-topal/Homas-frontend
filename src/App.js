import React from "react";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import AppointmentList from "./pages/appointment-list/AppointmentList.page";
import { Appointments } from "./pages/dashboard/Appointments";
import { Entry } from "./pages/entry/Entry.page";
import { AddAppointment } from "./pages/new-appointment/AddAppointment.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        {/* <Appointments /> */}
        {/* <AddAppointment /> */}
        <AppointmentList />
      </DefaultLayout>
    </div>
  );
}

export default App;
