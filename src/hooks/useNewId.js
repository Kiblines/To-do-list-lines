import { useState } from "react";

function useNewId() {
  const [id, setId] = useState(0);

  const getNewId = () => {
    const newId = id + 1;
    setId(newId);
    return newId;
  };

  return getNewId;
}

export default useNewId;
