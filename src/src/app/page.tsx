import { DeleteTaskAlert } from "@/components/notifications/alert-dialog/delete-task";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Top = () => {
  return (
    <>
      <main className="h-screen w-screen overflow-x-hidden overflow-y-scroll">
        <div className="mx-auto flex w-4/5 flex-col gap-8 py-8 lg:w-2/5">
          <h2 className="text-4xl font-bold">Todoアプリ</h2>
          <form className="flex flex-col gap-2">
            <Label>タスク名を記述してください</Label>
            <Input />
            <Button className="w-fit bg-cyan-500 hover:bg-cyan-600">
              タスクを追加
            </Button>
          </form>
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                  {new Date().toLocaleDateString("sv-SE")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <DeleteTaskAlert>
                  <Button variant={"destructive"}>削除</Button>
                </DeleteTaskAlert>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </>
  );
};

export default Top;
