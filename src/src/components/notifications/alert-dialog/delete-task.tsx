import { Noto_Sans_JP } from "next/font/google";
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
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils/cn";


export const NotoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--noto-sans-jp",
});

export const DeleteTaskAlert = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: React.ComponentProps<"button">["onClick"];
}) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
    <AlertDialogContent className={cn(NotoSansJP.className)}>
      <AlertDialogHeader>
        <AlertDialogTitle>タスクを削除しますか？</AlertDialogTitle>
        <AlertDialogDescription>
          この操作は取り消せません
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>キャンセル</AlertDialogCancel>
        <AlertDialogAction
          className={cn(buttonVariants({ variant: "destructive" }))}
          onClick={onClick}
          asChild
        >
          <Button>削除する</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);
