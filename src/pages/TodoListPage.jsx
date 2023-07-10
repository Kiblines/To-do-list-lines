import styled from "styled-components";
import TaskItem from "../components/TaskItem";
import TaskCreator from "../components/TaskCreator";
import { useState } from "react";

const ContainerList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
`;
const Title = styled.h1`
  margin-bottom: 30px;
  font-size: 4vh;
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 8px;
  padding: 8px;
`;
const CompletedList = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px; /* Ajoute une marge en bas pour espacer les éléments */
`;
const NotCompletedList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Aligne les éléments au début de la liste */
`;

export default function TodoListPage() {
  const [tasks, setTasks] = useState([]);
  const completedTasks = tasks.filter((task) => task.isCompleted);
  const notCompletedTasks = tasks.filter((task) => !task.isCompleted);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
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
      <Title>Task List</Title>
      <TaskCreator onCreateTask={createTask} />

      {/* Liste des tâches non complétées */}
      <Title>Not Completed</Title>
      <NotCompletedList>
        {notCompletedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onEditTask={editTask}
            onCompleteTask={completeTask}
          />
        ))}
      </NotCompletedList>

      {/* Liste des tâches complétées */}
      <Title>Completed</Title>
      <CompletedList>
        {completedTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={deleteTask}
            onEditTask={editTask}
            onCompleteTask={completeTask}
          />
        ))}
      </CompletedList>
    </ContainerList>
  );
}

//    - Ajouter une task
//- Ajout d'un bouton pour supprimer une task
//- Ajout d'un bouton pour modifier une task: le bouton remplace le texte de la task par un champ d'input pré rempli

// faire en sorte qu'on puisse pas mettre deux fois le meme nom de tâche
// ajouter entrée pour valider
// checkbox pour les completed task
// un peu de CSS clean
// call une api json serv
