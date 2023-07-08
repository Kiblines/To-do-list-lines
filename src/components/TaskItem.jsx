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

  const handleEdit = () => {};
};

export default function TaskItem() {
  return (
    <ListItem>
      <TaskName>{props.task.name}</TaskName>
      <button onClick></button>
    </ListItem>
  );
}
