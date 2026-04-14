'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header, { Button, Badge } from '@/components/Header';
import { Card, Section, ToggleButton, PropertySection, PropertyRow } from '@/components/Card';

const AdFormatCard = ({ 
  size, 
  label, 
  selected, 
  onClick
}: { 
  size: string; 
  label: string; 
  selected: boolean; 
  onClick: () => void;
}) => {
  const [w, h] = size.split('x').map(Number);
  const aspectRatio = w / h;
  const isWide = aspectRatio > 1.5;
  const isTall = aspectRatio < 0.7;
  
  return (
    <button
      onClick={onClick}
      className={`group p-3.5 rounded-xl border transition-all duration-200 ${
        selected 
          ? 'bg-indigo-500/10 border-indigo-500/50 shadow-lg shadow-indigo-500/10' 
          : 'bg-zinc-900/50 border-zinc-800/50 hover:bg-zinc-900 hover:border-zinc-700'
      }`}
    >
      <div className={`mx-auto mb-2.5 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-lg border border-zinc-700/50 flex items-center justify-center ${
        isWide ? 'w-16 h-6' : isTall ? 'w-6 h-16' : 'w-12 h-12'
      }`}>
        {selected && (
          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        )}
      </div>
      
      <p className={`text-xs font-semibold text-center mb-0.5 ${selected ? 'text-indigo-300' : 'text-zinc-200'}`}>
        {size}
      </p>
      <p className={`text-[11px] text-center ${selected ? 'text-indigo-400/70' : 'text-zinc-500'}`}>
        {label}
      </p>
      
      {selected && (
        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-indigo-500 flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      )}
    </button>
  );
};

export default function ResizeExportPage() {
  const [selectedFormats, setSelectedFormats] = useState<Record<string, string[]>>({
    meta: ['1080x1080'],
    google: ['300x250'],
    performance: ['1200x628'],
    linkedin: ['1200x628'],
  });

  const toggleFormat = (category: string, size: string) => {
    setSelectedFormats(prev => ({
      ...prev,
      [category]: prev[category].includes(size)
        ? prev[category].filter(s => s !== size)
        : [...prev[category], size]
    }));
  };

  const metaFormats = [
    { size: '1080x1080', label: 'Square' },
    { size: '1080x1350', label: 'Vertical' },
    { size: '1080x1920', label: 'Story' },
  ];

  const googleFormats = [
    { size: '300x250', label: 'Medium Rect' },
    { size: '336x280', label: 'Large Rect' },
    { size: '728x90', label: 'Leaderboard' },
    { size: '300x600', label: 'Half Page' },
  ];

  const performanceFormats = [
    { size: '1200x628', label: 'Landscape' },
    { size: '1200x1200', label: 'Square' },
    { size: '960x1200', label: 'Vertical' },
  ];

  const linkedinFormats = [
    { size: '1200x1200', label: 'Square' },
    { size: '1200x628', label: 'Landscape' },
    { size: '628x1200', label: 'Vertical' },
  ];

  const totalSelected = Object.values(selectedFormats).flat().length;

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <Sidebar activeItem="Generate" />
      
      <div className="flex-1 flex flex-col">
        <Header 
          title="Resize & Export" 
          subtitle="Smart multi-format generation"
          icon={
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
            </svg>
          }
          iconGradient="from-cyan-500 to-blue-600"
          badge={
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/60 border border-zinc-800/60">
              <span className="text-sm font-medium text-zinc-300">{totalSelected}</span>
              <span className="text-xs text-zinc-500">formats selected</span>
            </div>
          }
          actions={
            <Button variant="gradient">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
              </svg>
              Generate All Sizes
            </Button>
          }
        />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            <div className="text-center mb-8">
              <h2 className="text-xl font-semibold text-zinc-100 mb-2">
                Smart Resize for <span className="gradient-text">All Platforms</span>
              </h2>
              <p className="text-sm text-zinc-400 max-w-lg mx-auto">
                Select the formats you need and our AI will automatically adapt your banner layout to fit each size perfectly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <Section
                title="Meta Ads"
                description="Facebook & Instagram"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4V2m0 2v2m0-2h10M7 6H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-2M7 6V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                  </svg>
                }
                gradient="from-blue-500/20 to-indigo-500/20"
              >
                <div className="grid grid-cols-3 gap-2">
                  {metaFormats.map((format) => (
                    <AdFormatCard
                      key={format.size}
                      size={format.size}
                      label={format.label}
                      selected={selectedFormats.meta.includes(format.size)}
                      onClick={() => toggleFormat('meta', format.size)}
                    />
                  ))}
                </div>
              </Section>

              <Section
                title="Google Display"
                description="Banner & Display Network"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                }
                gradient="from-amber-500/20 to-orange-500/20"
              >
                <div className="grid grid-cols-2 gap-2">
                  {googleFormats.map((format) => (
                    <AdFormatCard
                      key={format.size}
                      size={format.size}
                      label={format.label}
                      selected={selectedFormats.google.includes(format.size)}
                      onClick={() => toggleFormat('google', format.size)}
                    />
                  ))}
                </div>
              </Section>

              <Section
                title="Performance Max"
                description="Smart Shopping & Performance"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                gradient="from-emerald-500/20 to-teal-500/20"
              >
                <div className="grid grid-cols-3 gap-2">
                  {performanceFormats.map((format) => (
                    <AdFormatCard
                      key={format.size}
                      size={format.size}
                      label={format.label}
                      selected={selectedFormats.performance.includes(format.size)}
                      onClick={() => toggleFormat('performance', format.size)}
                    />
                  ))}
                </div>
              </Section>

              <Section
                title="LinkedIn Ads"
                description="Sponsored Content"
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 6a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                }
                gradient="from-sky-500/20 to-blue-500/20"
              >
                <div className="grid grid-cols-3 gap-2">
                  {linkedinFormats.map((format) => (
                    <AdFormatCard
                      key={format.size}
                      size={format.size}
                      label={format.label}
                      selected={selectedFormats.linkedin.includes(format.size)}
                      onClick={() => toggleFormat('linkedin', format.size)}
                    />
                  ))}
                </div>
              </Section>
            </div>

            <div className="p-5 rounded-2xl border border-zinc-800/50 bg-zinc-950/30 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-zinc-800/80 border border-zinc-700/50 flex items-center justify-center text-zinc-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100">Custom Size</h3>
                  <p className="text-xs text-zinc-500">Define your own dimensions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Width"
                  className="flex-1 h-10 px-4 rounded-xl bg-zinc-900/80 border border-zinc-800/50 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
                <span className="text-zinc-600">×</span>
                <input
                  type="text"
                  placeholder="Height"
                  className="flex-1 h-10 px-4 rounded-xl bg-zinc-900/80 border border-zinc-800/50 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-indigo-500/50 transition-colors"
                />
                <Button variant="secondary" size="md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add
                </Button>
              </div>
            </div>

            <Card className="bg-gradient-to-b from-zinc-950/70 to-zinc-950/90 overflow-hidden">
              <div className="p-8 text-center">
                <Button variant="gradient" className="h-12 px-10 text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Generate All {totalSelected} Sizes
                </Button>
                
                <p className="text-xs text-zinc-500 max-w-md mx-auto mt-4 leading-relaxed">
                  Our AI automatically adapts your banner layout, adjusts typography scaling, and optimizes element positioning for each selected format.
                </p>

                <div className="mt-4 flex items-center justify-center gap-5">
                  <span className="flex items-center gap-1.5 text-[11px] text-zinc-600">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Smart layout
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-zinc-600">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Auto scaling
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-zinc-600">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    High-res export
                  </span>
                </div>
              </div>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
