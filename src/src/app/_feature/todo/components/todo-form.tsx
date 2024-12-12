"use client";

import { useRef } from "react";

import { addTask } from "../actions/submit";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/utils/cn";

export const TodoForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const submitFunc = async (data: FormData) => {
    await addTask(data);
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  return (
    <form action={submitFunc} className="flex flex-col gap-2" ref={formRef}>
      <Label>タスク名を記述してください</Label>
      <Input
        name="todo"
        className={cn("focus:outline-sky-600 focus-visible:ring-sky-600")}
      />
      <Button className="w-fit bg-sky-500 hover:bg-sky-600">
        タスクを追加
      </Button>
    </form>
  );
};
