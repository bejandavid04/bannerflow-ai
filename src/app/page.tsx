import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/50 backdrop-blur-xl bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">BannerFlow <span className="gradient-text">AI</span></span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-zinc-400 hover:text-white transition-colors">Features</a>
          <a href="#workflow" className="text-sm text-zinc-400 hover:text-white transition-colors">Workflow</a>
          <a href="#pricing" className="text-sm text-zinc-400 hover:text-white transition-colors">Pricing</a>
          <a href="#login" className="text-sm text-zinc-400 hover:text-white transition-colors">Login</a>
        </div>
        
        <a href="/dashboard" className="h-9 px-4 rounded-lg bg-white text-zinc-900 text-sm font-medium hover:bg-zinc-200 transition-colors">
          Get Started
        </a>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/50 via-zinc-950 to-zinc-950" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-indigo-300 font-medium">Now in public beta</span>
              <span className="text-zinc-500">— 2,400+ designers creating</span>
            </div>
            
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
                <span className="text-white">Stop wasting hours on</span>
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  repetitive banner design.
                </span>
              </h1>
              
              <p className="text-xl text-zinc-400 max-w-xl leading-relaxed">
                BannerFlow AI generates stunning ad banners for Meta, Google, and LinkedIn in seconds — then automatically resizes them for every format. From prompt to published in minutes.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="h-14 px-8 rounded-2xl bg-white text-zinc-900 font-semibold text-lg transition-all hover:bg-zinc-100 shadow-2xl shadow-white/10 hover:shadow-white/20 flex items-center justify-center gap-3">
                  <span>Start creating free</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <button className="h-14 px-8 rounded-2xl border-2 border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50 text-zinc-200 font-medium text-lg transition-all flex items-center justify-center gap-3">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Watch demo</span>
                </button>
              </div>
              
              <p className="text-sm text-zinc-500">
                No credit card required · 50 free generations · Export in all formats
              </p>
            </div>
            
            <div className="flex items-center gap-8 pt-6 border-t border-zinc-800/50">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[
                    { bg: 'from-rose-500 to-pink-500', letter: 'A' },
                    { bg: 'from-amber-500 to-orange-500', letter: 'M' },
                    { bg: 'from-emerald-500 to-teal-500', letter: 'J' },
                    { bg: 'from-cyan-500 to-blue-500', letter: 'K' },
                    { bg: 'from-violet-500 to-purple-500', letter: 'R' },
                  ].map((user, i) => (
                    <div
                      key={i}
                      className={`w-11 h-11 rounded-full bg-gradient-to-br ${user.bg} border-2 border-zinc-950 flex items-center justify-center text-sm font-bold text-white shadow-lg`}
                    >
                      {user.letter}
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <div className="text-white font-semibold">Trusted by creative teams</div>
                  <div className="text-zinc-500">at 500+ agencies worldwide</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative lg:pl-8">
            <div className="absolute -inset-8 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-3xl" />
            
            <div className="relative bg-zinc-900/80 backdrop-blur-xl rounded-2xl border border-zinc-800/80 shadow-2xl overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/60 bg-zinc-950/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800/80 text-xs text-zinc-400">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    BannerFlow Workspace
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-14 border-r border-zinc-800/60 py-3 flex flex-col items-center gap-3 bg-zinc-950/30">
                  {[
                    { icon: 'grid', label: 'Templates', active: false },
                    { icon: 'sparkles', label: 'AI Generate', active: true },
                    { icon: 'image', label: 'Assets', active: false },
                    { icon: 'layers', label: 'Layers', active: false },
                  ].map((item, i) => (
                    <button key={i} className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all ${item.active ? 'bg-indigo-500/15 text-indigo-400 shadow-lg shadow-indigo-500/10' : 'text-zinc-500 hover:text-zinc-200 hover:bg-zinc-800/50'}`}>
                      {item.icon === 'grid' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                      )}
                      {item.icon === 'sparkles' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      )}
                      {item.icon === 'image' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      )}
                      {item.icon === 'layers' && (
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
                
                <div className="flex-1 p-5">
                  <div className="mb-5">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">Describe your banner</span>
                    </div>
                    <div className="relative">
                      <textarea 
                        className="w-full h-24 bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 text-sm text-zinc-200 resize-none focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 placeholder:text-zinc-600"
                        placeholder="e.g. Modern tech startup banner, dark gradient, bold typography..."
                        defaultValue="Modern tech startup banner, dark gradient background, bold typography, futuristic vibe"
                      />
                      <button className="absolute bottom-4 right-4 h-9 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/25 transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Generate
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">Describe your banner</span>
                    </div>
                    <div className="relative">
                      <textarea 
                        className="w-full h-24 bg-zinc-800/50 border border-zinc-700/50 rounded-xl p-4 text-sm text-zinc-200 resize-none focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 placeholder:text-zinc-600"
                        placeholder="e.g. Modern tech startup banner, dark gradient, bold typography..."
                        defaultValue="Fitness app launch promo, energetic workout imagery, bold headline, dark background with vibrant accents"
                      />
                      <button className="absolute bottom-4 right-4 h-9 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-sm font-semibold text-white flex items-center gap-2 shadow-lg shadow-indigo-500/25 transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Generate
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">Generated in 3 seconds</span>
                      <div className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        AI optimized
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { 
                          name: 'Fitness App Launch', 
                          size: '1200×628', 
                          platform: 'Meta', 
                          bg: 'bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-600',
                          eyebrow: 'New App Launch',
                          eyebrowColor: 'text-cyan-200',
                          headline: 'FITNESS\nREDEFINED',
                          headlineSize: 'text-3xl font-black text-white leading-tight',
                          subheadline: 'Join 500K+ athletes. Start your journey today.',
                          cta: 'Download Free',
                          ctaStyle: 'bg-white text-emerald-600 hover:bg-cyan-200',
                        },
                        { 
                          name: 'Workout Tracker', 
                          size: '1080×1080', 
                          platform: 'Instagram', 
                          bg: 'bg-gradient-to-br from-slate-900 via-zinc-900 to-neutral-900',
                          eyebrow: 'Track Your Progress',
                          eyebrowColor: 'text-orange-300',
                          headline: 'NO GYM?\nNO PROBLEM',
                          headlineSize: 'text-2xl font-black text-white leading-tight',
                          subheadline: 'Home workouts that actually work',
                          cta: 'Get the App',
                          ctaStyle: 'bg-gradient-to-r from-orange-500 to-red-500 text-white hover:from-orange-400 hover:to-red-400',
                        },
                        { 
                          name: 'Premium Membership', 
                          size: '1080×1920', 
                          platform: 'Stories', 
                          bg: 'bg-gradient-to-b from-violet-600 via-purple-600 to-indigo-700',
                          eyebrow: 'Limited Offer',
                          eyebrowColor: 'text-violet-200',
                          headline: 'GO\nPREMIUM',
                          headlineSize: 'text-4xl font-black text-white leading-none',
                          subheadline: 'Unlock all features. Cancel anytime.',
                          cta: 'Start Trial',
                          ctaStyle: 'bg-white text-purple-600 hover:bg-violet-200',
                          badge: 'FREE WEEK',
                        },
                      ].map((banner, i) => (
                        <div key={i} className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer">
                          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/20 to-transparent" />
                          <div className={`absolute inset-0 ${banner.bg}`} />
                          <div className="absolute inset-0 flex flex-col p-3 justify-between">
                            <div className="flex justify-between items-start">
                              <span className="px-2 py-0.5 rounded bg-black/30 backdrop-blur-sm text-[9px] font-semibold text-white/90 backdrop-blur">{banner.platform}</span>
                              {banner.badge && (
                                <span className="px-2 py-0.5 rounded-full bg-yellow-400 text-[8px] font-bold text-black">{banner.badge}</span>
                              )}
                            </div>
                            <div className="space-y-1.5">
                              <p className={`${banner.eyebrowColor} text-[9px] font-semibold uppercase tracking-wider`}>{banner.eyebrow}</p>
                              <p className={banner.headlineSize}>{banner.headline.split('\n').map((line, idx) => <span key={idx} className="block">{line}</span>)}</p>
                              <p className="text-[10px] text-white/80 leading-snug">{banner.subheadline}</p>
                              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase ${banner.ctaStyle}`}>{banner.cta}</span>
                            </div>
                          </div>
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center backdrop-blur-sm">
                            <button className="px-3 py-1.5 rounded-lg bg-white/95 text-zinc-900 text-xs font-semibold shadow-lg">
                              Edit
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-zinc-800/50">
                    <div className="flex items-center gap-2">
                      {['Meta', 'Google', 'LinkedIn'].map((platform) => (
                        <span key={platform} className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-zinc-800/80 text-zinc-400 border border-zinc-700/50">
                          {platform}
                        </span>
                      ))}
                      <span className="text-[10px] text-zinc-600">+more</span>
                    </div>
                    <button className="h-8 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-xs font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all flex items-center gap-2">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                      </svg>
                      Export All
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkflowSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Write a prompt',
      description: 'Describe your banner concept using natural language. Be as detailed or simple as you want.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'Upload assets',
      description: 'Add your brand assets, logos, and images. We support PNG, JPG, SVG, and more.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Generate concepts',
      description: 'AI creates 3 unique banner variations based on your prompt and brand guidelines.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Edit and refine',
      description: 'Customize text, colors, fonts, and layout with our intuitive visual editor.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Resize and export',
      description: 'One-click export to all major ad platforms in their required formats and dimensions.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="workflow" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Workflow</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            From idea to published ad in minutes
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Our streamlined workflow lets you go from a simple prompt to polished, platform-ready ad banners.
          </p>
        </div>
        
        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative p-6 rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/50 transition-colors">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-bold text-zinc-700 group-hover:text-zinc-600 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-medium mb-2 group-hover:text-indigo-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-zinc-700 to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      title: '10x Faster Production',
      description: 'Generate hundreds of banner variations in the time it used to take to create one. Stop repetitive design work.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: 'from-amber-500/20 to-orange-500/20',
      border: 'hover:border-amber-500/30',
    },
    {
      title: 'Seamless Collaboration',
      description: 'Share workspace links with clients and agencies. Real-time feedback without email chains or version confusion.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: 'from-emerald-500/20 to-teal-500/20',
      border: 'hover:border-emerald-500/30',
    },
    {
      title: 'Smart Multi-Format',
      description: 'Automatically resize any banner to all platform specifications. Meta, Google, LinkedIn, Twitter, and more.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      gradient: 'from-cyan-500/20 to-blue-500/20',
      border: 'hover:border-cyan-500/30',
    },
    {
      title: 'Editable Templates',
      description: 'Every generated banner is fully editable. Change text, swap images, adjust colors—all without design software.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      gradient: 'from-violet-500/20 to-purple-500/20',
      border: 'hover:border-violet-500/30',
    },
  ];

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <span className="text-indigo-400 text-sm font-medium tracking-wider uppercase">Benefits</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
            Built for creative teams
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl mx-auto">
            Everything you need to scale your banner production without scaling your headcount.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl border border-zinc-800 bg-zinc-950/50 ${benefit.border} transition-all duration-300 hover:bg-zinc-900/50`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center text-indigo-400 mb-5 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-indigo-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 p-8 rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-950 to-zinc-900 text-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {[
              { label: 'Banner Formats', value: '50+' },
              { label: 'Platform Integrations', value: '12' },
              { label: 'Daily Generations', value: '10K+' },
              { label: 'Uptime SLA', value: '99.9%' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-zinc-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 gradient-bg" />
      
      <div className="max-w-4xl mx-auto px-6 relative">
        <div className="relative p-12 md:p-16 rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900 to-zinc-950 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10" />
          
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
              Ready to design <span className="gradient-text">faster</span>?
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-8">
              Join thousands of designers and agencies already creating stunning ad banners with AI.
              Start free—no credit card required.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="h-12 px-8 rounded-xl bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-all hover:shadow-lg hover:shadow-white/25 flex items-center justify-center gap-2">
                <span>Get Started Free</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="h-12 px-8 rounded-xl border border-zinc-700 hover:border-zinc-600 hover:bg-zinc-800/50 text-zinc-300 font-medium transition-all">
                Contact Sales
              </button>
            </div>
            
            <p className="mt-6 text-sm text-zinc-500">
              Free tier includes 50 generations/month.{' '}
              <a href="#pricing" className="text-indigo-400 hover:underline">View pricing plans</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-lg font-semibold tracking-tight">BannerFlow AI</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-zinc-500">
            <a href="#" className="hover:text-zinc-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">Twitter</a>
            <a href="#" className="hover:text-zinc-300 transition-colors">LinkedIn</a>
          </div>
          
          <p className="text-sm text-zinc-600">
            &copy; 2026 BannerFlow AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navigation />
      <main>
        <HeroSection />
        <WorkflowSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
