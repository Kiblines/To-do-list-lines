import React, { useState } from "react";
import useNewId from "../hooks/useNewId";
import styled from "styled-components";
import { createTask } from "../api/api";

const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const TaskCreatorInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 14px;
`;

const BtnCreator = styled.button`
  height: 30px;
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #4caf50;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
`;

export default function TaskCreator(props) {
  const getNewId = useNewId();
  const [taskName, setTaskName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (taskName.trim() !== "") {
      const newTask = {
        id: getNewId(),
        name: taskName,
        isCompleted: false,
      };
      try {
        const createdTask = await createTask(newTask);
        props.onCreateTAsk(createdTask);
        setTaskName("");
      } catch (error) {
        console.error("Erreur lors de la création de la tâche", error);
      }
    }
  };

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <ContainerList>
      <form onSubmit={handleSubmit}>
        <TaskCreatorInput
          type="text"
          value={taskName}
          onChange={handleChange}
          placeholder="Add new task"
        />
        <BtnCreator type="submit">Add</BtnCreator>
      </form>
    </ContainerList>
  );
}
