import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

function ChatPage() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur border-purple-500/20">
          <CardHeader className="text-center">
            <p className="text-center text-muted-foreground">
              {/* Add your chat description or content here */}
            </p>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}

export default ChatPage;











