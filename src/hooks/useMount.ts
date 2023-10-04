import React from "react";

export const useMount = (fn: () => void) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(fn, []);
};
