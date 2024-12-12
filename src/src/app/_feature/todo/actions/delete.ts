"use server";

import { deleteTodo } from "./todo";

export const deleteTodoFunc = async (id: number) => {
  if (!id) return;

  await deleteTodo(id);
};
