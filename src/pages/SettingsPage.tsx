import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SettingsPage() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur border-purple-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
              ConfigAI
            </CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              AI Configuration Center
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-20">
            <p className="text-2xl text-foreground/80">
              Coming Soon - Smart Configuration Tools
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Configure AI systems intelligently
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}