import { Noto_Sans_JP } from "next/font/google";

import { TodoForm } from "./_feature/todo/components/todo-form";
import { TodoList } from "./_feature/todo/components/todo-list";

import { db } from "@/db/client";
import { todos as todosSchema } from "@/db/schema";
import { cn } from "@/utils/cn";

export const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--noto-sans-jp",
});

const Top = async () => {
  const todos = await db.select().from(todosSchema).orderBy(todosSchema.id);

  return (
    <>
      <main
        className={cn(
          "h-screen w-screen overflow-x-hidden overflow-y-scroll",
          NotoSansJP.className,
        )}
      >
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
