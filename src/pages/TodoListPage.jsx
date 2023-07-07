import React from "react";
import TaskCreator from "../components/TaskCreator";
import TaskItem from "../components/TaskItem";
import styled from "styled-components";

const ContainerList = styled.div`
  display: flex;
  justify-content: center;

  background-color: blue;
`;

export default function TodoListPage() {
  const [tasks, setTasks] = useState([]);
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const notCompletedTasks = tasks.filter((task) => !task.isCompleted);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (totoTata) => {
    setTasks(tasks.filter((task) => task.id !== toto));
  };

  const editTask = (task) => {
    setTasks(tasks.map((t) => (t.id === tasks.id ? task : t)));
  };

  const completeTask = (task) => {
    setTasks(
      task.map((t) =>
        t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  const TestList = [
    { id: 0, name: "Faire du code" },
    { id: 1, name: "Faire du code pour de vrai" },
    { id: 2, name: "Faire du clean code" },
    { id: 3, name: "Dl error lens" },
    { id: 4, name: "Arreter de faire le gros noob" },
  ];

  return (
    <ContainerList>
      <h1>Liste de tâches :</h1>
      <ul>
        {TestList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </ContainerList>
  );
}
