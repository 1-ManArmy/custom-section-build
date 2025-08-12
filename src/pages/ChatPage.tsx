import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function ChatPage() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur border-purple-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold text-foreground mb-4">
              NeoChat
            </CardTitle>
            <CardDescription className="text-xl text-foreground/80">
              Advanced AI Chat Experience
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-center text-muted-foreground">
              Chat interface coming soon...
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}