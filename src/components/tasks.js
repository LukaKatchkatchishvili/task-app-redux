import React, { useState, useEffect } from "react";
import FilterButtons from "./filterButtons";
import { useSelector, useDispatch } from "react-redux";
import { remove, toggleCheck } from "../redux/taskSlice";

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);
  const [tasksState, setTasksState] = useState(tasks);
  useEffect(() => {
    setTasksState(tasks);
  }, [tasks]);

  const handleRemove = (index) => {
    dispatch(remove(index));
  };
  const handleToggleCheck = (taskId) => {
    dispatch(toggleCheck(taskId));
  };

  return (
    <>
      <FilterButtons
        tasks={tasksState}
        setTasks={setTasksState}
        originalTasks={tasks}
      />
      <div className="my-5">
        {tasksState.length > 0 ? (
          tasksState.map((task) => (
            <div
              key={task.id}
              className={`flex justify-between items-center py-2 border ${
                task.isChecked ? "line-through" : ""
              }`}
            >
              <h1 className="pl-5">{task.title}</h1>
              <div>
                <input
                  type="checkbox"
                  name="checked"
                  id="checked"
                  className="md:mx-5 mx-3"
                  checked={task.isChecked}
                  onChange={() => handleToggleCheck(task.id)}
                />
                <button
                  className="btn btn-secondary "
                  onClick={() => handleRemove(task.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-3xl font-bold">
            There is no task here
          </h1>
        )}
      </div>
    </>
  );
};

export default Tasks;
