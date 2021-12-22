import React from "react";
import "./App.css";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Appointments } from "./pages/dashboard/Appointments";
import { Entry } from "./pages/entry/Entry.page";

function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <Appointments />
      </DefaultLayout>
    </div>
  );
}

export default App;
