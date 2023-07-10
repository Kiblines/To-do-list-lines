import styled from "styled-components";
import { useState } from "react";

const TaskCard = styled.div``;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TaskName = styled.span`
  flex-grow: 1;
  margin-right: 8px;
`;

const DeleteButton = styled.button`
  height: 30px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  margin-right: 5px;
`;
const CompleteIcon = styled.span`
  font-weight: bold;
`;
const EditButton = styled.button`
  height: 30px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #2196f3;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
`;
const CompleteButton = styled.button`
  background-color: #4caf50;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-size: 14px;
  height: 30px;
  padding: 5px 10px;

  margin: 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #4caf50;
  }
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
          <TaskCard>
            <TaskName>{props.task.name}</TaskName>
            <CompleteButton
              completed={props.task.isCompleted}
              onClick={() => props.onCompleteTask(props.task)}
            >
              {props.task.isCompleted ? <CompleteIcon>✓</CompleteIcon> : ""}
            </CompleteButton>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            <EditButton onClick={handleEdit}>Edit</EditButton>
          </TaskCard>
        </>
      )}
    </ListItem>
  );
};

export default TaskItem;
