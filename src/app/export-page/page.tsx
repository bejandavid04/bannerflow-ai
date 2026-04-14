'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Header, { Button, Badge } from '@/components/Header';
import { Card, CardContent, ToggleButton, PropertySection, PropertyRow } from '@/components/Card';

const BannerExportItem = ({ 
  size, 
  label, 
  platform,
  ad,
  index,
  downloaded
}: { 
  size: string; 
  label: string;
  platform: string;
  ad: any;
  index: number;
  downloaded: boolean;
}) => {
  const [isReady, setIsReady] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsReady(true), index * 200 + 500);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div 
      className={`group relative bg-zinc-900/50 rounded-2xl border overflow-hidden transition-all duration-500 ${
        downloaded 
          ? 'border-emerald-500/50 bg-emerald-500/5 shadow-lg shadow-emerald-500/10' 
          : isReady 
            ? 'border-emerald-500/30 bg-emerald-500/5' 
            : 'border-zinc-800/50 hover:border-zinc-700'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />
        <div className={`absolute inset-0 ${ad.bg}`} />
        
        <div className="absolute inset-0 flex flex-col p-3 justify-between">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-1.5">
              <span className="px-1.5 py-0.5 rounded bg-black/50 backdrop-blur-sm text-[8px] font-bold text-white/90 border border-white/20">
                {platform}
              </span>
              {ad.badge && (
                <span className={`px-1.5 py-0.5 rounded-full text-[7px] font-bold ${ad.badgeStyle}`}>
                  {ad.badge}
                </span>
              )}
            </div>
            
            <div className={`transition-all duration-500 ${isReady ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                downloaded ? 'bg-emerald-500' : 'bg-emerald-500/30 border border-emerald-500/50'
              }`}>
                <svg className={`w-3 h-3 text-white ${downloaded ? '' : 'opacity-50'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>
          
          <div className="space-y-0.5">
            {ad.eyebrow && (
              <p className={`${ad.eyebrowColor || 'text-white/70'} text-[8px] font-semibold uppercase tracking-wider`}>
                {ad.eyebrow}
              </p>
            )}
            <p className={ad.headlineStyle}>{ad.headline}</p>
            {ad.cta && (
              <span className={`inline-block px-2 py-0.5 rounded-full text-[8px] font-bold ${ad.ctaStyle}`}>
                {ad.cta}
              </span>
            )}
          </div>
        </div>
        
        {!isReady && (
          <div className="absolute inset-0 bg-zinc-950/50 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
              <span className="text-[10px] text-zinc-400">Preparing...</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-sm font-medium text-zinc-200">{size}</p>
          <div className={`flex items-center gap-1.5 text-[11px] transition-all duration-300 ${
            downloaded ? 'text-emerald-400' : isReady ? 'text-emerald-400' : 'text-zinc-500'
          }`}>
            <span className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              downloaded ? 'bg-emerald-500' : isReady ? 'bg-emerald-500 animate-pulse' : 'bg-zinc-600'
            }`} />
            <span className="transition-colors">{downloaded ? 'Downloaded' : isReady ? 'Ready' : 'Pending'}</span>
          </div>
        </div>
        <p className="text-xs text-zinc-500">{label}</p>
      </div>
    </div>
  );
};

export default function ExportPage() {
  const [format, setFormat] = useState('png');
  const [quality, setQuality] = useState('high');
  const [downloadedBanners, setDownloadedBanners] = useState<string[]>([]);
  const [showComplete, setShowComplete] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const banners = [
    { 
      id: '1', 
      size: '1080x1080', 
      label: 'Instagram Feed', 
      platform: 'Meta', 
      ad: {
        bg: 'bg-gradient-to-br from-rose-600 via-pink-500 to-fuchsia-600',
        eyebrow: 'Limited Time',
        eyebrowColor: 'text-yellow-200',
        headline: 'SUMMER SALE',
        headlineStyle: 'text-lg font-black text-white',
        cta: 'Shop Now',
        ctaStyle: 'bg-white text-rose-600',
        badge: '50% OFF',
        badgeStyle: 'bg-yellow-400 text-black',
      }
    },
    { 
      id: '2', 
      size: '1080x1920', 
      label: 'Instagram Story', 
      platform: 'Stories',
      ad: {
        bg: 'bg-gradient-to-b from-violet-600 via-purple-600 to-indigo-800',
        eyebrow: 'New Launch',
        headline: 'STREAM NOW',
        headlineStyle: 'text-2xl font-black text-white leading-none',
        cta: 'Get Started',
        ctaStyle: 'bg-white text-purple-600',
        badge: 'FREE TRIAL',
        badgeStyle: 'bg-emerald-400 text-black',
      }
    },
    { 
      id: '3', 
      size: '1200x628', 
      label: 'Facebook Ad', 
      platform: 'Facebook',
      ad: {
        bg: 'bg-gradient-to-br from-amber-500 via-orange-500 to-red-600',
        eyebrow: 'Weekend Only',
        eyebrowColor: 'text-amber-100',
        headline: 'EXTRA 20% OFF',
        headlineStyle: 'text-3xl font-black text-white',
        cta: 'Use Code: WKND20',
        ctaStyle: 'bg-white text-orange-600 font-bold',
      }
    },
    { 
      id: '4', 
      size: '300x250', 
      label: 'Medium Rectangle', 
      platform: 'Google',
      ad: {
        bg: 'bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-700',
        headline: 'NX PRO',
        headlineStyle: 'text-base font-black text-white',
        subheadline: 'Start free trial',
        cta: 'Learn More',
        ctaStyle: 'bg-white text-blue-600',
      }
    },
    { 
      id: '5', 
      size: '728x90', 
      label: 'Leaderboard', 
      platform: 'Google',
      ad: {
        bg: 'bg-gradient-to-r from-emerald-600 via-teal-500 to-cyan-600',
        headline: 'AUTOMATE WORKFLOW',
        headlineStyle: 'text-base font-black text-white tracking-tight',
        cta: 'Try Free',
        ctaStyle: 'bg-white text-emerald-600',
      }
    },
    { 
      id: '6', 
      size: '1200x628', 
      label: 'Sponsored Post', 
      platform: 'LinkedIn',
      ad: {
        bg: 'bg-gradient-to-br from-sky-600 via-blue-600 to-indigo-700',
        eyebrow: 'Enterprise',
        eyebrowColor: 'text-sky-200',
        headline: 'SCALE SMARTER',
        headlineStyle: 'text-3xl font-black text-white',
        cta: 'Request Demo',
        ctaStyle: 'bg-white text-blue-600',
      }
    },
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    setDownloadProgress(0);
    
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15 + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setDownloadProgress(100);
        setDownloadedBanners(banners.map(b => b.id));
        setTimeout(() => {
          setIsDownloading(false);
          setShowComplete(true);
        }, 500);
      } else {
        setDownloadProgress(Math.min(progress, 99));
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex">
      <Sidebar activeItem="My Projects" />
      
      <div className="flex-1 flex flex-col">
        <Header 
          title="Ready to Launch" 
          subtitle={showComplete ? "Your campaigns are ready" : `${banners.length} banners prepared for export`}
          icon={
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          }
          iconGradient="from-emerald-500 to-teal-600"
          actions={
            showComplete ? (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-emerald-400 font-medium">Download Complete</span>
              </div>
            ) : null
          }
        />

        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-8">
            {showComplete && (
              <div className="mb-6 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-emerald-500/20 border border-emerald-500/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-emerald-500/5 animate-shimmer" />
                <div className="relative flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                    <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-emerald-400">Campaign Ready!</p>
                    <p className="text-sm text-emerald-400/70">bannerflow-summer-sale.zip has been downloaded to your computer</p>
                  </div>
                </div>
              </div>
            )}

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-lg font-semibold text-zinc-100">Your Banners</h2>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] text-emerald-400 font-medium">All Ready</span>
                </div>
              </div>
              <p className="text-sm text-zinc-500">Each banner has been optimized for its platform's specifications</p>
            </div>

            {isDownloading && (
              <div className="mb-6 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800/50">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-zinc-300">Downloading banners...</span>
                  <span className="text-sm text-zinc-500">{Math.round(downloadProgress)}%</span>
                </div>
                <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-300"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>
              </div>
            )}

            <div className="grid grid-cols-3 gap-4 mb-8">
              {banners.map((banner, index) => (
                <BannerExportItem
                  key={banner.id}
                  size={banner.size}
                  label={banner.label}
                  platform={banner.platform}
                  ad={banner.ad}
                  index={index}
                  downloaded={downloadedBanners.includes(banner.id)}
                />
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              <Card>
                <CardContent>
                  <h3 className="text-sm font-semibold text-zinc-200 mb-5">Export Settings</h3>
                  
                  <div className="space-y-5">
                    <PropertySection title="File Format">
                      <ToggleButton
                        options={[
                          { value: 'png', label: 'PNG' },
                          { value: 'jpg', label: 'JPG' },
                        ]}
                        value={format}
                        onChange={setFormat}
                      />
                    </PropertySection>

                    <PropertySection title="Quality">
                      <ToggleButton
                        options={[
                          { value: 'high', label: 'High' },
                          { value: 'medium', label: 'Medium' },
                        ]}
                        value={quality}
                        onChange={setQuality}
                      />
                    </PropertySection>

                    <PropertySection title="File Naming">
                      <div className="p-3 rounded-xl bg-zinc-800/50 border border-zinc-800">
                        <code className="text-xs text-zinc-400 font-mono">
                          summer-sale_<span className="text-indigo-400">[size]</span>.<span className="text-emerald-400">{format}</span>
                        </code>
                      </div>
                    </PropertySection>
                  </div>
                </CardContent>
              </Card>

              <Card className={`relative overflow-hidden ${showComplete ? 'bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/30' : 'bg-gradient-to-br from-zinc-900/70 to-zinc-900/50'}`}>
                <CardContent>
                  <h3 className="text-sm font-semibold text-zinc-200 mb-5">Export Summary</h3>
                  
                  <div className="space-y-3 mb-6">
                    <PropertyRow label="Files">
                      <span className="text-sm font-medium text-emerald-400">{banners.length}</span>
                    </PropertyRow>
                    <PropertyRow label="Format">
                      <span className="text-sm font-medium text-zinc-200 uppercase">{format}</span>
                    </PropertyRow>
                    <PropertyRow label="Quality">
                      <span className="text-sm font-medium text-zinc-200 capitalize">{quality}</span>
                    </PropertyRow>
                    <PropertyRow label="Est. Size">
                      <span className="text-sm font-medium text-zinc-200">~24 MB</span>
                    </PropertyRow>
                    <PropertyRow label="Status">
                      <span className="text-sm font-medium text-emerald-400 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        Ready
                      </span>
                    </PropertyRow>
                  </div>

                  <Button 
                    variant={showComplete ? "secondary" : "gradient"} 
                    className={`w-full h-12 text-sm ${showComplete ? 'border-emerald-500/50 text-emerald-400' : ''}`}
                    onClick={handleDownload}
                    disabled={isDownloading}
                  >
                    {isDownloading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Downloading...
                      </>
                    ) : showComplete ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Again
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download All (.zip)
                      </>
                    )}
                  </Button>

                  <p className="text-[11px] text-zinc-600 text-center mt-4 leading-relaxed">
                    Organized by platform: Meta, Google, LinkedIn
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 p-5 rounded-2xl border border-zinc-800/50 bg-gradient-to-br from-zinc-900/30 to-zinc-950/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-zinc-200 mb-1">Campaign-Ready Assets</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Your banners are optimized for each platform's requirements. Meta ads include all required sizes for feed, stories, and reels. Google ads meet display network specifications. LinkedIn ads are formatted for sponsored content and message ads.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
