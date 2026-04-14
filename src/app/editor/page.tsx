'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header, { Button, Badge } from '@/components/Header';
import { PropertySection, PropertyRow, ToggleButton, ColorSwatch } from '@/components/Card';

const LayerItem = ({ name, type, selected, onClick }: { name: string; type: string; selected: boolean; onClick: () => void }) => {
  const icons: Record<string, React.ReactNode> = {
    background: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    image: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    text: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    ),
    button: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
      </svg>
    ),
  };

  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-150 ${
        selected 
          ? 'bg-zinc-800/80 text-white border border-zinc-700/50 shadow-sm' 
          : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/40 border border-transparent'
      }`}
    >
      <span className={`${selected ? 'text-indigo-400' : 'text-zinc-500'}`}>
        {icons[type]}
      </span>
      <span className="text-sm font-medium flex-1 text-left">{name}</span>
      <div className={`w-1.5 h-1.5 rounded-full transition-all ${selected ? 'bg-indigo-500' : 'bg-zinc-700'}`} />
    </button>
  );
};

export default function EditorPage() {
  const [selectedLayer, setSelectedLayer] = useState('Title Text');

  const layers = [
    { name: 'Background', type: 'background' },
    { name: 'Product Image', type: 'image' },
    { name: 'Title Text', type: 'text' },
    { name: 'Subtitle Text', type: 'text' },
    { name: 'CTA Button', type: 'button' },
  ];

  return (
    <div className="h-screen bg-zinc-950 flex">
      <Sidebar activeItem="My Projects" />
      
      <div className="flex-1 flex flex-col">
        <Header 
          title="Summer Sale Banner" 
          subtitle="Edited 2 min ago"
          icon={
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          iconGradient="from-rose-500 to-pink-600"
          badge={
            <div className="flex items-center gap-2 px-2.5 py-1 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[11px] text-zinc-400">Auto-saved</span>
            </div>
          }
          actions={
            <>
              <Button variant="secondary" size="sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </Button>
              <Button variant="secondary" size="sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Export
              </Button>
              <Button variant="primary" size="sm">Save Draft</Button>
              <Button variant="gradient" size="sm">
                Next
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Button>
            </>
          }
        />

        <div className="flex-1 flex overflow-hidden">
          <div className="w-56 border-r border-zinc-800/60 bg-zinc-950/30 overflow-y-auto">
            <div className="p-4 space-y-5">
              <PropertySection title="Layers">
                <div className="space-y-1">
                  {layers.map((layer) => (
                    <LayerItem
                      key={layer.name}
                      name={layer.name}
                      type={layer.type}
                      selected={selectedLayer === layer.name}
                      onClick={() => setSelectedLayer(layer.name)}
                    />
                  ))}
                </div>
              </PropertySection>

              <div className="border-t border-zinc-800/50 pt-5">
                <PropertySection title="Components">
                  <div className="grid grid-cols-2 gap-2">
                    {['Text', 'Image', 'Shape', 'Button'].map((comp) => (
                      <button
                        key={comp}
                        className="flex flex-col items-center gap-2 p-3 rounded-xl border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-800/30 text-zinc-500 hover:text-zinc-300 transition-all"
                      >
                        <div className="w-8 h-8 rounded-lg bg-zinc-800/60 flex items-center justify-center">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <span className="text-[11px]">{comp}</span>
                      </button>
                    ))}
                  </div>
                </PropertySection>
              </div>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center p-8 bg-zinc-900/20 overflow-auto">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-fuchsia-500/5 rounded-3xl blur-2xl" />
              
              <div className="relative bg-zinc-900/40 rounded-2xl p-3 border border-zinc-800/30 shadow-2xl">
                <div className="relative w-[480px] h-[480px] rounded-xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-600">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                    <div className="absolute inset-0">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-fuchsia-600/40 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                    <div className="mb-5">
                      <div className="w-28 h-28 rounded-2xl bg-white/15 backdrop-blur-sm border-2 border-dashed border-white/30 flex items-center justify-center shadow-2xl">
                        <div className="text-center">
                          <svg className="w-9 h-9 text-white/60 mx-auto mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-[10px] text-white/50 uppercase tracking-wider">Product</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center mb-4">
                      <p className="text-xs font-semibold text-white/80 uppercase tracking-[0.2em] mb-1">Exclusive Collection</p>
                      <h1 className="text-5xl font-black text-white tracking-tight drop-shadow-lg">
                        SUMMER
                      </h1>
                      <h1 className="text-6xl font-black text-white tracking-tight drop-shadow-lg">
                        SALE
                      </h1>
                    </div>
                    
                    <p className="text-base text-white/90 text-center mb-6 tracking-wide">
                      Up to 50% off on all items
                    </p>
                    
                    <button className="px-10 py-3.5 bg-white text-zinc-900 rounded-full text-sm font-bold tracking-wider hover:bg-zinc-100 transition-colors shadow-2xl">
                      SHOP NOW
                    </button>
                  </div>
                  
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm text-[10px] font-semibold text-white/80 border border-white/10">1080 × 1080</span>
                    <span className="px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-sm text-[10px] font-semibold text-white/80 border border-white/10">Instagram</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1.5 bg-zinc-800/90 rounded-full border border-zinc-700/50 shadow-xl backdrop-blur-sm">
                <button className="p-1 rounded bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                </button>
                <span className="text-[11px] text-zinc-400 font-medium px-2 min-w-[48px] text-center">75%</span>
                <button className="p-1 rounded bg-zinc-700 text-zinc-300 hover:bg-zinc-600 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="w-64 border-l border-zinc-800/60 bg-zinc-950/30 overflow-y-auto">
            <div className="p-5 space-y-5">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider">Properties</h2>
                  <span className="text-[10px] text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded-md font-medium">Title Text</span>
                </div>
                
                <div className="space-y-5">
                  <PropertySection title="Typography">
                    <div className="space-y-3">
                      <PropertyRow label="Family">
                        <select className="h-8 px-2 rounded-md bg-zinc-900/80 border border-zinc-800/50 text-xs text-zinc-300 focus:outline-none focus:border-indigo-500/50 cursor-pointer w-28">
                          <option>Inter</option>
                          <option>Poppins</option>
                          <option>Playfair</option>
                        </select>
                      </PropertyRow>

                      <PropertyRow label="Size">
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            defaultValue="96"
                            className="w-14 h-8 px-2 rounded-md bg-zinc-900/80 border border-zinc-800/50 text-xs text-zinc-300 focus:outline-none focus:border-indigo-500/50 text-center"
                          />
                          <span className="text-[11px] text-zinc-500">px</span>
                        </div>
                      </PropertyRow>

                      <PropertyRow label="Weight">
                        <div className="flex gap-1">
                          {['300', '400', '500', '600', '700', '900'].map((weight, i) => (
                            <button
                              key={weight}
                              className={`w-8 h-7 rounded-md text-[10px] font-medium transition-all ${
                                i === 5 
                                  ? 'bg-indigo-500/20 text-indigo-400 border border-indigo-500/50' 
                                  : 'bg-zinc-900/60 text-zinc-500 border border-zinc-800/40 hover:border-zinc-700 hover:text-zinc-300'
                              }`}
                            >
                              {weight}
                            </button>
                          ))}
                        </div>
                      </PropertyRow>

                      <PropertyRow label="Color">
                        <div className="flex gap-1.5">
                          {['#FFFFFF', '#000000', '#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3'].map((color) => (
                            <ColorSwatch key={color} color={color} selected={color === '#FFFFFF'} />
                          ))}
                        </div>
                      </PropertyRow>

                      <PropertyRow label="Spacing">
                        <div className="flex items-center gap-2">
                          <input
                            type="range"
                            min="0"
                            max="20"
                            defaultValue="0"
                            className="w-20 h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
                          />
                          <span className="text-[11px] text-zinc-500 w-4">0</span>
                        </div>
                      </PropertyRow>
                    </div>
                  </PropertySection>

                  <div className="border-t border-zinc-800/50 pt-5">
                    <PropertySection title="Button Style">
                      <div className="space-y-3">
                        <PropertyRow label="Background">
                          <div className="flex gap-1.5">
                            {['#FFFFFF', '#000000', '#6366F1', '#EC4899'].map((color) => (
                              <ColorSwatch key={color} color={color} selected={color === '#FFFFFF'} />
                            ))}
                          </div>
                        </PropertyRow>

                        <PropertyRow label="Radius">
                          <div className="flex items-center gap-2">
                            <input
                              type="range"
                              min="0"
                              max="50"
                              defaultValue="50"
                              className="w-20 h-1 bg-zinc-800 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-indigo-500"
                            />
                            <span className="text-[11px] text-zinc-500">Full</span>
                          </div>
                        </PropertyRow>
                      </div>
                    </PropertySection>
                  </div>

                  <div className="border-t border-zinc-800/50 pt-5">
                    <PropertySection title="Actions">
                      <div className="flex gap-2">
                        <Button variant="secondary" size="sm" className="flex-1 text-[11px]">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                          </svg>
                          Replace
                        </Button>
                        <Button variant="secondary" size="sm" className="flex-1 text-[11px]">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Delete
                        </Button>
                      </div>
                    </PropertySection>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
