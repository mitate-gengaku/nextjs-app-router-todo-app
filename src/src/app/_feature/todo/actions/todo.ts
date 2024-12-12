"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db/client";
import { todos } from "@/db/schema";

export const addTodo = async (data: FormData) => {
  const todo = data.get("todo") as string;

  try {
    await db
      .insert(todos)
      .values({
        title: todo,
        completed: false,
      })
      .returning();
    revalidatePath("/");
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const deleteTodo = async (id: number) => {
  try {
    await db.delete(todos).where(eq(todos.id, id)).returning();
    revalidatePath("/");
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
