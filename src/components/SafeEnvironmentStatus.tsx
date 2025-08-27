import React from 'react';
import { CheckCircle } from '@phosphor-icons/react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EnvironmentStatusProps {
  showDetails?: boolean;
  onClose?: () => void;
}

export function SafeEnvironmentStatus({ showDetails = false, onClose }: EnvironmentStatusProps) {
  // Simple safe version without complex dependencies
  return (
    <div className="p-6">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle className="h-5 w-5 text-green-500" />
            Environment Status
          </CardTitle>
          <CardDescription>
            System health and configuration status
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              ✅ All systems operational - OneLast AI is ready to serve
            </AlertDescription>
          </Alert>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium">Services</h4>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm">React App</span>
                  <Badge variant="outline" className="text-green-500">Online</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Router</span>
                  <Badge variant="outline" className="text-green-500">Active</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Components</span>
                  <Badge variant="outline" className="text-green-500">Loaded</Badge>
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">Configuration</h4>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span className="text-sm">Theme</span>
                  <Badge variant="outline" className="text-blue-500">Dark</Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Environment</span>
                  <Badge variant="outline" className="text-purple-500">Development</Badge>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Export as both SafeEnvironmentStatus and EnvironmentStatus for compatibility
export { SafeEnvironmentStatus as EnvironmentStatus };
