import styled from "styled-components";
import { useState } from "react";

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const TaskName = styled.span`
  flex-grow: 1;
  margin-right: 8px;
`;

const TaskItem = (props) => {
  const [editing, setEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(props.task.name);

  const handleDelete = () => {
    props.onDeleteTask(props.task);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = () => {
    if (newTaskName.trim() !== "") {
      const updatedTask = { ...props.task, name: newTaskName };
      props.onEditTask(updatedTask);
      setEditing(false);
    }
  };

  const handleCancel = () => {
    setEditing(false);
  };

  const handleChange = (event) => {
    setNewTaskName(event.target.value);
  };

  return (
    <ListItem>
      {editing ? (
        <>
          <input
            type="text"
            value={newTaskName}
            onChange={handleChange}
            autoFocus
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <TaskName>{props.task.name}</TaskName>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </ListItem>
  );
};

export default TaskItem;
