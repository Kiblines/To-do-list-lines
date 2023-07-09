import styled from "styled-components";

const ListItem = styled.li`
  display: flex;
  align-items: center;
`;

const TaskName = styled.span`
  flex-grow: 1;
  margin-right: 8px;
`;

const TaskItem = (props) => {
  const handleDelete = () => {
    props.onDeleteTask(props.task);
  };

  const handleEdit = () => {
    const newTaskName = prompt("Nouveau nom de la tâche");

    if (newTaskName && newTaskName.trim() !== "") {
      const updatedTask = { ...props.task, name: newTaskName };
      props.onEditTask(updatedTask);
    }
  };

  return (
    <ListItem>
      <TaskName>{props.task.name}</TaskName>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleEdit}>Modifier</button>
    </ListItem>
  );
};

export default TaskItem;
