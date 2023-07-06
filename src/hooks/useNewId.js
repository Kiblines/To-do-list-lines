import { useState } from "react";

function useNewId() {
  const [id, setId] = useState(0);
  const getNewId = () => {
    const resId = id;
    setId(resId + 1);
    console.log(resId);
  };

  return getNewId;
}

export default useNewId;
