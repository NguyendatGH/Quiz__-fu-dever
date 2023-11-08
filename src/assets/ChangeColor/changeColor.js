export const getColor = (difficulty) => {
  switch (difficulty) {
    case "hard":
      return "error";
    case "medium":
      return "warning";
    case "easy":
      return "success";
  }
};
