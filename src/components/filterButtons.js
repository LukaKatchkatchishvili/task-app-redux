import React from "react";

const FilterButtons = ({ tasks, setTasks, originalTasks }) => {
  const filterDoneTasks = () => {
    const doneTasks = originalTasks.filter((task) => task.isChecked);
    if (doneTasks.length > 0) setTasks(doneTasks);
  };
  const filterToDoTasks = () => {
    const toDoTasks = originalTasks.filter((task) => !task.isChecked);
    if (toDoTasks.length > 0) setTasks(toDoTasks);
  };

  const filterAllTasks = () => {
    setTasks(originalTasks);
  };

  return (
    <div className="mt-4 w-[50%] mx-auto">
      {tasks.length > 0 ? (
        <div className="flex justify-around gap-3">
          <button className="btn btn-primary w-full" onClick={filterAllTasks}>
            All
          </button>
          <button className="btn btn-primary w-full" onClick={filterDoneTasks}>
            Done
          </button>
          <button className="btn btn-primary w-full" onClick={filterToDoTasks}>
            To Do
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default FilterButtons;
