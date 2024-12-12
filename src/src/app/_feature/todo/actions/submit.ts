"use server";
import { addTodo } from "./todo";

export const addTask = async (data: FormData) => {
  const todo = data.get("todo") as string;
  if (!todo) return;
  if (!todo.length) return;
  if (!todo.trim()) return;

  await addTodo(data);
};
