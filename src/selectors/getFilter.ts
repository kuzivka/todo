import { Selector } from "react-redux";

export const getFilter: Selector<ToDoState, string> =(state)=>state.show;
