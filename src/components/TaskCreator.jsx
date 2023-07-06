import React from "react";
import useNewId from "../hooks/useNewId";

export default function TaskCreator(props) {
  const getNewId = useNewId();
  return <div>TaskCreator</div>;
}
