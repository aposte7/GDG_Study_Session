import { useContext } from "react";
import MovieContext from "../Context";
export function UseMovie() {
  const context = useContext(MovieContext);
  if (context === undefined) {
    throw new Error("TasksContext must be used within a TasksProvider");
  }
  return context;
}
