import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll, deleteDoneTasks } from "../redux/taskSlice";

const DeleteButtons = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task);

  const handleDeleteAll = () => {
    dispatch(deleteAll());
  };
  const handleDeleteDoneTasks = () => {
    dispatch(deleteDoneTasks());
  };
  return (
    <div>
      {tasks.length > 0 ? (
        <div className="flex justify-between">
          <button onClick={() => handleDeleteAll()} className="btn btn-primary">
            Delete All
          </button>
          <button
            onClick={() => handleDeleteDoneTasks()}
            className="btn btn-secondary"
          >
            Delete Done Tasks
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DeleteButtons;
