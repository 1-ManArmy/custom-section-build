import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export function SearchPage() {
  return (
    <div className="min-h-screen pt-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-card/50 backdrop-blur border-purple-500/20">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
              InfoSeek
            </CardTitle>
            <CardDescription className="text-xl text-muted-foreground">
              AI-Powered Search Engine
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center py-20">
            <p className="text-2xl text-foreground/80">
              Coming Soon - Intelligent Search Platform
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              Find information with AI-enhanced search
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}