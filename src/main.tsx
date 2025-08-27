import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

// CSS files
import "./index.css"
import "./main.css"

// Import essential components
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

// Import core pages
import { HomePage } from "@/pages/HomePage"
import ChatPage from "@/pages/ChatPage"
import { MoodAnalyzerPage } from "@/pages/MoodAnalyzerPage"
import { CinematicPage } from "@/pages/CinematicPage"
import { VoiceAssistantPage } from "@/pages/VoiceAssistantPage"
import { MemoryPage } from "@/pages/MemoryPage"
import { IPInfoPage } from "@/pages/IPInfoPage"
import { AboutPage } from "@/pages/AboutPage"
import { ContactPage } from "@/pages/ContactPage"
import { PricingPage } from "@/pages/PricingPage"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/mood-analyzer" element={<MoodAnalyzerPage />} />
            <Route path="/cinematic" element={<CinematicPage />} />
            <Route path="/voice-assistant" element={<VoiceAssistantPage />} />
            <Route path="/memory" element={<MemoryPage />} />
            <Route path="/ip-info" element={<IPInfoPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(<App />)
}
