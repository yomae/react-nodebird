import { useState, useCallback } from "react";

// Custom Hooks

export default (initValue = null) => {
  const [value, setValue] = useState(initValue);

  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  return [value, handler];
};
