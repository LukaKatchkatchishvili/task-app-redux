import React from "react";
import Input from "./components/input";
import Tasks from "./components/tasks";
import DeleteButtons from "./components/deleteButtons";

function App() {
  return (
    <section className="max-w-7xl mx-auto md:px-12 px-3">
      <h1 className="text-center text-2xl my-3">Todo Application</h1>
      <Input />
      <Tasks />
      <DeleteButtons />
    </section>
  );
}

export default App;
