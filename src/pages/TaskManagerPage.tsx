import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function TaskManagerPage() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur border-purple-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              TaskMaster
            </CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              AI-Powered Task Management
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-20">
            <p className="text-2xl text-foreground/80">
              Coming Soon - Intelligent Task Organization
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Master your tasks with AI assistance
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}