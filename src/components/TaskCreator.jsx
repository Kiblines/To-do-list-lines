import { useState } from "react";
import useNewId from "../hooks/useNewId";
import styled from "styled-components";

const ContainerList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 8;
  background-color: blue;
`;

export default function TaskCreator(props) {
  const getNewId = useNewId();
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskName.trim() !== "") {
      const newTask = {
        id: getNewId(),
        name: taskName,
        isCompleted: false,
      };
      props.onCreateTask(newTask);
      setTaskName("");
    }
  };

  const handleChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <ContainerList>
      <form onSubmit={handleSubmit} />
      <input
        type="text"
        value={taskName}
        onChange={handleChange}
        placeholder="Add new task"
      />
      <button type="submit">Add</button>
    </ContainerList>
  );
}
