import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  PaperPlaneRight, 
  Microphone, 
  Paperclip, 
  Robot,
  User,
  FileText,
  Image as ImageIcon,
  Stop
} from "@phosphor-icons/react";
import { useKV } from '@github/spark/hooks';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
  attachments?: Array<{
    name: string;
    type: 'file' | 'image' | 'voice';
    size?: string;
  }>;
}

export function ChatSection() {
  const [messages, setMessages] = useKV<Message[]>("chat-messages", [
    {
      id: "1",
      content: "Hello! I'm your AI assistant. How can I help you today?",
      type: "ai",
      timestamp: new Date()
    }
  ]);
  
  const [inputValue, setInputValue] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: "user",
      timestamp: new Date()
    };

    setMessages(current => [...current, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand your request. Let me help you with that. This is a simulated response that demonstrates the chat functionality.",
        type: "ai",
        timestamp: new Date()
      };
      
      setMessages(current => [...current, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const attachment = {
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' as const : 'file' as const,
        size: (file.size / 1024).toFixed(1) + ' KB'
      };

      const message: Message = {
        id: Date.now().toString() + Math.random(),
        content: `Uploaded: ${file.name}`,
        type: "user",
        timestamp: new Date(),
        attachments: [attachment]
      };

      setMessages(current => [...current, message]);
    });
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        const voiceMessage: Message = {
          id: Date.now().toString(),
          content: "Voice message recorded",
          type: "user",
          timestamp: new Date(),
          attachments: [{
            name: "voice_message.wav",
            type: "voice",
            size: "2.3 KB"
          }]
        };
        setMessages(current => [...current, voiceMessage]);
      }, 3000);
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Chat with{" "}
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
              AI Assistant
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Experience natural conversations with file uploads, voice messages, and intelligent responses
          </p>
        </div>

        {/* Chat Interface */}
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-gray-800/20 bg-gray-900/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
            {/* Chat Header */}
            <div className="p-4 border-b border-gray-700/50 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-medium text-white">AI Assistant</span>
                  <Badge variant="secondary" className="text-xs bg-gray-700 text-gray-200">Online</Badge>
                </div>
                <div className="text-sm text-gray-400">
                  {messages.length} messages
                </div>
              </div>
            </div>

            {/* Messages Area */}
            <ScrollArea className="h-96 p-4 bg-gray-900">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                      message.type === 'user' 
                        ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                        : 'bg-gradient-to-br from-green-500 to-blue-600'
                    }`}>
                      {message.type === 'user' ? <User size={16} /> : <Robot size={16} />}
                    </div>

                    {/* Message Content */}
                    <div className={`flex-1 max-w-xs lg:max-w-md ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      <div className={`rounded-2xl p-3 ${
                        message.type === 'user'
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                          : 'bg-gray-800 text-gray-100'
                      }`}>
                        <p className="text-sm leading-relaxed">{message.content}</p>
                        
                        {/* Attachments */}
                        {message.attachments && (
                          <div className="mt-2 space-y-1">
                            {message.attachments.map((attachment, index) => (
                              <div key={index} className="flex items-center gap-2 text-xs opacity-80">
                                {attachment.type === 'image' && <ImageIcon size={12} />}
                                {attachment.type === 'file' && <FileText size={12} />}
                                {attachment.type === 'voice' && <Microphone size={12} />}
                                <span>{attachment.name}</span>
                                {attachment.size && <span>({attachment.size})</span>}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center text-white">
                      <Robot size={16} />
                    </div>
                    <div className="bg-gray-800 rounded-2xl p-3">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-gray-700/50 bg-gray-900">
              <div className="flex gap-2 items-end">
                {/* File Input */}
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  className="hidden"
                  onChange={handleFileUpload}
                  accept="image/*,.pdf,.doc,.docx,.txt"
                />
                
                {/* File Upload Button */}
                <Button
                  variant="outline"
                  size="sm"
                  className="aspect-square p-2 border-2 border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Paperclip size={16} />
                </Button>

                {/* Text Input */}
                <div className="flex-1 relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="pr-12 border-2 border-gray-600 rounded-xl bg-gray-800 text-gray-100 placeholder-gray-400"
                  />
                </div>

                {/* Voice Recording Button */}
                <Button
                  variant={isRecording ? "destructive" : "outline"}
                  size="sm"
                  className={`aspect-square p-2 border-2 transition-all duration-200 ${
                    isRecording 
                      ? 'border-red-500 bg-red-500/20 text-red-400 animate-pulse' 
                      : 'border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={toggleRecording}
                >
                  {isRecording ? <Stop size={16} /> : <Microphone size={16} />}
                </Button>

                {/* Send Button */}
                <Button
                  size="sm"
                  className="aspect-square p-2 bg-gradient-to-br from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 border-0"
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                >
                  <PaperPlaneRight size={16} />
                </Button>
              </div>

              {/* Recording Indicator */}
              {isRecording && (
                <div className="mt-2 flex items-center gap-2 text-sm text-red-400">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                  Recording... Click stop to finish
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}