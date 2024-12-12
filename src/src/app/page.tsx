import { TodoForm } from "./_feature/todo/components/todo-form";
import { TodoList } from "./_feature/todo/components/todo-list";

import { db } from "@/db/client";
import { todos as todosSchema } from "@/db/schema";


const Top = async () => {
  const todos = await db.select().from(todosSchema).orderBy(todosSchema.id);

  return (
    <>
      <main className="h-screen w-screen overflow-x-hidden overflow-y-scroll">
        <div className="mx-auto flex w-4/5 flex-col gap-8 py-8 lg:w-2/5">
          <h2 className="text-4xl font-bold">Todoアプリ</h2>
          <TodoForm />
          <TodoList todos={todos} />
        </div>
      </main>
    </>
  );
};

export default Top;
