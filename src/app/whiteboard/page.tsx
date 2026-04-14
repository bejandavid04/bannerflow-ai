'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Header, { Button, Badge } from '@/components/Header';
import { Card, CardContent } from '@/components/Card';

const BannerPreview = ({ 
  size, 
  label, 
  platform,
  gradient,
  selected,
  onClick
}: { 
  size: string; 
  label: string;
  platform: string;
  gradient: string;
  selected: boolean;
  onClick: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [w] = size.split('x').map(Number);
  const aspectRatio = w / 100;

  const getPreviewHeight = () => {
    if (aspectRatio > 2) return 'h-20';
    if (aspectRatio > 1.2) return 'h-32';
    if (aspectRatio < 0.7) return 'h-48';
    return 'h-40';
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative bg-zinc-900/50 rounded-2xl border transition-all duration-200 overflow-hidden ${
        selected 
          ? 'border-indigo-500/50 bg-indigo-500/10 shadow-lg shadow-indigo-500/10' 
          : 'border-zinc-800/50 hover:border-zinc-700 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-0.5'
      }`}
    >
      <div className={`${getPreviewHeight()} ${gradient} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
        
        <div className="text-center space-y-2 p-4">
          <div className="w-10 h-10 mx-auto rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-white/70 text-xs font-medium">{label}</span>
        </div>

        {selected && (
          <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}

        <div className="absolute bottom-2 left-2 flex gap-1.5">
          <span className="px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm text-[10px] font-semibold text-white/80 border border-white/10">
            {size}
          </span>
          <span className="px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm text-[10px] font-semibold text-white/80 border border-white/10">
            {platform}
          </span>
        </div>
      </div>

      <div className="p-3 flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${selected ? 'text-indigo-300' : 'text-zinc-200'}`}>
            {label}
          </p>
          <p className="text-xs text-zinc-500">{size} · {platform}</p>
        </div>
        <div className={`w-2 h-2 rounded-full ${selected ? 'bg-indigo-500' : 'bg-zinc-700'}`} />
      </div>
    </button>
  );
};

const SelectedPreview = ({ banner }: { banner: any }) => {
  if (!banner) return null;

  const [w, h] = banner.size.split('x').map(Number);
  const aspectRatio = w / h;

  return (
    <div className="h-full flex flex-col">
      <div className="p-4 border-b border-zinc-800/60">
        <h3 className="text-sm font-semibold text-zinc-200">Selected Format</h3>
        <p className="text-xs text-zinc-500 mt-0.5">{banner.label} · {banner.size}</p>
      </div>

      <div className="flex-1 p-4 overflow-hidden">
        <div className="relative bg-zinc-900/30 rounded-xl border border-zinc-800/50 overflow-hidden" style={{ aspectRatio: aspectRatio }}>
          <div className={`absolute inset-0 ${banner.gradient}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="w-12 h-12 mx-auto rounded-xl bg-black/20 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-white/70 text-xs font-medium">{banner.label}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
            <span className="text-xs text-zinc-500">Dimensions</span>
            <span className="text-xs font-medium text-zinc-300">{banner.size} px</span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
            <span className="text-xs text-zinc-500">Platform</span>
            <span className="text-xs font-medium text-zinc-300">{banner.platform}</span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="text-xs text-zinc-500">Aspect Ratio</span>
            <span className="text-xs font-medium text-zinc-300">{aspectRatio.toFixed(2)}:1</span>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-zinc-800/60 space-y-2">
        <Button variant="gradient" className="w-full">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
          </svg>
          Edit This Format
        </Button>
        <Button variant="secondary" className="w-full">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Export Single
        </Button>
      </div>
    </div>
  );
};

export default function WhiteboardPage() {
  const [selectedBanners, setSelectedBanners] = useState<string[]>(['1080x1080', '1200x628']);
  const [selectedPreview, setSelectedPreview] = useState<string | null>('1080x1080');

  const banners = [
    { id: 'meta-square', size: '1080x1080', label: 'Instagram Square', platform: 'Meta', gradient: 'bg-gradient-to-br from-rose-500 via-pink-500 to-fuchsia-600' },
    { id: 'meta-story', size: '1080x1920', label: 'Instagram Story', platform: 'Meta', gradient: 'bg-gradient-to-br from-violet-500 via-purple-500 to-indigo-600' },
    { id: 'meta-landscape', size: '1200x628', label: 'Facebook Landscape', platform: 'Meta', gradient: 'bg-gradient-to-br from-amber-400 via-orange-500 to-red-500' },
    { id: 'google-medium', size: '300x250', label: 'Medium Rectangle', platform: 'Google', gradient: 'bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600' },
    { id: 'google-large', size: '336x280', label: 'Large Rectangle', platform: 'Google', gradient: 'bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600' },
    { id: 'google-leader', size: '728x90', label: 'Leaderboard', platform: 'Google', gradient: 'bg-gradient-to-br from-fuchsia-500 via-pink-500 to-rose-600' },
    { id: 'google-half', size: '300x600', label: 'Half Page', platform: 'Google', gradient: 'bg-gradient-to-br from-indigo-500 via-violet-500 to-purple-600' },
    { id: 'linkedin-square', size: '1200x1200', label: 'LinkedIn Square', platform: 'LinkedIn', gradient: 'bg-gradient-to-br from-sky-500 via-blue-600 to-indigo-700' },
    { id: 'linkedin-land', size: '1200x628', label: 'LinkedIn Landscape', platform: 'LinkedIn', gradient: 'bg-gradient-to-br from-rose-600 via-pink-500 to-fuchsia-600' },
  ];

  const toggleBanner = (id: string) => {
    setSelectedBanners(prev => 
      prev.includes(id) ? prev.filter(b => b !== id) : [...prev, id]
    );
    setSelectedPreview(id);
  };

  const selectAll = () => {
    setSelectedBanners(banners.map(b => b.id));
  };

  const deselectAll = () => {
    setSelectedBanners([]);
  };

  const selectedBannerData = banners.find(b => b.id === selectedPreview);

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <Sidebar activeItem="My Projects" />
      
      <div className="flex-1 flex flex-col">
        <Header 
          title="All Formats Generated" 
          subtitle={`${selectedBanners.length} of ${banners.length} selected`}
          icon={
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
            </svg>
          }
          iconGradient="from-emerald-500 to-teal-600"
          actions={
            <>
              <Button variant="ghost" size="sm" onClick={selectAll}>Select All</Button>
              <Button variant="ghost" size="sm" onClick={deselectAll}>Clear</Button>
              <div className="h-5 w-px bg-zinc-800" />
              <Button variant="secondary" size="sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                Edit
              </Button>
              <Button variant="gradient" size="sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Export {selectedBanners.length > 0 && `(${selectedBanners.length})`}
              </Button>
            </>
          }
        />

        <div className="flex-1 flex overflow-hidden">
          <main className="flex-1 overflow-y-auto p-6 bg-zinc-900/20">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-3 gap-4">
                {banners.map((banner) => (
                  <BannerPreview
                    key={banner.id}
                    size={banner.size}
                    label={banner.label}
                    platform={banner.platform}
                    gradient={banner.gradient}
                    selected={selectedBanners.includes(banner.id)}
                    onClick={() => toggleBanner(banner.id)}
                  />
                ))}
              </div>

              <div className="mt-6 p-5 rounded-2xl border border-zinc-800/50 bg-gradient-to-br from-zinc-950/60 to-zinc-900/40">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100">Ready to Export</h3>
                    <p className="text-xs text-zinc-500 mt-1">
                      {selectedBanners.length} formats selected and ready for high-resolution export
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xl font-bold text-zinc-100">{selectedBanners.length}</p>
                      <p className="text-[11px] text-zinc-500">formats</p>
                    </div>
                    <Button variant="gradient">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Export All Selected
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <aside className="w-72 border-l border-zinc-800/60 bg-zinc-950/30 overflow-y-auto">
            <SelectedPreview banner={selectedBannerData} />
          </aside>
        </div>
      </div>
    </div>
  );
}
