import React from "react";
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

  return (
    <div>
      <h2>Quentin est un tyran</h2>
    </div>
  );
}
