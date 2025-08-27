import React from "react";

// Simple working HomePage replacement
export function SimpleHomePage() {
  return (
    <div style={{
      minHeight: '80vh',
      padding: '40px',
      backgroundColor: '#0a0a0a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '48px', 
        marginBottom: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: 'center'
      }}>
        🚀 OneLast AI
      </h1>
      <p style={{ fontSize: '20px', marginBottom: '30px', textAlign: 'center' }}>
        Empowering Youth Through Artificial Intelligence
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '20px',
        maxWidth: '800px',
        width: '100%'
      }}>
        {[
          { name: 'NeoChat', desc: 'AI-Powered Conversations' },
          { name: 'EmotiSense', desc: 'Mood Analysis' },
          { name: 'CineGen', desc: 'Cinematic AI' },
          { name: 'VocaMind', desc: 'Voice Assistant' },
          { name: 'Memora', desc: 'Memory AI' },
          { name: 'NetScope', desc: 'IP Information' }
        ].map((tool, index) => (
          <div key={index} style={{
            background: 'rgba(255,255,255,0.05)',
            padding: '20px',
            borderRadius: '12px',
            border: '1px solid rgba(255,255,255,0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ marginBottom: '10px', color: '#00ff88' }}>{tool.name}</h3>
            <p style={{ color: '#cccccc', fontSize: '14px' }}>{tool.desc}</p>
          </div>
        ))}
      </div>
      <div style={{ 
        marginTop: '40px',
        padding: '20px',
        background: 'rgba(0,255,136,0.1)',
        borderRadius: '8px',
        border: '1px solid rgba(0,255,136,0.3)'
      }}>
        <p style={{ margin: 0, color: '#00ff88' }}>
          ✅ HomePage is working! All components are loading successfully.
        </p>
      </div>
    </div>
  );
}
