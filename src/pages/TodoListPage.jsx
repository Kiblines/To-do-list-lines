import styled from "styled-components";
import TaskItem from "../components/TaskItem";
import TaskCreator from "../components/TaskCreator";
import { useState } from "react";

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
    setTasks(tasks.filter((task) => task.id !== totoTata));
  };

  const editTask = (task) => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  const completeTask = (task) => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
      )
    );
  };

  // const TestList = [
  //   { id: 0, name: "Faire du code" },
  //   { id: 1, name: "Faire du code pour de vrai" },
  //   { id: 2, name: "Faire du clean code" },
  //   { id: 3, name: "Dl error lens" },
  //   { id: 4, name: "Arreter de faire le gros noob" },
  // ];

  return (
    <ContainerList>
      <h1>Task List</h1>
      <TaskCreator onCreateTask={createTask} />
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onEditTask={editTask}
            onCompleteTask={completeTask}
          />
        ))}
      </ul>
    </ContainerList>
  );
}

//    - Ajouter une task
//- Ajout d'un bouton pour supprimer une task
//- Ajout d'un bouton pour modifier une task: le bouton remplace le texte de la task par un champ d'input pré rempli
