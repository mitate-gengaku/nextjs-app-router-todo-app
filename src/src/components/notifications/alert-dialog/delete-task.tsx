import { GeistSans } from "geist/font/sans";
import React, { ReactNode } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/cn";

export const DeleteTaskAlert = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: React.ComponentProps<"button">["onClick"];
}) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
    <AlertDialogContent className={cn(GeistSans.className)}>
      <AlertDialogHeader>
        <AlertDialogTitle>タスクを削除しますか？</AlertDialogTitle>
        <AlertDialogDescription>
          この操作は取り消せません
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>キャンセル</AlertDialogCancel>
        <AlertDialogAction
          className={cn("bg-red-500 hover:bg-red-600")}
          onClick={onClick}
          asChild
        >
          <Button>削除する</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
