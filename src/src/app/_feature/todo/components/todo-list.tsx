"use client";

import { deleteTodoFunc } from "../actions/delete";

import { DeleteTaskAlert } from "@/components/notifications/alert-dialog/delete-task";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const TodoList = (props: {
  todos: {
    id: number;
    title: string;
    createdAt: Date;
    completed: boolean;
    updatedAt: Date;
  }[];
}) => {
  const { todos } = props;

  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo) => (
        <Card key={todo.id}>
          <CardHeader>
            <CardTitle>{todo.title}</CardTitle>
            <CardDescription>
              {new Date(todo.createdAt).toLocaleDateString("sv-SE")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <DeleteTaskAlert onClick={() => deleteTodoFunc(todo.id)}>
                <Button variant={"destructive"}>削除</Button>
              </DeleteTaskAlert>
            </form>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
