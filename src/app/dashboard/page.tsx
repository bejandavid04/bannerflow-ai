'use client';

import React from 'react';
import Sidebar from '@/components/Sidebar';
import Header, { Button, Badge } from '@/components/Header';

const BannerConcept = ({ concept }: { concept: any }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className="group relative bg-zinc-900/50 rounded-2xl border border-zinc-800/50 overflow-hidden transition-all duration-300 hover:border-zinc-700/80 hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`relative aspect-[4/3] ${concept.gradient} overflow-hidden`}>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
                <svg className="w-7 h-7 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <span className="text-white/90 text-xs font-medium tracking-wide">{concept.type}</span>
          </div>
          
          <div className="absolute top-2 left-2 flex gap-1.5">
            {concept.platforms.map((platform: string, i: number) => (
              <span key={i} className="px-2 py-0.5 rounded-md bg-black/30 backdrop-blur-sm text-[10px] font-medium text-white/80 border border-white/10">
                {platform}
              </span>
            ))}
          </div>
          
          <div className="absolute bottom-2 right-2">
            <span className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm text-[10px] font-mono text-white/70 border border-white/10">
              {concept.size}
            </span>
          </div>
        </div>
        
        <div className={`absolute inset-0 bg-black/60 backdrop-blur-[2px] flex items-center justify-center transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="px-4 py-2 rounded-xl bg-white/95 text-zinc-900 text-xs font-semibold flex items-center gap-2 hover:bg-white shadow-lg transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Edit
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-1">
          <div>
            <h4 className="text-sm font-semibold text-zinc-100">{concept.title}</h4>
            <p className="text-[11px] text-zinc-500 mt-0.5">{concept.subtitle}</p>
          </div>
        </div>
        
        <p className="text-xs text-zinc-500 leading-relaxed line-clamp-2 mb-4">
          {concept.description}
        </p>
        
        <div className="flex gap-2">
          <button className="flex-1 h-9 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-xs font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Select
          </button>
          <button className="h-9 w-9 rounded-xl border border-zinc-700/50 hover:border-zinc-600 bg-zinc-800/30 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-all flex items-center justify-center">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

const MessageBubble = ({ message, isUser, isLast }: { message: any; isUser: boolean; isLast: boolean }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-4 duration-500`}>
      <div className={`flex gap-4 max-w-3xl ${isUser ? 'flex-row-reverse' : ''}`}>
        {!isUser && (
          <div className="flex-shrink-0 w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        )}
        
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} gap-3`}>
          <div className={`px-5 py-3.5 rounded-2xl ${isUser 
            ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/20 rounded-br-md' 
            : 'bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 text-zinc-100 rounded-bl-md'
          }`}>
            <p className="text-[15px] leading-relaxed">{message.text}</p>
          </div>
          
          {message.concepts && (
            <div className="grid grid-cols-3 gap-4 w-full">
              {message.concepts.map((concept: any, i: number) => (
                <BannerConcept key={i} concept={concept} />
              ))}
            </div>
          )}
          
          {!isUser && isLast && (
            <div className="flex gap-2 mt-2">
              <button className="h-8 px-3 rounded-lg bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Export All
              </button>
              <button className="h-8 px-3 rounded-lg bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 text-xs font-medium text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const messages = [
    {
      text: "Create a summer sale banner for a fashion brand",
      isUser: true,
    },
    {
      text: "Here are 3 unique concepts based on your request. Each is optimized for different placements and platforms. Click to customize or export directly.",
      isUser: false,
      concepts: [
        {
          title: "Bold Summer Blast",
          subtitle: "High-impact seasonal sale",
          description: "Vibrant gradient with bold typography, featuring dynamic diagonal composition and energetic summer color palette.",
          type: "Hero Banner",
          size: "1200×628",
          platforms: ["Meta", "Facebook"],
          gradient: "bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600",
        },
        {
          title: "Elegant Luxe",
          subtitle: "Premium fashion aesthetic",
          description: "Sophisticated minimal composition with refined typography, soft shadows, and a luxurious color scheme.",
          type: "Carousel",
          size: "1080×1080",
          platforms: ["Instagram", "Meta"],
          gradient: "bg-gradient-to-br from-amber-400 via-orange-500 to-red-500",
        },
        {
          title: "Playful Energy",
          subtitle: "Youth-oriented design",
          description: "Dynamic layout with playful geometric elements, bold colors, and an energetic vibe that captures attention.",
          type: "Story",
          size: "1080×1920",
          platforms: ["Instagram", "Stories"],
          gradient: "bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <Sidebar activeItem="Dashboard" />
      
      <div className="flex-1 flex flex-col">
        <Header 
          title="Generate" 
          subtitle="AI-powered banner creation"
          icon={
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          }
          iconGradient="from-indigo-500 to-purple-600"
          badge={<Badge variant="success">12 generations left</Badge>}
          actions={
            <>
              <Button variant="ghost" size="sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </Button>
              <Button variant="primary" size="sm">New Banner</Button>
            </>
          }
        />

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            <div className="space-y-6">
              {messages.map((message, index) => (
                <MessageBubble 
                  key={index} 
                  message={message} 
                  isUser={message.isUser}
                  isLast={index === messages.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-zinc-800/60 bg-zinc-950/80 backdrop-blur-xl">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 rounded-2xl opacity-30 blur" />
              <div className="relative flex items-center gap-4 p-4 bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-700/50">
                <div className="flex-1 relative">
                  <input 
                    type="text" 
                    placeholder="Describe your banner... e.g. 'Modern tech startup banner with futuristic vibe'"
                    className="w-full h-11 pl-4 pr-12 rounded-xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-700/50 transition-all">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                  </button>
                </div>
                <button className="h-11 px-6 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-between mt-4 px-1">
              <div className="flex items-center gap-4">
                <span className="text-[11px] text-zinc-500">Quick prompts:</span>
                <button className="text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors">Summer sale</button>
                <button className="text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors">Product launch</button>
                <button className="text-[11px] text-indigo-400 hover:text-indigo-300 transition-colors">Holiday promo</button>
              </div>
              <span className="text-[11px] text-zinc-600">Powered by AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
