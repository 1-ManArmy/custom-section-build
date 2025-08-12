import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/sc
import { 
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  PaperPlaneRight, 
  Sparkles,
} from "@phos

  id: s
  type: 'us
  attachments?: Array
    typ
  }>;

  const [mes
      id: "1",
      type: "ai",

  
  const [isRe
  const fileInputR
  const handleSendMess

      id: Date.now().to
      type: "user
    };
    setMessages(cu
    s
 

function ChatPage() {
  const [messages, setMessages] = useKV<Message[]>("neochat-messages", [
    {
      id: "1",
      content: "Welcome to NeoChat! I'm your advanced AI conversation partner. How can I assist you today?",
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
        content: "I understand your request. Let me help you with that using NeoChat's advanced AI capabilities. This is a simulated response demonstrating our intelligent conversation features.",
        type: "ai",
      setMessages(current => 
      };
      
      setMessages(current => [...current, aiMessage]);
      setIsTyping(false);
    }, 2000);
    

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
          timestamp: new 
      handleSendMessage();
     
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      <div className="min-
        name: file.name,
        type: file.type.startsWith('image/') ? 'image' as const : 'file' as const,
        size: (file.size / 1024).toFixed(1) + ' KB'
        

      const message: Message = {
        id: Date.now().toString() + Math.random(),
        content: `Uploaded: ${file.name}`,
        type: "user",
              </h1>
        attachments: [attachment]
      };

      setMessages(current => [...current, message]);
    });
    

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    if (!isRecording) {
      // Simulate voice recording
      setTimeout(() => {
        setIsRecording(false);
        const voiceMessage: Message = {
          id: Date.now().toString(),
          content: "Voice message recorded",
            {/* Backdro
          timestamp: new Date(),
          attachments: [{
            name: "voice_message.wav",
            type: "voice",
            size: "2.3 KB"
          }]
        };
        setMessages(current => [...current, voiceMessage]);
      }, 3000);
     
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Hero Section for NeoChat */}
                  <div className="bg-gray-800/80 rounded-2xl p-3 border border-purple-500/20">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <ChatCircle size={24} className="text-purple-400" />
                <span className="text-purple-400 font-medium">NeoChat AI Service</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
                Smart conversations with{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-600 bg-clip-text text-transparent">
                  NeoChat AI
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
                Experience next-generation AI conversations with file sharing, voice messages, 
                and intelligent responses powered by advanced natural language processing.
                <d
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
                <div c
                size="lg" 
                className="px-8 py-6 text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
      <section 
                Start Chatting
          className="ab
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-6 text-lg font-medium border-purple-500/50 text-purple-400 hover:bg-purple-500/10 rounded-xl transition-all duration-300"
              >
                View Features
              </Button>
            </div>
          style=

          {/* Right Content - Chat Preview */}
          <div className="relative w-full">
            {/* Backdrop blur effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl backdrop-blur-sm" />
          st
            {/* Main container */}
            <div className="relative bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-3xl p-6 shadow-2xl">
              {/* Chat Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-700/50">
                <div className="flex items-center gap-3">
                  <ChatCircle className="text-purple-400" size={20} />
                  <span className="text-sm font-medium text-gray-300">NeoChat Preview</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
          {/* Chat I

              {/* Chat Header */}
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-white">
                    <Robot size={16} />
                      cl
                  <div className="bg-gray-800/80 rounded-2xl p-3 border border-purple-500/20">
                    <p className="text-sm text-gray-100">Hello! I'm NeoChat AI. How can I help you today?</p>
                  </div>
                </div>
                
                <div className="flex gap-3 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white">
                    <User size={16} />
                  </div>
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-3 text-white">
                    <p className="text-sm">I need help with my project</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center text-white">
                    <Robot size={16} />
                  </div>
                  <div className="bg-gray-800/80 rounded-2xl p-3 border border-purple-500/20">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
                    
              
                              ))}
              <div className="absolute -top-2 -right-2">
                <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                    
              <div className="absolute top-8 -left-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-ping shadow-lg shadow-blue-400/50"></div>
              </div>
              <div className="absolute bottom-4 -right-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50" style={{ animationDelay: '1s' }}></div>
              </div>
                  
          </div>
              
      </div>

      {/* Chat Section */}
      <section className="py-16 px-6 relative bg-black overflow-hidden">
        {/* Red Dotted Background Pattern */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `radial-gradient(circle, #dc2626 1px, transparent 1px)`,
                  <input
            backgroundPosition: '0 0, 15px 15px'
            
          
        {/* Additional scattered red dots */}
             
          className="absolute inset-0 opacity-40"
                  
            backgroundImage: `radial-gradient(circle, #ef4444 0.8px, transparent 0.8px)`,
            backgroundSize: '45px 45px',
            backgroundPosition: '7px 7px'
          }}
        />
        {/* More varied dot pattern */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle, #dc2626 0.6px, transparent 0.6px)`,
                    />
            backgroundPosition: '20px 20px'
            
        />
        
        <div className="max-w-7xl mx-auto relative z-10">
                        
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Chat with{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 bg-clip-text text-transparent">
                NeoChat AI
                  <Bu
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Advanced AI conversations with file uploads, voice messages, and intelligent responses tailored for your needs
            </p>
          </div>

          {/* Chat Interface */}
                  <div className="mt-2 flex i
            <Card className="border-2 border-red-500/30 bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20">
                  </div>
              <div className="p-4 border-b border-red-500/30 bg-gradient-to-r from-red-500/20 via-red-600/20 to-red-700/20">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <span className="font-medium text-white">NeoChat AI Assistant</span>
                    <Badge variant="secondary" className="text-xs bg-red-900/50 text-red-200 border-red-500/30">Online</Badge>

                  <div className="text-sm text-gray-400">
                    {messages.length} messages
                  </div>
                </div>



              <ScrollArea className="h-96 p-4 bg-black/95">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                    >

                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white ${
                        message.type === 'user' 
                          ? 'bg-gradient-to-br from-red-500 to-red-600' 
                          : 'bg-gradient-to-br from-red-600 to-red-700'
                      }`}>

                      </div>

                      {/* Message Content */}
                      <div className={`flex-1 max-w-xs lg:max-w-md ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        <div className={`rounded-2xl p-3 ${
                          message.type === 'user'
                            ? 'bg-gradient-to-br from-red-500 to-red-600 text-white'
                            : 'bg-gray-900/80 text-gray-100 border border-red-500/20'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.content}</p>

                          {/* Attachments */}
                          {message.attachments && (

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



                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center text-white">
                        <Robot size={16} />
                      </div>

                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>

                    </div>

                </div>


              {/* Input Area */}
              <div className="p-4 border-t border-red-500/30 bg-black/95">

                  {/* File Input */}

                    ref={fileInputRef}

                    multiple

                    onChange={handleFileUpload}
                    accept="image/*,.pdf,.doc,.docx,.txt"
                  />

                  {/* File Upload Button */}
                  <Button
                    variant="outline"

                    className="aspect-square p-2 border-2 border-red-500/50 bg-black/80 text-red-300 hover:bg-red-900/30 hover:border-red-400"
                    onClick={() => fileInputRef.current?.click()}
                  >

                  </Button>

                  {/* Text Input */}
                  <div className="flex-1 relative">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}

                      placeholder="Type your message..."
                      className="pr-12 border-2 border-red-500/50 rounded-xl bg-black/80 text-gray-100 placeholder-gray-500 focus:border-red-400"
                    />


                  {/* Voice Recording Button */}
                  <Button
                    variant={isRecording ? "destructive" : "outline"}
                    size="sm"
                    className={`aspect-square p-2 border-2 transition-all duration-200 ${
                      isRecording 

                        : 'border-red-500/50 bg-black/80 text-red-300 hover:bg-red-900/30 hover:border-red-400'

                    onClick={toggleRecording}

                    {isRecording ? <Stop size={16} /> : <Microphone size={16} />}



                  <Button
                    size="sm"
                    className="aspect-square p-2 bg-gradient-to-br from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 border-0"
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim()}
                  >
                    <PaperPlaneRight size={16} />

                </div>

                {/* Recording Indicator */}

                  <div className="mt-2 flex items-center gap-2 text-sm text-red-400">
                    <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                    Recording... Click stop to finish

                )}

            </Card>

        </div>

    </div>

}

export default ChatPage;