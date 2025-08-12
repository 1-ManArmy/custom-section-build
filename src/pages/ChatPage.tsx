import { ChatCircle } from "@phosphor-icons/react";

function ChatPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden pt-32">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center space-y-8">
          <div className="flex items-center justify-center gap-3 mb-8">
            <ChatCircle size={48} className="text-purple-500" />
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              NeoChat
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Advanced AI conversation platform with file sharing, voice messages, and intelligent responses. 
            Experience next-generation chat capabilities powered by cutting-edge natural language processing.
          </p>
          
          <div className="mt-16 p-8 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm">
            <p className="text-gray-400 text-lg">
              NeoChat service will be available soon. Stay tuned for smart conversations, 
              multimodal interactions, and seamless AI assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;